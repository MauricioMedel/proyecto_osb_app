// src/app/admin/pages/administrador/administrador.component.ts
import { Component, OnInit, OnDestroy }      from '@angular/core';
import { CommonModule }                       from '@angular/common';
import { FormsModule, ReactiveFormsModule,
         FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule }                       from '@angular/router';
import { HttpClientModule }                   from '@angular/common/http';
import { Subject, interval }                  from 'rxjs';
import { takeUntil, switchMap, debounceTime,
         distinctUntilChanged }               from 'rxjs/operators';
import { AdminService, Account, KpiData,
         AuditEntry }                         from '../../../services/admin.service';
import { AuthService }                        from '../../../services/auth.service';

type ModalMode = 'create' | 'edit' | 'view' | 'delete' | 'reset-password' | null;
type ActiveTab = 'dashboard' | 'usuarios' | 'auditoria';

@Component({
  selector:    'app-administrador',
  standalone:  true,
  imports:     [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './administrador.component.html',
  styleUrls:   ['./administrador.component.scss'],
})
export class AdministradorComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();


  getDashOffset(i: number): number {
  const total = this.chartData
    .slice(0, i)
    .reduce((a, c) => a + c.pct, 0);

  return -(total * 2.513);
}

  // ── Estado general ────────────────────────────────────────────────────────
  activeTab:   ActiveTab = 'dashboard';
  loading      = false;
  loadingKpis  = false;
  sidebarOpen  = true;
  currentUser  = this.auth.getCurrentUser();

  // ── KPIs ──────────────────────────────────────────────────────────────────
  kpis: KpiData = {
    totalUsers: 0, totalGuardians: 0, totalChildren: 0, totalAdmins: 0,
    activeUsers: 0, lockedUsers: 0, newThisWeek: 0,
    apiStatus: 'ok', dbStatus: 'ok', uptime: 'N/A',
  };

  // ── Tabla de usuarios ─────────────────────────────────────────────────────
  users:       Account[] = [];
  totalUsers   = 0;
  currentPage  = 1;
  pageSize     = 10;
  totalPages   = 1;
  searchTerm   = '';
  filterRole   = '';
  filterActive = '';
  sortField    = 'created_at';
  sortDir      = 'desc';

  // ── Auditoría ─────────────────────────────────────────────────────────────
  auditLog:      AuditEntry[] = [];
  auditPage      = 1;
  auditTotal     = 0;
  auditTotalPages = 1;
  loadingAudit   = false;

  // ── Modal ─────────────────────────────────────────────────────────────────
  modalMode:    ModalMode  = null;
  selectedUser: Account | null = null;
  modalLoading  = false;
  modalError    = '';
  modalSuccess  = '';

  // ── Formularios ───────────────────────────────────────────────────────────
  createForm!:        FormGroup;
  editForm!:          FormGroup;
  resetPasswordForm!: FormGroup;

  // ── Toast ─────────────────────────────────────────────────────────────────
  toast: { msg: string; type: 'success' | 'error' | 'warning' } | null = null;

  // ── Gráfica de roles (datos calculados) ───────────────────────────────────
  get chartData() {
    const total = this.kpis.totalUsers || 1;
    return [
      { label: 'Tutores',  value: this.kpis.totalGuardians, pct: Math.round(this.kpis.totalGuardians / total * 100), color: '#3b82f6' },
      { label: 'Niños',    value: this.kpis.totalChildren,  pct: Math.round(this.kpis.totalChildren  / total * 100), color: '#10b981' },
      { label: 'Admins',   value: this.kpis.totalAdmins,    pct: Math.round(this.kpis.totalAdmins    / total * 100), color: '#f59e0b' },
    ];
  }

  constructor(
    private adminSvc: AdminService,
    private auth:     AuthService,
    private fb:       FormBuilder,
  ) {}

  ngOnInit(): void {
    this.buildForms();
    this.loadKpis();
    this.loadUsers();

    // Actualizar KPIs cada 60 segundos
    interval(60_000).pipe(
      takeUntil(this.destroy$),
      switchMap(() => this.adminSvc.getKpis()),
    ).subscribe(k => this.kpis = k);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Formularios ───────────────────────────────────────────────────────────
  private buildForms(): void {
    this.createForm = this.fb.group({
      username:    ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50),
                         Validators.pattern(/^[a-zA-Z0-9_.-]+$/)]],
      email:       ['', [Validators.required, Validators.email]],
      password:    ['', [Validators.required, Validators.minLength(10),
                         Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*_\-.])/)]],
      displayName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    });

    this.editForm = this.fb.group({
      email:        ['', [Validators.email]],
      display_name: ['', [Validators.minLength(2), Validators.maxLength(80)]],
      is_active:    [true],
    });

    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(10),
                         Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*_\-.])/)]],
      confirm:     ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  private passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword')?.value === g.get('confirm')?.value
      ? null : { mismatch: true };
  }

  // ── Carga de datos ─────────────────────────────────────────────────────────
  loadKpis(): void {
    this.loadingKpis = true;
    this.adminSvc.getKpis().pipe(takeUntil(this.destroy$)).subscribe({
      next:  k => { this.kpis = k; this.loadingKpis = false; },
      error: () => this.loadingKpis = false,
    });
  }

  loadUsers(): void {
    this.loading = true;
    this.adminSvc.getUsers({
      page:   this.currentPage,
      limit:  this.pageSize,
      role:   this.filterRole   || undefined,
      search: this.searchTerm   || undefined,
      active: this.filterActive === '' ? undefined : this.filterActive === 'true',
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: res => {
        this.users      = res.data;
        this.totalUsers = res.meta.total;
        this.totalPages = res.meta.totalPages;
        this.loading    = false;
      },
      error: err => {
        this.loading = false;
        this.showToast(err.error?.error?.message || 'Error al cargar usuarios', 'error');
      },
    });
  }

  loadAudit(): void {
    this.loadingAudit = true;
    this.adminSvc.getAuditLog(this.auditPage, 15).pipe(takeUntil(this.destroy$)).subscribe({
      next: res => {
        this.auditLog        = res.data;
        this.auditTotal      = res.meta.total;
        this.auditTotalPages = res.meta.totalPages;
        this.loadingAudit    = false;
      },
      error: () => this.loadingAudit = false,
    });
  }

  // ── Búsqueda con debounce ─────────────────────────────────────────────────
  onSearch(value: string): void {
    this.searchTerm  = value;
    this.currentPage = 1;
    this.loadUsers();
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.loadUsers();
  }

  // ── Paginación ────────────────────────────────────────────────────────────
  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadUsers();
  }

  get pages(): number[] {
    const total = this.totalPages;
    const cur   = this.currentPage;
    const pages: number[] = [];
    const start = Math.max(1, cur - 2);
    const end   = Math.min(total, cur + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }

  // ── Tabs ──────────────────────────────────────────────────────────────────
  setTab(tab: ActiveTab): void {
    this.activeTab = tab;
    if (tab === 'auditoria' && this.auditLog.length === 0) this.loadAudit();
  }

  // ── Modal ─────────────────────────────────────────────────────────────────
  openModal(mode: ModalMode, user?: Account): void {
    this.modalMode    = mode;
    this.selectedUser = user ?? null;
    this.modalError   = '';
    this.modalSuccess = '';

    if (mode === 'edit' && user) {
      this.editForm.patchValue({
        email:        user.email        ?? '',
        display_name: user.display_name ?? '',
        is_active:    user.is_active,
      });
    }
    if (mode === 'create') {
      this.createForm.reset();
    }
    if (mode === 'reset-password') {
      this.resetPasswordForm.reset();
    }
  }

  closeModal(): void {
    this.modalMode    = null;
    this.selectedUser = null;
    this.modalError   = '';
  }

  // ── CRUD ──────────────────────────────────────────────────────────────────
  submitCreate(): void {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }
    this.modalLoading = true;
    this.modalError   = '';

    this.adminSvc.createUser(this.createForm.value).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.modalLoading = false;
        this.closeModal();
        this.showToast('Tutor creado correctamente', 'success');
        this.loadUsers();
        this.loadKpis();
      },
      error: err => {
        this.modalLoading = false;
        this.modalError   = err.error?.error?.message || 'Error al crear usuario';
      },
    });
  }

  submitEdit(): void {
    if (this.editForm.invalid || !this.selectedUser) return;
    this.modalLoading = true;
    this.modalError   = '';

    this.adminSvc.updateUser(this.selectedUser.account_id, this.editForm.value)
      .pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.modalLoading = false;
          this.closeModal();
          this.showToast('Usuario actualizado correctamente', 'success');
          this.loadUsers();
        },
        error: err => {
          this.modalLoading = false;
          this.modalError   = err.error?.error?.message || 'Error al actualizar';
        },
      });
  }

  confirmDelete(): void {
    if (!this.selectedUser) return;
    this.modalLoading = true;

    this.adminSvc.deleteUser(this.selectedUser.account_id)
      .pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.modalLoading = false;
          this.closeModal();
          this.showToast('Usuario eliminado correctamente', 'success');
          this.loadUsers();
          this.loadKpis();
        },
        error: err => {
          this.modalLoading = false;
          this.modalError   = err.error?.error?.message || 'Error al eliminar';
        },
      });
  }

  toggleStatus(user: Account): void {
    const newStatus = !user.is_active;
    this.adminSvc.toggleUserStatus(user.account_id, newStatus)
      .pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          user.is_active = newStatus;
          this.showToast(
            newStatus ? 'Usuario activado' : 'Usuario desactivado',
            newStatus ? 'success' : 'warning'
          );
        },
        error: err => this.showToast(err.error?.error?.message || 'Error al cambiar estado', 'error'),
      });
  }

  unlockUser(user: Account): void {
    this.adminSvc.unlockUser(user.account_id)
      .pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          user.locked_until           = null;
          user.failed_login_attempts  = 0;
          this.showToast('Cuenta desbloqueada', 'success');
        },
        error: err => this.showToast(err.error?.error?.message || 'Error al desbloquear', 'error'),
      });
  }

  submitResetPassword(): void {
    if (this.resetPasswordForm.invalid || !this.selectedUser) return;
    this.modalLoading = true;
    this.modalError   = '';

    this.adminSvc.resetPassword(
      this.selectedUser.account_id,
      this.resetPasswordForm.value.newPassword
    ).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.modalLoading = false;
        this.closeModal();
        this.showToast('Contraseña restablecida correctamente', 'success');
      },
      error: err => {
        this.modalLoading = false;
        this.modalError   = err.error?.error?.message || 'Error al restablecer contraseña';
      },
    });
  }

  // ── Helpers de UI ─────────────────────────────────────────────────────────
  isLocked(user: Account): boolean {
    return !!user.locked_until && new Date(user.locked_until) > new Date();
  }

  getRoleBadgeClass(role: string): string {
    return { guardian: 'badge-guardian', child: 'badge-child', admin: 'badge-admin' }[role] ?? '';
  }

  getRoleLabel(role: string): string {
    return { guardian: 'Tutor', child: 'Niño', admin: 'Admin' }[role] ?? role;
  }

  getEventIcon(type: string): string {
    const map: Record<string, string> = {
      account_created:  '👤',
      login:            '🔑',
      logout:           '🚪',
      password_changed: '🔒',
      role_changed:     '🛡️',
      data_export:      '📤',
      admin_action:     '⚙️',
      link_created:     '🔗',
      link_revoked:     '✂️',
    };
    return map[type] ?? '📋';
  }

  formatDate(date: string | null): string {
    if (!date) return '—';
    return new Date(date).toLocaleString('es-MX', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  }

  // ── Toast ─────────────────────────────────────────────────────────────────
  showToast(msg: string, type: 'success' | 'error' | 'warning'): void {
    this.toast = { msg, type };
    setTimeout(() => this.toast = null, 3500);
  }

  // ── Validaciones helper ───────────────────────────────────────────────────
  f(form: FormGroup, field: string) { return form.get(field); }

  isInvalid(form: FormGroup, field: string): boolean {
    const c = form.get(field);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }

  logout(): void { this.auth.logout(); }
}
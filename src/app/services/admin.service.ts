// src/app/admin/services/admin.service.ts
// Servicio de administración: CRUD de usuarios, KPIs y auditoría
import { Injectable }                        from '@angular/core';
import { HttpClient, HttpParams }            from '@angular/common/http';
import { Observable, forkJoin, catchError, of } from 'rxjs';
import { map }                               from 'rxjs/operators';
import { environment }                       from '../../../src/environments/environment';

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface Account {
  account_id:            string;
  role:                  'child' | 'guardian' | 'admin';
  username:              string;
  email:                 string | null;
  is_active:             boolean;
  email_verified:        boolean;
  failed_login_attempts: number;
  locked_until:          string | null;
  last_login_at:         string | null;
  created_at:            string;
  // Perfil enriquecido (join)
  display_name?:         string;
  nickname?:             string;
  guardian_id?:          string;
  child_id?:             string;
  current_xp?:           number;
  streak_days?:          number;
}

export interface CreateAccountDto {
  username:    string;
  email:       string;
  password:    string;
  displayName: string;
}

export interface UpdateAccountDto {
  is_active?:    boolean;
  email?:        string;
  display_name?: string;
}

export interface KpiData {
  totalUsers:      number;
  totalGuardians:  number;
  totalChildren:   number;
  totalAdmins:     number;
  activeUsers:     number;
  lockedUsers:     number;
  newThisWeek:     number;
  apiStatus:       'ok' | 'degraded' | 'error';
  dbStatus:        'ok' | 'error';
  uptime:          string;
}

export interface AuditEntry {
  audit_id:         string;
  event_type:       string;
  actor_username?:  string;
  description:      string;
  occurred_at:      string;
  ip_address?:      string;
}

export interface PaginatedResponse<T> {
  data:  T[];
  meta:  { total: number; page: number; limit: number; totalPages: number };
}

// ─── Servicio ─────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class AdminService {

  private readonly API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ── KPIs ──────────────────────────────────────────────────────────────────
  getKpis(): Observable<KpiData> {
    return forkJoin({
      stats:  this.http.get<any>(`${this.API}/admin/stats`).pipe(catchError(() => of(null))),
      health: this.http.get<any>('http://localhost:3000/health').pipe(catchError(() => of({ status:'error', db:'error', uptime:'N/A' }))),
    }).pipe(
      map(({ stats, health }) => ({
        totalUsers:     stats?.data?.total_users     ?? 0,
        totalGuardians: stats?.data?.total_guardians ?? 0,
        totalChildren:  stats?.data?.total_children  ?? 0,
        totalAdmins:    stats?.data?.total_admins    ?? 0,
        activeUsers:    stats?.data?.active_users    ?? 0,
        lockedUsers:    stats?.data?.locked_users    ?? 0,
        newThisWeek:    stats?.data?.new_this_week   ?? 0,
        apiStatus:      health?.status  ?? 'error',
        dbStatus:       health?.db      ?? 'error',
        uptime:         health?.uptime  ?? 'N/A',
      }))
    );
  }

  // ── CRUD de usuarios ──────────────────────────────────────────────────────

  getUsers(params: { page?: number; limit?: number; role?: string; search?: string; active?: boolean } = {}): Observable<PaginatedResponse<Account>> {
    let p = new HttpParams()
      .set('page',  params.page  ?? 1)
      .set('limit', params.limit ?? 10);
    if (params.role)   p = p.set('role',   params.role);
    if (params.search) p = p.set('search', params.search);
    if (params.active !== undefined) p = p.set('active', params.active.toString());

    return this.http.get<any>(`${this.API}/admin/users`, { params: p })
      .pipe(map(r => ({ data: r.data ?? [], meta: r.meta ?? { total:0, page:1, limit:10, totalPages:1 } })));
  }

  getUserById(id: string): Observable<Account> {
    return this.http.get<any>(`${this.API}/admin/users/${id}`)
      .pipe(map(r => r.data));
  }

  createUser(dto: CreateAccountDto): Observable<Account> {
    return this.http.post<any>(`${this.API}/auth/register`, dto)
      .pipe(map(r => r.data));
  }

  updateUser(id: string, dto: UpdateAccountDto): Observable<Account> {
    return this.http.patch<any>(`${this.API}/admin/users/${id}`, dto)
      .pipe(map(r => r.data));
  }

  toggleUserStatus(id: string, active: boolean): Observable<any> {
    return this.http.patch<any>(`${this.API}/admin/users/${id}`, { is_active: active })
      .pipe(map(r => r.data));
  }

  unlockUser(id: string): Observable<any> {
    return this.http.patch<any>(`${this.API}/admin/users/${id}/unlock`, {})
      .pipe(map(r => r.data));
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API}/admin/users/${id}`)
      .pipe(map(r => r.data));
  }

  resetPassword(id: string, newPassword: string): Observable<any> {
    return this.http.patch<any>(`${this.API}/admin/users/${id}/reset-password`, { newPassword })
      .pipe(map(r => r.data));
  }

  // ── Auditoría ─────────────────────────────────────────────────────────────
  getAuditLog(page = 1, limit = 10): Observable<PaginatedResponse<AuditEntry>> {
    const p = new HttpParams().set('page', page).set('limit', limit);
    return this.http.get<any>(`${this.API}/admin/audit`, { params: p })
      .pipe(map(r => ({ data: r.data ?? [], meta: r.meta ?? { total:0, page:1, limit:10, totalPages:1 } })));
  }

  // ── Health check ──────────────────────────────────────────────────────────
  checkHealth(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/health')
      .pipe(catchError(() => of({ status: 'error', db: 'error', uptime: 'N/A' })));
  }
}

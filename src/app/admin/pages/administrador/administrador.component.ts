import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {

  usuarios: any[] = [];
  form!: FormGroup;

  editMode = false;
  selectedId: string | null = null;

  loading = false;
  errorMsg = '';
  successMsg = '';
  isAdmin = false;

  private API = `${environment.apiUrl}/accounts`;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();

    if (!user || user.role !== 'admin') {
      this.errorMsg = 'Acceso restringido';
      return;
    }

    this.isAdmin = true;
    this.initForm();
    this.loadUsuarios();
  }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  initForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      active: [true]
    });
  }

  loadUsuarios(): void {
    this.http.get<any[]>(this.API, { headers: this.getHeaders() })
      .subscribe({
        next: data => this.usuarios = data,
        error: () => this.errorMsg = 'Error al cargar'
      });
  }

  submit(): void {
    if (this.form.invalid) return;

    const usuario = this.form.value;

    if (this.editMode && this.selectedId) {
      this.http.put(`${this.API}/${this.selectedId}`, usuario, { headers: this.getHeaders() })
        .subscribe(() => {
          this.reset();
          this.loadUsuarios();
        });
    } else {
      this.http.post(this.API, usuario, { headers: this.getHeaders() })
        .subscribe(() => {
          this.reset();
          this.loadUsuarios();
        });
    }
  }

  edit(u: any): void {
    this.editMode = true;
    this.selectedId = u.account_id;
    this.form.patchValue(u);
  }

  delete(id: string): void {
    this.http.delete(`${this.API}/${id}`, { headers: this.getHeaders() })
      .subscribe(() => this.loadUsuarios());
  }

  reset(): void {
    this.form.reset({ active: true });
    this.editMode = false;
    this.selectedId = null;
  }

  get totalUsuarios() { return this.usuarios.length; }
  get activos() { return this.usuarios.filter(u => u.active).length; }
  get inactivos() { return this.usuarios.filter(u => !u.active).length; }
  get admins() { return this.usuarios.filter(u => u.role === 'admin').length; }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registrar-nino',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registrar-nino.component.html',
  styleUrl: './registrar-nino.component.scss'
})
export class RegistrarNinoComponent {
  loading = false;
  errorMessage = '';
  showPassword = false;
  showSuccessModal = false;

  child = {
    username: '',
    password: '',
    nickname: '',
    ageRange: '',
    avatarCode: 'avatar_1'
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  registrarNino(form: NgForm) {
    this.errorMessage = '';

    if (form.invalid) {
      form.control.markAllAsTouched();
      this.errorMessage = 'Revisa los campos marcados antes de continuar.';
      return;
    }

    this.loading = true;

    const token = this.auth.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // 🌟 MAPEO DE BODY: Forzamos snake_case para que tu backend lo reciba sin problemas
    const body = {
      username: this.child.username,
      password: this.child.password,
      nickname: this.child.nickname,
      age_range: this.child.ageRange,     // Convertido a age_range 
      avatar_code: this.child.avatarCode  // Convertido a avatar_code
    };

    this.http.post(`${environment.apiUrl}/children`, body, { headers }).subscribe({
      next: () => {
        this.loading = false;
        // 🌟 Activamos el modal y se oculta automáticamente el spinner de carga de fondo
        this.showSuccessModal = true;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage =
          error.error?.error?.message ||
          error.error?.message ||
          'No se pudo registrar el niño.';
      }
    });
  }

  irAlPanel() {
    this.showSuccessModal = false;
    this.router.navigate(['/panel']);
  }
}
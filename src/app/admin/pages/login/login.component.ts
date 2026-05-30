import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = '';
  password = '';
  loading  = false;
  errorMsg = '';
  showPassword = false;

  constructor(private auth: AuthService, private router: Router) {}
  togglePassword() {
  this.showPassword = !this.showPassword;
}
  login(): void {

    // =============================
    // VALIDACIÓN BÁSICA
    // =============================
    if (!this.username || !this.password) {
      this.errorMsg = 'Ingresa usuario y contraseña';
      return;
    }

    this.loading = true;
    this.errorMsg = '';

    // =============================
    // LOGIN
    // =============================
    this.auth.login(this.username, this.password).subscribe({

      next: () => {
        this.loading = false;

        // 🔥 Obtener usuario desde el token
        const user = this.auth.getCurrentUser();
console.log('USUARIO LOGUEADO:', user);
        // Limpiar campos
        this.username = '';
        this.password = '';

        // =============================
        // REDIRECCIÓN POR ROL
        // =============================
        if (user?.role === 'admin') {
          this.router.navigate(['/administrador']);
        } else if (user?.role === 'guardian') {
          this.router.navigate(['/panel']); // puedes cambiar esto
        } else if (user?.role === 'child') {
          this.router.navigate(['/menu']); // puedes cambiar esto
        } else {
          this.router.navigate(['/']);
        }
      },

      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.error?.message || 'Error al iniciar sesión';

        // Limpiar campos si falla
        this.username = '';
        this.password = '';
      }

    });
  }

  // =============================
  // NAVEGACIÓN
  // =============================
  goHome(): void {
    this.router.navigate(['/']);
  }

  goRegister(): void {
    this.router.navigate(['/registro_usuario']);
  }
}

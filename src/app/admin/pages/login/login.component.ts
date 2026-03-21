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

  constructor(private auth: AuthService, private router: Router) {}

  login(): void {

    if (!this.username || !this.password) {
      this.errorMsg = 'Ingresa usuario y contraseña';
      return;
    }

    this.loading = true;
    this.errorMsg = '';

    this.auth.login(this.username, this.password).subscribe({

      next: (res) => {

        this.loading = false;

        // Guardar JWT
        localStorage.setItem('token', res.token);

        // Limpiar campos
        this.username = '';
        this.password = '';

        // Ir al panel
        this.router.navigate(['/panel']);

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

  goHome(): void {
    this.router.navigate(['/']);
  }

  goRegister(): void {
    this.router.navigate(['/registro_usuario']);
  }

}
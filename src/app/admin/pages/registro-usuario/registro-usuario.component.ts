import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent {

  username = '';
  displayName = '';
  email = '';
  password = '';

  loading = false;
  errorMsg = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  register(): void {

    if (!this.username || !this.email || !this.password) {
      this.errorMsg = 'Completa todos los campos obligatorios';
      return;
    }

    this.loading = true;
    this.errorMsg = '';

    this.auth.register({
      username: this.username,
      email: this.email,
      password: this.password,
      displayName: this.displayName
    }).subscribe({

      next: () => {

        this.loading = false;

        alert('Cuenta creada correctamente');

        // redirige al login
        this.router.navigate(['/login']);

      },

      error: (err) => {

        this.loading = false;

        this.errorMsg =
          err.error?.message ||
          'No se pudo registrar el usuario';

      }

    });

  }

  goLogin(): void {
    this.router.navigate(['/login']);
  }

}
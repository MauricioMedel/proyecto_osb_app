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
  showPassword = false;
  showSuccessModal = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  register(): void {
    if (!this.username || !this.email || !this.password) {
      this.errorMsg = 'Completa todos los campos obligatorios';
      return;
    }

    this.loading = true;
    this.errorMsg = '';

    // Tu lógica original intacta tal como te funcionaba antes:
    this.auth.register({
      username: this.username,
      email: this.email,
      password: this.password,
      displayName: this.displayName
    }).subscribe({
      next: () => {
        this.loading = false;
        
        // 🌟 2. CAMBIO AQUÍ: Activamos el modal en vez del alert()
        this.showSuccessModal = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg =
          err.error?.message ||
          'No se pudo registrar el usuario';
      }
    });
  }

  // 🌟 3. Agrega este método para manejar la redirección al presionar el botón del modal
  irAlLogin(): void {
    this.showSuccessModal = false;
    this.router.navigate(['/login']);
  }

  goLogin(): void {
    this.router.navigate(['/login']);
  }

}
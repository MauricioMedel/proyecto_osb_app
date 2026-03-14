import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width:400px; margin:80px auto; padding:24px;">
      <h2>HealthKids — Iniciar Sesión</h2>

      <div *ngIf="errorMsg" style="color:red; margin-bottom:12px;">
        {{ errorMsg }}
      </div>

      <input [(ngModel)]="username"
             placeholder="Usuario"
             style="display:block; width:100%; margin-bottom:12px; padding:8px;" />

      <input [(ngModel)]="password"
             type="password"
             placeholder="Contraseña"
             style="display:block; width:100%; margin-bottom:16px; padding:8px;" />

      <button (click)="login()" [disabled]="loading"
              style="width:100%; padding:10px; background:#4caf50; color:white; border:none; cursor:pointer;">
        {{ loading ? 'Cargando...' : 'Entrar' }}
      </button>

      <p style="margin-top:16px; text-align:center;">
        ¿No tienes cuenta?
        <a routerLink="/register">Regístrate aquí</a>
      </p>
    </div>
  `
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

    this.loading  = true;
    this.errorMsg = '';

    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading  = false;
        this.errorMsg = err.error?.error?.message || 'Error al iniciar sesión';
      }
    });
  }
}
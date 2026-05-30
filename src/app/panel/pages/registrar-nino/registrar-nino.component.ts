import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

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

  child = {
    username: '',
    password: '',
    nickname: '',
    ageRange: '',
    avatarCode: 'avatar_1'
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  registrarNino() {
    this.errorMessage = '';

    if (!this.child.username || !this.child.password || !this.child.nickname || !this.child.ageRange) {
      this.errorMessage = 'Completa todos los campos obligatorios.';
      return;
    }

    this.loading = true;

    this.http.post(`${environment.apiUrl}/children`, this.child).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/panel']);
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error.error?.message || 'No se pudo registrar el niño.';
      }
    });
  }
}
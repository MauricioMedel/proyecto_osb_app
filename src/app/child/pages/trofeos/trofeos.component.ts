import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({ selector: 'app-trofeos', 
  standalone: true, 
  imports: [RouterLink, CommonModule],
  templateUrl: './trofeos.component.html', 
  styleUrl: './trofeos.component.scss' })

export class TrofeosComponent implements OnInit {
  loading = true; 
  errorMessage = ''; 
  xp: number | null = null; 
  trophies: any[] = [];

  constructor(private auth: AuthService, private http: HttpClient) {

  }
  ngOnInit() { this.load(); }
  load() {
    const id = this.auth.getCurrentUser()?.childId;
    if (!id) { this.loading = false; 
      this.errorMessage = 'Inicia sesión con una cuenta de niño.'; 
      return; }
    this.loading = true; 
    this.errorMessage = '';

    forkJoin({ profile: this.http.get<any>(`${environment.apiUrl}/children/${id}`),
      progress: 
      this.http.get<any>(`${environment.apiUrl}/ml/children/${id}/game-progress`) 
    }).subscribe({
      next: ({ profile, progress }) => { this.xp = Number(profile.data.current_xp); this.trophies = progress.data.trophies; this.loading = false; },
      error: () => { this.loading = false; this.errorMessage = 'No se pudieron cargar las recompensas.'; }
    });
  }
  logout() { this.auth.logout(); }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';

interface Child {
  child_id: string;
  nickname: string;
  age_range: string;
  avatar_code: string;
  current_xp: number;
  streak_days: number;
  level_name: string;
  level_number: number;
}

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit {
  tutorName = 'tutor';
  children: Child[] = [];

  loading = true;
  actionLoading = false;
  // 🌟 NUEVO: Variables de control para el modal de eliminación
  showDeleteModal = false;
  childToDelete: Child | null = null;

  errorMessage = '';
  successMessage = '';

  editingChild: Child | null = null;

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) {}

  ngOnInit() {
    const user = this.auth.getCurrentUser();
    this.tutorName = user?.username || 'tutor';
    this.getChildren();
  }

  private getHeaders() {
    const token = this.auth.getToken();

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getChildren() {
    this.loading = true;
    this.errorMessage = '';

    this.http.get<any>(`${environment.apiUrl}/children`, {
      headers: this.getHeaders()
    }).subscribe({
      next: (res) => {
        this.children = res.data || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'No se pudieron cargar los niños.';
      }
    });
  }

  openEdit(child: Child) {
    this.editingChild = { ...child };
  }

  closeEdit() {
    this.editingChild = null;
  }

  updateChild() {
  if (!this.editingChild) return;

  this.actionLoading = true;
  this.errorMessage = '';
  this.successMessage = '';

  // 1. Corregimos las propiedades usando snake_case (con guiones bajos)
  const body = {
    nickname: this.editingChild.nickname,
    age_range: this.editingChild.age_range,   // Cambiado a age_range
    avatar_code: this.editingChild.avatar_code // Cambiado a avatar_code
  };

  // 2. CAMBIAMOS http.put POR http.patch para que coincida con Express
  this.http.patch<any>(
    `${environment.apiUrl}/children/${this.editingChild.child_id}`,
    body,
    { headers: this.getHeaders() }
  ).subscribe({
    next: () => {
      this.actionLoading = false;
      this.successMessage = 'Niño actualizado correctamente.';
      this.editingChild = null;
      this.getChildren();
    },
    error: () => {
      this.actionLoading = false;
      this.errorMessage = 'No se pudo actualizar el niño.';
    }
  });
}

  deleteChild(child: Child) {
    this.childToDelete = child;
    this.showDeleteModal = true;
  }

  // 🌟 NUEVO: Ejecuta la eliminación real cuando presionan "Sí, eliminar"
  confirmarEliminar() {
    if (!this.childToDelete) return;

    this.showDeleteModal = false;
    this.actionLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.delete<any>(
      `${environment.apiUrl}/children/${this.childToDelete.child_id}`,
      { headers: this.getHeaders() }
    ).subscribe({
      next: () => {
        this.actionLoading = false;
        this.successMessage = 'Niño eliminado correctamente.';
        this.childToDelete = null;
        this.getChildren();
      },
      error: () => {
        this.actionLoading = false;
        this.errorMessage = 'No se pudo eliminar el niño.';
        this.childToDelete = null;
      }
    });
  }
  logout() {
    this.auth.logout();
  }
}
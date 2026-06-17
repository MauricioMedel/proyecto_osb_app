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

interface HealthMetric {
  metric_id: string;
  child_id: string;
  age: number;
  gender: string;
  weight_kg: string;
  height_cm: string;
  bmi: string;
  risk_level: 'bajo' | 'medio' | 'alto';
  prediction_confidence: string;
  created_at: string;
}

interface HealthForm {
  age: number | null;
  gender: string;
  weight_kg: number | null;
  height_cm: number | null;
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
  healthLoading = false;

  showDeleteModal = false;
  childToDelete: Child | null = null;
  errorMessage = '';
  successMessage = '';

  editingChild: Child | null = null;
  selectedChild: Child | null = null;

  latestMetrics: Record<string, HealthMetric | null> = {};

  healthForm: HealthForm = {
    age: null,
    gender: '',
    weight_kg: null,
    height_cm: null
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) { }

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

        this.children.forEach(child => {
          this.getLatestHealthMetric(child.child_id);
        });
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
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error: () => {
        this.actionLoading = false;
        this.errorMessage = 'No se pudo actualizar el niño.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
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

  openHealthForm(child: Child) {
    this.selectedChild = child;

    const ageNumber = Number((child.age_range || '').split('-')[0]);

    this.healthForm = {
      age: ageNumber || null,
      gender: '',
      weight_kg: null,
      height_cm: null
    };

    this.errorMessage = '';
    this.successMessage = '';
  }

  closeHealthForm() {
    this.selectedChild = null;

    this.healthForm = {
      age: null,
      gender: '',
      weight_kg: null,
      height_cm: null
    };
  }

  submitHealthMetric() {
    if (!this.selectedChild) return;

    if (
      !this.healthForm.age ||
      !this.healthForm.gender ||
      !this.healthForm.weight_kg ||
      !this.healthForm.height_cm
    ) {
      this.errorMessage = 'Completa edad, género, peso y estatura.';
      return;
    }

    this.healthLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.post<any>(
      `${environment.apiUrl}/ml/children/${this.selectedChild.child_id}/health-metrics`,
      this.healthForm,
      { headers: this.getHeaders() }
    ).subscribe({
      next: (res) => {
        this.healthLoading = false;
        this.successMessage = 'Evaluación de salud registrada correctamente.';

        const metric = res.data?.metric;
        if (metric) {
          this.latestMetrics[this.selectedChild!.child_id] = metric;
        }

        this.closeHealthForm();
      },
      error: () => {
        this.healthLoading = false;
        this.errorMessage = 'No se pudo registrar la evaluación de salud.';
      }
    });
  }

  getLatestHealthMetric(childId: string) {
    this.http.get<any>(
      `${environment.apiUrl}/ml/children/${childId}/health-metrics/latest`,
      { headers: this.getHeaders() }
    ).subscribe({
      next: (res) => {
        this.latestMetrics[childId] = res.data || null;
      },
      error: () => {
        this.latestMetrics[childId] = null;
      }
    });
  }

  getRiskClass(risk?: string) {
    switch (risk) {
      case 'bajo':
        return 'risk-low';
      case 'medio':
        return 'risk-medium';
      case 'alto':
        return 'risk-high';
      default:
        return 'risk-none';
    }
  }

  logout() {
    this.auth.logout();
  }
}
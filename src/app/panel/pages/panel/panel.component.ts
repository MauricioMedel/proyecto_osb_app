import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';
import { catchError, forkJoin, of } from 'rxjs';
import { HabitService } from '../../../services/habit.service';

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
  healthErrorMessage = '';
  healthSuccessMessage = '';

  editingChild: Child | null = null;
  selectedChild: Child | null = null;

  latestMetrics: Record<string, HealthMetric | null> = {};

  healthForm: HealthForm = {
    age: null,
    gender: '',
    weight_kg: null,
    height_cm: null
  };

  loadingSummary = false;
  summaryError = '';

  totalNivelesSuperados: number | null = null;
  totalTrofeos: number | null = null;

  progresoPorNino: Record<
    string,
    {
      nivelesSuperados: number;
      totalNiveles: number;
      trofeosObtenidos: number;
    } | null
  > = {};

  actividadSemanal: number | null = null;
loadingWeekly = false;
weeklyError = '';

  constructor(
  private router: Router,
  private http: HttpClient,
  private auth: AuthService,
  private habitService: HabitService
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

  getChildren(): void {
    this.loading = true;
    this.errorMessage = '';
    this.summaryError = '';

    this.totalNivelesSuperados = null;
    this.totalTrofeos = null;
    this.progresoPorNino = {};

    this.actividadSemanal = null;
this.weeklyError = '';

    this.http.get<any>(`${environment.apiUrl}/children`, {
      headers: this.getHeaders()
    }).subscribe({
      next: (res) => {
        this.children = res.data || [];
        this.loading = false;
        

        this.cargarResumenJuego();
        this.cargarActividadSemanal();

        this.children.forEach((child) => {
          this.getLatestHealthMetric(child.child_id);
        });
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'No se pudieron cargar los niños.';
      }
    });
  }

  cargarActividadSemanal(): void {
  if (this.loading || this.loadingWeekly) {
    return;
  }

  this.loadingWeekly = true;
  this.weeklyError = '';
  this.actividadSemanal = null;

  if (this.children.length === 0) {
    this.actividadSemanal = 0;
    this.loadingWeekly = false;
    return;
  }

  const fechas = Array.from({ length: 7 }, (_, index) => {
    const fecha = new Date();

    fecha.setHours(12, 0, 0, 0);
    fecha.setDate(fecha.getDate() - (6 - index));

    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  });

  const consultas = this.children.flatMap((child) =>
    fechas.map((fecha) =>
      this.habitService.getHabits(child.child_id, fecha).pipe(
        catchError(() => of(null))
      )
    )
  );

  forkJoin({
    catalogo: this.habitService.getCatalog(),
    registros: forkJoin(consultas)
  }).subscribe({
    next: ({ catalogo, registros }: any) => {
      const catalog = catalogo.data ?? catalogo;

      const activos = catalog.filter(
        (habit: any) => habit.is_active !== false
      );

      if (activos.length === 0) {
        this.loadingWeekly = false;
        this.weeklyError =
          'No hay hábitos activos para calcular el cumplimiento.';
        return;
      }

      if (registros.some((respuesta: any) => respuesta === null)) {
        this.loadingWeekly = false;
        this.weeklyError =
          'No se pudo consultar la semana completa de todos los niños.';
        return;
      }

      const idsActivos = new Set(
        activos.map((habit: any) => habit.habit_id)
      );

      let totalCompletados = 0;

      registros.forEach((respuesta: any) => {
        const habits = respuesta.data ?? [];

        const completados = new Set(
          habits
            .filter(
              (habit: any) =>
                idsActivos.has(habit.habit_id) &&
                habit.is_completed === true
            )
            .map((habit: any) => habit.habit_id)
        );

        totalCompletados += completados.size;
      });

      const totalEsperado = registros.length * activos.length;

      this.actividadSemanal = Math.round(
        (totalCompletados / totalEsperado) * 100
      );

      this.loadingWeekly = false;
    },
    error: () => {
      this.loadingWeekly = false;
      this.weeklyError =
        'No se pudo cargar el cumplimiento semanal.';
    }
  });
}

  cargarResumenJuego(): void {
    if (this.loading || this.loadingSummary) {
      return;
    }

    this.loadingSummary = true;
    this.summaryError = '';
    this.totalNivelesSuperados = null;
    this.totalTrofeos = null;
    this.progresoPorNino = {};

    if (this.children.length === 0) {
      this.totalNivelesSuperados = 0;
      this.totalTrofeos = 0;
      this.loadingSummary = false;
      return;
    }

    const children = [...this.children];

    const consultas = children.map((child) =>
      this.http.get<any>(
        `${environment.apiUrl}/ml/children/${child.child_id}/game-progress`,
        { headers: this.getHeaders() }
      ).pipe(
        catchError(() => of(null))
      )
    );

    forkJoin(consultas).subscribe({
      next: (respuestas) => {
        let niveles = 0;
        let trofeos = 0;
        let hayErrores = false;

        respuestas.forEach((respuesta, index) => {
          const childId = children[index].child_id;
          const progreso = respuesta?.data;

          if (
            !Array.isArray(progreso?.completedLevels) ||
            !Array.isArray(progreso?.levels) ||
            !Array.isArray(progreso?.trophies)
          ) {
            this.progresoPorNino[childId] = null;
            hayErrores = true;
            return;
          }

          const nivelesSuperados = progreso.completedLevels.length;

          const trofeosObtenidos = progreso.trophies.filter(
            (trophy: any) => trophy.unlocked === true
          ).length;

          this.progresoPorNino[childId] = {
            nivelesSuperados,
            totalNiveles: progreso.levels.length,
            trofeosObtenidos
          };

          niveles += nivelesSuperados;
          trofeos += trofeosObtenidos;
        });

        if (hayErrores) {
          this.summaryError =
            'No se pudo consultar el progreso de todos los niños.';
        } else {
          this.totalNivelesSuperados = niveles;
          this.totalTrofeos = trofeos;
        }

        this.loadingSummary = false;
      },
      error: () => {
        this.loadingSummary = false;
        this.summaryError =
          'No se pudo cargar el resumen del juego.';
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

    this.healthErrorMessage = '';
    this.healthSuccessMessage = '';
  }

  closeHealthForm() {
    this.selectedChild = null;
    this.healthErrorMessage = '';
    this.healthSuccessMessage = '';
    this.healthLoading = false;

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
      this.healthErrorMessage = 'Completa edad, género, peso y estatura.';
      this.healthSuccessMessage = '';
      return;
    }

    this.healthLoading = true;
    this.healthErrorMessage = '';
    this.healthSuccessMessage = '';

    this.http.post<any>(
      `${environment.apiUrl}/ml/children/${this.selectedChild.child_id}/health-metrics`,
      this.healthForm,
      { headers: this.getHeaders() }
    ).subscribe({
      next: (res) => {
        this.healthLoading = false;
        this.healthSuccessMessage = 'Evaluación de salud registrada correctamente.';

        const metric = res.data?.metric;
        if (metric) {
          this.latestMetrics[this.selectedChild!.child_id] = metric;
        }

      },
      error: () => {
        this.healthLoading = false;
        this.healthErrorMessage = 'No se pudo registrar la evaluación de salud.';
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

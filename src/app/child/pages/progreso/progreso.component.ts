import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { catchError, forkJoin, of } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { HabitService } from '../../../services/habit.service';
import { MlService } from '../../../services/ml.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-progreso',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './progreso.component.html',
  styleUrl: './progreso.component.scss'
})
export class ProgresoComponent implements OnInit {
  // Agua
  aguaActual = 0;
  aguaMeta = 0;
  aguaHabitId = '';

  // Comida
  comidaActual = 0;
  comidaMeta = 0;
  comidaHabitId = '';

  // Sueño
  suenoActual = 0;
  suenoMeta = 0;
  suenoHabitId = '';

  // Estado de las metas
  cargandoMetas = false;
  guardandoMeta = false;
  errorMetas = '';
  fechaMetas = '';

  // Resumen diario
  dailySummary: any = null;
  summaryId = '';

  // Análisis inteligente
  mlResult: any = null;
  analizandoIA = false;
  errorIA = '';

  semana: {
  fecha: string;
  dia: string;
  porcentaje: number | null;
}[] = [];

cargandoSemana = false;
errorSemana = '';

  constructor(
  private auth: AuthService,
  private habitService: HabitService,
  private mlService: MlService,
  private http: HttpClient
) {}

  ngOnInit(): void {
  this.cargarHabitos();
  this.cargarSemana();
  this.cargarProgresoJuego();
}


nivelesCompletados: number | null = null;
totalNiveles: number | null = null;
cargandoJuego = false;
errorJuego = '';

get porcentajeHabitosHoy(): number | null {
  if (this.cargandoSemana) {
    return null;
  }

  const hoy = this.obtenerFechaActual();

  return this.semana.find((dia) => dia.fecha === hoy)?.porcentaje ?? null;
}

get porcentajeJuego(): number | null {
  if (
    this.nivelesCompletados === null ||
    this.totalNiveles === null ||
    this.totalNiveles <= 0
  ) {
    return null;
  }

  return Math.round(
    (this.nivelesCompletados / this.totalNiveles) * 100
  );
}

cargarProgresoJuego(): void {
  const childId = this.auth.getCurrentUser()?.childId;

  if (!childId || this.cargandoJuego) {
    return;
  }

  this.cargandoJuego = true;
  this.errorJuego = '';
  this.nivelesCompletados = null;
  this.totalNiveles = null;

  this.http.get<any>(
    `${environment.apiUrl}/ml/children/${childId}/game-progress`
  ).subscribe({
    next: (res) => {
      const progreso = res.data;

      if (
        !Array.isArray(progreso?.completedLevels) ||
        !Array.isArray(progreso?.levels)
      ) {
        this.cargandoJuego = false;
        this.errorJuego = 'No se pudo interpretar el progreso del juego.';
        return;
      }

      this.nivelesCompletados = progreso.completedLevels.length;
      this.totalNiveles = progreso.levels.length;
      this.cargandoJuego = false;
    },
    error: () => {
      this.cargandoJuego = false;
      this.errorJuego = 'No se pudo cargar el progreso del juego.';
    }
  });
}

cargarSemana(): void {
  const childId = this.auth.getCurrentUser()?.childId;

  if (!childId || this.cargandoSemana) {
    return;
  }

  this.cargandoSemana = true;
  this.errorSemana = '';

  const dias = Array.from({ length: 7 }, (_, index) => {
    const fecha = new Date();
    fecha.setHours(12, 0, 0, 0);
    fecha.setDate(fecha.getDate() - (6 - index));

    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');

    return {
      fecha: `${year}-${month}-${day}`,
      dia: fecha
        .toLocaleDateString('es-MX', { weekday: 'short' })
        .replace('.', '')
        .toUpperCase()
    };
  });

  forkJoin({
    catalogo: this.habitService.getCatalog(),
    registros: forkJoin(
      dias.map((dia) =>
        this.habitService.getHabits(childId, dia.fecha).pipe(
          catchError(() => of(null))
        )
      )
    )
  }).subscribe({
    next: ({ catalogo, registros }: any) => {
      const catalog = catalogo.data ?? catalogo;

      const activos = catalog.filter(
        (habit: any) => habit.is_active !== false
      );

      const idsActivos = new Set(
        activos.map((habit: any) => habit.habit_id)
      );

      this.semana = dias.map((dia, index) => {
        const respuesta = registros[index];

        if (respuesta === null || activos.length === 0) {
          return { ...dia, porcentaje: null };
        }

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

        return {
          ...dia,
          porcentaje: Math.round(
            (completados.size / activos.length) * 100
          )
        };
      });

      this.cargandoSemana = false;

      if (this.semana.some((dia) => dia.porcentaje === null)) {
        this.errorSemana =
          'Algunos días no tienen información disponible.';
      }
    },
    error: () => {
      this.cargandoSemana = false;
      this.semana = [];
      this.errorSemana = 'No se pudo cargar el progreso semanal.';
    }
  });
}

get mejorDiaSemana(): string {
  const disponibles = this.semana.filter(
    (dia) => dia.porcentaje !== null
  );

  if (disponibles.length === 0) {
    return 'Sin información disponible';
  }

  const mayor = Math.max(
    ...disponibles.map((dia) => dia.porcentaje as number)
  );

  if (mayor === 0) {
    return 'Aún no hay hábitos completados';
  }

  const mejores = disponibles
    .filter((dia) => dia.porcentaje === mayor)
    .map((dia) => dia.dia)
    .join(', ');

  return `${mejores}: ${mayor}%`;
}

  cargarHabitos(): void {
    if (this.cargandoMetas || this.guardandoMeta || this.analizandoIA) {
      return;
    }

    const childId = this.auth.getCurrentUser()?.childId;

    if (!childId) {
      this.errorMetas = 'Inicia sesión con una cuenta de niño.';
      return;
    }

    const fecha = this.obtenerFechaActual();

    this.cargandoMetas = true;
    this.errorMetas = '';
    this.errorIA = '';
    this.fechaMetas = '';
    this.dailySummary = null;
    this.summaryId = '';
    this.mlResult = null;

    forkJoin({
      catalogo: this.habitService.getCatalog(),
      registros: this.habitService.getHabits(childId, fecha)
    }).subscribe({
      next: ({ catalogo, registros }: any) => {
        const catalog = catalogo.data ?? catalogo;
        const habits = registros.data ?? [];

        const buscar = (nombre: string) =>
          catalog.find(
            (habit: any) =>
              habit.name?.trim().toLowerCase() === nombre
          );

        const valor = (habit: any): number => {
          const registro = habits.find(
            (item: any) => item.habit_id === habit?.habit_id
          );

          const cantidad = Number(registro?.value_achieved ?? 0);

          return Number.isFinite(cantidad) && cantidad >= 0
            ? cantidad
            : 0;
        };

        const meta = (habit: any): number => {
          const target = Number(habit?.target_value ?? 0);

          return Number.isFinite(target) && target > 0
            ? target
            : 0;
        };

        const agua = buscar('beber agua');
        const comida = buscar('comer verduras');
        const sueno = buscar('dormir bien');

        this.aguaHabitId = agua?.habit_id ?? '';
        this.aguaMeta = meta(agua);
        this.aguaActual = valor(agua);

        this.comidaHabitId = comida?.habit_id ?? '';
        this.comidaMeta = meta(comida);
        this.comidaActual = valor(comida);

        this.suenoHabitId = sueno?.habit_id ?? '';
        this.suenoMeta = meta(sueno);
        this.suenoActual = valor(sueno);

        this.fechaMetas = fecha;
        this.cargandoMetas = false;

        if (!agua || !comida || !sueno) {
          this.errorMetas =
            'Una de las metas no está disponible en el catálogo.';
        } else if (
          this.aguaMeta <= 0 ||
          this.comidaMeta <= 0 ||
          this.suenoMeta <= 0
        ) {
          this.errorMetas =
            'Una de las metas no tiene una cantidad válida en el catálogo.';
        }

        this.actualizarResumen(childId, fecha);
      },
      error: () => {
        this.cargandoMetas = false;
        this.errorMetas =
          'No se pudieron cargar las metas saludables.';
      }
    });
  }

  actualizarResumen(childId: string, fecha: string): void {
    this.dailySummary = null;
    this.summaryId = '';
    this.mlResult = null;
    this.errorIA = '';

    this.mlService.getDailySummary(childId, fecha).subscribe({
      next: (res: any) => {
        this.dailySummary = res.data;
        this.summaryId = res.data?.summary_id ?? '';

        if (!this.summaryId) {
          this.errorIA = 'El resumen del día no está disponible.';
        }
      },
      error: () => {
        this.errorIA =
          'No se pudo cargar el resumen para el análisis inteligente.';
      }
    });
  }

  sumarAgua(): void {
    this.guardarMeta(
      this.aguaHabitId,
      this.aguaActual,
      this.aguaMeta,
      (valor) => {
        this.aguaActual = valor;
      }
    );
  }

  sumarComida(): void {
    this.guardarMeta(
      this.comidaHabitId,
      this.comidaActual,
      this.comidaMeta,
      (valor) => {
        this.comidaActual = valor;
      }
    );
  }

  sumarSueno(): void {
    this.guardarMeta(
      this.suenoHabitId,
      this.suenoActual,
      this.suenoMeta,
      (valor) => {
        this.suenoActual = valor;
      }
    );
  }

  guardarMeta(
    habitId: string,
    actual: number,
    meta: number,
    actualizar: (valor: number) => void
  ): void {
    const childId = this.auth.getCurrentUser()?.childId;

    if (
      !childId ||
      !habitId ||
      meta <= 0 ||
      actual >= meta ||
      this.cargandoMetas ||
      this.guardandoMeta ||
      this.analizandoIA ||
      !this.fechaMetas
    ) {
      return;
    }

    const fecha = this.obtenerFechaActual();

    // Si cambió el día, primero carga los registros de la nueva fecha.
    if (fecha !== this.fechaMetas) {
      this.cargarHabitos();
      return;
    }

    const nuevoValor = Math.min(actual + 1, meta);

    this.guardandoMeta = true;
    this.errorMetas = '';
    this.errorIA = '';
    this.mlResult = null;
    this.dailySummary = null;
    this.summaryId = '';

    this.habitService.saveHabit(childId, {
      habitId,
      logDate: fecha,
      valueAchieved: nuevoValor,
      isCompleted: nuevoValor >= meta,
      source: 'manual'
    }).subscribe({
      next: () => {
        actualizar(nuevoValor);
        this.guardandoMeta = false;

        this.actualizarResumen(childId, fecha);
      },
      error: () => {
        this.guardandoMeta = false;
        this.errorMetas =
          'No se pudo guardar el registro. Intenta nuevamente.';

        this.actualizarResumen(childId, fecha);
      }
    });
  }

  analizarPatronIA(): void {
    if (
      !this.summaryId ||
      !this.dailySummary ||
      this.analizandoIA ||
      this.cargandoMetas ||
      this.guardandoMeta
    ) {
      return;
    }

    if (this.fechaMetas !== this.obtenerFechaActual()) {
      this.cargarHabitos();
      return;
    }

    this.analizandoIA = true;
    this.errorIA = '';
    this.mlResult = null;

    const datos = {
      screen_time_minutes:
        this.dailySummary.screen_time_minutes ?? 0,
      challenges_completed:
        this.dailySummary.challenges_completed ?? 0,
      habits_completed:
        this.dailySummary.habits_completed ?? 0,
      streak_days:
        this.dailySummary.streak_days_at_date ?? 0
    };

    this.mlService.analyzePattern(this.summaryId, datos).subscribe({
      next: (res: any) => {
        this.mlResult = res.data;
        this.analizandoIA = false;
      },
      error: () => {
        this.analizandoIA = false;
        this.errorIA =
          'No se pudo analizar tu patrón. Intenta nuevamente.';
      }
    });
  }

  obtenerFechaActual(): string {
    const hoy = new Date();

    const year = hoy.getFullYear();
    const month = String(hoy.getMonth() + 1).padStart(2, '0');
    const day = String(hoy.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  logout(): void {
    this.auth.logout();
  }
}
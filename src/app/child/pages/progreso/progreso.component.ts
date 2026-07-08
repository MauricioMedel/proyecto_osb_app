import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HabitService } from '../../../services/habit.service';
import { MlService } from '../../../services/ml.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progreso',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './progreso.component.html',
  styleUrl: './progreso.component.scss'
})
export class ProgresoComponent implements OnInit {
  // Con agua
  aguaActual = 0;
  aguaMeta = 1;
  aguaHabitId = '';

  // Con comida
  comidaActual = 0;
  comidaMeta = 3;
  comidaHabitId = '';

  // Con sueño
  suenoActual = 0;
  suenoMeta = 10;
  suenoHabitId = '';

  // Analisis IA
  mlResult:any = null;
  analizandoIA = false;

  dailySummary:any = null;
  summaryId='';

  constructor(
    private router: Router,
    private auth: AuthService,
    private habitService: HabitService,
     private mlService:MlService
  ) {}

  ngOnInit() {
    const user = this.auth.getCurrentUser();
    console.log("USUARIO LOGIN:", user);

    this.cargarHabitos();
    this.validarNuevoDia();

    if(user?.childId){

      this.mlService.getDailySummary(user.childId).subscribe({

next:(res:any)=>{

  console.log("========== DAILY SUMMARY ==========");
  console.log(res);
  console.log("DATA:", res.data);
  console.log("SUMMARY ID:", res.data?.summary_id);
  console.log("===================================");


  this.dailySummary = res.data;

  this.summaryId = res.data?.summary_id ?? '';

},

      error:(err)=>{

        console.error("ERROR DAILY SUMMARY");
        console.error(err);

      }

    });

}

    this.habitService.getCatalog().subscribe((response: any) => {
      console.log("CATALOGO:", response);
      const catalog = response.data || response;

      const agua = catalog.find((h: any) => h.name.trim().toLowerCase() === "beber agua");
      const comida = catalog.find((h: any) => h.name.trim().toLowerCase() === "comer verduras");
      const sueno = catalog.find((h: any) => h.name.trim().toLowerCase() === "dormir bien");

      if (agua) {
        this.aguaHabitId = agua.habit_id;
        this.aguaMeta = Math.round(Number(agua.target_value));
      }

      if (comida) {
        this.comidaHabitId = comida.habit_id;
        // Si comida tiene meta dinámica en tu API, agrégala aquí de la misma forma
      }

      if (sueno) {
        this.suenoHabitId = sueno.habit_id;
        this.suenoMeta = Math.round(Number(sueno.target_value));
      }

      console.log("Agua:", agua);
      console.log("Comida:", comida);
      console.log("Sueño:", sueno);
    });
  }

  cargarHabitos() {
  const user = this.auth.getCurrentUser();
  if (!user?.childId) return;

  // Fecha actual del registro (YYYY-MM-DD)
  const today = this.obtenerFechaActual();
  console.log("Cargando hábitos del día:", today);

  this.habitService.getHabits(user.childId, today).subscribe((response: any) => {
    console.log("HÁBITOS DEL DÍA:", response.data);
    const habits = response.data || [];

    const agua = habits.find((h: any) => h.habit_name === "Beber agua");
    const comida = habits.find((h: any) => h.habit_name === "Comer verduras");
    const sueno = habits.find((h: any) => h.habit_name === "Dormir bien");

    // Si existe registro del día carga valor, si no existe inicia en 0
    this.aguaActual = agua ? Number(agua.value_achieved) : 0;
    this.comidaActual = comida ? Number(comida.value_achieved) : 0;
    this.suenoActual = sueno ? Number(sueno.value_achieved) : 0;
  });
}

  sumarAgua() {
    const user = this.auth.getCurrentUser();
    if (!user?.childId) {
      console.error("No existe childId del usuario");
      return;
    }

    if(this.aguaActual < this.aguaMeta){

      this.aguaActual++;

      }else{
      console.log(
        "Meta de agua alcanzada"
      );
  return;
  }

    const body = {
      habitId: this.aguaHabitId,
      logDate: this.obtenerFechaActual(),
      valueAchieved: this.aguaActual,
      isCompleted: this.aguaActual >= this.aguaMeta,
      source: "manual"
    };

    console.log("ENVIANDO AGUA:", body);
    this.habitService.saveHabit(user.childId, body).subscribe({
      next: (res) => console.log("AGUA GUARDADA CORRECTAMENTE", res),
      error: (err) => console.error("ERROR GUARDANDO AGUA", err.error)
    });
  }

  sumarComida() {
    const user = this.auth.getCurrentUser();
    if (!user?.childId) return;

    if(this.comidaActual < this.comidaMeta){

      this.comidaActual++;

      }else{

      console.log(
      "Meta de comida alcanzada"
      );

      return;

}

    const body = {
      habitId: this.comidaHabitId,
      logDate: this.obtenerFechaActual(),
      valueAchieved: this.comidaActual,
      isCompleted: this.comidaActual >= this.comidaMeta,
      source: "manual"
    };

    console.log("ENVIANDO COMIDA:", body);
    this.habitService.saveHabit(user.childId, body).subscribe({
      next: (res) => console.log("COMIDA GUARDADA", res),
      error: (err) => console.error("ERROR GUARDANDO COMIDA", err)
    });
  }

  sumarSueno() {
    const user = this.auth.getCurrentUser();
    if (!user?.childId) return;

   if(this.suenoActual < this.suenoMeta){

    this.suenoActual++;

        }else{

         console.log(
      "Meta de sueño alcanzada"
        );

      return;

    }

    const body = {
      habitId: this.suenoHabitId,
      logDate: this.obtenerFechaActual(),
      valueAchieved: this.suenoActual,
      isCompleted: this.suenoActual >= this.suenoMeta,
      source: "manual"
    };

    console.log("ENVIANDO SUEÑO:", body);
    this.habitService.saveHabit(user.childId, body).subscribe({
      next: (res) => console.log("SUEÑO GUARDADO", res),
      error: (err) => console.error("ERROR GUARDANDO SUEÑO", err)
    });
  }

  analizarPatronIA() {
  if (!this.summaryId) {
    console.error("No existe summaryId");
    return;
  }

  this.analizandoIA = true;

    const datos={
    screen_time_minutes:
    this.dailySummary?.screen_time_minutes ?? 0,
    challenges_completed:
    this.dailySummary?.challenges_completed ?? 0,
    habits_completed:
    this.dailySummary?.habits_completed ?? 0,
    streak_days:
    this.dailySummary?.streak_days_at_date ?? 0
    };

  this.mlService.analyzePattern(this.summaryId, datos).subscribe({
    next: (res: any) => {
      console.log("RESULTADO IA", res);
      this.mlResult = res.data;
      this.analizandoIA = false;
    },
    error: (err) => {
      console.error("ERROR IA", err);
      this.analizandoIA = false;
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
  validarNuevoDia() {
  const hoy = this.obtenerFechaActual();
  const ultimoDia = localStorage.getItem("ultimo_dia");

  if (ultimoDia !== hoy) {
    this.aguaActual = 0;
    this.comidaActual = 0;
    this.suenoActual = 0;

    localStorage.setItem("ultimo_dia", hoy);
  }
}

  logout() {
    this.auth.logout();
  }
}
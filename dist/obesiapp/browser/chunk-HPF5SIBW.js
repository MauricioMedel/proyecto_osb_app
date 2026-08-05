import {
  AuthService,
  environment
} from "./chunk-3T3BQCC5.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgIf,
  Router,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4YERQOE2.js";

// src/app/services/habit.service.ts
var HabitService = class _HabitService {
  constructor(http) {
    this.http = http;
    this.apiUrl = environment.apiUrl;
  }
  getCatalog() {
    return this.http.get(`${this.apiUrl}/catalog/habits`);
  }
  getHabits(childId, date) {
    return this.http.get(`${this.apiUrl}/children/${childId}/habits?date=${date}`);
  }
  saveHabit(childId, data) {
    return this.http.post(`${this.apiUrl}/children/${childId}/habits`, data);
  }
  static {
    this.\u0275fac = function HabitService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HabitService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HabitService, factory: _HabitService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HabitService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/services/ml.service.ts
var MlService = class _MlService {
  constructor(http) {
    this.http = http;
    this.apiUrl = environment.apiUrl;
  }
  // 1. NUEVO: Traer los datos guardados de la BD para el usuario
  // Esto hará que al recargar la página, los contadores ya tengan los valores reales
  getDailySummary(childId) {
    return this.http.get(`${this.apiUrl}/ml/daily-summary/${childId}`);
  }
  // 2. NUEVO: Guardar un cambio de hábito específico
  // Esto hará que al dar clic en "+", se guarde en PostgreSQL
  updateHabit(childId, habitType, value) {
    return this.http.post(`${this.apiUrl}/habitos/actualizar`, {
      childId,
      habitType,
      value
    });
  }
  analyzePattern(summaryId, data) {
    return this.http.post(`${this.apiUrl}/ml/daily-summary/${summaryId}/analyze-pattern`, data);
  }
  static {
    this.\u0275fac = function MlService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MlService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MlService, factory: _MlService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/child/pages/progreso/progreso.component.ts
function ProgresoComponent_span_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u2728 Analizar patr\xF3n IA ");
    \u0275\u0275elementEnd();
  }
}
function ProgresoComponent_span_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u23F3 Analizando... ");
    \u0275\u0275elementEnd();
  }
}
function ProgresoComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h3");
    \u0275\u0275text(2, "\u{1F9E0} Resultado IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Cluster ", ctx_r0.mlResult.cluster_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.mlResult.message, " ");
  }
}
var ProgresoComponent = class _ProgresoComponent {
  constructor(router, auth, habitService, mlService) {
    this.router = router;
    this.auth = auth;
    this.habitService = habitService;
    this.mlService = mlService;
    this.aguaActual = 0;
    this.aguaMeta = 8;
    this.aguaHabitId = "";
    this.comidaActual = 0;
    this.comidaMeta = 3;
    this.comidaHabitId = "";
    this.suenoActual = 0;
    this.suenoMeta = 10;
    this.suenoHabitId = "";
    this.mlResult = null;
    this.analizandoIA = false;
    this.dailySummary = null;
    this.summaryId = "";
  }
  ngOnInit() {
    const user = this.auth.getCurrentUser();
    this.cargarHabitos();
    this.validarNuevoDia();
    if (user?.childId) {
      this.mlService.getDailySummary(user.childId).subscribe({
        next: (res) => {
          this.dailySummary = res.data;
          this.summaryId = res.data?.summary_id ?? "";
        },
        error: (err) => {
          console.error("ERROR DAILY SUMMARY");
          console.error(err);
        }
      });
    }
    this.habitService.getCatalog().subscribe((response) => {
      const catalog = response.data || response;
      const agua = catalog.find((h) => h.name.trim().toLowerCase() === "beber agua");
      const comida = catalog.find((h) => h.name.trim().toLowerCase() === "comer verduras");
      const sueno = catalog.find((h) => h.name.trim().toLowerCase() === "dormir bien");
      if (agua) {
        this.aguaHabitId = agua.habit_id;
        this.aguaMeta = Math.round(Number(agua.target_value));
      }
      if (comida) {
        this.comidaHabitId = comida.habit_id;
      }
      if (sueno) {
        this.suenoHabitId = sueno.habit_id;
        this.suenoMeta = Math.round(Number(sueno.target_value));
      }
    });
  }
  cargarHabitos() {
    const user = this.auth.getCurrentUser();
    if (!user?.childId)
      return;
    const today = this.obtenerFechaActual();
    console.log("Cargando h\xE1bitos del d\xEDa:", today);
    this.habitService.getHabits(user.childId, today).subscribe((response) => {
      const habits = response.data || [];
      const agua = habits.find((h) => h.habit_name === "Beber agua");
      const comida = habits.find((h) => h.habit_name === "Comer verduras");
      const sueno = habits.find((h) => h.habit_name === "Dormir bien");
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
    if (this.aguaActual < this.aguaMeta) {
      this.aguaActual++;
    } else {
      console.log("Meta de agua alcanzada");
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
    if (!user?.childId)
      return;
    if (this.comidaActual < this.comidaMeta) {
      this.comidaActual++;
    } else {
      return;
    }
    const body = {
      habitId: this.comidaHabitId,
      logDate: this.obtenerFechaActual(),
      valueAchieved: this.comidaActual,
      isCompleted: this.comidaActual >= this.comidaMeta,
      source: "manual"
    };
    this.habitService.saveHabit(user.childId, body).subscribe({
      next: (res) => console.log("COMIDA GUARDADA", res),
      error: (err) => console.error("ERROR GUARDANDO COMIDA", err)
    });
  }
  sumarSueno() {
    const user = this.auth.getCurrentUser();
    if (!user?.childId)
      return;
    if (this.suenoActual < this.suenoMeta) {
      this.suenoActual++;
    } else {
      console.log("Meta de sue\xF1o alcanzada");
      return;
    }
    const body = {
      habitId: this.suenoHabitId,
      logDate: this.obtenerFechaActual(),
      valueAchieved: this.suenoActual,
      isCompleted: this.suenoActual >= this.suenoMeta,
      source: "manual"
    };
    this.habitService.saveHabit(user.childId, body).subscribe({
      next: (res) => console.log("SUE\xD1O GUARDADO", res),
      error: (err) => console.error("ERROR GUARDANDO SUE\xD1O", err)
    });
  }
  analizarPatronIA() {
    if (!this.summaryId) {
      console.error("No existe summaryId");
      return;
    }
    this.analizandoIA = true;
    const datos = {
      screen_time_minutes: this.dailySummary?.screen_time_minutes ?? 0,
      challenges_completed: this.dailySummary?.challenges_completed ?? 0,
      habits_completed: this.dailySummary?.habits_completed ?? 0,
      streak_days: this.dailySummary?.streak_days_at_date ?? 0
    };
    this.mlService.analyzePattern(this.summaryId, datos).subscribe({
      next: (res) => {
        this.mlResult = res.data;
        this.analizandoIA = false;
      },
      error: (err) => {
        console.error("ERROR IA", err);
        this.analizandoIA = false;
      }
    });
  }
  obtenerFechaActual() {
    const hoy = /* @__PURE__ */ new Date();
    const year = hoy.getFullYear();
    const month = String(hoy.getMonth() + 1).padStart(2, "0");
    const day = String(hoy.getDate()).padStart(2, "0");
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
  static {
    this.\u0275fac = function ProgresoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProgresoComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HabitService), \u0275\u0275directiveInject(MlService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgresoComponent, selectors: [["app-progreso"]], decls: 123, vars: 10, consts: [[1, "progress-page"], [1, "top-bar"], ["routerLink", "/menu"], [1, "progress-layout"], [1, "activity-cards"], [1, "ring-card"], [1, "lock-icon"], [1, "ring", "green"], [1, "ring", "blue"], [1, "energy-card"], [1, "chart"], [1, "bar-item"], [1, "bar", "green", 2, "height", "45%"], [1, "bar", "green", 2, "height", "75%"], [1, "bar", "blue", 2, "height", "35%"], [1, "bar", "green", 2, "height", "20%"], [1, "bar", "blue", 2, "height", "60%"], [1, "bar", "green", 2, "height", "30%"], [1, "bar", "blue", 2, "height", "15%"], [1, "energy-summary"], [1, "side-stats"], [1, "mini-card"], [1, "mini-icon", "fire"], [1, "mini-icon", "clock"], [1, "goals-card"], [1, "goal-item"], [1, "plus-btn", 3, "click"], [1, "ai-card"], [1, "ai-header"], [1, "ai-icon"], [1, "ai-btn", 3, "click", "disabled"], [4, "ngIf"], ["class", "ai-result", 4, "ngIf"], [1, "ai-result"], [1, "cluster"]], template: function ProgresoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
        \u0275\u0275text(3, "\u2190 Volver");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div")(5, "h1");
        \u0275\u0275text(6, "Mi Progreso Saludable \u{1F4AA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Controla tu actividad, energ\xEDa y h\xE1bitos saludables.");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "section", 3)(11, "div", 4)(12, "div", 5)(13, "div", 6);
        \u0275\u0275text(14, "\u{1F512}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "span");
        \u0275\u0275text(17, "75%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "h3");
        \u0275\u0275text(19, "S\xFAper Saltos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p");
        \u0275\u0275text(21, "75 / 100 saltos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 5)(23, "div", 6);
        \u0275\u0275text(24, "\u{1F512}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 8)(26, "span");
        \u0275\u0275text(27, "60%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "h3");
        \u0275\u0275text(29, "Caminata Ligera");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p");
        \u0275\u0275text(31, "4,800 / 8,000 pasos");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 9)(33, "h2");
        \u0275\u0275text(34, "Energ\xEDa semanal \u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 10)(36, "div", 11);
        \u0275\u0275element(37, "div", 12);
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "LUN");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 11);
        \u0275\u0275element(41, "div", 13);
        \u0275\u0275elementStart(42, "span");
        \u0275\u0275text(43, "MAR");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 11);
        \u0275\u0275element(45, "div", 14);
        \u0275\u0275elementStart(46, "span");
        \u0275\u0275text(47, "MI\xC9");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 11);
        \u0275\u0275element(49, "div", 15);
        \u0275\u0275elementStart(50, "span");
        \u0275\u0275text(51, "JUE");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 11);
        \u0275\u0275element(53, "div", 16);
        \u0275\u0275elementStart(54, "span");
        \u0275\u0275text(55, "VIE");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 11);
        \u0275\u0275element(57, "div", 17);
        \u0275\u0275elementStart(58, "span");
        \u0275\u0275text(59, "S\xC1B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 11);
        \u0275\u0275element(61, "div", 18);
        \u0275\u0275elementStart(62, "span");
        \u0275\u0275text(63, "DOM");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 19)(65, "span");
        \u0275\u0275text(66, "Mayor actividad: Martes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "strong");
        \u0275\u0275text(68, "120 pts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "div", 20)(70, "div", 21)(71, "span", 22);
        \u0275\u0275text(72, "\u{1F525}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div")(74, "h3");
        \u0275\u0275text(75, "250 kcal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "p");
        \u0275\u0275text(77, "Calor\xEDas quemadas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 21)(79, "span", 23);
        \u0275\u0275text(80, "\u{1F552}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div")(82, "h3");
        \u0275\u0275text(83, "90 min");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "p");
        \u0275\u0275text(85, "Minutos activos");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "div", 24)(87, "h2");
        \u0275\u0275text(88, "Metas saludables \u{1F3AF}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 25)(90, "span");
        \u0275\u0275text(91, " \u{1F4A7} Agua ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "strong");
        \u0275\u0275text(93);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "button", 26);
        \u0275\u0275listener("click", function ProgresoComponent_Template_button_click_94_listener() {
          return ctx.sumarAgua();
        });
        \u0275\u0275text(95, " + ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 25)(97, "span");
        \u0275\u0275text(98, "\u{1F966} Comida ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "strong");
        \u0275\u0275text(100);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "button", 26);
        \u0275\u0275listener("click", function ProgresoComponent_Template_button_click_101_listener() {
          return ctx.sumarComida();
        });
        \u0275\u0275text(102, "+");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 25)(104, "span");
        \u0275\u0275text(105, "\u{1F634} Sue\xF1o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "strong");
        \u0275\u0275text(107);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "button", 26);
        \u0275\u0275listener("click", function ProgresoComponent_Template_button_click_108_listener() {
          return ctx.sumarSueno();
        });
        \u0275\u0275text(109, "+");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 27)(111, "div", 28)(112, "span", 29);
        \u0275\u0275text(113, "\u{1F916}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div")(115, "h2");
        \u0275\u0275text(116, "An\xE1lisis Inteligente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "p");
        \u0275\u0275text(118, "Conoce tu patr\xF3n saludable del d\xEDa.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(119, "button", 30);
        \u0275\u0275listener("click", function ProgresoComponent_Template_button_click_119_listener() {
          return ctx.analizarPatronIA();
        });
        \u0275\u0275template(120, ProgresoComponent_span_120_Template, 2, 0, "span", 31)(121, ProgresoComponent_span_121_Template, 2, 0, "span", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(122, ProgresoComponent_div_122_Template, 7, 2, "div", 32);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(93);
        \u0275\u0275textInterpolate2(" ", ctx.aguaActual, " / ", ctx.aguaMeta, " vasos ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate2("", ctx.comidaActual, " / ", ctx.comidaMeta, " porciones");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate2("", ctx.suenoActual, " / ", ctx.suenoMeta, " horas");
        \u0275\u0275advance(12);
        \u0275\u0275property("disabled", ctx.analizandoIA);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.analizandoIA);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.analizandoIA);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mlResult);
      }
    }, dependencies: [RouterLink, CommonModule, NgIf], styles: ["\n\n.progress-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 30px;\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff,\n      #f0fdf4);\n  font-family: Arial, sans-serif;\n}\n.top-bar[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 26px;\n  padding: 22px 28px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.12);\n  margin-bottom: 30px;\n}\n.top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin: 0;\n}\n.top-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.top-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: #1e3a8a;\n  color: white;\n  padding: 12px 16px;\n  border-radius: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.top-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 14px;\n  font-weight: bold;\n}\n.progress-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr 1.6fr 1.2fr;\n  gap: 24px;\n  align-items: start;\n}\n.activity-cards[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n.ring-card[_ngcontent-%COMP%], \n.energy-card[_ngcontent-%COMP%], \n.mini-card[_ngcontent-%COMP%], \n.goals-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 26px;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);\n}\n.ring-card[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 28px 20px;\n}\n.ring-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin: 14px 0 4px;\n}\n.ring-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n  font-weight: bold;\n}\n.lock-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: #f1f5f9;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n}\n.ring[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin: auto;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-size: 24px;\n  font-weight: 800;\n  background: conic-gradient(#22c55e 75%, #e2e8f0 0);\n}\n.ring[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  background: white;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  color: #22c55e;\n}\n.ring.blue[_ngcontent-%COMP%] {\n  background: conic-gradient(#2563eb 60%, #e2e8f0 0);\n}\n.ring.blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.energy-card[_ngcontent-%COMP%] {\n  padding: 28px;\n}\n.energy-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin: 0 0 24px;\n  text-align: center;\n}\n.chart[_ngcontent-%COMP%] {\n  height: 260px;\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 14px;\n}\n.bar-item[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  gap: 10px;\n}\n.bar-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n  font-weight: 800;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 42px;\n  border-radius: 16px 16px 6px 6px;\n}\n.bar.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #22c55e,\n      #86efac);\n}\n.bar.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #2563eb,\n      #93c5fd);\n}\n.energy-summary[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  background: #f8fbff;\n  border: 2px solid #dbeafe;\n  border-radius: 18px;\n  padding: 14px;\n  display: flex;\n  justify-content: space-between;\n}\n.energy-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #334155;\n  font-weight: bold;\n}\n.energy-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.side-stats[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.mini-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  padding: 22px;\n}\n.mini-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin: 0;\n  font-size: 26px;\n}\n.mini-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 4px 0 0;\n  font-weight: bold;\n}\n.mini-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 18px;\n  display: grid;\n  place-items: center;\n  font-size: 30px;\n}\n.fire[_ngcontent-%COMP%] {\n  background: #ffedd5;\n}\n.clock[_ngcontent-%COMP%] {\n  background: #dbeafe;\n}\n.goals-card[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.goals-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin-top: 0;\n}\n.goal-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f8fbff;\n  border: 2px solid #dbeafe;\n  border-radius: 16px;\n  padding: 14px;\n  margin-bottom: 12px;\n}\n.goal-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #334155;\n  font-weight: bold;\n}\n.goal-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n@media (max-width: 1000px) {\n  .progress-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n  .goal-item[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 12px 0;\n  }\n  .goal-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .plus-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border: none;\n    border-radius: 50%;\n    background: #4CAF50;\n    color: #fff;\n    font-size: 24px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: 0.2s;\n  }\n  .plus-btn[_ngcontent-%COMP%]:hover {\n    transform: scale(1.08);\n  }\n  .plus-btn[_ngcontent-%COMP%]:active {\n    transform: scale(0.95);\n  }\n}\n.ai-card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #fff;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);\n}\n.ai-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.ai-icon[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #60a5fa);\n  color: #fff;\n}\n.ai-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1e3a8a;\n}\n.ai-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #64748b;\n}\n.ai-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  border-radius: 18px;\n  padding: 16px;\n  cursor: pointer;\n  color: white;\n  font-size: 17px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #3b82f6);\n  transition: 0.25s;\n}\n.ai-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);\n}\n.ai-btn[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.ai-result[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #eef6ff,\n      #f8fbff);\n  border: 2px solid #bfdbfe;\n  border-radius: 22px;\n  padding: 20px;\n}\n.ai-result[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #1e3a8a;\n}\n.cluster[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 18px;\n  border-radius: 30px;\n  background: #2563eb;\n  color: white;\n  font-weight: bold;\n  margin-bottom: 12px;\n}\n.ai-result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #334155;\n  line-height: 1.6;\n}\n.plus-btn[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: #fff;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #3b82f6);\n  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.35);\n  transition: all 0.25s ease;\n}\n.plus-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.08);\n  box-shadow: 0 14px 24px rgba(37, 99, 235, 0.45);\n}\n.plus-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.plus-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=progreso.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgresoComponent, [{
    type: Component,
    args: [{ selector: "app-progreso", standalone: true, imports: [RouterLink, CommonModule], template: '<div class="progress-page">\r\n\r\n  <header class="top-bar">\r\n    <button routerLink="/menu">\u2190 Volver</button>\r\n\r\n    <div>\r\n      <h1>Mi Progreso Saludable \u{1F4AA}</h1>\r\n      <p>Controla tu actividad, energ\xEDa y h\xE1bitos saludables.</p>\r\n    </div>\r\n\r\n    <span></span>\r\n  </header>\r\n\r\n  <section class="progress-layout">\r\n\r\n    <div class="activity-cards">\r\n\r\n      <div class="ring-card">\r\n        <div class="lock-icon">\u{1F512}</div>\r\n        <div class="ring green">\r\n          <span>75%</span>\r\n        </div>\r\n        <h3>S\xFAper Saltos</h3>\r\n        <p>75 / 100 saltos</p>\r\n      </div>\r\n\r\n      <div class="ring-card">\r\n        <div class="lock-icon">\u{1F512}</div>\r\n        <div class="ring blue">\r\n          <span>60%</span>\r\n        </div>\r\n        <h3>Caminata Ligera</h3>\r\n        <p>4,800 / 8,000 pasos</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class="energy-card">\r\n      <h2>Energ\xEDa semanal \u{1F4CA}</h2>\r\n\r\n      <div class="chart">\r\n        <div class="bar-item">\r\n          <div class="bar green" style="height: 45%;"></div>\r\n          <span>LUN</span>\r\n        </div>\r\n\r\n        <div class="bar-item">\r\n          <div class="bar green" style="height: 75%;"></div>\r\n          <span>MAR</span>\r\n        </div>\r\n\r\n        <div class="bar-item">\r\n          <div class="bar blue" style="height: 35%;"></div>\r\n          <span>MI\xC9</span>\r\n        </div>\r\n\r\n        <div class="bar-item">\r\n          <div class="bar green" style="height: 20%;"></div>\r\n          <span>JUE</span>\r\n        </div>\r\n\r\n        <div class="bar-item">\r\n          <div class="bar blue" style="height: 60%;"></div>\r\n          <span>VIE</span>\r\n        </div>\r\n\r\n        <div class="bar-item">\r\n          <div class="bar green" style="height: 30%;"></div>\r\n          <span>S\xC1B</span>\r\n        </div>\r\n\r\n        <div class="bar-item">\r\n          <div class="bar blue" style="height: 15%;"></div>\r\n          <span>DOM</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="energy-summary">\r\n        <span>Mayor actividad: Martes</span>\r\n        <strong>120 pts</strong>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="side-stats">\r\n\r\n      <div class="mini-card">\r\n        <span class="mini-icon fire">\u{1F525}</span>\r\n        <div>\r\n          <h3>250 kcal</h3>\r\n          <p>Calor\xEDas quemadas</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="mini-card">\r\n        <span class="mini-icon clock">\u{1F552}</span>\r\n        <div>\r\n          <h3>90 min</h3>\r\n          <p>Minutos activos</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="goals-card">\r\n        <h2>Metas saludables \u{1F3AF}</h2>\r\n\r\n        <div class="goal-item">\r\n        <span>\r\n        \u{1F4A7} Agua\r\n        </span>\r\n      <strong>\r\n        {{aguaActual}} / {{aguaMeta}} vasos\r\n      </strong>\r\n        <button class="plus-btn" (click)="sumarAgua()">\r\n          +\r\n        </button>\r\n        </div>\r\n\r\n        <div class="goal-item">\r\n        \r\n          <span>\u{1F966} Comida </span>\r\n          <strong>{{comidaActual}} / {{comidaMeta}} porciones</strong>\r\n    \r\n        <button class="plus-btn" (click)="sumarComida()">+</button>\r\n      </div>\r\n\r\n        <div class="goal-item">\r\n          \r\n            <span>\u{1F634} Sue\xF1o</span>\r\n            <strong>{{suenoActual}} / {{suenoMeta}} horas</strong>\r\n          \r\n\r\n          <button class="plus-btn" (click)="sumarSueno()">+</button>\r\n        </div>\r\n\r\n        <div class="ai-card">\r\n\r\n            <div class="ai-header">\r\n              <span class="ai-icon">\u{1F916}</span>\r\n\r\n              <div>\r\n                <h2>An\xE1lisis Inteligente</h2>\r\n                <p>Conoce tu patr\xF3n saludable del d\xEDa.</p>\r\n              </div>\r\n            </div>\r\n\r\n            <button\r\n              class="ai-btn"\r\n              (click)="analizarPatronIA()"\r\n              [disabled]="analizandoIA">\r\n\r\n              <span *ngIf="!analizandoIA">\r\n                \u2728 Analizar patr\xF3n IA\r\n              </span>\r\n\r\n              <span *ngIf="analizandoIA">\r\n                \u23F3 Analizando...\r\n              </span>\r\n\r\n            </button>\r\n\r\n          </div>\r\n\r\n          <div class="ai-result" *ngIf="mlResult">\r\n\r\n            <h3>\u{1F9E0} Resultado IA</h3>\r\n\r\n            <div class="cluster">\r\n                Cluster {{mlResult.cluster_id}}\r\n            </div>\r\n\r\n            <p>\r\n                {{mlResult.message}}\r\n            </p>\r\n\r\n          </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </section>\r\n\r\n</div>', styles: ["/* src/app/child/pages/progreso/progreso.component.scss */\n.progress-page {\n  min-height: 100vh;\n  padding: 30px;\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff,\n      #f0fdf4);\n  font-family: Arial, sans-serif;\n}\n.top-bar {\n  background: white;\n  border-radius: 26px;\n  padding: 22px 28px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.12);\n  margin-bottom: 30px;\n}\n.top-bar h1 {\n  color: #1e3a8a;\n  margin: 0;\n}\n.top-bar p {\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.top-bar button {\n  border: none;\n  background: #1e3a8a;\n  color: white;\n  padding: 12px 16px;\n  border-radius: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.top-bar span {\n  padding: 10px 14px;\n  border-radius: 14px;\n  font-weight: bold;\n}\n.progress-layout {\n  display: grid;\n  grid-template-columns: 1.1fr 1.6fr 1.2fr;\n  gap: 24px;\n  align-items: start;\n}\n.activity-cards {\n  display: grid;\n  gap: 20px;\n}\n.ring-card,\n.energy-card,\n.mini-card,\n.goals-card {\n  background: white;\n  border-radius: 26px;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);\n}\n.ring-card {\n  position: relative;\n  text-align: center;\n  padding: 28px 20px;\n}\n.ring-card h3 {\n  color: #1e3a8a;\n  margin: 14px 0 4px;\n}\n.ring-card p {\n  color: #64748b;\n  margin: 0;\n  font-weight: bold;\n}\n.lock-icon {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: #f1f5f9;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n}\n.ring {\n  width: 120px;\n  height: 120px;\n  margin: auto;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-size: 24px;\n  font-weight: 800;\n  background: conic-gradient(#22c55e 75%, #e2e8f0 0);\n}\n.ring span {\n  width: 84px;\n  height: 84px;\n  background: white;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  color: #22c55e;\n}\n.ring.blue {\n  background: conic-gradient(#2563eb 60%, #e2e8f0 0);\n}\n.ring.blue span {\n  color: #2563eb;\n}\n.energy-card {\n  padding: 28px;\n}\n.energy-card h2 {\n  color: #1e3a8a;\n  margin: 0 0 24px;\n  text-align: center;\n}\n.chart {\n  height: 260px;\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 14px;\n}\n.bar-item {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  gap: 10px;\n}\n.bar-item span {\n  color: #64748b;\n  font-size: 12px;\n  font-weight: 800;\n}\n.bar {\n  width: 100%;\n  max-width: 42px;\n  border-radius: 16px 16px 6px 6px;\n}\n.bar.green {\n  background:\n    linear-gradient(\n      180deg,\n      #22c55e,\n      #86efac);\n}\n.bar.blue {\n  background:\n    linear-gradient(\n      180deg,\n      #2563eb,\n      #93c5fd);\n}\n.energy-summary {\n  margin-top: 22px;\n  background: #f8fbff;\n  border: 2px solid #dbeafe;\n  border-radius: 18px;\n  padding: 14px;\n  display: flex;\n  justify-content: space-between;\n}\n.energy-summary span {\n  color: #334155;\n  font-weight: bold;\n}\n.energy-summary strong {\n  color: #2563eb;\n}\n.side-stats {\n  display: grid;\n  gap: 18px;\n}\n.mini-card {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  padding: 22px;\n}\n.mini-card h3 {\n  color: #1e3a8a;\n  margin: 0;\n  font-size: 26px;\n}\n.mini-card p {\n  color: #64748b;\n  margin: 4px 0 0;\n  font-weight: bold;\n}\n.mini-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 18px;\n  display: grid;\n  place-items: center;\n  font-size: 30px;\n}\n.fire {\n  background: #ffedd5;\n}\n.clock {\n  background: #dbeafe;\n}\n.goals-card {\n  padding: 24px;\n}\n.goals-card h2 {\n  color: #1e3a8a;\n  margin-top: 0;\n}\n.goal-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f8fbff;\n  border: 2px solid #dbeafe;\n  border-radius: 16px;\n  padding: 14px;\n  margin-bottom: 12px;\n}\n.goal-item span {\n  color: #334155;\n  font-weight: bold;\n}\n.goal-item strong {\n  color: #2563eb;\n}\n@media (max-width: 1000px) {\n  .progress-layout {\n    grid-template-columns: 1fr;\n  }\n  .top-bar {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n  .goal-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 12px 0;\n  }\n  .goal-item div {\n    display: flex;\n    flex-direction: column;\n  }\n  .plus-btn {\n    width: 40px;\n    height: 40px;\n    border: none;\n    border-radius: 50%;\n    background: #4CAF50;\n    color: #fff;\n    font-size: 24px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: 0.2s;\n  }\n  .plus-btn:hover {\n    transform: scale(1.08);\n  }\n  .plus-btn:active {\n    transform: scale(0.95);\n  }\n}\n.ai-card {\n  margin-top: 20px;\n  background: #fff;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);\n}\n.ai-header {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.ai-icon {\n  width: 55px;\n  height: 55px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #60a5fa);\n  color: #fff;\n}\n.ai-header h2 {\n  margin: 0;\n  color: #1e3a8a;\n}\n.ai-header p {\n  margin-top: 4px;\n  color: #64748b;\n}\n.ai-btn {\n  width: 100%;\n  border: none;\n  border-radius: 18px;\n  padding: 16px;\n  cursor: pointer;\n  color: white;\n  font-size: 17px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #3b82f6);\n  transition: 0.25s;\n}\n.ai-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);\n}\n.ai-btn:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.ai-result {\n  margin-top: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #eef6ff,\n      #f8fbff);\n  border: 2px solid #bfdbfe;\n  border-radius: 22px;\n  padding: 20px;\n}\n.ai-result h3 {\n  margin: 0 0 12px;\n  color: #1e3a8a;\n}\n.cluster {\n  display: inline-block;\n  padding: 8px 18px;\n  border-radius: 30px;\n  background: #2563eb;\n  color: white;\n  font-weight: bold;\n  margin-bottom: 12px;\n}\n.ai-result p {\n  margin: 0;\n  color: #334155;\n  line-height: 1.6;\n}\n.plus-btn {\n  width: 46px;\n  height: 46px;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: #fff;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #3b82f6);\n  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.35);\n  transition: all 0.25s ease;\n}\n.plus-btn:hover {\n  transform: translateY(-3px) scale(1.08);\n  box-shadow: 0 14px 24px rgba(37, 99, 235, 0.45);\n}\n.plus-btn:active {\n  transform: scale(0.92);\n}\n.plus-btn:focus {\n  outline: none;\n}\n/*# sourceMappingURL=progreso.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AuthService }, { type: HabitService }, { type: MlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgresoComponent, { className: "ProgresoComponent", filePath: "src/app/child/pages/progreso/progreso.component.ts", lineNumber: 15 });
})();
export {
  ProgresoComponent
};
//# sourceMappingURL=chunk-HPF5SIBW.js.map

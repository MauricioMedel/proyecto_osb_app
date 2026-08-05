import {
  AuthService,
  environment
} from "./chunk-3T3BQCC5.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  HttpHeaders,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4YERQOE2.js";

// src/app/child/pages/jugar/jugar.component.ts
function JugarComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, " Cargando mapa de niveles... ");
    \u0275\u0275elementEnd();
  }
}
function JugarComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function JugarComponent_section_13_div_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function JugarComponent_section_13_div_15_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(level_r3.icon);
  }
}
function JugarComponent_section_13_div_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F512}");
    \u0275\u0275elementEnd();
  }
}
function JugarComponent_section_13_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function JugarComponent_section_13_div_15_Template_div_click_0_listener() {
      const level_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openLevel(level_r3));
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275template(2, JugarComponent_section_13_div_15_span_2_Template, 2, 0, "span", 23)(3, JugarComponent_section_13_div_15_span_3_Template, 2, 1, "span", 23)(4, JugarComponent_section_13_div_15_span_4_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r0.getNodeTop(i_r4), "px")("left", ctx_r0.getNodeLeft(i_r4), "%");
    \u0275\u0275classProp("completed", level_r3.status === "completed")("unlocked", level_r3.status === "unlocked")("locked", level_r3.status === "locked");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", level_r3.status === "completed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", level_r3.status === "unlocked");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", level_r3.status === "locked");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(level_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", level_r3.points, " pts");
  }
}
function JugarComponent_section_13_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.feedbackMessage, " ");
  }
}
function JugarComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "div", 12)(2, "h2");
    \u0275\u0275text(3, "Mapa de niveles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Completa cada nivel para desbloquear el siguiente.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "div", 14)(8, "div", 15);
    \u0275\u0275text(9, "\u2601\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275text(11, "\u2601\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17);
    \u0275\u0275text(13, "\u2600\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "div", 18);
    \u0275\u0275template(15, JugarComponent_section_13_div_15_Template, 10, 15, "div", 19)(16, JugarComponent_section_13_div_16_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("height", ctx_r0.levels.length * 140 + 200, "px");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r0.levels);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.feedbackMessage && !ctx_r0.selectedLevel);
  }
}
function JugarComponent_div_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h3");
    \u0275\u0275text(2, " \u{1F916} Generando preguntas... ");
    \u0275\u0275elementEnd()();
  }
}
function JugarComponent_div_14_div_11_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function JugarComponent_div_14_div_11_button_6_Template_button_click_0_listener() {
      const option_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectAnswer(option_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r0.selectedAnswer === option_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r7, " ");
  }
}
function JugarComponent_div_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275template(6, JugarComponent_div_14_div_11_button_6_Template, 2, 3, "button", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Pregunta ", ctx_r0.currentQuestionIndex + 1, " de ", ctx_r0.quiz.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentQuestion.question, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.currentQuestion.options);
  }
}
function JugarComponent_div_14_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "h2");
    \u0275\u0275text(2, " \u{1F389} \xA1Quiz completado! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, " Resultado Final ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 38);
    \u0275\u0275listener("click", function JugarComponent_div_14_div_12_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeChallenge());
    });
    \u0275\u0275text(11, " Volver al mapa ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" Respuestas correctas: ", ctx_r0.score, " de ", ctx_r0.quiz.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Porcentaje: ", \u0275\u0275pipeBind2(9, 3, ctx_r0.score / ctx_r0.quiz.length * 100, "1.0-0"), "% ");
  }
}
function JugarComponent_div_14_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.feedbackMessage, " ");
  }
}
function JugarComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "button", 28);
    \u0275\u0275listener("click", function JugarComponent_div_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeChallenge());
    });
    \u0275\u0275text(3, " \u2715 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, JugarComponent_div_14_div_10_Template, 3, 0, "div", 30)(11, JugarComponent_div_14_div_11_Template, 7, 4, "div", 30)(12, JugarComponent_div_14_div_12_Template, 12, 6, "div", 31)(13, JugarComponent_div_14_div_13_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedLevel.icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedLevel.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedLevel.description, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingQuiz);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingQuiz && ctx_r0.currentQuestion && !ctx_r0.quizFinished);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.quizFinished);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.feedbackMessage && !ctx_r0.quizFinished);
  }
}
function JugarComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42);
    \u0275\u0275text(3, " \u2728 \u{1F389} \u2728 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7, "\xA1Nuevo Trofeo!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 44);
    \u0275\u0275listener("click", function JugarComponent_div_15_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeTrophyModal());
    });
    \u0275\u0275text(13, " Continuar aventura \u{1F680} ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.newTrophy.icon, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.newTrophy.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.newTrophy.description);
  }
}
var JugarComponent = class _JugarComponent {
  constructor(router, http, auth) {
    this.router = router;
    this.http = http;
    this.auth = auth;
    this.childName = "Campe\xF3n";
    this.childId = "";
    this.loading = true;
    this.loadingQuiz = false;
    this.errorMessage = "";
    this.feedbackMessage = "";
    this.selectedLevel = null;
    this.selectedAnswer = "";
    this.isAnswerRevealed = false;
    this.quiz = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizFinished = false;
    this.passedLevel = false;
    this.selectedTopic = "nutrition";
    this.showTrophyModal = false;
    this.newTrophy = {
      title: "",
      description: "",
      icon: ""
    };
    this.levels = [];
  }
  ngOnInit() {
    const user = this.auth.getCurrentUser();
    this.childName = user?.username || "Campe\xF3n";
    this.childId = user?.childId || "";
    this.loadLevels();
  }
  getHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${this.auth.getToken()}`
    });
  }
  loadLevels() {
    if (!this.childId) {
      this.setDefaultLevels();
      this.loading = false;
      return;
    }
    this.http.get(`${environment.apiUrl}/children/${this.childId}/challenges`, { headers: this.getHeaders() }).subscribe({
      next: (res) => {
        const apiChallenges = res.data || [];
        if (apiChallenges.length === 0) {
          this.setDefaultLevels();
        } else {
          this.levels = apiChallenges.map((item, index) => ({
            id: item.child_challenge_id,
            levelNumber: index + 1,
            title: item.title || `Nivel ${index + 1}`,
            description: item.description || "Completa este reto saludable.",
            status: this.getLevelStatus(item.status, index),
            points: item.points_reward || this.calculatePoints(index + 1),
            icon: this.getLevelIcon(index)
          }));
        }
        this.loading = false;
      },
      error: () => {
        this.setDefaultLevels();
        this.loading = false;
      }
    });
  }
  getLevelStatus(status, index) {
    if (status === "completed")
      return "completed";
    if (status === "in_progress" || index === 0)
      return "unlocked";
    return "locked";
  }
  getLevelIcon(index) {
    const icons = ["\u{1F966}", "\u{1F3C3}", "\u{1F4A7}", "\u{1F34E}", "\u{1F6B4}", "\u2B50", "\u{1F951}", "\u{1F938}", "\u{1F955}", "\u{1F3C6}"];
    return icons[index % icons.length];
  }
  calculatePoints(levelNumber) {
    if (levelNumber <= 10)
      return 50;
    if (levelNumber <= 20)
      return 75;
    if (levelNumber <= 30)
      return 100;
    if (levelNumber <= 40)
      return 150;
    return 200;
  }
  setDefaultLevels() {
    const maxUnlockedLevel = parseInt(localStorage.getItem(`child_max_level_${this.childId}`) || "1", 10);
    this.levels = Array.from({ length: 50 }, (_, i) => {
      const levelNum = i + 1;
      let currentStatus = "locked";
      if (levelNum < maxUnlockedLevel) {
        currentStatus = "completed";
      } else if (levelNum === maxUnlockedLevel) {
        currentStatus = "unlocked";
      }
      return {
        id: `nivel-${levelNum}`,
        levelNumber: levelNum,
        title: `Nivel ${levelNum}`,
        description: this.getDynamicDescription(levelNum),
        status: currentStatus,
        points: this.calculatePoints(levelNum),
        icon: this.getLevelIcon(i)
      };
    });
  }
  getDynamicDescription(level) {
    if (level <= 10)
      return "Conceptos b\xE1sicos: alimentos y agua.";
    if (level <= 20)
      return "Descubre los grupos alimenticios y la energ\xEDa.";
    if (level <= 30)
      return "Aprende sobre nutrientes y calor\xEDas.";
    if (level <= 40)
      return "Toma decisiones saludables y mejora tus h\xE1bitos.";
    return "Desaf\xEDos expertos. \xA1Demuestra todo lo que sabes!";
  }
  get currentQuestion() {
    if (!this.quiz.length)
      return null;
    return this.quiz[this.currentQuestionIndex];
  }
  generateQuiz() {
    if (!this.childId || !this.selectedLevel)
      return;
    this.loadingQuiz = true;
    this.http.post(`${environment.apiUrl}/ml/children/${this.childId}/generate-quiz`, {
      topic: this.selectedTopic,
      level: this.selectedLevel.levelNumber
    }, { headers: this.getHeaders() }).subscribe({
      next: (res) => {
        const quizData = res.data?.quiz || res.data;
        this.quiz = quizData.questions || [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.quizFinished = false;
        this.passedLevel = false;
        this.loadingQuiz = false;
      },
      error: (err) => {
        console.error(err);
        this.loadingQuiz = false;
        this.feedbackMessage = "Error conectando con la aventura. Intenta de nuevo.";
      }
    });
  }
  openLevel(level) {
    if (level.status === "locked") {
      this.feedbackMessage = "\u{1F512} Primero completa el nivel anterior para desbloquear este.";
      setTimeout(() => this.feedbackMessage = "", 3e3);
      return;
    }
    this.selectedLevel = level;
    this.selectedAnswer = "";
    this.isAnswerRevealed = false;
    this.feedbackMessage = "";
    this.generateQuiz();
  }
  selectAnswer(option) {
    if (!this.currentQuestion || this.isAnswerRevealed)
      return;
    this.selectedAnswer = option;
    this.isAnswerRevealed = true;
    if (option === this.currentQuestion.answer) {
      this.score++;
    }
    setTimeout(() => {
      this.isAnswerRevealed = false;
      this.selectedAnswer = "";
      if (this.currentQuestionIndex < this.quiz.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.finishQuiz();
      }
    }, 1500);
  }
  finishQuiz() {
    this.quizFinished = true;
    const percentage = this.score / this.quiz.length * 100;
    this.passedLevel = percentage >= 80;
    let xpEarned = 0;
    if (this.passedLevel) {
      xpEarned = this.selectedLevel?.points || 50;
      if (percentage === 100)
        xpEarned += Math.round(xpEarned * 0.2);
      this.feedbackMessage = `\u{1F389} \xA1Nivel Superado! Ganaste ${xpEarned} XP`;
    } else {
      xpEarned = 10;
      this.feedbackMessage = `\u{1F4AA} Estuviste cerca. Necesitas al menos 4 correctas. Obtuviste ${this.score}/5.`;
    }
    this.http.post(`${environment.apiUrl}/ml/children/${this.childId}/quiz-result`, {
      topic: this.selectedTopic,
      // <--- FALTABA ESTA LÍNEA
      level: this.selectedLevel?.levelNumber,
      score: this.score,
      totalQuestions: this.quiz.length,
      percentage,
      xpEarned,
      passed: this.passedLevel
    }, { headers: this.getHeaders() }).subscribe();
    if (this.passedLevel) {
      this.completeSelectedLevel();
    }
  }
  completeSelectedLevel() {
    if (!this.selectedLevel)
      return;
    const index = this.levels.findIndex((l) => l.id === this.selectedLevel?.id);
    let maxLevelToSave = this.selectedLevel.levelNumber;
    if (index !== -1) {
      this.levels[index].status = "completed";
      if (this.levels[index + 1]) {
        this.levels[index + 1].status = "unlocked";
        maxLevelToSave = this.levels[index + 1].levelNumber;
      }
    }
    localStorage.setItem(`child_max_level_${this.childId}`, maxLevelToSave.toString());
    this.checkAndUnlockTrophies(this.selectedLevel.levelNumber);
  }
  checkAndUnlockTrophies(completedLevel) {
    let trophyConfig = null;
    if (completedLevel === 10) {
      trophyConfig = { id: "trofeo-10", title: "Explorador Saludable", description: "\xA1Superaste los primeros 10 niveles!", icon: "\u{1F31F}" };
    } else if (completedLevel === 25) {
      trophyConfig = { id: "trofeo-25", title: "H\xE9roe de la Nutrici\xF3n", description: "\xA1Llegaste a la mitad del camino!", icon: "\u{1F9B8}" };
    } else if (completedLevel === 50) {
      trophyConfig = { id: "trofeo-50", title: "Maestro de H\xE1bitos", description: "\xA1Has completado toda la aventura!", icon: "\u{1F451}" };
    }
    if (trophyConfig) {
      this.unlockTrophy(trophyConfig);
    }
  }
  unlockTrophy(trophy) {
    const savedTrophies = JSON.parse(localStorage.getItem(`child_trophies_${this.childId}`) || "[]");
    const alreadyExists = savedTrophies.some((item) => item.id === trophy.id);
    if (!alreadyExists) {
      savedTrophies.push(__spreadProps(__spreadValues({}, trophy), { unlockedAt: (/* @__PURE__ */ new Date()).toISOString() }));
      localStorage.setItem(`child_trophies_${this.childId}`, JSON.stringify(savedTrophies));
      this.newTrophy = { title: trophy.title, description: trophy.description, icon: trophy.icon };
      this.showTrophyModal = true;
    }
  }
  closeChallenge() {
    this.selectedLevel = null;
    this.feedbackMessage = "";
    this.selectedAnswer = "";
    this.isAnswerRevealed = false;
    this.quiz = [];
    this.currentQuestionIndex = 0;
    this.quizFinished = false;
    this.passedLevel = false;
  }
  closeTrophyModal() {
    this.showTrophyModal = false;
  }
  // Espaciado vertical fijo en píxeles (no en porcentajes)
  getNodeTop(index) {
    const startOffset = 80;
    const spacing = 140;
    return startOffset + index * spacing;
  }
  // Zig-Zag en porcentajes (horizontal)
  getNodeLeft(index) {
    const row = Math.floor(index / 3);
    const isEvenRow = row % 2 === 0;
    const posInRow = index % 3;
    return isEvenRow ? 20 + posInRow * 30 : 80 - posInRow * 30;
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function JugarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JugarComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JugarComponent, selectors: [["app-jugar"]], decls: 16, vars: 6, consts: [[1, "game-page"], [1, "game-header"], ["routerLink", "/menu"], [1, "points-box"], ["class", "loading-card", 4, "ngIf"], ["class", "error-card", 4, "ngIf"], ["class", "map-card", 4, "ngIf"], ["class", "challenge-modal", 4, "ngIf"], ["class", "trophy-overlay", 4, "ngIf"], [1, "loading-card"], [1, "error-card"], [1, "map-card"], [1, "map-title-fixed"], [1, "scroll-container"], [1, "map-background"], [1, "cloud", "cloud-one"], [1, "cloud", "cloud-two"], [1, "sun"], [1, "path-line"], ["class", "level-node", 3, "completed", "unlocked", "locked", "top", "left", "click", 4, "ngFor", "ngForOf"], ["class", "feedback", 4, "ngIf"], [1, "level-node", 3, "click"], [1, "node-circle"], [4, "ngIf"], [1, "node-label"], [1, "feedback"], [1, "challenge-modal"], [1, "challenge-card"], [1, "close-btn", 3, "click"], [1, "level-badge"], ["class", "question-box", 4, "ngIf"], ["class", "question-box result-box", 4, "ngIf"], ["class", "modal-feedback", 4, "ngIf"], [1, "question-box"], [1, "answers-grid"], ["class", "answer-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "answer-card", 3, "click"], [1, "question-box", "result-box"], [1, "next-btn", 3, "click"], [1, "modal-feedback"], [1, "trophy-overlay"], [1, "trophy-modal"], [1, "sparkles"], [1, "trophy-icon"], [1, "trophy-btn", 3, "click"]], template: function JugarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
        \u0275\u0275text(3, "\u2190 Volver");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div")(5, "h1");
        \u0275\u0275text(6, "\u{1F3AE} Mundo Saludable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3);
        \u0275\u0275text(10, " \u2B50 Modo aventura ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, JugarComponent_div_11_Template, 2, 0, "div", 4)(12, JugarComponent_div_12_Template, 2, 1, "div", 5)(13, JugarComponent_section_13_Template, 17, 4, "section", 6)(14, JugarComponent_div_14_Template, 14, 7, "div", 7)(15, JugarComponent_div_15_Template, 14, 3, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("Hola ", ctx.childName, ", desbloquea niveles y gana recompensas.");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedLevel);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showTrophyModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.game-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 28px;\n  background:\n    linear-gradient(\n      180deg,\n      #bfdbfe,\n      #eff6ff);\n  font-family: Arial, sans-serif;\n}\n.game-header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 28px;\n  padding: 22px 28px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.16);\n  margin-bottom: 28px;\n}\n.game-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1e3a8a;\n}\n.game-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #64748b;\n}\n.game-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: #1e3a8a;\n  color: white;\n  padding: 12px 16px;\n  border-radius: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.points-box[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n  padding: 12px 18px;\n  border-radius: 18px;\n  font-weight: bold;\n}\n.loading-card[_ngcontent-%COMP%], \n.error-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 20px;\n  font-weight: bold;\n}\n.loading-card[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.error-card[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.map-card[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 34px;\n  background:\n    linear-gradient(\n      to bottom,\n      #d4f0ff,\n      #e8f9ed);\n  border: 4px solid #fff;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.15);\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.map-title-fixed[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 18px;\n  background: rgba(255, 255, 255, 0.95);\n  border-bottom: 2px solid #e2e8f0;\n  z-index: 10;\n}\n.map-title-fixed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1e3a8a;\n}\n.map-title-fixed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #64748b;\n}\n.scroll-container[_ngcontent-%COMP%] {\n  height: 65vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n}\n.map-background[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(255, 255, 255, 0.4) 0 8%,\n      transparent 9%),\n    linear-gradient(\n      180deg,\n      #dbeafe 0%,\n      #bbf7d0 100%);\n}\n.sun[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  right: 50px;\n  font-size: 64px;\n}\n.cloud[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 58px;\n  opacity: 0.75;\n}\n.cloud-one[_ngcontent-%COMP%] {\n  top: 70px;\n  left: 80px;\n}\n.cloud-two[_ngcontent-%COMP%] {\n  top: 230px;\n  right: 110px;\n}\n.path-line[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 78%;\n  height: 12px;\n  left: 10%;\n  top: 54%;\n  transform: rotate(-28deg);\n  border-radius: 999px;\n  background:\n    repeating-linear-gradient(\n      90deg,\n      #2563eb,\n      #2563eb 18px,\n      #ffffff 18px,\n      #ffffff 34px);\n  opacity: 0.8;\n  display: none;\n}\n.level-node[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  cursor: pointer;\n  z-index: 2;\n  transition: transform 0.2s ease;\n}\n.level-node[_ngcontent-%COMP%]:hover {\n  transform: translate(-50%, -50%) scale(1.05);\n}\n.node-circle[_ngcontent-%COMP%] {\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-size: 38px;\n  background: white;\n  border: 7px solid #94a3b8;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.22);\n  transition: transform 0.2s ease;\n}\n.level-node[_ngcontent-%COMP%]:hover   .node-circle[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.completed[_ngcontent-%COMP%]   .node-circle[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border-color: #22c55e;\n}\n.unlocked[_ngcontent-%COMP%]   .node-circle[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  border-color: #2563eb;\n  animation: _ngcontent-%COMP%_pulse 1.3s infinite;\n}\n.locked[_ngcontent-%COMP%]   .node-circle[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border-color: #94a3b8;\n  filter: grayscale(1);\n}\n.node-label[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background: white;\n  border-radius: 16px;\n  padding: 8px 12px;\n  min-width: 90px;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.14);\n  position: relative;\n  z-index: 3;\n}\n.node-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #1e3a8a;\n  font-size: 14px;\n}\n.node-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: bold;\n}\n.feedback[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 28px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #fef3c7;\n  color: #92400e;\n  padding: 14px 20px;\n  border-radius: 18px;\n  font-weight: bold;\n  z-index: 100;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.challenge-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  display: grid;\n  place-items: center;\n  z-index: 1000;\n  backdrop-filter: blur(4px);\n}\n.challenge-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 560px;\n  max-width: 90%;\n  background: white;\n  border-radius: 34px;\n  padding: 34px;\n  text-align: center;\n  box-shadow: 0 22px 50px rgba(15, 23, 42, 0.25);\n}\n.challenge-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  font-size: 32px;\n  margin: 10px 0;\n}\n.challenge-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  border: none;\n  background: #fee2e2;\n  color: #dc2626;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #f87171;\n  color: white;\n}\n.level-badge[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #22c55e);\n  display: grid;\n  place-items: center;\n  font-size: 52px;\n}\n.question-box[_ngcontent-%COMP%] {\n  background: #f8fbff;\n  border-radius: 24px;\n  padding: 22px;\n  margin-top: 24px;\n}\n.question-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin-top: 0;\n}\n.answers-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 14px;\n}\n.answer-card[_ngcontent-%COMP%] {\n  border: 3px solid #dbeafe;\n  background: white;\n  border-radius: 20px;\n  padding: 18px;\n  font-weight: bold;\n  color: #334155;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.answer-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 42px;\n  margin-bottom: 8px;\n}\n.answer-card[_ngcontent-%COMP%]:hover {\n  border-color: #93c5fd;\n  background: #eff6ff;\n}\n.answer-card.selected[_ngcontent-%COMP%] {\n  border-color: #22c55e;\n  background: #f0fdf4;\n  transform: scale(0.98);\n}\n.modal-feedback[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  background: #dcfce7;\n  color: #15803d;\n  padding: 12px;\n  border-radius: 16px;\n  font-weight: bold;\n}\n.next-btn[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  border: none;\n  background: #2563eb;\n  color: white;\n  padding: 14px 22px;\n  border-radius: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.next-btn[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.trophy-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.75);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  backdrop-filter: blur(6px);\n}\n.trophy-modal[_ngcontent-%COMP%] {\n  width: 420px;\n  max-width: 90%;\n  background: white;\n  border-radius: 30px;\n  padding: 40px;\n  text-align: center;\n  box-shadow: 0 24px 55px rgba(0, 0, 0, 0.22);\n  animation: _ngcontent-%COMP%_trophyPop 0.4s ease;\n}\n.trophy-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2563eb;\n  margin: 10px 0 0;\n}\n.trophy-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  font-size: 28px;\n  margin: 12px 0;\n}\n.trophy-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 25px;\n}\n.sparkles[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 15px;\n}\n.trophy-icon[_ngcontent-%COMP%] {\n  font-size: 90px;\n  animation: _ngcontent-%COMP%_bounce 1s infinite;\n}\n.trophy-btn[_ngcontent-%COMP%] {\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  padding: 14px 24px;\n  border-radius: 16px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.trophy-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.08);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_trophyPop {\n  from {\n    transform: scale(0.7);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@media (max-width: 900px) {\n  .game-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .answers-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .scroll-container[_ngcontent-%COMP%] {\n    height: 70vh;\n  }\n}\n/*# sourceMappingURL=jugar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JugarComponent, [{
    type: Component,
    args: [{ selector: "app-jugar", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="game-page">\r
\r
  <header class="game-header">\r
    <button routerLink="/menu">\u2190 Volver</button>\r
\r
    <div>\r
      <h1>\u{1F3AE} Mundo Saludable</h1>\r
      <p>Hola {{ childName }}, desbloquea niveles y gana recompensas.</p>\r
    </div>\r
\r
    <div class="points-box">\r
      \u2B50 Modo aventura\r
    </div>\r
  </header>\r
\r
  <div *ngIf="loading" class="loading-card">\r
    Cargando mapa de niveles...\r
  </div>\r
\r
  <div *ngIf="errorMessage" class="error-card">\r
    {{ errorMessage }}\r
  </div>\r
\r
  <section class="map-card" *ngIf="!loading">\r
\r
    <!-- T\xEDtulo fijo arriba (opcional, para que no se mueva al hacer scroll) -->\r
    <div class="map-title-fixed">\r
      <h2>Mapa de niveles</h2>\r
      <p>Completa cada nivel para desbloquear el siguiente.</p>\r
    </div>\r
\r
    <!-- Contenedor que har\xE1 el scroll -->\r
    <div class="scroll-container">\r
      \r
      <!-- Fondo din\xE1mico: Multiplicamos cada nivel por 140px de separaci\xF3n + 200px de margen inferior -->\r
      <div class="map-background" [style.height.px]="(levels.length * 140) + 200">\r
        \r
        <div class="cloud cloud-one">\u2601\uFE0F</div>\r
        <div class="cloud cloud-two">\u2601\uFE0F</div>\r
        <div class="sun">\u2600\uFE0F</div>\r
\r
        <div class="path-line"></div>\r
\r
        <div\r
          class="level-node"\r
          *ngFor="let level of levels; let i = index"\r
          [class.completed]="level.status === 'completed'"\r
          [class.unlocked]="level.status === 'unlocked'"\r
          [class.locked]="level.status === 'locked'"\r
          [style.top.px]="getNodeTop(i)"\r
          [style.left.%]="getNodeLeft(i)"\r
          (click)="openLevel(level)"\r
        >\r
          <div class="node-circle">\r
            <span *ngIf="level.status === 'completed'">\u2705</span>\r
            <span *ngIf="level.status === 'unlocked'">{{ level.icon }}</span>\r
            <span *ngIf="level.status === 'locked'">\u{1F512}</span>\r
          </div>\r
\r
          <div class="node-label">\r
            <strong>{{ level.title }}</strong>\r
            <small>{{ level.points }} pts</small>\r
          </div>\r
        </div>\r
\r
        <div class="feedback" *ngIf="feedbackMessage && !selectedLevel">\r
          {{ feedbackMessage }}\r
        </div>\r
\r
      </div>\r
    </div>\r
  </section>\r
\r
  <div class="challenge-modal" *ngIf="selectedLevel">\r
\r
  <div class="challenge-card">\r
\r
    <button\r
      class="close-btn"\r
      (click)="closeChallenge()"\r
    >\r
      \u2715\r
    </button>\r
\r
    <div class="level-badge">\r
      {{ selectedLevel.icon }}\r
    </div>\r
\r
    <h2>\r
      {{ selectedLevel.title }}\r
    </h2>\r
\r
    <p>\r
      {{ selectedLevel.description }}\r
    </p>\r
\r
    <div\r
      *ngIf="loadingQuiz"\r
      class="question-box"\r
    >\r
      <h3>\r
        \u{1F916} Generando preguntas...\r
      </h3>\r
    </div>\r
\r
    <div\r
      *ngIf="!loadingQuiz && currentQuestion && !quizFinished"\r
      class="question-box"\r
    >\r
\r
      <h3>\r
        Pregunta\r
        {{ currentQuestionIndex + 1 }}\r
        de\r
        {{ quiz.length }}\r
      </h3>\r
\r
      <h2>\r
        {{ currentQuestion.question }}\r
      </h2>\r
\r
      <div class="answers-grid">\r
\r
        <button\r
          class="answer-card"\r
          *ngFor="let option of currentQuestion.options"\r
          [class.selected]="selectedAnswer === option"\r
          (click)="selectAnswer(option)"\r
        >\r
          {{ option }}\r
        </button>\r
\r
      </div>\r
\r
    </div>\r
\r
    <div\r
      *ngIf="quizFinished"\r
      class="question-box result-box"\r
    >\r
\r
      <h2>\r
        \u{1F389} \xA1Quiz completado!\r
      </h2>\r
\r
      <h3>\r
        Resultado Final\r
      </h3>\r
\r
      <p>\r
        Respuestas correctas:\r
        {{ score }}\r
        de\r
        {{ quiz.length }}\r
      </p>\r
\r
      <p>\r
        Porcentaje:\r
        {{ (score / quiz.length) * 100 | number:'1.0-0' }}%\r
      </p>\r
\r
      <button\r
        class="next-btn"\r
        (click)="closeChallenge()"\r
      >\r
        Volver al mapa\r
      </button>\r
\r
    </div>\r
\r
    <div\r
      class="modal-feedback"\r
      *ngIf="feedbackMessage && !quizFinished"\r
    >\r
      {{ feedbackMessage }}\r
    </div>\r
\r
  </div>\r
\r
</div>\r
\r
  <div class="trophy-overlay" *ngIf="showTrophyModal">\r
    <div class="trophy-modal">\r
\r
      <div class="sparkles">\r
        \u2728 \u{1F389} \u2728\r
      </div>\r
\r
      <div class="trophy-icon">\r
        {{ newTrophy.icon }}\r
      </div>\r
\r
      <h2>\xA1Nuevo Trofeo!</h2>\r
\r
      <h3>{{ newTrophy.title }}</h3>\r
\r
      <p>{{ newTrophy.description }}</p>\r
\r
      <button class="trophy-btn" (click)="closeTrophyModal()">\r
        Continuar aventura \u{1F680}\r
      </button>\r
\r
    </div>\r
  </div>\r
\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/child/pages/jugar/jugar.component.scss */\n.game-page {\n  min-height: 100vh;\n  padding: 28px;\n  background:\n    linear-gradient(\n      180deg,\n      #bfdbfe,\n      #eff6ff);\n  font-family: Arial, sans-serif;\n}\n.game-header {\n  background: #ffffff;\n  border-radius: 28px;\n  padding: 22px 28px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.16);\n  margin-bottom: 28px;\n}\n.game-header h1 {\n  margin: 0;\n  color: #1e3a8a;\n}\n.game-header p {\n  margin: 6px 0 0;\n  color: #64748b;\n}\n.game-header button {\n  border: none;\n  background: #1e3a8a;\n  color: white;\n  padding: 12px 16px;\n  border-radius: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.points-box {\n  background: #fef3c7;\n  color: #92400e;\n  padding: 12px 18px;\n  border-radius: 18px;\n  font-weight: bold;\n}\n.loading-card,\n.error-card {\n  background: white;\n  padding: 20px;\n  border-radius: 20px;\n  font-weight: bold;\n}\n.loading-card {\n  color: #2563eb;\n}\n.error-card {\n  color: #dc2626;\n}\n.map-card {\n  width: 100%;\n  border-radius: 34px;\n  background:\n    linear-gradient(\n      to bottom,\n      #d4f0ff,\n      #e8f9ed);\n  border: 4px solid #fff;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.15);\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.map-title-fixed {\n  text-align: center;\n  padding: 18px;\n  background: rgba(255, 255, 255, 0.95);\n  border-bottom: 2px solid #e2e8f0;\n  z-index: 10;\n}\n.map-title-fixed h2 {\n  margin: 0;\n  color: #1e3a8a;\n}\n.map-title-fixed p {\n  margin: 6px 0 0;\n  color: #64748b;\n}\n.scroll-container {\n  height: 65vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n}\n.map-background {\n  position: relative;\n  width: 100%;\n  background:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(255, 255, 255, 0.4) 0 8%,\n      transparent 9%),\n    linear-gradient(\n      180deg,\n      #dbeafe 0%,\n      #bbf7d0 100%);\n}\n.sun {\n  position: absolute;\n  top: 30px;\n  right: 50px;\n  font-size: 64px;\n}\n.cloud {\n  position: absolute;\n  font-size: 58px;\n  opacity: 0.75;\n}\n.cloud-one {\n  top: 70px;\n  left: 80px;\n}\n.cloud-two {\n  top: 230px;\n  right: 110px;\n}\n.path-line {\n  position: absolute;\n  width: 78%;\n  height: 12px;\n  left: 10%;\n  top: 54%;\n  transform: rotate(-28deg);\n  border-radius: 999px;\n  background:\n    repeating-linear-gradient(\n      90deg,\n      #2563eb,\n      #2563eb 18px,\n      #ffffff 18px,\n      #ffffff 34px);\n  opacity: 0.8;\n  display: none;\n}\n.level-node {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  cursor: pointer;\n  z-index: 2;\n  transition: transform 0.2s ease;\n}\n.level-node:hover {\n  transform: translate(-50%, -50%) scale(1.05);\n}\n.node-circle {\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-size: 38px;\n  background: white;\n  border: 7px solid #94a3b8;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.22);\n  transition: transform 0.2s ease;\n}\n.level-node:hover .node-circle {\n  transform: scale(1.08);\n}\n.completed .node-circle {\n  background: #dcfce7;\n  border-color: #22c55e;\n}\n.unlocked .node-circle {\n  background: #dbeafe;\n  border-color: #2563eb;\n  animation: pulse 1.3s infinite;\n}\n.locked .node-circle {\n  background: #f1f5f9;\n  border-color: #94a3b8;\n  filter: grayscale(1);\n}\n.node-label {\n  margin-top: 10px;\n  background: white;\n  border-radius: 16px;\n  padding: 8px 12px;\n  min-width: 90px;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.14);\n  position: relative;\n  z-index: 3;\n}\n.node-label strong {\n  display: block;\n  color: #1e3a8a;\n  font-size: 14px;\n}\n.node-label small {\n  color: #64748b;\n  font-weight: bold;\n}\n.feedback {\n  position: fixed;\n  bottom: 28px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #fef3c7;\n  color: #92400e;\n  padding: 14px 20px;\n  border-radius: 18px;\n  font-weight: bold;\n  z-index: 100;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.challenge-modal {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  display: grid;\n  place-items: center;\n  z-index: 1000;\n  backdrop-filter: blur(4px);\n}\n.challenge-card {\n  position: relative;\n  width: 560px;\n  max-width: 90%;\n  background: white;\n  border-radius: 34px;\n  padding: 34px;\n  text-align: center;\n  box-shadow: 0 22px 50px rgba(15, 23, 42, 0.25);\n}\n.challenge-card h2 {\n  color: #1e3a8a;\n  font-size: 32px;\n  margin: 10px 0;\n}\n.challenge-card p {\n  color: #64748b;\n}\n.close-btn {\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  border: none;\n  background: #fee2e2;\n  color: #dc2626;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.close-btn:hover {\n  background: #f87171;\n  color: white;\n}\n.level-badge {\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #22c55e);\n  display: grid;\n  place-items: center;\n  font-size: 52px;\n}\n.question-box {\n  background: #f8fbff;\n  border-radius: 24px;\n  padding: 22px;\n  margin-top: 24px;\n}\n.question-box h3 {\n  color: #1e3a8a;\n  margin-top: 0;\n}\n.answers-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 14px;\n}\n.answer-card {\n  border: 3px solid #dbeafe;\n  background: white;\n  border-radius: 20px;\n  padding: 18px;\n  font-weight: bold;\n  color: #334155;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.answer-card span {\n  display: block;\n  font-size: 42px;\n  margin-bottom: 8px;\n}\n.answer-card:hover {\n  border-color: #93c5fd;\n  background: #eff6ff;\n}\n.answer-card.selected {\n  border-color: #22c55e;\n  background: #f0fdf4;\n  transform: scale(0.98);\n}\n.modal-feedback {\n  margin-top: 18px;\n  background: #dcfce7;\n  color: #15803d;\n  padding: 12px;\n  border-radius: 16px;\n  font-weight: bold;\n}\n.next-btn {\n  margin-top: 20px;\n  border: none;\n  background: #2563eb;\n  color: white;\n  padding: 14px 22px;\n  border-radius: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.next-btn:hover {\n  background: #1d4ed8;\n}\n.trophy-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.75);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  backdrop-filter: blur(6px);\n}\n.trophy-modal {\n  width: 420px;\n  max-width: 90%;\n  background: white;\n  border-radius: 30px;\n  padding: 40px;\n  text-align: center;\n  box-shadow: 0 24px 55px rgba(0, 0, 0, 0.22);\n  animation: trophyPop 0.4s ease;\n}\n.trophy-modal h2 {\n  color: #2563eb;\n  margin: 10px 0 0;\n}\n.trophy-modal h3 {\n  color: #1e3a8a;\n  font-size: 28px;\n  margin: 12px 0;\n}\n.trophy-modal p {\n  color: #64748b;\n  margin-bottom: 25px;\n}\n.sparkles {\n  font-size: 32px;\n  margin-bottom: 15px;\n}\n.trophy-icon {\n  font-size: 90px;\n  animation: bounce 1s infinite;\n}\n.trophy-btn {\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  padding: 14px 24px;\n  border-radius: 16px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.trophy-btn:hover {\n  transform: scale(1.05);\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.08);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes trophyPop {\n  from {\n    transform: scale(0.7);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@media (max-width: 900px) {\n  .game-header {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .answers-grid {\n    grid-template-columns: 1fr;\n  }\n  .scroll-container {\n    height: 70vh;\n  }\n}\n/*# sourceMappingURL=jugar.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: HttpClient }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JugarComponent, { className: "JugarComponent", filePath: "src/app/child/pages/jugar/jugar.component.ts", lineNumber: 31 });
})();
export {
  JugarComponent
};
//# sourceMappingURL=chunk-I7NJENEJ.js.map

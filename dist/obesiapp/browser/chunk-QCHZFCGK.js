import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HI7UTQF2.js";
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
  NgClass,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  TitleCasePipe,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4YERQOE2.js";

// src/app/panel/pages/panel/panel.component.ts
function PanelComponent_p_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Cargando ni\xF1os...");
    \u0275\u0275elementEnd();
  }
}
function PanelComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, " Procesando solicitud... ");
    \u0275\u0275elementEnd();
  }
}
function PanelComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function PanelComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function PanelComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, "\u{1F466}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "A\xFAn no tienes ni\xF1os registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Registra un ni\xF1o para comenzar a dar seguimiento a sus h\xE1bitos saludables.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275text(8, " Registrar primer ni\xF1o ");
    \u0275\u0275elementEnd()();
  }
}
function PanelComponent_div_50_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275element(2, "span");
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Evaluaci\xF3n de salud");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 41)(6, "p")(7, "strong");
    \u0275\u0275text(8, "IMC:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p")(11, "strong");
    \u0275\u0275text(12, "Riesgo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p")(17, "strong");
    \u0275\u0275text(18, "Confianza:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metric_r3 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", metric_r3.bmi, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r0.getRiskClass(metric_r3.risk_level));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 4, metric_r3.risk_level), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 6, +metric_r3.prediction_confidence * 100, "1.0-0"), "% ");
  }
}
function PanelComponent_div_50_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " Sin evaluaci\xF3n de salud registrada. ");
    \u0275\u0275elementEnd();
  }
}
function PanelComponent_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PanelComponent_div_50_div_1_div_14_Template, 21, 9, "div", 33)(15, PanelComponent_div_50_div_1_div_15_Template, 2, 0, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 35)(17, "button", 36);
    \u0275\u0275listener("click", function PanelComponent_div_50_div_1_Template_button_click_17_listener() {
      const child_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openHealthForm(child_r4));
    });
    \u0275\u0275text(18, " Evaluar salud ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 37);
    \u0275\u0275listener("click", function PanelComponent_div_50_div_1_Template_button_click_19_listener() {
      const child_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(child_r4));
    });
    \u0275\u0275text(20, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 38);
    \u0275\u0275listener("click", function PanelComponent_div_50_div_1_Template_button_click_21_listener() {
      const child_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteChild(child_r4));
    });
    \u0275\u0275text(22, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", child_r4.avatar_code === "avatar_2" ? "\u{1F467}" : "\u{1F9D2}", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r4.nickname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Edad: ", child_r4.age_range, " a\xF1os");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Nivel: ", child_r4.level_name || "Inicial", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("XP: ", child_r4.current_xp || 0, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Racha: ", child_r4.streak_days || 0, " d\xEDas");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.latestMetrics[child_r4.child_id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.latestMetrics[child_r4.child_id]);
  }
}
function PanelComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, PanelComponent_div_50_div_1_Template, 23, 8, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.children);
  }
}
function PanelComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "h2");
    \u0275\u0275text(3, "Editar ni\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5, "Apodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function PanelComponent_div_76_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editingChild.nickname, $event) || (ctx_r0.editingChild.nickname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "Rango de edad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function PanelComponent_div_76_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editingChild.age_range, $event) || (ctx_r0.editingChild.age_range = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 48);
    \u0275\u0275text(11, "6 a 8 a\xF1os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 49);
    \u0275\u0275text(13, "9 a 10 a\xF1os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 50);
    \u0275\u0275text(15, "11 a 12 a\xF1os");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label");
    \u0275\u0275text(17, "Avatar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function PanelComponent_div_76_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editingChild.avatar_code, $event) || (ctx_r0.editingChild.avatar_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 51);
    \u0275\u0275text(20, "Ni\xF1o \u{1F9D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 52);
    \u0275\u0275text(22, "Ni\xF1a \u{1F467}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 53);
    \u0275\u0275text(24, "Gorra \u{1F9E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 54);
    \u0275\u0275text(26, "Estrella \u2B50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 55)(28, "button", 56);
    \u0275\u0275listener("click", function PanelComponent_div_76_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEdit());
    });
    \u0275\u0275text(29, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 57);
    \u0275\u0275listener("click", function PanelComponent_div_76_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateChild());
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingChild.nickname);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingChild.age_range);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingChild.avatar_code);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r0.actionLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.actionLoading ? "Guardando..." : "Guardar cambios", " ");
  }
}
function PanelComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 58)(2, "div", 59);
    \u0275\u0275text(3, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "\xBFEst\xE1s seguro?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, " Est\xE1s a punto de eliminar el perfil de ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ". Esta acci\xF3n borrar\xE1 su progreso de forma permanente. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 55)(12, "button", 60);
    \u0275\u0275listener("click", function PanelComponent_div_77_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.showDeleteModal = false;
      return \u0275\u0275resetView(ctx_r0.childToDelete = null);
    });
    \u0275\u0275text(13, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 61);
    \u0275\u0275listener("click", function PanelComponent_div_77_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmarEliminar());
    });
    \u0275\u0275text(15, " S\xED, eliminar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.childToDelete == null ? null : ctx_r0.childToDelete.nickname);
  }
}
function PanelComponent_div_78_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 69);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.healthErrorMessage);
  }
}
function PanelComponent_div_78_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 69);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.healthSuccessMessage);
  }
}
function PanelComponent_div_78_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "Edad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function PanelComponent_div_78_ng_container_11_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.healthForm.age, $event) || (ctx_r0.healthForm.age = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5, "G\xE9nero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function PanelComponent_div_78_ng_container_11_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.healthForm.gender, $event) || (ctx_r0.healthForm.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(7, "option", 72);
    \u0275\u0275text(8, "Selecciona una opci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 73);
    \u0275\u0275text(10, "Femenino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 74);
    \u0275\u0275text(12, "Masculino");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label");
    \u0275\u0275text(14, "Peso en kg");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function PanelComponent_div_78_ng_container_11_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.healthForm.weight_kg, $event) || (ctx_r0.healthForm.weight_kg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label");
    \u0275\u0275text(17, "Estatura en cm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function PanelComponent_div_78_ng_container_11_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.healthForm.height_cm, $event) || (ctx_r0.healthForm.height_cm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.healthForm.age);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.healthForm.gender);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.healthForm.weight_kg);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.healthForm.height_cm);
  }
}
function PanelComponent_div_78_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function PanelComponent_div_78_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitHealthMetric());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.healthLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.healthLoading ? "Evaluando..." : "Obtener evaluaci\xF3n", " ");
  }
}
function PanelComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 62)(2, "h2");
    \u0275\u0275text(3, "Evaluaci\xF3n de salud");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 63);
    \u0275\u0275text(5, " Registra los datos f\xEDsicos de ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " para conocer su nivel de bienestar y recibir recomendaciones personalizadas. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PanelComponent_div_78_div_9_Template, 5, 1, "div", 64)(10, PanelComponent_div_78_div_10_Template, 5, 1, "div", 65)(11, PanelComponent_div_78_ng_container_11_Template, 19, 4, "ng-container", 66);
    \u0275\u0275elementStart(12, "div", 55)(13, "button", 56);
    \u0275\u0275listener("click", function PanelComponent_div_78_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeHealthForm());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, PanelComponent_div_78_button_15_Template, 2, 2, "button", 67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.selectedChild.nickname);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.healthErrorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.healthSuccessMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.healthSuccessMessage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.healthSuccessMessage ? "Cerrar" : "Cancelar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.healthSuccessMessage);
  }
}
var PanelComponent = class _PanelComponent {
  constructor(router, http, auth) {
    this.router = router;
    this.http = http;
    this.auth = auth;
    this.tutorName = "tutor";
    this.children = [];
    this.loading = true;
    this.actionLoading = false;
    this.healthLoading = false;
    this.showDeleteModal = false;
    this.childToDelete = null;
    this.errorMessage = "";
    this.successMessage = "";
    this.healthErrorMessage = "";
    this.healthSuccessMessage = "";
    this.editingChild = null;
    this.selectedChild = null;
    this.latestMetrics = {};
    this.healthForm = {
      age: null,
      gender: "",
      weight_kg: null,
      height_cm: null
    };
  }
  ngOnInit() {
    const user = this.auth.getCurrentUser();
    this.tutorName = user?.username || "tutor";
    this.getChildren();
  }
  getHeaders() {
    const token = this.auth.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
  getChildren() {
    this.loading = true;
    this.errorMessage = "";
    this.http.get(`${environment.apiUrl}/children`, {
      headers: this.getHeaders()
    }).subscribe({
      next: (res) => {
        this.children = res.data || [];
        this.loading = false;
        this.children.forEach((child) => {
          this.getLatestHealthMetric(child.child_id);
        });
      },
      error: () => {
        this.loading = false;
        this.errorMessage = "No se pudieron cargar los ni\xF1os.";
      }
    });
  }
  openEdit(child) {
    this.editingChild = __spreadValues({}, child);
  }
  closeEdit() {
    this.editingChild = null;
  }
  updateChild() {
    if (!this.editingChild)
      return;
    this.actionLoading = true;
    this.errorMessage = "";
    this.successMessage = "";
    const body = {
      nickname: this.editingChild.nickname,
      age_range: this.editingChild.age_range,
      // Cambiado a age_range
      avatar_code: this.editingChild.avatar_code
      // Cambiado a avatar_code
    };
    this.http.patch(`${environment.apiUrl}/children/${this.editingChild.child_id}`, body, { headers: this.getHeaders() }).subscribe({
      next: () => {
        this.actionLoading = false;
        this.successMessage = "Ni\xF1o actualizado correctamente.";
        this.editingChild = null;
        this.getChildren();
        setTimeout(() => {
          this.successMessage = "";
        }, 3e3);
      },
      error: () => {
        this.actionLoading = false;
        this.errorMessage = "No se pudo actualizar el ni\xF1o.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 3e3);
      }
    });
  }
  deleteChild(child) {
    this.childToDelete = child;
    this.showDeleteModal = true;
  }
  // 🌟 NUEVO: Ejecuta la eliminación real cuando presionan "Sí, eliminar"
  confirmarEliminar() {
    if (!this.childToDelete)
      return;
    this.showDeleteModal = false;
    this.actionLoading = true;
    this.errorMessage = "";
    this.successMessage = "";
    this.http.delete(`${environment.apiUrl}/children/${this.childToDelete.child_id}`, { headers: this.getHeaders() }).subscribe({
      next: () => {
        this.actionLoading = false;
        this.successMessage = "Ni\xF1o eliminado correctamente.";
        this.childToDelete = null;
        this.getChildren();
      },
      error: () => {
        this.actionLoading = false;
        this.errorMessage = "No se pudo eliminar el ni\xF1o.";
        this.childToDelete = null;
      }
    });
  }
  openHealthForm(child) {
    this.selectedChild = child;
    const ageNumber = Number((child.age_range || "").split("-")[0]);
    this.healthForm = {
      age: ageNumber || null,
      gender: "",
      weight_kg: null,
      height_cm: null
    };
    this.healthErrorMessage = "";
    this.healthSuccessMessage = "";
  }
  closeHealthForm() {
    this.selectedChild = null;
    this.healthErrorMessage = "";
    this.healthSuccessMessage = "";
    this.healthLoading = false;
    this.healthForm = {
      age: null,
      gender: "",
      weight_kg: null,
      height_cm: null
    };
  }
  submitHealthMetric() {
    if (!this.selectedChild)
      return;
    if (!this.healthForm.age || !this.healthForm.gender || !this.healthForm.weight_kg || !this.healthForm.height_cm) {
      this.healthErrorMessage = "Completa edad, g\xE9nero, peso y estatura.";
      this.healthSuccessMessage = "";
      return;
    }
    this.healthLoading = true;
    this.healthErrorMessage = "";
    this.healthSuccessMessage = "";
    this.http.post(`${environment.apiUrl}/ml/children/${this.selectedChild.child_id}/health-metrics`, this.healthForm, { headers: this.getHeaders() }).subscribe({
      next: (res) => {
        this.healthLoading = false;
        this.healthSuccessMessage = "Evaluaci\xF3n de salud registrada correctamente.";
        const metric = res.data?.metric;
        if (metric) {
          this.latestMetrics[this.selectedChild.child_id] = metric;
        }
      },
      error: () => {
        this.healthLoading = false;
        this.healthErrorMessage = "No se pudo registrar la evaluaci\xF3n de salud.";
      }
    });
  }
  getLatestHealthMetric(childId) {
    this.http.get(`${environment.apiUrl}/ml/children/${childId}/health-metrics/latest`, { headers: this.getHeaders() }).subscribe({
      next: (res) => {
        this.latestMetrics[childId] = res.data || null;
      },
      error: () => {
        this.latestMetrics[childId] = null;
      }
    });
  }
  getRiskClass(risk) {
    switch (risk) {
      case "bajo":
        return "risk-low";
      case "medio":
        return "risk-medium";
      case "alto":
        return "risk-high";
      default:
        return "risk-none";
    }
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function PanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PanelComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PanelComponent, selectors: [["app-panel"]], decls: 79, vars: 11, consts: [[1, "guardian-page"], [1, "guardian-header"], [1, "logout-btn", 3, "click"], [1, "summary-grid"], [1, "summary-card", "blue"], [1, "summary-card", "green"], [1, "summary-card", "yellow"], [1, "summary-card", "purple"], [1, "main-content"], [1, "children-section"], [1, "section-header"], ["routerLink", "/panel/registrar-nino", 1, "primary-btn"], ["class", "loading-text", 4, "ngIf"], ["class", "loading-message", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "empty-card", 4, "ngIf"], ["class", "children-grid", 4, "ngIf"], [1, "tips-card"], [1, "tip"], [1, "tip", "ai-tip"], ["class", "modal-backdrop", 4, "ngIf"], [1, "loading-text"], [1, "loading-message"], [1, "success-message"], [1, "error-message"], [1, "empty-card"], [1, "empty-icon"], [1, "children-grid"], ["class", "child-card", 4, "ngFor", "ngForOf"], [1, "child-card"], [1, "child-avatar"], [1, "child-info"], ["class", "ml-card", 4, "ngIf"], ["class", "ml-empty", 4, "ngIf"], [1, "child-actions"], [1, "health-btn", 3, "click"], [1, "edit-btn", 3, "click"], [1, "delete-btn", 3, "click"], [1, "ml-card"], [1, "ml-header"], [1, "ml-info"], [3, "ngClass"], [1, "ml-empty"], [1, "modal-backdrop"], [1, "modal-card"], ["type", "text", "placeholder", "Nombre o apodo", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "6-8"], ["value", "9-10"], ["value", "11-12"], ["value", "avatar_1"], ["value", "avatar_2"], ["value", "avatar_3"], ["value", "avatar_4"], [1, "modal-actions"], [1, "cancel-btn", 3, "click"], [1, "primary-btn", 3, "click", "disabled"], [1, "modal-card", "delete-modal"], [1, "warning-icon"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "button", 1, "confirm-delete-btn", 3, "click"], [1, "modal-card", "health-modal"], [1, "modal-description"], ["class", "modal-alert modal-alert-error", "role", "alert", 4, "ngIf"], ["class", "modal-alert modal-alert-success", "role", "status", 4, "ngIf"], [4, "ngIf"], ["class", "primary-btn", 3, "disabled", "click", 4, "ngIf"], ["role", "alert", 1, "modal-alert", "modal-alert-error"], ["aria-hidden", "true"], ["role", "status", 1, "modal-alert", "modal-alert-success"], ["type", "number", "placeholder", "Ej. 11", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "female"], ["value", "male"], ["type", "number", "placeholder", "Ej. 55", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ej. 145", 3, "ngModelChange", "ngModel"]], template: function PanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Panel del Tutor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275listener("click", function PanelComponent_Template_button_click_7_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(8, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "section", 3)(10, "div", 4)(11, "span");
        \u0275\u0275text(12, "\u{1F467}\u{1F9D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "h3");
        \u0275\u0275text(14, "Ni\xF1os registrados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 5)(18, "span");
        \u0275\u0275text(19, "\u{1F3C6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "h3");
        \u0275\u0275text(21, "Retos completados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275text(23, "0");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 6)(25, "span");
        \u0275\u0275text(26, "\u2B50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h3");
        \u0275\u0275text(28, "Recompensas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30, "0");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 7)(32, "span");
        \u0275\u0275text(33, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "h3");
        \u0275\u0275text(35, "Actividad semanal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p");
        \u0275\u0275text(37, "0%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "section", 8)(39, "div", 9)(40, "div", 10)(41, "h2");
        \u0275\u0275text(42, "Mis ni\xF1os");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 11);
        \u0275\u0275text(44, " + Registrar ni\xF1o ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(45, PanelComponent_p_45_Template, 2, 0, "p", 12)(46, PanelComponent_div_46_Template, 2, 0, "div", 13)(47, PanelComponent_div_47_Template, 2, 1, "div", 14)(48, PanelComponent_div_48_Template, 2, 1, "div", 15)(49, PanelComponent_div_49_Template, 9, 0, "div", 16)(50, PanelComponent_div_50_Template, 2, 1, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "aside", 18)(52, "h2");
        \u0275\u0275text(53, "Resumen del tutor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p");
        \u0275\u0275text(55, " Desde este panel podr\xE1s registrar ni\xF1os, revisar su progreso, consultar h\xE1bitos, logros y tiempo de pantalla. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 19)(57, "span");
        \u0275\u0275text(58, "\u{1F4A1}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p");
        \u0275\u0275text(60, "Motiva al ni\xF1o a completar retos diarios.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 19)(62, "span");
        \u0275\u0275text(63, "\u{1F966}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p");
        \u0275\u0275text(65, "Revisa sus h\xE1bitos de alimentaci\xF3n saludable.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 19)(67, "span");
        \u0275\u0275text(68, "\u{1F3C3}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p");
        \u0275\u0275text(70, "Supervisa su actividad f\xEDsica semanal.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 20)(72, "span");
        \u0275\u0275text(73, "\u{1F916}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p");
        \u0275\u0275text(75, "Utiliza la evaluaci\xF3n IA para conocer el riesgo estimado.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(76, PanelComponent_div_76_Template, 32, 5, "div", 21)(77, PanelComponent_div_77_Template, 16, 1, "div", 21)(78, PanelComponent_div_78_Template, 16, 6, "div", 21);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("Hola, ", ctx.tutorName, " \u{1F44B} Supervisa el avance de tus ni\xF1os.");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.children.length);
        \u0275\u0275advance(29);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.actionLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.children.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.children.length > 0);
        \u0275\u0275advance(26);
        \u0275\u0275property("ngIf", ctx.editingChild);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDeleteModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedChild);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, TitleCasePipe, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.guardian-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 32px;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(37, 99, 235, 0.12),\n      transparent 32%),\n    radial-gradient(\n      circle at bottom right,\n      rgba(34, 197, 94, 0.12),\n      transparent 30%),\n    #eff6ff;\n  font-family: Arial, sans-serif;\n}\n.guardian-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #f8fbff);\n  padding: 26px 30px;\n  border-radius: 28px;\n  box-shadow: 0 14px 32px rgba(37, 99, 235, 0.14);\n  margin-bottom: 28px;\n  border: 1px solid rgba(191, 219, 254, 0.75);\n}\n.guardian-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin: 0;\n  font-size: 34px;\n}\n.guardian-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 8px 0 0;\n  font-size: 16px;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 12px 18px;\n  border-radius: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: 0.25s ease;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n  transform: translateY(-2px);\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n  margin-bottom: 28px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  padding: 22px;\n  border-radius: 24px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n  border: 1px solid rgba(219, 234, 254, 0.95);\n  transition: 0.25s ease;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 30px rgba(37, 99, 235, 0.13);\n}\n.summary-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #334155;\n  font-size: 15px;\n  margin: 14px 0 6px;\n}\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 900;\n  margin: 0;\n}\n.blue[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.green[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.yellow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.purple[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.main-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) 360px;\n  gap: 24px;\n  align-items: start;\n}\n.children-section[_ngcontent-%COMP%], \n.tips-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.96);\n  border-radius: 28px;\n  padding: 28px;\n  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);\n  border: 1px solid rgba(219, 234, 254, 0.95);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin: 0;\n  font-size: 26px;\n}\n.primary-btn[_ngcontent-%COMP%] {\n  border: none;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  color: white;\n  padding: 12px 18px;\n  border-radius: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.25s ease;\n}\n.primary-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.22);\n}\n.primary-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n.loading-text[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: bold;\n  margin-top: 20px;\n}\n.loading-message[_ngcontent-%COMP%], \n.success-message[_ngcontent-%COMP%], \n.error-message[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  border-radius: 16px;\n  margin-top: 18px;\n  font-weight: bold;\n}\n.loading-message[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.success-message[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.empty-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 52px 22px;\n  border: 2px dashed #bfdbfe;\n  border-radius: 24px;\n  margin-top: 24px;\n  background: #f8fbff;\n}\n.empty-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin-bottom: 8px;\n}\n.empty-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  max-width: 430px;\n  margin: 0 auto 20px;\n  line-height: 1.5;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 58px;\n  margin-bottom: 10px;\n}\n.children-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n  margin-top: 24px;\n}\n.child-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 80px minmax(0, 1fr) 145px;\n  align-items: center;\n  gap: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #ffffff);\n  border: 2px solid #dbeafe;\n  border-radius: 24px;\n  padding: 20px;\n  transition: 0.25s ease;\n}\n.child-card[_ngcontent-%COMP%]:hover {\n  border-color: #93c5fd;\n  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.12);\n  transform: translateY(-3px);\n}\n.child-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin: 0 0 8px;\n  font-size: 24px;\n}\n.child-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 4px 0;\n}\n.child-avatar[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe,\n      #dcfce7);\n  display: grid;\n  place-items: center;\n  font-size: 36px;\n  flex-shrink: 0;\n  border: 3px solid #ffffff;\n  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.14);\n}\n.child-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.child-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.edit-btn[_ngcontent-%COMP%], \n.delete-btn[_ngcontent-%COMP%], \n.cancel-btn[_ngcontent-%COMP%], \n.health-btn[_ngcontent-%COMP%], \n.confirm-delete-btn[_ngcontent-%COMP%] {\n  border: none;\n  padding: 11px 14px;\n  border-radius: 14px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.22s ease;\n}\n.health-btn[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.health-btn[_ngcontent-%COMP%]:hover {\n  background: #ddd6fe;\n  transform: translateY(-2px);\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background: #bfdbfe;\n  transform: translateY(-2px);\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n  transform: translateY(-2px);\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.confirm-delete-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n}\n.confirm-delete-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 18px rgba(239, 68, 68, 0.28);\n}\n.ml-card[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding: 14px;\n  border-radius: 18px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n}\n.ml-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.ml-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.ml-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #166534;\n  font-size: 16px;\n}\n.ml-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  color: #475569;\n}\n.ml-empty[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background: #f8fafc;\n  color: #64748b;\n  padding: 11px 13px;\n  border-radius: 14px;\n  font-size: 14px;\n  font-weight: bold;\n  border: 1px dashed #cbd5e1;\n}\n.risk-low[_ngcontent-%COMP%], \n.risk-medium[_ngcontent-%COMP%], \n.risk-high[_ngcontent-%COMP%], \n.risk-none[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  border-radius: 999px;\n  font-weight: 900;\n}\n.risk-low[_ngcontent-%COMP%] {\n  color: #15803d;\n  background: #dcfce7;\n}\n.risk-medium[_ngcontent-%COMP%] {\n  color: #b45309;\n  background: #fef3c7;\n}\n.risk-high[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.risk-none[_ngcontent-%COMP%] {\n  color: #475569;\n  background: #e2e8f0;\n}\n.tips-card[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 24px;\n}\n.tips-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin-top: 0;\n}\n.tips-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #64748b;\n  line-height: 1.5;\n}\n.tip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  background: #f0fdf4;\n  padding: 14px;\n  border-radius: 18px;\n  margin-top: 14px;\n}\n.tip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.tip[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #334155;\n}\n.ai-tip[_ngcontent-%COMP%] {\n  background: #eef2ff;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(5px);\n  display: grid;\n  place-items: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-card[_ngcontent-%COMP%] {\n  background: white;\n  width: 440px;\n  max-width: 100%;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  border-radius: 28px;\n  padding: 28px;\n  box-shadow: 0 24px 55px rgba(15, 23, 42, 0.28);\n  animation: _ngcontent-%COMP%_modalIn 0.25s ease;\n}\n.modal-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin-top: 0;\n  font-size: 26px;\n}\n.modal-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: #334155;\n  font-weight: bold;\n  margin: 14px 0 8px;\n}\n.modal-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.modal-card[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #dbeafe;\n  border-radius: 16px;\n  padding: 13px 14px;\n  outline: none;\n  box-sizing: border-box;\n  background: #f8fbff;\n  font-size: 15px;\n}\n.modal-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.modal-card[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);\n}\n.modal-description[_ngcontent-%COMP%] {\n  color: #64748b;\n  line-height: 1.5;\n  margin-bottom: 16px;\n  background: #f8fbff;\n  padding: 12px 14px;\n  border-radius: 16px;\n  border: 1px solid #dbeafe;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 22px;\n}\n.delete-modal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.delete-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  line-height: 1.5;\n}\n.delete-modal[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  font-size: 54px;\n  margin-bottom: 10px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 1150px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .main-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tips-card[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n@media (max-width: 760px) {\n  .guardian-page[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .guardian-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    text-align: center;\n  }\n  .guardian-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .logout-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .section-header[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .children-section[_ngcontent-%COMP%], \n   .tips-card[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .child-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n    justify-items: center;\n  }\n  .child-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .child-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .modal-backdrop[_ngcontent-%COMP%] {\n    padding: 14px;\n    place-items: end center;\n  }\n  .modal-card[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 88vh;\n    border-radius: 26px 26px 0 0;\n    padding: 24px 20px;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 420px) {\n  .guardian-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .child-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.modal-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 13px 15px;\n  margin: 14px 0;\n  border: 1px solid;\n  border-radius: 16px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.4;\n}\n.modal-alert-error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-color: #fecaca;\n}\n.modal-alert-success[_ngcontent-%COMP%] {\n  color: #15803d;\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n}\n/*# sourceMappingURL=panel.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelComponent, [{
    type: Component,
    args: [{ selector: "app-panel", standalone: true, imports: [CommonModule, RouterLink, FormsModule], template: `<div class="guardian-page">\r
\r
  <header class="guardian-header">\r
    <div>\r
      <h1>Panel del Tutor</h1>\r
      <p>Hola, {{ tutorName }} \u{1F44B} Supervisa el avance de tus ni\xF1os.</p>\r
    </div>\r
\r
    <button class="logout-btn" (click)="logout()">Cerrar sesi\xF3n</button>\r
  </header>\r
\r
  <section class="summary-grid">\r
    <div class="summary-card blue">\r
      <span>\u{1F467}\u{1F9D2}</span>\r
      <h3>Ni\xF1os registrados</h3>\r
      <p>{{ children.length }}</p>\r
    </div>\r
\r
    <div class="summary-card green">\r
      <span>\u{1F3C6}</span>\r
      <h3>Retos completados</h3>\r
      <p>0</p>\r
    </div>\r
\r
    <div class="summary-card yellow">\r
      <span>\u2B50</span>\r
      <h3>Recompensas</h3>\r
      <p>0</p>\r
    </div>\r
\r
    <div class="summary-card purple">\r
      <span>\u{1F4CA}</span>\r
      <h3>Actividad semanal</h3>\r
      <p>0%</p>\r
    </div>\r
  </section>\r
\r
  <section class="main-content">\r
\r
    <div class="children-section">\r
      <div class="section-header">\r
        <h2>Mis ni\xF1os</h2>\r
\r
        <button class="primary-btn" routerLink="/panel/registrar-nino">\r
          + Registrar ni\xF1o\r
        </button>\r
      </div>\r
\r
      <p *ngIf="loading" class="loading-text">Cargando ni\xF1os...</p>\r
\r
      <div *ngIf="actionLoading" class="loading-message">\r
        Procesando solicitud...\r
      </div>\r
\r
      <div *ngIf="successMessage" class="success-message">\r
        {{ successMessage }}\r
      </div>\r
\r
      <div *ngIf="errorMessage" class="error-message">\r
        {{ errorMessage }}\r
      </div>\r
\r
      <div *ngIf="!loading && children.length === 0" class="empty-card">\r
        <div class="empty-icon">\u{1F466}</div>\r
        <h3>A\xFAn no tienes ni\xF1os registrados</h3>\r
        <p>Registra un ni\xF1o para comenzar a dar seguimiento a sus h\xE1bitos saludables.</p>\r
\r
        <button class="primary-btn" routerLink="/panel/registrar-nino">\r
          Registrar primer ni\xF1o\r
        </button>\r
      </div>\r
\r
      <div *ngIf="!loading && children.length > 0" class="children-grid">\r
        <div class="child-card" *ngFor="let child of children">\r
\r
          <div class="child-avatar">\r
            {{ child.avatar_code === 'avatar_2' ? '\u{1F467}' : '\u{1F9D2}' }}\r
          </div>\r
\r
          <div class="child-info">\r
            <h3>{{ child.nickname }}</h3>\r
            <p>Edad: {{ child.age_range }} a\xF1os</p>\r
            <p>Nivel: {{ child.level_name || 'Inicial' }}</p>\r
            <p>XP: {{ child.current_xp || 0 }}</p>\r
            <p>Racha: {{ child.streak_days || 0 }} d\xEDas</p>\r
\r
            <div class="ml-card" *ngIf="latestMetrics[child.child_id] as metric">\r
              <div class="ml-header">\r
                <span></span>\r
                <h4>Evaluaci\xF3n de salud</h4>\r
              </div>\r
\r
              <div class="ml-info">\r
                <p><strong>IMC:</strong> {{ metric.bmi }}</p>\r
\r
                <p>\r
                  <strong>Riesgo:</strong>\r
                  <span [ngClass]="getRiskClass(metric.risk_level)">\r
                    {{ metric.risk_level | titlecase }}\r
                  </span>\r
                </p>\r
\r
                <p>\r
                  <strong>Confianza:</strong>\r
                  {{ (+metric.prediction_confidence * 100) | number:'1.0-0' }}%\r
                </p>\r
              </div>\r
            </div>\r
\r
            <div class="ml-empty" *ngIf="!latestMetrics[child.child_id]">\r
               Sin evaluaci\xF3n de salud registrada.\r
            </div>\r
          </div>\r
\r
          <div class="child-actions">\r
            <button class="health-btn" (click)="openHealthForm(child)">\r
              Evaluar salud\r
            </button>\r
\r
            <button class="edit-btn" (click)="openEdit(child)">Editar</button>\r
            <button class="delete-btn" (click)="deleteChild(child)">Eliminar</button>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
\r
    <aside class="tips-card">\r
      <h2>Resumen del tutor</h2>\r
\r
      <p>\r
        Desde este panel podr\xE1s registrar ni\xF1os, revisar su progreso,\r
        consultar h\xE1bitos, logros y tiempo de pantalla.\r
      </p>\r
\r
      <div class="tip">\r
        <span>\u{1F4A1}</span>\r
        <p>Motiva al ni\xF1o a completar retos diarios.</p>\r
      </div>\r
\r
      <div class="tip">\r
        <span>\u{1F966}</span>\r
        <p>Revisa sus h\xE1bitos de alimentaci\xF3n saludable.</p>\r
      </div>\r
\r
      <div class="tip">\r
        <span>\u{1F3C3}</span>\r
        <p>Supervisa su actividad f\xEDsica semanal.</p>\r
      </div>\r
\r
      <div class="tip ai-tip">\r
        <span>\u{1F916}</span>\r
        <p>Utiliza la evaluaci\xF3n IA para conocer el riesgo estimado.</p>\r
      </div>\r
    </aside>\r
\r
  </section>\r
\r
  <div class="modal-backdrop" *ngIf="editingChild">\r
    <div class="modal-card">\r
      <h2>Editar ni\xF1o</h2>\r
\r
      <label>Apodo</label>\r
      <input type="text" [(ngModel)]="editingChild.nickname" placeholder="Nombre o apodo" />\r
\r
      <label>Rango de edad</label>\r
      <select [(ngModel)]="editingChild.age_range">\r
        <option value="6-8">6 a 8 a\xF1os</option>\r
        <option value="9-10">9 a 10 a\xF1os</option>\r
        <option value="11-12">11 a 12 a\xF1os</option>\r
      </select>\r
\r
      <label>Avatar</label>\r
      <select [(ngModel)]="editingChild.avatar_code">\r
        <option value="avatar_1">Ni\xF1o \u{1F9D2}</option>\r
        <option value="avatar_2">Ni\xF1a \u{1F467}</option>\r
        <option value="avatar_3">Gorra \u{1F9E2}</option>\r
        <option value="avatar_4">Estrella \u2B50</option>\r
      </select>\r
\r
      <div class="modal-actions">\r
        <button class="cancel-btn" (click)="closeEdit()">Cancelar</button>\r
\r
        <button class="primary-btn" (click)="updateChild()" [disabled]="actionLoading">\r
          {{ actionLoading ? 'Guardando...' : 'Guardar cambios' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="modal-backdrop" *ngIf="showDeleteModal">\r
    <div class="modal-card delete-modal">\r
      <div class="warning-icon">\u26A0\uFE0F</div>\r
\r
      <h2>\xBFEst\xE1s seguro?</h2>\r
\r
      <p>\r
        Est\xE1s a punto de eliminar el perfil de\r
        <strong>{{ childToDelete?.nickname }}</strong>.\r
        Esta acci\xF3n borrar\xE1 su progreso de forma permanente.\r
      </p>\r
\r
      <div class="modal-actions">\r
        <button type="button" class="cancel-btn" (click)="showDeleteModal = false; childToDelete = null">\r
          Cancelar\r
        </button>\r
\r
        <button type="button" class="confirm-delete-btn" (click)="confirmarEliminar()">\r
          S\xED, eliminar\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="modal-backdrop" *ngIf="selectedChild">\r
    <div class="modal-card health-modal">\r
      <h2>Evaluaci\xF3n de salud</h2>\r
\r
      <p class="modal-description">
        Registra los datos f\xEDsicos de
        <strong>{{ selectedChild.nickname }}</strong>
        para conocer su nivel de bienestar y recibir recomendaciones personalizadas.
      </p>

      <div *ngIf="healthErrorMessage" class="modal-alert modal-alert-error" role="alert">
        <span aria-hidden="true">\u26A0\uFE0F</span>
        <span>{{ healthErrorMessage }}</span>
      </div>

      <div *ngIf="healthSuccessMessage" class="modal-alert modal-alert-success" role="status">
        <span aria-hidden="true">\u2705</span>
        <span>{{ healthSuccessMessage }}</span>
      </div>

      <ng-container *ngIf="!healthSuccessMessage">
        <label>Edad</label>
        <input type="number" [(ngModel)]="healthForm.age" placeholder="Ej. 11" />

        <label>G\xE9nero</label>
        <select [(ngModel)]="healthForm.gender">
          <option value="">Selecciona una opci\xF3n</option>
          <option value="female">Femenino</option>
          <option value="male">Masculino</option>
        </select>

        <label>Peso en kg</label>
        <input type="number" [(ngModel)]="healthForm.weight_kg" placeholder="Ej. 55" />

        <label>Estatura en cm</label>
        <input type="number" [(ngModel)]="healthForm.height_cm" placeholder="Ej. 145" />
      </ng-container>
\r
      <div class="modal-actions">\r
        <button class="cancel-btn" (click)="closeHealthForm()">\r
          {{ healthSuccessMessage ? 'Cerrar' : 'Cancelar' }}
        </button>

        <button *ngIf="!healthSuccessMessage" class="primary-btn" (click)="submitHealthMetric()" [disabled]="healthLoading">
          {{ healthLoading ? 'Evaluando...' : 'Obtener evaluaci\xF3n' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
`, styles: ["/* src/app/panel/pages/panel/panel.component.scss */\n.guardian-page {\n  min-height: 100vh;\n  padding: 32px;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(37, 99, 235, 0.12),\n      transparent 32%),\n    radial-gradient(\n      circle at bottom right,\n      rgba(34, 197, 94, 0.12),\n      transparent 30%),\n    #eff6ff;\n  font-family: Arial, sans-serif;\n}\n.guardian-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #f8fbff);\n  padding: 26px 30px;\n  border-radius: 28px;\n  box-shadow: 0 14px 32px rgba(37, 99, 235, 0.14);\n  margin-bottom: 28px;\n  border: 1px solid rgba(191, 219, 254, 0.75);\n}\n.guardian-header h1 {\n  color: #1e3a8a;\n  margin: 0;\n  font-size: 34px;\n}\n.guardian-header p {\n  color: #64748b;\n  margin: 8px 0 0;\n  font-size: 16px;\n}\n.logout-btn {\n  border: none;\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 12px 18px;\n  border-radius: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: 0.25s ease;\n}\n.logout-btn:hover {\n  background: #fecaca;\n  transform: translateY(-2px);\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n  margin-bottom: 28px;\n}\n.summary-card {\n  background: rgba(255, 255, 255, 0.95);\n  padding: 22px;\n  border-radius: 24px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n  border: 1px solid rgba(219, 234, 254, 0.95);\n  transition: 0.25s ease;\n}\n.summary-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 30px rgba(37, 99, 235, 0.13);\n}\n.summary-card span {\n  font-size: 34px;\n}\n.summary-card h3 {\n  color: #334155;\n  font-size: 15px;\n  margin: 14px 0 6px;\n}\n.summary-card p {\n  font-size: 32px;\n  font-weight: 900;\n  margin: 0;\n}\n.blue p {\n  color: #2563eb;\n}\n.green p {\n  color: #22c55e;\n}\n.yellow p {\n  color: #f59e0b;\n}\n.purple p {\n  color: #8b5cf6;\n}\n.main-content {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) 360px;\n  gap: 24px;\n  align-items: start;\n}\n.children-section,\n.tips-card {\n  background: rgba(255, 255, 255, 0.96);\n  border-radius: 28px;\n  padding: 28px;\n  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);\n  border: 1px solid rgba(219, 234, 254, 0.95);\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n}\n.section-header h2 {\n  color: #1e3a8a;\n  margin: 0;\n  font-size: 26px;\n}\n.primary-btn {\n  border: none;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  color: white;\n  padding: 12px 18px;\n  border-radius: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.25s ease;\n}\n.primary-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.22);\n}\n.primary-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n.loading-text {\n  color: #2563eb;\n  font-weight: bold;\n  margin-top: 20px;\n}\n.loading-message,\n.success-message,\n.error-message {\n  padding: 13px 16px;\n  border-radius: 16px;\n  margin-top: 18px;\n  font-weight: bold;\n}\n.loading-message {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.success-message {\n  background: #dcfce7;\n  color: #15803d;\n}\n.error-message {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.empty-card {\n  text-align: center;\n  padding: 52px 22px;\n  border: 2px dashed #bfdbfe;\n  border-radius: 24px;\n  margin-top: 24px;\n  background: #f8fbff;\n}\n.empty-card h3 {\n  color: #1e3a8a;\n  margin-bottom: 8px;\n}\n.empty-card p {\n  color: #64748b;\n  max-width: 430px;\n  margin: 0 auto 20px;\n  line-height: 1.5;\n}\n.empty-icon {\n  font-size: 58px;\n  margin-bottom: 10px;\n}\n.children-grid {\n  display: grid;\n  gap: 18px;\n  margin-top: 24px;\n}\n.child-card {\n  display: grid;\n  grid-template-columns: 80px minmax(0, 1fr) 145px;\n  align-items: center;\n  gap: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #ffffff);\n  border: 2px solid #dbeafe;\n  border-radius: 24px;\n  padding: 20px;\n  transition: 0.25s ease;\n}\n.child-card:hover {\n  border-color: #93c5fd;\n  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.12);\n  transform: translateY(-3px);\n}\n.child-card h3 {\n  color: #1e3a8a;\n  margin: 0 0 8px;\n  font-size: 24px;\n}\n.child-card p {\n  color: #64748b;\n  margin: 4px 0;\n}\n.child-avatar {\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe,\n      #dcfce7);\n  display: grid;\n  place-items: center;\n  font-size: 36px;\n  flex-shrink: 0;\n  border: 3px solid #ffffff;\n  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.14);\n}\n.child-info {\n  min-width: 0;\n}\n.child-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.edit-btn,\n.delete-btn,\n.cancel-btn,\n.health-btn,\n.confirm-delete-btn {\n  border: none;\n  padding: 11px 14px;\n  border-radius: 14px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.22s ease;\n}\n.health-btn {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.health-btn:hover {\n  background: #ddd6fe;\n  transform: translateY(-2px);\n}\n.edit-btn {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.edit-btn:hover {\n  background: #bfdbfe;\n  transform: translateY(-2px);\n}\n.delete-btn {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.delete-btn:hover {\n  background: #fecaca;\n  transform: translateY(-2px);\n}\n.cancel-btn {\n  background: #e2e8f0;\n  color: #334155;\n}\n.cancel-btn:hover {\n  background: #cbd5e1;\n}\n.confirm-delete-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n}\n.confirm-delete-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 18px rgba(239, 68, 68, 0.28);\n}\n.ml-card {\n  margin-top: 14px;\n  padding: 14px;\n  border-radius: 18px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n}\n.ml-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.ml-header span {\n  font-size: 22px;\n}\n.ml-header h4 {\n  margin: 0;\n  color: #166534;\n  font-size: 16px;\n}\n.ml-info p {\n  margin: 5px 0;\n  color: #475569;\n}\n.ml-empty {\n  margin-top: 12px;\n  background: #f8fafc;\n  color: #64748b;\n  padding: 11px 13px;\n  border-radius: 14px;\n  font-size: 14px;\n  font-weight: bold;\n  border: 1px dashed #cbd5e1;\n}\n.risk-low,\n.risk-medium,\n.risk-high,\n.risk-none {\n  padding: 4px 9px;\n  border-radius: 999px;\n  font-weight: 900;\n}\n.risk-low {\n  color: #15803d;\n  background: #dcfce7;\n}\n.risk-medium {\n  color: #b45309;\n  background: #fef3c7;\n}\n.risk-high {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.risk-none {\n  color: #475569;\n  background: #e2e8f0;\n}\n.tips-card {\n  position: sticky;\n  top: 24px;\n}\n.tips-card h2 {\n  color: #1e3a8a;\n  margin-top: 0;\n}\n.tips-card > p {\n  color: #64748b;\n  line-height: 1.5;\n}\n.tip {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  background: #f0fdf4;\n  padding: 14px;\n  border-radius: 18px;\n  margin-top: 14px;\n}\n.tip span {\n  font-size: 24px;\n}\n.tip p {\n  margin: 0;\n  color: #334155;\n}\n.ai-tip {\n  background: #eef2ff;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(5px);\n  display: grid;\n  place-items: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-card {\n  background: white;\n  width: 440px;\n  max-width: 100%;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  border-radius: 28px;\n  padding: 28px;\n  box-shadow: 0 24px 55px rgba(15, 23, 42, 0.28);\n  animation: modalIn 0.25s ease;\n}\n.modal-card h2 {\n  color: #1e3a8a;\n  margin-top: 0;\n  font-size: 26px;\n}\n.modal-card label {\n  display: block;\n  color: #334155;\n  font-weight: bold;\n  margin: 14px 0 8px;\n}\n.modal-card input,\n.modal-card select {\n  width: 100%;\n  border: 2px solid #dbeafe;\n  border-radius: 16px;\n  padding: 13px 14px;\n  outline: none;\n  box-sizing: border-box;\n  background: #f8fbff;\n  font-size: 15px;\n}\n.modal-card input:focus,\n.modal-card select:focus {\n  border-color: #2563eb;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);\n}\n.modal-description {\n  color: #64748b;\n  line-height: 1.5;\n  margin-bottom: 16px;\n  background: #f8fbff;\n  padding: 12px 14px;\n  border-radius: 16px;\n  border: 1px solid #dbeafe;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 22px;\n}\n.delete-modal {\n  text-align: center;\n}\n.delete-modal p {\n  color: #64748b;\n  line-height: 1.5;\n}\n.delete-modal .modal-actions {\n  justify-content: center;\n}\n.warning-icon {\n  font-size: 54px;\n  margin-bottom: 10px;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 1150px) {\n  .summary-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .main-content {\n    grid-template-columns: 1fr;\n  }\n  .tips-card {\n    position: static;\n  }\n}\n@media (max-width: 760px) {\n  .guardian-page {\n    padding: 18px;\n  }\n  .guardian-header {\n    flex-direction: column;\n    align-items: stretch;\n    text-align: center;\n  }\n  .guardian-header h1 {\n    font-size: 28px;\n  }\n  .logout-btn {\n    width: 100%;\n  }\n  .summary-grid {\n    grid-template-columns: 1fr;\n  }\n  .section-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .section-header .primary-btn {\n    width: 100%;\n  }\n  .children-section,\n  .tips-card {\n    padding: 22px;\n  }\n  .child-card {\n    grid-template-columns: 1fr;\n    text-align: center;\n    justify-items: center;\n  }\n  .child-actions {\n    width: 100%;\n  }\n  .child-actions button {\n    width: 100%;\n  }\n  .modal-backdrop {\n    padding: 14px;\n    place-items: end center;\n  }\n  .modal-card {\n    width: 100%;\n    max-height: 88vh;\n    border-radius: 26px 26px 0 0;\n    padding: 24px 20px;\n  }\n  .modal-actions {\n    flex-direction: column-reverse;\n  }\n  .modal-actions button {\n    width: 100%;\n  }\n}\n@media (max-width: 420px) {\n  .guardian-header h1 {\n    font-size: 24px;\n  }\n  .summary-card p {\n    font-size: 28px;\n  }\n  .child-card h3 {\n    font-size: 22px;\n  }\n}\n.modal-alert {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 13px 15px;\n  margin: 14px 0;\n  border: 1px solid;\n  border-radius: 16px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.4;\n}\n.modal-alert-error {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-color: #fecaca;\n}\n.modal-alert-success {\n  color: #15803d;\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n}\n/*# sourceMappingURL=panel.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: HttpClient }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PanelComponent, { className: "PanelComponent", filePath: "src/app/panel/pages/panel/panel.component.ts", lineNumber: 47 });
})();
export {
  PanelComponent
};
//# sourceMappingURL=chunk-QCHZFCGK.js.map

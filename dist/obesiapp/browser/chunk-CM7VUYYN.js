import {
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  PatternValidator,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-HI7UTQF2.js";
import {
  AuthService,
  environment
} from "./chunk-3T3BQCC5.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpHeaders,
  NgIf,
  Router,
  RouterLink,
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
  ɵɵproperty,
  ɵɵreference,
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

// src/app/panel/pages/registrar-nino/registrar-nino.component.ts
function RegistrarNinoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "div", 34);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Registrando ni\xF1o...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Estamos creando su aventura saludable \u{1F680}");
    \u0275\u0275elementEnd()()();
  }
}
function RegistrarNinoComponent_small_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " El usuario es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function RegistrarNinoComponent_small_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Debe tener m\xEDnimo 3 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function RegistrarNinoComponent_small_20_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ' Solo letras, n\xFAmeros o "_". ');
    \u0275\u0275elementEnd();
  }
}
function RegistrarNinoComponent_small_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 35);
    \u0275\u0275template(1, RegistrarNinoComponent_small_20_span_1_Template, 2, 0, "span", 36)(2, RegistrarNinoComponent_small_20_span_2_Template, 2, 0, "span", 36)(3, RegistrarNinoComponent_small_20_span_3_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const usernameRef_r3 = \u0275\u0275reference(19);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", usernameRef_r3.errors == null ? null : usernameRef_r3.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", usernameRef_r3.errors == null ? null : usernameRef_r3.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", usernameRef_r3.errors == null ? null : usernameRef_r3.errors["pattern"]);
  }
}
function RegistrarNinoComponent_small_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " La contrase\xF1a es obligatoria. ");
    \u0275\u0275elementEnd();
  }
}
function RegistrarNinoComponent_small_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Debe tener m\xEDnimo 8 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function RegistrarNinoComponent_small_30_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Debe incluir una may\xFAscula y un n\xFAmero. ");
    \u0275\u0275elementEnd();
  }
}
function RegistrarNinoComponent_small_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 35);
    \u0275\u0275template(1, RegistrarNinoComponent_small_30_span_1_Template, 2, 0, "span", 36)(2, RegistrarNinoComponent_small_30_span_2_Template, 2, 0, "span", 36)(3, RegistrarNinoComponent_small_30_span_3_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passwordRef_r4 = \u0275\u0275reference(26);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordRef_r4.errors == null ? null : passwordRef_r4.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordRef_r4.errors == null ? null : passwordRef_r4.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordRef_r4.errors == null ? null : passwordRef_r4.errors["pattern"]);
  }
}
function RegistrarNinoComponent_small_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " El apodo es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function RegistrarNinoComponent_small_36_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Debe tener m\xEDnimo 2 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function RegistrarNinoComponent_small_36_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Solo se permiten letras. ");
    \u0275\u0275elementEnd();
  }
}
function RegistrarNinoComponent_small_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 35);
    \u0275\u0275template(1, RegistrarNinoComponent_small_36_span_1_Template, 2, 0, "span", 36)(2, RegistrarNinoComponent_small_36_span_2_Template, 2, 0, "span", 36)(3, RegistrarNinoComponent_small_36_span_3_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const nicknameRef_r5 = \u0275\u0275reference(35);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", nicknameRef_r5.errors == null ? null : nicknameRef_r5.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", nicknameRef_r5.errors == null ? null : nicknameRef_r5.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", nicknameRef_r5.errors == null ? null : nicknameRef_r5.errors["pattern"]);
  }
}
function RegistrarNinoComponent_small_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 35);
    \u0275\u0275text(1, " Debes seleccionar una edad. ");
    \u0275\u0275elementEnd();
  }
}
function RegistrarNinoComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.errorMessage, " ");
  }
}
function RegistrarNinoComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40);
    \u0275\u0275text(3, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "\xA1Registro Completado!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 41);
    \u0275\u0275text(7, " El perfil de ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " ha sido creado con \xE9xito.");
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, " \xA1Ya puedes comenzar a monitorear sus h\xE1bitos y retos! \u{1F680} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 42)(14, "button", 43);
    \u0275\u0275listener("click", function RegistrarNinoComponent_div_66_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.irAlPanel());
    });
    \u0275\u0275text(15, " Ir al Panel\n");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r5.child.nickname || "tu ni\xF1o");
  }
}
var RegistrarNinoComponent = class _RegistrarNinoComponent {
  constructor(http, router, auth) {
    this.http = http;
    this.router = router;
    this.auth = auth;
    this.loading = false;
    this.errorMessage = "";
    this.showPassword = false;
    this.showSuccessModal = false;
    this.child = {
      username: "",
      password: "",
      nickname: "",
      ageRange: "",
      avatarCode: "avatar_1"
    };
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  registrarNino(form) {
    this.errorMessage = "";
    if (form.invalid) {
      form.control.markAllAsTouched();
      this.errorMessage = "Revisa los campos marcados antes de continuar.";
      return;
    }
    this.loading = true;
    const token = this.auth.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    this.http.post(`${environment.apiUrl}/children`, this.child, { headers }).subscribe({
      next: () => {
        this.loading = false;
        this.showSuccessModal = true;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error.error?.error?.message || error.error?.message || "No se pudo registrar el ni\xF1o.";
      }
    });
  }
  // 🌟 Método para manejar la redirección al cerrar el modal exitoso
  irAlPanel() {
    this.showSuccessModal = false;
    this.router.navigate(["/panel"]);
  }
  static {
    this.\u0275fac = function RegistrarNinoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegistrarNinoComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrarNinoComponent, selectors: [["app-registrar-nino"]], decls: 67, vars: 23, consts: [["childForm", "ngForm"], ["usernameRef", "ngModel"], ["passwordRef", "ngModel"], ["nicknameRef", "ngModel"], ["ageRangeRef", "ngModel"], [1, "register-child-page"], ["class", "loading-overlay", 4, "ngIf"], [1, "top-bar"], ["routerLink", "/panel", 1, "back-link"], [1, "register-card"], [1, "header"], [1, "icon"], [1, "form", 3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "username", "placeholder", "Ej. mateo08", "required", "", "minlength", "3", "pattern", "^[a-zA-Z0-9_]+$", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], [1, "password-container"], ["name", "password", "placeholder", "M\xEDnimo 8 caracteres", "required", "", "minlength", "8", "pattern", "^(?=.*[A-Z])(?=.*[0-9]).{8,}$", 1, "password-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-password", 3, "click"], [1, "material-icons"], ["type", "text", "name", "nickname", "placeholder", "Ej. Mateo", "required", "", "minlength", "2", "pattern", "^[a-zA-Z\xE1\xE9\xED\xF3\xFA\xC1\xC9\xCD\xD3\xDA\xF1\xD1 ]+$", 3, "ngModelChange", "ngModel"], ["name", "ageRange", "required", "", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], ["value", "6-8"], ["value", "9-10"], ["value", "11-12"], [1, "form-group", "full"], [1, "avatar-grid"], ["type", "button", 1, "avatar-option", 3, "click"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["class", "modal-backdrop", 4, "ngIf"], [1, "loading-overlay"], [1, "loader-card"], [1, "spinner"], [1, "field-error"], [4, "ngIf"], [1, "error-message"], [1, "modal-backdrop"], [1, "modal-card", 2, "text-align", "center", "padding", "30px"], [2, "font-size", "3.5rem", "margin-bottom", "15px", "animation", "bounce 1.2s infinite"], [2, "color", "#666", "margin", "15px 0 25px 0", "font-size", "0.95rem", "line-height", "1.5"], [2, "display", "flex", "justify-content", "center"], ["onmouseover", "this.style.transform='scale(1.03)'; this.style.boxShadow='0 6px 16px rgba(59, 130, 246, 0.45)';", "onmouseout", "this.style.transform='scale(1)'; this.style.boxShadow='0 4px 12px rgba(59, 130, 246, 0.3)';", 1, "submit-btn", 2, "width", "100%", "max-width", "200px", "margin-top", "10px", "background", "linear-gradient(135deg, #4f46e5, #3b82f6)", "color", "white", "border", "none", "padding", "12px 24px", "border-radius", "12px", "font-size", "1rem", "font-weight", "600", "cursor", "pointer", "box-shadow", "0 4px 12px rgba(59, 130, 246, 0.3)", "transition", "transform 0.2s, box-shadow 0.2s", 3, "click"]], template: function RegistrarNinoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5);
        \u0275\u0275template(1, RegistrarNinoComponent_div_1_Template, 7, 0, "div", 6);
        \u0275\u0275elementStart(2, "div", 7)(3, "a", 8);
        \u0275\u0275text(4, " \u2190 Volver al panel ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "section", 9)(6, "div", 10)(7, "div", 11);
        \u0275\u0275text(8, "\u{1F467}\u{1F9D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1");
        \u0275\u0275text(10, "Registrar ni\xF1o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12, " Agrega un perfil infantil para comenzar a supervisar h\xE1bitos, retos y recompensas. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "form", 12, 0);
        \u0275\u0275listener("ngSubmit", function RegistrarNinoComponent_Template_form_ngSubmit_13_listener() {
          \u0275\u0275restoreView(_r1);
          const childForm_r2 = \u0275\u0275reference(14);
          return \u0275\u0275resetView(ctx.registrarNino(childForm_r2));
        });
        \u0275\u0275elementStart(15, "div", 13)(16, "label");
        \u0275\u0275text(17, "Usuario del ni\xF1o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 14, 1);
        \u0275\u0275twoWayListener("ngModelChange", function RegistrarNinoComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.child.username, $event) || (ctx.child.username = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, RegistrarNinoComponent_small_20_Template, 4, 3, "small", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 13)(22, "label");
        \u0275\u0275text(23, "Contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 16)(25, "input", 17, 2);
        \u0275\u0275twoWayListener("ngModelChange", function RegistrarNinoComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.child.password, $event) || (ctx.child.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 18);
        \u0275\u0275listener("click", function RegistrarNinoComponent_Template_button_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.togglePassword());
        });
        \u0275\u0275elementStart(28, "span", 19);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(30, RegistrarNinoComponent_small_30_Template, 4, 3, "small", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 13)(32, "label");
        \u0275\u0275text(33, "Apodo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 20, 3);
        \u0275\u0275twoWayListener("ngModelChange", function RegistrarNinoComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.child.nickname, $event) || (ctx.child.nickname = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, RegistrarNinoComponent_small_36_Template, 4, 3, "small", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 13)(38, "label");
        \u0275\u0275text(39, "Rango de edad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "select", 21, 4);
        \u0275\u0275twoWayListener("ngModelChange", function RegistrarNinoComponent_Template_select_ngModelChange_40_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.child.ageRange, $event) || (ctx.child.ageRange = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(42, "option", 22);
        \u0275\u0275text(43, " Selecciona una edad ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "option", 23);
        \u0275\u0275text(45, " 6 a 8 a\xF1os ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "option", 24);
        \u0275\u0275text(47, " 9 a 10 a\xF1os ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "option", 25);
        \u0275\u0275text(49, " 11 a 12 a\xF1os ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(50, RegistrarNinoComponent_small_50_Template, 2, 0, "small", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 26)(52, "label");
        \u0275\u0275text(53, "Avatar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 27)(55, "button", 28);
        \u0275\u0275listener("click", function RegistrarNinoComponent_Template_button_click_55_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.child.avatarCode = "avatar_1");
        });
        \u0275\u0275text(56, " \u{1F9D2} ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "button", 28);
        \u0275\u0275listener("click", function RegistrarNinoComponent_Template_button_click_57_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.child.avatarCode = "avatar_2");
        });
        \u0275\u0275text(58, " \u{1F467} ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "button", 28);
        \u0275\u0275listener("click", function RegistrarNinoComponent_Template_button_click_59_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.child.avatarCode = "avatar_3");
        });
        \u0275\u0275text(60, " \u{1F9E2} ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "button", 28);
        \u0275\u0275listener("click", function RegistrarNinoComponent_Template_button_click_61_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.child.avatarCode = "avatar_4");
        });
        \u0275\u0275text(62, " \u2B50 ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(63, RegistrarNinoComponent_div_63_Template, 2, 1, "div", 29);
        \u0275\u0275elementStart(64, "button", 30);
        \u0275\u0275text(65);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(66, RegistrarNinoComponent_div_66_Template, 16, 1, "div", 31);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const childForm_r2 = \u0275\u0275reference(14);
        const usernameRef_r3 = \u0275\u0275reference(19);
        const passwordRef_r4 = \u0275\u0275reference(26);
        const nicknameRef_r5 = \u0275\u0275reference(35);
        const ageRangeRef_r8 = \u0275\u0275reference(41);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(17);
        \u0275\u0275twoWayProperty("ngModel", ctx.child.username);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", usernameRef_r3.invalid && usernameRef_r3.touched);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.child.password);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "visibility_off" : "visibility", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", passwordRef_r4.invalid && passwordRef_r4.touched);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.child.nickname);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", nicknameRef_r5.invalid && nicknameRef_r5.touched);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.child.ageRange);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ageRangeRef_r8.invalid && ageRangeRef_r8.touched);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("selected", ctx.child.avatarCode === "avatar_1");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ctx.child.avatarCode === "avatar_2");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ctx.child.avatarCode === "avatar_3");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ctx.child.avatarCode === "avatar_4");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading || childForm_r2.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Registrando..." : "Registrar ni\xF1o", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showSuccessModal);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, PatternValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.register-child-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #eff6ff;\n  padding: 32px;\n  font-family: Arial, sans-serif;\n}\n.top-bar[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto 20px;\n}\n.back-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: bold;\n  text-decoration: none;\n}\n.register-card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  background: #ffffff;\n  border-radius: 28px;\n  padding: 34px;\n  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.12);\n}\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  margin-bottom: 10px;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  font-size: 34px;\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  max-width: 540px;\n  margin: 10px auto 0;\n  line-height: 1.5;\n}\n.form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #334155;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 2px solid #dbeafe;\n  border-radius: 16px;\n  padding: 14px 16px;\n  font-size: 15px;\n  outline: none;\n  background: #f8fbff;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #ffffff;\n}\n.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.avatar-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 90px);\n  gap: 14px;\n}\n.avatar-option[_ngcontent-%COMP%] {\n  height: 82px;\n  border: 2px solid #dbeafe;\n  border-radius: 22px;\n  background: #f8fbff;\n  font-size: 34px;\n  cursor: pointer;\n}\n.avatar-option.selected[_ngcontent-%COMP%] {\n  border-color: #22c55e;\n  background: #f0fdf4;\n  box-shadow: 0 8px 18px rgba(34, 197, 94, 0.18);\n}\n.error-message[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 12px 16px;\n  border-radius: 14px;\n  font-weight: bold;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  border: none;\n  background: #2563eb;\n  color: white;\n  padding: 15px;\n  border-radius: 18px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n@media (max-width: 760px) {\n  .form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .avatar-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 90px);\n  }\n}\n.field-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 6px;\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], \nselect.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc2626 !important;\n  background: #fff5f5 !important;\n}\ninput.ng-valid.ng-touched[_ngcontent-%COMP%], \nselect.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #22c55e !important;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loader-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 24px;\n  text-align: center;\n  min-width: 300px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.loader-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  color: #1e3a8a;\n}\n.loader-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 0;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  border: 6px solid #dbeafe;\n  border-top: 6px solid #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.password-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.password-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 55px !important;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 0;\n}\n.toggle-password[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #64748b;\n  line-height: 1;\n  transition: 0.2s;\n}\n.toggle-password[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 30px;\n  border-radius: 16px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  max-width: 400px;\n  width: 90%;\n  animation: _ngcontent-%COMP%_scaleUp 0.25s ease-out;\n}\n@keyframes _ngcontent-%COMP%_scaleUp {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n/*# sourceMappingURL=registrar-nino.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrarNinoComponent, [{
    type: Component,
    args: [{ selector: "app-registrar-nino", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="register-child-page">\r
\r
  <!-- LOADER -->\r
  <div class="loading-overlay" *ngIf="loading">\r
    <div class="loader-card">\r
      <div class="spinner"></div>\r
      <h3>Registrando ni\xF1o...</h3>\r
      <p>Estamos creando su aventura saludable \u{1F680}</p>\r
    </div>\r
  </div>\r
\r
  <div class="top-bar">\r
    <a routerLink="/panel" class="back-link">\r
      \u2190 Volver al panel\r
    </a>\r
  </div>\r
\r
  <section class="register-card">\r
\r
    <div class="header">\r
      <div class="icon">\u{1F467}\u{1F9D2}</div>\r
\r
      <h1>Registrar ni\xF1o</h1>\r
\r
      <p>\r
        Agrega un perfil infantil para comenzar a supervisar h\xE1bitos,\r
        retos y recompensas.\r
      </p>\r
    </div>\r
\r
    <form\r
      #childForm="ngForm"\r
      (ngSubmit)="registrarNino(childForm)"\r
      class="form"\r
    >\r
\r
      <!-- USUARIO -->\r
      <div class="form-group">\r
\r
        <label>Usuario del ni\xF1o</label>\r
\r
        <input\r
          type="text"\r
          name="username"\r
          [(ngModel)]="child.username"\r
          placeholder="Ej. mateo08"\r
          required\r
          minlength="3"\r
          pattern="^[a-zA-Z0-9_]+$"\r
          #usernameRef="ngModel"\r
        />\r
\r
        <small\r
          class="field-error"\r
          *ngIf="usernameRef.invalid && usernameRef.touched"\r
        >\r
          <span *ngIf="usernameRef.errors?.['required']">\r
            El usuario es obligatorio.\r
          </span>\r
\r
          <span *ngIf="usernameRef.errors?.['minlength']">\r
            Debe tener m\xEDnimo 3 caracteres.\r
          </span>\r
\r
          <span *ngIf="usernameRef.errors?.['pattern']">\r
            Solo letras, n\xFAmeros o "_".\r
          </span>\r
        </small>\r
\r
      </div>\r
\r
      <!-- CONTRASE\xD1A -->\r
      <div class="form-group">\r
\r
        <label>Contrase\xF1a</label>\r
\r
        <div class="password-container">\r
\r
          <input\r
            [type]="showPassword ? 'text' : 'password'"\r
            name="password"\r
            [(ngModel)]="child.password"\r
            placeholder="M\xEDnimo 8 caracteres"\r
            required\r
            minlength="8"\r
            pattern="^(?=.*[A-Z])(?=.*[0-9]).{8,}$"\r
            #passwordRef="ngModel"\r
            class="password-input"\r
          />\r
\r
          <button\r
            type="button"\r
            class="toggle-password"\r
            (click)="togglePassword()"\r
          >\r
            <span class="material-icons">\r
              {{ showPassword ? 'visibility_off' : 'visibility' }}\r
            </span>\r
          </button>\r
\r
        </div>\r
\r
        <small\r
          class="field-error"\r
          *ngIf="passwordRef.invalid && passwordRef.touched"\r
        >\r
          <span *ngIf="passwordRef.errors?.['required']">\r
            La contrase\xF1a es obligatoria.\r
          </span>\r
\r
          <span *ngIf="passwordRef.errors?.['minlength']">\r
            Debe tener m\xEDnimo 8 caracteres.\r
          </span>\r
\r
          <span *ngIf="passwordRef.errors?.['pattern']">\r
            Debe incluir una may\xFAscula y un n\xFAmero.\r
          </span>\r
        </small>\r
\r
      </div>\r
\r
      <!-- APODO -->\r
      <div class="form-group">\r
\r
        <label>Apodo</label>\r
\r
        <input\r
          type="text"\r
          name="nickname"\r
          [(ngModel)]="child.nickname"\r
          placeholder="Ej. Mateo"\r
          required\r
          minlength="2"\r
          pattern="^[a-zA-Z\xE1\xE9\xED\xF3\xFA\xC1\xC9\xCD\xD3\xDA\xF1\xD1 ]+$"\r
          #nicknameRef="ngModel"\r
        />\r
\r
        <small\r
          class="field-error"\r
          *ngIf="nicknameRef.invalid && nicknameRef.touched"\r
        >\r
          <span *ngIf="nicknameRef.errors?.['required']">\r
            El apodo es obligatorio.\r
          </span>\r
\r
          <span *ngIf="nicknameRef.errors?.['minlength']">\r
            Debe tener m\xEDnimo 2 caracteres.\r
          </span>\r
\r
          <span *ngIf="nicknameRef.errors?.['pattern']">\r
            Solo se permiten letras.\r
          </span>\r
        </small>\r
\r
      </div>\r
\r
      <!-- EDAD -->\r
      <div class="form-group">\r
\r
        <label>Rango de edad</label>\r
\r
        <select\r
          name="ageRange"\r
          [(ngModel)]="child.ageRange"\r
          required\r
          #ageRangeRef="ngModel"\r
        >\r
          <option value="" disabled>\r
            Selecciona una edad\r
          </option>\r
\r
          <option value="6-8">\r
            6 a 8 a\xF1os\r
          </option>\r
\r
          <option value="9-10">\r
            9 a 10 a\xF1os\r
          </option>\r
\r
          <option value="11-12">\r
            11 a 12 a\xF1os\r
          </option>\r
        </select>\r
\r
        <small\r
          class="field-error"\r
          *ngIf="ageRangeRef.invalid && ageRangeRef.touched"\r
        >\r
          Debes seleccionar una edad.\r
        </small>\r
\r
      </div>\r
\r
      <!-- AVATAR -->\r
      <div class="form-group full">\r
\r
        <label>Avatar</label>\r
\r
        <div class="avatar-grid">\r
\r
          <button\r
            type="button"\r
            class="avatar-option"\r
            [class.selected]="child.avatarCode === 'avatar_1'"\r
            (click)="child.avatarCode = 'avatar_1'"\r
          >\r
            \u{1F9D2}\r
          </button>\r
\r
          <button\r
            type="button"\r
            class="avatar-option"\r
            [class.selected]="child.avatarCode === 'avatar_2'"\r
            (click)="child.avatarCode = 'avatar_2'"\r
          >\r
            \u{1F467}\r
          </button>\r
\r
          <button\r
            type="button"\r
            class="avatar-option"\r
            [class.selected]="child.avatarCode === 'avatar_3'"\r
            (click)="child.avatarCode = 'avatar_3'"\r
          >\r
            \u{1F9E2}\r
          </button>\r
\r
          <button\r
            type="button"\r
            class="avatar-option"\r
            [class.selected]="child.avatarCode === 'avatar_4'"\r
            (click)="child.avatarCode = 'avatar_4'"\r
          >\r
            \u2B50\r
          </button>\r
\r
        </div>\r
\r
      </div>\r
\r
      <!-- ERROR GENERAL -->\r
      <div\r
        *ngIf="errorMessage"\r
        class="error-message"\r
      >\r
        {{ errorMessage }}\r
      </div>\r
\r
      <!-- BOT\xD3N -->\r
      <button\r
        type="submit"\r
        class="submit-btn"\r
        [disabled]="loading || childForm.invalid"\r
      >\r
        {{ loading ? 'Registrando...' : 'Registrar ni\xF1o' }}\r
      </button>\r
\r
    </form>\r
\r
  </section>\r
\r
  <div class="modal-backdrop" *ngIf="showSuccessModal">\r
  <div class="modal-card" style="text-align: center; padding: 30px;">\r
    <div style="font-size: 3.5rem; margin-bottom: 15px; animation: bounce 1.2s infinite;">\u{1F389}</div>\r
    \r
    <h2>\xA1Registro Completado!</h2>\r
    \r
    <p style="color: #666; margin: 15px 0 25px 0; font-size: 0.95rem; line-height: 1.5;">\r
      El perfil de <strong>{{ child.nickname || 'tu ni\xF1o' }}</strong> ha sido creado con \xE9xito.<br>\r
      \xA1Ya puedes comenzar a monitorear sus h\xE1bitos y retos! \u{1F680}\r
    </p>\r
\r
    <div style="display: flex; justify-content: center;">\r
      <button \r
  class="submit-btn" \r
  style="\r
    width: 100%; \r
    max-width: 200px; \r
    margin-top: 10px;\r
    background: linear-gradient(135deg, #4f46e5, #3b82f6);\r
    color: white;\r
    border: none;\r
    padding: 12px 24px;\r
    border-radius: 12px;\r
    font-size: 1rem;\r
    font-weight: 600;\r
    cursor: pointer;\r
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\r
    transition: transform 0.2s, box-shadow 0.2s;\r
  "\r
  onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 6px 16px rgba(59, 130, 246, 0.45)';"\r
  onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 12px rgba(59, 130, 246, 0.3)';"\r
  (click)="irAlPanel()"\r
>\r
  Ir al Panel\r
</button>\r
    </div>\r
  </div>\r
</div>\r
\r
</div>`, styles: ["/* src/app/panel/pages/registrar-nino/registrar-nino.component.scss */\n.register-child-page {\n  min-height: 100vh;\n  background: #eff6ff;\n  padding: 32px;\n  font-family: Arial, sans-serif;\n}\n.top-bar {\n  max-width: 900px;\n  margin: 0 auto 20px;\n}\n.back-link {\n  color: #2563eb;\n  font-weight: bold;\n  text-decoration: none;\n}\n.register-card {\n  max-width: 900px;\n  margin: 0 auto;\n  background: #ffffff;\n  border-radius: 28px;\n  padding: 34px;\n  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.12);\n}\n.header {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.header .icon {\n  font-size: 52px;\n  margin-bottom: 10px;\n}\n.header h1 {\n  color: #1e3a8a;\n  font-size: 34px;\n  margin: 0;\n}\n.header p {\n  color: #64748b;\n  max-width: 540px;\n  margin: 10px auto 0;\n  line-height: 1.5;\n}\n.form {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-group label {\n  color: #334155;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n.form-group input,\n.form-group select {\n  border: 2px solid #dbeafe;\n  border-radius: 16px;\n  padding: 14px 16px;\n  font-size: 15px;\n  outline: none;\n  background: #f8fbff;\n}\n.form-group input:focus,\n.form-group select:focus {\n  border-color: #2563eb;\n  background: #ffffff;\n}\n.full {\n  grid-column: 1/-1;\n}\n.avatar-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 90px);\n  gap: 14px;\n}\n.avatar-option {\n  height: 82px;\n  border: 2px solid #dbeafe;\n  border-radius: 22px;\n  background: #f8fbff;\n  font-size: 34px;\n  cursor: pointer;\n}\n.avatar-option.selected {\n  border-color: #22c55e;\n  background: #f0fdf4;\n  box-shadow: 0 8px 18px rgba(34, 197, 94, 0.18);\n}\n.error-message {\n  grid-column: 1/-1;\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 12px 16px;\n  border-radius: 14px;\n  font-weight: bold;\n}\n.submit-btn {\n  grid-column: 1/-1;\n  border: none;\n  background: #2563eb;\n  color: white;\n  padding: 15px;\n  border-radius: 18px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.submit-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n@media (max-width: 760px) {\n  .form {\n    grid-template-columns: 1fr;\n  }\n  .avatar-grid {\n    grid-template-columns: repeat(2, 90px);\n  }\n}\n.field-error {\n  color: #dc2626;\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 6px;\n}\ninput.ng-invalid.ng-touched,\nselect.ng-invalid.ng-touched {\n  border-color: #dc2626 !important;\n  background: #fff5f5 !important;\n}\ninput.ng-valid.ng-touched,\nselect.ng-valid.ng-touched {\n  border-color: #22c55e !important;\n}\n.loading-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loader-card {\n  background: white;\n  padding: 30px;\n  border-radius: 24px;\n  text-align: center;\n  min-width: 300px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.loader-card h3 {\n  margin-top: 18px;\n  color: #1e3a8a;\n}\n.loader-card p {\n  color: #64748b;\n  margin-bottom: 0;\n}\n.spinner {\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  border: 6px solid #dbeafe;\n  border-top: 6px solid #2563eb;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.password-container {\n  position: relative;\n  width: 100%;\n}\n.password-input {\n  width: 100%;\n  padding-right: 55px !important;\n}\n.toggle-password {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 0;\n}\n.toggle-password .material-icons {\n  font-size: 24px;\n  color: #64748b;\n  line-height: 1;\n  transition: 0.2s;\n}\n.toggle-password:hover .material-icons {\n  color: #2563eb;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.modal-card {\n  background: #ffffff;\n  padding: 30px;\n  border-radius: 16px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  max-width: 400px;\n  width: 90%;\n  animation: scaleUp 0.25s ease-out;\n}\n@keyframes scaleUp {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n/*# sourceMappingURL=registrar-nino.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrarNinoComponent, { className: "RegistrarNinoComponent", filePath: "src/app/panel/pages/registrar-nino/registrar-nino.component.ts", lineNumber: 16 });
})();
export {
  RegistrarNinoComponent
};
//# sourceMappingURL=chunk-CM7VUYYN.js.map

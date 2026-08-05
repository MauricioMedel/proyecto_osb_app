import {
  DefaultValueAccessor,
  EmailValidator,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  PatternValidator,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-HI7UTQF2.js";
import {
  AuthService
} from "./chunk-3T3BQCC5.js";
import {
  CommonModule,
  Component,
  NgIf,
  Router,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4YERQOE2.js";

// src/app/admin/pages/registro-usuario/registro-usuario.component.ts
function RegistroUsuarioComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "div", 31);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Creando cuenta...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Estamos preparando el panel del tutor \u{1F468}\u200D\u{1F469}\u200D\u{1F467}");
    \u0275\u0275elementEnd()()();
  }
}
function RegistroUsuarioComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg, " ");
  }
}
function RegistroUsuarioComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " El nombre de usuario es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function RegistroUsuarioComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " El nombre completo es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function RegistroUsuarioComponent_div_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " El correo es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function RegistroUsuarioComponent_div_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Ingresa un correo v\xE1lido. ");
    \u0275\u0275elementEnd();
  }
}
function RegistroUsuarioComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, RegistroUsuarioComponent_div_23_span_1_Template, 2, 0, "span", 33)(2, RegistroUsuarioComponent_div_23_span_2_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const emailRef_r3 = \u0275\u0275reference(22);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailRef_r3.errors == null ? null : emailRef_r3.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailRef_r3.errors == null ? null : emailRef_r3.errors["email"]);
  }
}
function RegistroUsuarioComponent_div_30_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" 10 caracteres (te ", ctx_r1.remainingCharacters === 1 ? "falta" : "faltan", " ", ctx_r1.remainingCharacters, " m\xE1s) ");
  }
}
function RegistroUsuarioComponent_div_30_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "10 caracteres como m\xEDnimo");
    \u0275\u0275elementEnd();
  }
}
function RegistroUsuarioComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "p", 35);
    \u0275\u0275text(2, "Tu contrase\xF1a debe incluir:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, RegistroUsuarioComponent_div_30_span_6_Template, 2, 2, "span", 33)(7, RegistroUsuarioComponent_div_30_span_7_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36)(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Al menos una letra may\xFAscula ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 36)(13, "span", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Al menos un car\xE1cter especial (por ejemplo: !, @, #, $) ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("valid", ctx_r1.hasMinimumLength);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hasMinimumLength ? "\u2713" : "\u2022");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasMinimumLength);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasMinimumLength);
    \u0275\u0275advance();
    \u0275\u0275classProp("valid", ctx_r1.hasUppercase);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hasUppercase ? "\u2713" : "\u2022");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("valid", ctx_r1.hasSpecialCharacter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hasSpecialCharacter ? "\u2713" : "\u2022");
  }
}
function RegistroUsuarioComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40);
    \u0275\u0275text(3, "\u{1F973}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 41);
    \u0275\u0275text(5, "\xA1Cuenta Creada!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 42);
    \u0275\u0275text(7, " Tu perfil de tutor ha sido configurado con \xE9xito. ");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9, " \xA1Ya puedes ingresar para comenzar a gestionar la aventura saludable de tus ni\xF1os! \u{1F9D2}\u{1F467} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 43)(11, "button", 44);
    \u0275\u0275listener("click", function RegistroUsuarioComponent_div_37_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irAlLogin());
    });
    \u0275\u0275text(12, " Continuar al Login ");
    \u0275\u0275elementEnd()()()();
  }
}
var RegistroUsuarioComponent = class _RegistroUsuarioComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.username = "";
    this.displayName = "";
    this.email = "";
    this.password = "";
    this.loading = false;
    this.errorMsg = "";
    this.showPassword = false;
    this.showSuccessModal = false;
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  get hasMinimumLength() {
    return this.password.length >= 10;
  }
  get hasUppercase() {
    return /[A-Z]/.test(this.password);
  }
  get hasSpecialCharacter() {
    return /[^A-Za-z0-9\s]/.test(this.password);
  }
  get remainingCharacters() {
    return Math.max(0, 10 - this.password.length);
  }
  register() {
    if (!this.username || !this.email || !this.password) {
      this.errorMsg = "Completa todos los campos obligatorios";
      return;
    }
    this.loading = true;
    this.errorMsg = "";
    this.auth.register({
      username: this.username,
      email: this.email,
      password: this.password,
      displayName: this.displayName
    }).subscribe({
      next: () => {
        this.loading = false;
        this.showSuccessModal = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "No se pudo registrar el usuario";
      }
    });
  }
  // 🌟 3. Agrega este método para manejar la redirección al presionar el botón del modal
  irAlLogin() {
    this.showSuccessModal = false;
    this.router.navigate(["/login"]);
  }
  goLogin() {
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function RegistroUsuarioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegistroUsuarioComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistroUsuarioComponent, selectors: [["app-registro-usuario"]], decls: 38, vars: 15, consts: [["registerForm", "ngForm"], ["usernameRef", "ngModel"], ["displayNameRef", "ngModel"], ["emailRef", "ngModel"], ["passwordRef", "ngModel"], [1, "register-page"], ["class", "loading-overlay", 4, "ngIf"], [1, "bubble", "bubble-one"], [1, "bubble", "bubble-two"], [1, "bubble", "bubble-three"], [1, "register-card"], [1, "logo-box"], ["src", "assets/images/logoo.png", "alt", "Logo ObesiApp"], [1, "register-title"], [1, "register-subtitle"], ["class", "register-error", 4, "ngIf"], [3, "ngSubmit"], ["name", "username", "type", "text", "placeholder", "Nombre de usuario", "required", "", 1, "register-input", 3, "ngModelChange", "ngModel"], ["name", "displayName", "type", "text", "placeholder", "Nombre completo del tutor", "required", "", 1, "register-input", 3, "ngModelChange", "ngModel"], ["name", "email", "type", "email", "placeholder", "Correo electr\xF3nico", "required", "", "email", "", 1, "register-input", 3, "ngModelChange", "ngModel"], [1, "password-container"], ["name", "password", "placeholder", "Crear contrase\xF1a", "required", "", "minlength", "10", "pattern", "^(?=.*[A-Z])(?=.*[^A-Za-z0-9 ]).{10,}$", 1, "register-input", "password-input", 3, "ngModelChange", "ngModel", "type"], ["type", "button", 1, "toggle-password", 3, "click"], [1, "material-icons"], ["class", "password-requirements", "aria-live", "polite", 4, "ngIf"], ["type", "submit", 1, "register-button", 3, "disabled"], [1, "register-login"], [3, "click"], ["class", "modal-backdrop", "style", "\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(4px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 9999;\n  ", 4, "ngIf"], [1, "loading-overlay"], [1, "loader-card"], [1, "spinner"], [1, "register-error"], [4, "ngIf"], ["aria-live", "polite", 1, "password-requirements"], [1, "requirements-title"], [1, "password-requirement"], [1, "requirement-icon"], [1, "modal-backdrop", 2, "position", "fixed", "top", "0", "left", "0", "width", "100vw", "height", "100vh", "background", "rgba(0, 0, 0, 0.4)", "backdrop-filter", "blur(4px)", "display", "flex", "justify-content", "center", "align-items", "center", "z-index", "9999"], [1, "modal-card", 2, "background", "#ffffff", "padding", "35px 30px", "border-radius", "20px", "box-shadow", "0 12px 30px rgba(0, 0, 0, 0.15)", "max-width", "420px", "width", "90%", "text-align", "center"], [2, "font-size", "3.8rem", "margin-bottom", "15px"], [2, "color", "#2c3e50", "font-size", "1.6rem", "font-weight", "700", "margin-bottom", "10px"], [2, "color", "#666", "margin", "0 0 25px 0", "font-size", "0.95rem", "line-height", "1.6"], [2, "display", "flex", "justify-content", "center"], ["type", "button", "onmouseover", "this.style.transform='scale(1.03)'; this.style.boxShadow='0 6px 18px rgba(59, 130, 246, 0.5)';", "onmouseout", "this.style.transform='scale(1)'; this.style.boxShadow='0 4px 14px rgba(59, 130, 246, 0.35)';", 2, "width", "100%", "max-width", "220px", "background", "linear-gradient(135deg, #4f46e5, #3b82f6)", "color", "white", "border", "none", "padding", "13px 28px", "border-radius", "12px", "font-size", "1rem", "font-weight", "600", "cursor", "pointer", "box-shadow", "0 4px 14px rgba(59, 130, 246, 0.35)", "transition", "transform 0.2s, box-shadow 0.2s", 3, "click"]], template: function RegistroUsuarioComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 5);
        \u0275\u0275template(1, RegistroUsuarioComponent_div_1_Template, 7, 0, "div", 6);
        \u0275\u0275element(2, "div", 7)(3, "div", 8)(4, "div", 9);
        \u0275\u0275elementStart(5, "div", 10)(6, "div", 11);
        \u0275\u0275element(7, "img", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h2", 13);
        \u0275\u0275text(9, "Crear cuenta de tutor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 14);
        \u0275\u0275text(11, " Reg\xEDstrate para dar seguimiento al progreso f\xEDsico de tus ni\xF1os, monitorear su evoluci\xF3n y fomentar h\xE1bitos saludables. ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, RegistroUsuarioComponent_div_12_Template, 2, 1, "div", 15);
        \u0275\u0275elementStart(13, "form", 16, 0);
        \u0275\u0275listener("ngSubmit", function RegistroUsuarioComponent_Template_form_ngSubmit_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.register());
        });
        \u0275\u0275elementStart(15, "input", 17, 1);
        \u0275\u0275twoWayListener("ngModelChange", function RegistroUsuarioComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, RegistroUsuarioComponent_div_17_Template, 2, 0, "div", 15);
        \u0275\u0275elementStart(18, "input", 18, 2);
        \u0275\u0275twoWayListener("ngModelChange", function RegistroUsuarioComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.displayName, $event) || (ctx.displayName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, RegistroUsuarioComponent_div_20_Template, 2, 0, "div", 15);
        \u0275\u0275elementStart(21, "input", 19, 3);
        \u0275\u0275twoWayListener("ngModelChange", function RegistroUsuarioComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, RegistroUsuarioComponent_div_23_Template, 3, 2, "div", 15);
        \u0275\u0275elementStart(24, "div", 20)(25, "input", 21, 4);
        \u0275\u0275twoWayListener("ngModelChange", function RegistroUsuarioComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 22);
        \u0275\u0275listener("click", function RegistroUsuarioComponent_Template_button_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.togglePassword());
        });
        \u0275\u0275elementStart(28, "span", 23);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(30, RegistroUsuarioComponent_div_30_Template, 16, 11, "div", 24);
        \u0275\u0275elementStart(31, "button", 25);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p", 26);
        \u0275\u0275text(34, " \xBFYa tienes una cuenta? ");
        \u0275\u0275elementStart(35, "a", 27);
        \u0275\u0275listener("click", function RegistroUsuarioComponent_Template_a_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goLogin());
        });
        \u0275\u0275text(36, "Iniciar sesi\xF3n");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(37, RegistroUsuarioComponent_div_37_Template, 13, 0, "div", 28);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const registerForm_r5 = \u0275\u0275reference(14);
        const usernameRef_r6 = \u0275\u0275reference(16);
        const displayNameRef_r7 = \u0275\u0275reference(19);
        const emailRef_r3 = \u0275\u0275reference(22);
        const passwordRef_r8 = \u0275\u0275reference(26);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.errorMsg);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.username);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", usernameRef_r6.invalid && usernameRef_r6.touched);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.displayName);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", displayNameRef_r7.invalid && displayNameRef_r7.touched);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", emailRef_r3.invalid && emailRef_r3.touched);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "visibility_off" : "visibility", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", passwordRef_r8.touched || ctx.password.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading || registerForm_r5.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Creando cuenta..." : "Registrarme como tutor", " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.showSuccessModal);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, PatternValidator, EmailValidator, NgModel, NgForm], styles: ["\n\n.register-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe,\n      #f0fdf4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  position: relative;\n  overflow: hidden;\n}\n.register-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  background: rgba(255, 255, 255, 0.92);\n  border-radius: 28px;\n  padding: 34px 36px;\n  box-shadow: 0 20px 45px rgba(37, 99, 235, 0.18);\n  animation: _ngcontent-%COMP%_fadeRegister 0.6s ease;\n  position: relative;\n  z-index: 2;\n}\n.logo-box[_ngcontent-%COMP%] {\n  width: 105px;\n  height: 105px;\n  margin: 0 auto 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_floatLogo 2.8s ease-in-out infinite;\n}\n.logo-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  border-radius: 18px;\n}\n.register-title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #1e3a8a;\n  font-weight: 800;\n  font-size: 28px;\n  margin: 0 0 10px;\n}\n.register-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #64748b;\n  font-size: 15px;\n  line-height: 1.5;\n  margin-bottom: 24px;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.register-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px;\n  border-radius: 16px;\n  border: 2px solid #dbeafe;\n  margin-bottom: 14px;\n  font-size: 15px;\n  background: #f8fbff;\n  box-sizing: border-box;\n  transition: 0.25s ease;\n}\n.register-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.register-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  background: #ffffff;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);\n}\n.register-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 11px 14px;\n  border-radius: 14px;\n  margin-bottom: 14px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.password-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-bottom: 14px;\n}\n.password-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 55px 14px 16px;\n  margin-bottom: 0;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 0;\n}\n.toggle-password[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #64748b;\n  line-height: 1;\n  transition: 0.2s;\n}\n.toggle-password[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.password-requirements[_ngcontent-%COMP%] {\n  margin: -4px 0 16px;\n  padding: 12px 14px;\n  border: 1px solid #dbeafe;\n  border-radius: 14px;\n  background: #f8fafc;\n}\n.requirements-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 700;\n}\n.password-requirement[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 5px;\n  color: #dc2626;\n  font-size: 13px;\n  line-height: 1.35;\n  transition: color 0.2s ease;\n}\n.password-requirement.valid[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.requirement-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  flex: 0 0 14px;\n  font-weight: 800;\n  text-align: center;\n}\n.register-button[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  width: 100%;\n  padding: 14px;\n  border: none;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  color: white;\n  font-weight: 800;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.25s ease;\n}\n.register-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.25);\n}\n.register-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n.register-login[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 14px;\n  color: #64748b;\n}\n.register-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 800;\n  margin-left: 4px;\n  cursor: pointer;\n  text-decoration: none;\n}\n.register-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loader-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 24px;\n  text-align: center;\n  min-width: 300px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.loader-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  color: #1e3a8a;\n}\n.loader-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 0;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  border: 6px solid #dbeafe;\n  border-top: 6px solid #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0.35;\n  animation: _ngcontent-%COMP%_moveBubble 6s ease-in-out infinite;\n}\n.bubble-one[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  background: #93c5fd;\n  top: 80px;\n  left: 80px;\n}\n.bubble-two[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  background: #86efac;\n  right: 120px;\n  bottom: 100px;\n  animation-delay: 1s;\n}\n.bubble-three[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  background: #facc15;\n  right: 26%;\n  top: 120px;\n  animation-delay: 2s;\n}\n@keyframes _ngcontent-%COMP%_fadeRegister {\n  from {\n    opacity: 0;\n    transform: translateY(22px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatLogo {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes _ngcontent-%COMP%_moveBubble {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-18px);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 500px) {\n  .register-card[_ngcontent-%COMP%] {\n    padding: 30px 24px;\n  }\n}\n/*# sourceMappingURL=registro-usuario.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistroUsuarioComponent, [{
    type: Component,
    args: [{ selector: "app-registro-usuario", standalone: true, imports: [CommonModule, FormsModule], template: `<section class="register-page">\r
\r
  <div class="loading-overlay" *ngIf="loading">\r
    <div class="loader-card">\r
      <div class="spinner"></div>\r
      <h3>Creando cuenta...</h3>\r
      <p>Estamos preparando el panel del tutor \u{1F468}\u200D\u{1F469}\u200D\u{1F467}</p>\r
    </div>\r
  </div>\r
\r
  <div class="bubble bubble-one"></div>\r
  <div class="bubble bubble-two"></div>\r
  <div class="bubble bubble-three"></div>\r
\r
  <div class="register-card">\r
\r
    <div class="logo-box">\r
      <img src="assets/images/logoo.png" alt="Logo ObesiApp">\r
    </div>\r
\r
    <h2 class="register-title">Crear cuenta de tutor</h2>\r
\r
    <p class="register-subtitle">\r
      Reg\xEDstrate para dar seguimiento al progreso f\xEDsico de tus ni\xF1os,\r
      monitorear su evoluci\xF3n y fomentar h\xE1bitos saludables.\r
    </p>\r
\r
    <div *ngIf="errorMsg" class="register-error">\r
      {{ errorMsg }}\r
    </div>\r
\r
    <form #registerForm="ngForm" (ngSubmit)="register()">\r
\r
      <input [(ngModel)]="username" name="username" type="text" placeholder="Nombre de usuario" class="register-input"\r
        required #usernameRef="ngModel" />\r
\r
      <div class="register-error" *ngIf="usernameRef.invalid && usernameRef.touched">\r
        El nombre de usuario es obligatorio.\r
      </div>\r
\r
      <input [(ngModel)]="displayName" name="displayName" type="text" placeholder="Nombre completo del tutor"\r
        class="register-input" required #displayNameRef="ngModel" />\r
\r
      <div class="register-error" *ngIf="displayNameRef.invalid && displayNameRef.touched">\r
        El nombre completo es obligatorio.\r
      </div>\r
\r
      <input [(ngModel)]="email" name="email" type="email" placeholder="Correo electr\xF3nico" class="register-input"\r
        required email #emailRef="ngModel" />\r
\r
      <div class="register-error" *ngIf="emailRef.invalid && emailRef.touched">\r
        <span *ngIf="emailRef.errors?.['required']">\r
          El correo es obligatorio.\r
        </span>\r
\r
        <span *ngIf="emailRef.errors?.['email']">\r
          Ingresa un correo v\xE1lido.\r
        </span>\r
      </div>\r
\r
      <div class="password-container">\r
\r
        <input [(ngModel)]="password" name="password" [type]="showPassword ? 'text' : 'password'"\r
          placeholder="Crear contrase\xF1a" class="register-input password-input" required minlength="10"\r
          pattern="^(?=.*[A-Z])(?=.*[^A-Za-z0-9 ]).{10,}$" #passwordRef="ngModel" />\r
\r
        <button type="button" class="toggle-password" (click)="togglePassword()">\r
          <span class="material-icons">\r
            {{ showPassword ? 'visibility_off' : 'visibility' }}\r
          </span>\r
        </button>\r
\r
      </div>\r
\r
      <div class="password-requirements" *ngIf="passwordRef.touched || password.length > 0" aria-live="polite">\r
        <p class="requirements-title">Tu contrase\xF1a debe incluir:</p>\r
\r
        <div class="password-requirement" [class.valid]="hasMinimumLength">\r
          <span class="requirement-icon">{{ hasMinimumLength ? '\u2713' : '\u2022' }}</span>\r
          <span *ngIf="!hasMinimumLength">\r
            10 caracteres (te {{ remainingCharacters === 1 ? 'falta' : 'faltan' }}\r
            {{ remainingCharacters }} m\xE1s)\r
          </span>\r
          <span *ngIf="hasMinimumLength">10 caracteres como m\xEDnimo</span>\r
        </div>\r
\r
        <div class="password-requirement" [class.valid]="hasUppercase">\r
          <span class="requirement-icon">{{ hasUppercase ? '\u2713' : '\u2022' }}</span>\r
          Al menos una letra may\xFAscula\r
        </div>\r
\r
        <div class="password-requirement" [class.valid]="hasSpecialCharacter">\r
          <span class="requirement-icon">{{ hasSpecialCharacter ? '\u2713' : '\u2022' }}</span>\r
          Al menos un car\xE1cter especial (por ejemplo: !, &#64;, #, $)\r
        </div>\r
      </div>\r
\r
      <button type="submit" [disabled]="loading || registerForm.invalid" class="register-button">\r
        {{ loading ? 'Creando cuenta...' : 'Registrarme como tutor' }}\r
      </button>\r
\r
      <p class="register-login">\r
        \xBFYa tienes una cuenta?\r
        <a (click)="goLogin()">Iniciar sesi\xF3n</a>\r
      </p>\r
\r
    </form>\r
\r
  </div>\r
\r
  <div class="modal-backdrop" *ngIf="showSuccessModal" style="\r
    position: fixed;\r
    top: 0;\r
    left: 0;\r
    width: 100vw;\r
    height: 100vh;\r
    background: rgba(0, 0, 0, 0.4);\r
    backdrop-filter: blur(4px);\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    z-index: 9999;\r
  ">\r
    <div class="modal-card" style="\r
      background: #ffffff;\r
      padding: 35px 30px;\r
      border-radius: 20px;\r
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);\r
      max-width: 420px;\r
      width: 90%;\r
      text-align: center;\r
    ">\r
      <div style="font-size: 3.8rem; margin-bottom: 15px;">\u{1F973}</div>\r
\r
      <h2 style="color: #2c3e50; font-size: 1.6rem; font-weight: 700; margin-bottom: 10px;">\xA1Cuenta Creada!</h2>\r
\r
      <p style="color: #666; margin: 0 0 25px 0; font-size: 0.95rem; line-height: 1.6;">\r
        Tu perfil de tutor ha sido configurado con \xE9xito. <br>\r
        \xA1Ya puedes ingresar para comenzar a gestionar la aventura saludable de tus ni\xF1os! \u{1F9D2}\u{1F467}\r
      </p>\r
\r
      <div style="display: flex; justify-content: center;">\r
        <button type="button" style="\r
            width: 100%; \r
            max-width: 220px; \r
            background: linear-gradient(135deg, #4f46e5, #3b82f6);\r
            color: white;\r
            border: none;\r
            padding: 13px 28px;\r
            border-radius: 12px;\r
            font-size: 1rem;\r
            font-weight: 600;\r
            cursor: pointer;\r
            box-shadow: 0 4px 14px rgba(59, 130, 246, 0.35);\r
            transition: transform 0.2s, box-shadow 0.2s;\r
          "\r
          onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 6px 18px rgba(59, 130, 246, 0.5)';"\r
          onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 14px rgba(59, 130, 246, 0.35)';"\r
          (click)="irAlLogin()">\r
          Continuar al Login\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
</section>`, styles: ["/* src/app/admin/pages/registro-usuario/registro-usuario.component.scss */\n.register-page {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe,\n      #f0fdf4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  position: relative;\n  overflow: hidden;\n}\n.register-card {\n  width: 100%;\n  max-width: 480px;\n  background: rgba(255, 255, 255, 0.92);\n  border-radius: 28px;\n  padding: 34px 36px;\n  box-shadow: 0 20px 45px rgba(37, 99, 235, 0.18);\n  animation: fadeRegister 0.6s ease;\n  position: relative;\n  z-index: 2;\n}\n.logo-box {\n  width: 105px;\n  height: 105px;\n  margin: 0 auto 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: floatLogo 2.8s ease-in-out infinite;\n}\n.logo-box img {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  border-radius: 18px;\n}\n.register-title {\n  text-align: center;\n  color: #1e3a8a;\n  font-weight: 800;\n  font-size: 28px;\n  margin: 0 0 10px;\n}\n.register-subtitle {\n  text-align: center;\n  color: #64748b;\n  font-size: 15px;\n  line-height: 1.5;\n  margin-bottom: 24px;\n}\nform {\n  display: flex;\n  flex-direction: column;\n}\n.register-input {\n  width: 100%;\n  padding: 14px 16px;\n  border-radius: 16px;\n  border: 2px solid #dbeafe;\n  margin-bottom: 14px;\n  font-size: 15px;\n  background: #f8fbff;\n  box-sizing: border-box;\n  transition: 0.25s ease;\n}\n.register-input::placeholder {\n  color: #94a3b8;\n}\n.register-input:focus {\n  outline: none;\n  border-color: #2563eb;\n  background: #ffffff;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);\n}\n.register-error {\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 11px 14px;\n  border-radius: 14px;\n  margin-bottom: 14px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.password-container {\n  position: relative;\n  width: 100%;\n  margin-bottom: 14px;\n}\n.password-input {\n  width: 100%;\n  padding: 14px 55px 14px 16px;\n  margin-bottom: 0;\n}\n.toggle-password {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 0;\n}\n.toggle-password .material-icons {\n  font-size: 24px;\n  color: #64748b;\n  line-height: 1;\n  transition: 0.2s;\n}\n.toggle-password:hover .material-icons {\n  color: #2563eb;\n}\n.password-requirements {\n  margin: -4px 0 16px;\n  padding: 12px 14px;\n  border: 1px solid #dbeafe;\n  border-radius: 14px;\n  background: #f8fafc;\n}\n.requirements-title {\n  margin: 0 0 8px;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 700;\n}\n.password-requirement {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 5px;\n  color: #dc2626;\n  font-size: 13px;\n  line-height: 1.35;\n  transition: color 0.2s ease;\n}\n.password-requirement.valid {\n  color: #15803d;\n}\n.requirement-icon {\n  width: 14px;\n  flex: 0 0 14px;\n  font-weight: 800;\n  text-align: center;\n}\n.register-button {\n  margin-top: 6px;\n  width: 100%;\n  padding: 14px;\n  border: none;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  color: white;\n  font-weight: 800;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.25s ease;\n}\n.register-button:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.25);\n}\n.register-button:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n.register-login {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 14px;\n  color: #64748b;\n}\n.register-login a {\n  color: #2563eb;\n  font-weight: 800;\n  margin-left: 4px;\n  cursor: pointer;\n  text-decoration: none;\n}\n.register-login a:hover {\n  text-decoration: underline;\n}\n.loading-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loader-card {\n  background: white;\n  padding: 30px;\n  border-radius: 24px;\n  text-align: center;\n  min-width: 300px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.loader-card h3 {\n  margin-top: 18px;\n  color: #1e3a8a;\n}\n.loader-card p {\n  color: #64748b;\n  margin-bottom: 0;\n}\n.spinner {\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  border: 6px solid #dbeafe;\n  border-top: 6px solid #2563eb;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.bubble {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0.35;\n  animation: moveBubble 6s ease-in-out infinite;\n}\n.bubble-one {\n  width: 180px;\n  height: 180px;\n  background: #93c5fd;\n  top: 80px;\n  left: 80px;\n}\n.bubble-two {\n  width: 130px;\n  height: 130px;\n  background: #86efac;\n  right: 120px;\n  bottom: 100px;\n  animation-delay: 1s;\n}\n.bubble-three {\n  width: 90px;\n  height: 90px;\n  background: #facc15;\n  right: 26%;\n  top: 120px;\n  animation-delay: 2s;\n}\n@keyframes fadeRegister {\n  from {\n    opacity: 0;\n    transform: translateY(22px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes floatLogo {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes moveBubble {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-18px);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 500px) {\n  .register-card {\n    padding: 30px 24px;\n  }\n}\n/*# sourceMappingURL=registro-usuario.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistroUsuarioComponent, { className: "RegistroUsuarioComponent", filePath: "src/app/admin/pages/registro-usuario/registro-usuario.component.ts", lineNumber: 14 });
})();
export {
  RegistroUsuarioComponent
};
//# sourceMappingURL=chunk-DNQQRCOH.js.map

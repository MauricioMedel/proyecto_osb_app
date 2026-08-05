import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4YERQOE2.js";

// src/app/admin/pages/login/login.component.ts
function LoginComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275element(2, "div", 21);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Iniciando sesi\xF3n...");
    \u0275\u0275elementEnd()()();
  }
}
function LoginComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.username = "";
    this.password = "";
    this.loading = false;
    this.errorMsg = "";
    this.showPassword = false;
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  login() {
    if (!this.username || !this.password) {
      this.errorMsg = "Ingresa usuario y contrase\xF1a";
      return;
    }
    this.loading = true;
    this.errorMsg = "";
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.loading = false;
        const user = this.auth.getCurrentUser();
        this.username = "";
        this.password = "";
        if (user?.role === "admin") {
          this.router.navigate(["/administrador"]);
        } else if (user?.role === "guardian") {
          this.router.navigate(["/panel"]);
        } else if (user?.role === "child") {
          this.router.navigate(["/menu"]);
        } else {
          this.router.navigate(["/"]);
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.error?.message || "Error al iniciar sesi\xF3n";
        this.username = "";
        this.password = "";
      }
    });
  }
  // =============================
  // NAVEGACIÓN
  // =============================
  goHome() {
    this.router.navigate(["/"]);
  }
  goRegister() {
    this.router.navigate(["/registro_usuario"]);
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 27, vars: 8, consts: [[1, "login-page"], ["class", "loading-overlay", 4, "ngIf"], [1, "bubble", "bubble-one"], [1, "bubble", "bubble-two"], [1, "bubble", "bubble-three"], [1, "login-container"], [1, "logo-box"], ["src", "assets/images/logoo.png", "alt", "Logo ObesiApp"], [1, "login-subtitle"], ["class", "login-error", 4, "ngIf"], ["placeholder", "Usuario", 1, "login-input", 3, "ngModelChange", "ngModel"], [1, "password-container"], ["placeholder", "Contrase\xF1a", 1, "login-input", "password-input", 3, "ngModelChange", "ngModel", "type"], ["type", "button", 1, "toggle-password", 3, "click"], [1, "material-icons"], [1, "login-button", 3, "click", "disabled"], [1, "login-register"], [3, "click"], [1, "register-home", 3, "click"], [1, "loading-overlay"], [1, "loader-card"], [1, "spinner"], [1, "login-error"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, LoginComponent_div_1_Template, 5, 0, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
        \u0275\u0275element(7, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h2");
        \u0275\u0275text(9, "Iniciar Sesi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11, "Contin\xFAa tu aventura saludable");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, LoginComponent_div_12_Template, 2, 1, "div", 9);
        \u0275\u0275elementStart(13, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 13);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_16_listener() {
          return ctx.togglePassword();
        });
        \u0275\u0275elementStart(17, "span", 14);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "button", 15);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_19_listener() {
          return ctx.login();
        });
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p", 16);
        \u0275\u0275text(22, " \xBFNo tienes cuenta? ");
        \u0275\u0275elementStart(23, "a", 17);
        \u0275\u0275listener("click", function LoginComponent_Template_a_click_23_listener() {
          return ctx.goRegister();
        });
        \u0275\u0275text(24, "Reg\xEDstrate aqu\xED");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "button", 18);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_25_listener() {
          return ctx.goHome();
        });
        \u0275\u0275text(26, " \u2190 Volver al inicio ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.errorMsg);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.username);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "visibility_off" : "visibility", " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Entrando..." : "Entrar", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe,\n      #f0fdf4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n}\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 430px;\n  margin-top: -20px;\n  padding: 38px;\n  background: rgba(255, 255, 255, 0.92);\n  border-radius: 28px;\n  box-shadow: 0 20px 45px rgba(37, 99, 235, 0.18);\n  text-align: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease;\n  position: relative;\n  z-index: 2;\n}\n.logo-box[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  margin: 0 auto 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_floatLogo 2.8s ease-in-out infinite;\n}\n.logo-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  border-radius: 18px;\n}\n.login-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  font-weight: 800;\n  font-size: 30px;\n  margin: 0;\n}\n.login-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 8px 0 24px;\n  font-size: 15px;\n}\n.login-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 12px;\n  border-radius: 14px;\n  margin-bottom: 16px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.login-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px;\n  border-radius: 16px;\n  border: 2px solid #dbeafe;\n  margin-bottom: 14px;\n  font-size: 15px;\n  background: #f8fbff;\n  box-sizing: border-box;\n  transition: 0.25s ease;\n}\n.login-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  background: #ffffff;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);\n}\n.password-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-bottom: 14px;\n}\n.password-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 55px 14px 16px;\n  margin-bottom: 0;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 0;\n}\n.toggle-password[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #64748b;\n  line-height: 1;\n  transition: 0.2s;\n}\n.toggle-password[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border-radius: 18px;\n  border: none;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  color: white;\n  font-weight: 800;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.25s ease;\n  margin-top: 6px;\n}\n.login-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.25);\n}\n.login-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n.login-register[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 14px;\n  color: #64748b;\n}\n.login-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 800;\n  margin-left: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.login-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.register-home[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 25px;\n  left: 25px;\n  padding: 11px 18px;\n  border-radius: 14px;\n  border: none;\n  background: white;\n  color: #1e3a8a;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.12);\n  transition: 0.25s ease;\n  z-index: 3;\n}\n.register-home[_ngcontent-%COMP%]:hover {\n  background: #1e3a8a;\n  color: white;\n  transform: translateY(-2px);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loader-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 24px;\n  text-align: center;\n  min-width: 300px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.loader-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  color: #1e3a8a;\n}\n.loader-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 0;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  border: 6px solid #dbeafe;\n  border-top: 6px solid #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0.35;\n  animation: _ngcontent-%COMP%_moveBubble 6s ease-in-out infinite;\n}\n.bubble-one[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  background: #93c5fd;\n  top: 80px;\n  left: 80px;\n}\n.bubble-two[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  background: #86efac;\n  right: 120px;\n  bottom: 100px;\n  animation-delay: 1s;\n}\n.bubble-three[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  background: #facc15;\n  right: 26%;\n  top: 120px;\n  animation-delay: 2s;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(22px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatLogo {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes _ngcontent-%COMP%_moveBubble {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-18px);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 500px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 30px 24px;\n    margin-top: 0;\n  }\n  .register-home[_ngcontent-%COMP%] {\n    position: static;\n    margin-top: 18px;\n  }\n  .login-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="login-page">\r
\r
  <div class="loading-overlay" *ngIf="loading">\r
    <div class="loader-card">\r
      <div class="spinner"></div>\r
      <h3>Iniciando sesi\xF3n...</h3>\r
    </div>\r
  </div>\r
\r
  <div class="bubble bubble-one"></div>\r
  <div class="bubble bubble-two"></div>\r
  <div class="bubble bubble-three"></div>\r
\r
  <div class="login-container">\r
\r
    <div class="logo-box">\r
<img src="assets/images/logoo.png" alt="Logo ObesiApp">\r
    </div>\r
\r
    <h2>Iniciar Sesi\xF3n</h2>\r
    <p class="login-subtitle">Contin\xFAa tu aventura saludable</p>\r
\r
    <div *ngIf="errorMsg" class="login-error">\r
      {{ errorMsg }}\r
    </div>\r
\r
    <input\r
      [(ngModel)]="username"\r
      placeholder="Usuario"\r
      class="login-input"\r
    />\r
\r
    <div class="password-container">\r
\r
  <input\r
    [(ngModel)]="password"\r
    [type]="showPassword ? 'text' : 'password'"\r
    placeholder="Contrase\xF1a"\r
    class="login-input password-input"\r
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
    <button\r
      (click)="login()"\r
      [disabled]="loading"\r
      class="login-button"\r
    >\r
      {{ loading ? 'Entrando...' : 'Entrar' }}\r
    </button>\r
\r
    <p class="login-register">\r
      \xBFNo tienes cuenta?\r
      <a (click)="goRegister()">Reg\xEDstrate aqu\xED</a>\r
    </p>\r
\r
  </div>\r
\r
  <button class="register-home" (click)="goHome()">\r
    \u2190 Volver al inicio\r
  </button>\r
\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/admin/pages/login/login.component.scss */\n.login-page {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe,\n      #f0fdf4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n}\n.login-container {\n  width: 100%;\n  max-width: 430px;\n  margin-top: -20px;\n  padding: 38px;\n  background: rgba(255, 255, 255, 0.92);\n  border-radius: 28px;\n  box-shadow: 0 20px 45px rgba(37, 99, 235, 0.18);\n  text-align: center;\n  animation: fadeIn 0.6s ease;\n  position: relative;\n  z-index: 2;\n}\n.logo-box {\n  width: 110px;\n  height: 110px;\n  margin: 0 auto 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: floatLogo 2.8s ease-in-out infinite;\n}\n.logo-box img {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  border-radius: 18px;\n}\n.login-container h2 {\n  color: #1e3a8a;\n  font-weight: 800;\n  font-size: 30px;\n  margin: 0;\n}\n.login-subtitle {\n  color: #64748b;\n  margin: 8px 0 24px;\n  font-size: 15px;\n}\n.login-error {\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 12px;\n  border-radius: 14px;\n  margin-bottom: 16px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.login-input {\n  width: 100%;\n  padding: 14px 16px;\n  border-radius: 16px;\n  border: 2px solid #dbeafe;\n  margin-bottom: 14px;\n  font-size: 15px;\n  background: #f8fbff;\n  box-sizing: border-box;\n  transition: 0.25s ease;\n}\n.login-input:focus {\n  outline: none;\n  border-color: #2563eb;\n  background: #ffffff;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);\n}\n.password-container {\n  position: relative;\n  width: 100%;\n  margin-bottom: 14px;\n}\n.password-input {\n  width: 100%;\n  padding: 14px 55px 14px 16px;\n  margin-bottom: 0;\n}\n.toggle-password {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 0;\n}\n.toggle-password .material-icons {\n  font-size: 24px;\n  color: #64748b;\n  line-height: 1;\n  transition: 0.2s;\n}\n.toggle-password:hover .material-icons {\n  color: #2563eb;\n}\n.login-button {\n  width: 100%;\n  padding: 14px;\n  border-radius: 18px;\n  border: none;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #22c55e);\n  color: white;\n  font-weight: 800;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.25s ease;\n  margin-top: 6px;\n}\n.login-button:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.25);\n}\n.login-button:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n.login-register {\n  margin-top: 20px;\n  font-size: 14px;\n  color: #64748b;\n}\n.login-register a {\n  color: #2563eb;\n  font-weight: 800;\n  margin-left: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.login-register a:hover {\n  text-decoration: underline;\n}\n.register-home {\n  position: fixed;\n  bottom: 25px;\n  left: 25px;\n  padding: 11px 18px;\n  border-radius: 14px;\n  border: none;\n  background: white;\n  color: #1e3a8a;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.12);\n  transition: 0.25s ease;\n  z-index: 3;\n}\n.register-home:hover {\n  background: #1e3a8a;\n  color: white;\n  transform: translateY(-2px);\n}\n.loading-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loader-card {\n  background: white;\n  padding: 30px;\n  border-radius: 24px;\n  text-align: center;\n  min-width: 300px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.loader-card h3 {\n  margin-top: 18px;\n  color: #1e3a8a;\n}\n.loader-card p {\n  color: #64748b;\n  margin-bottom: 0;\n}\n.spinner {\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  border: 6px solid #dbeafe;\n  border-top: 6px solid #2563eb;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.bubble {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0.35;\n  animation: moveBubble 6s ease-in-out infinite;\n}\n.bubble-one {\n  width: 180px;\n  height: 180px;\n  background: #93c5fd;\n  top: 80px;\n  left: 80px;\n}\n.bubble-two {\n  width: 130px;\n  height: 130px;\n  background: #86efac;\n  right: 120px;\n  bottom: 100px;\n  animation-delay: 1s;\n}\n.bubble-three {\n  width: 90px;\n  height: 90px;\n  background: #facc15;\n  right: 26%;\n  top: 120px;\n  animation-delay: 2s;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(22px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes floatLogo {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes moveBubble {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-18px);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 500px) {\n  .login-container {\n    padding: 30px 24px;\n    margin-top: 0;\n  }\n  .register-home {\n    position: static;\n    margin-top: 18px;\n  }\n  .login-page {\n    flex-direction: column;\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/admin/pages/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-4F6HTID3.js.map

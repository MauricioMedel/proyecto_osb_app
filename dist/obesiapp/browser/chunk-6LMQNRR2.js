import {
  AuthService
} from "./chunk-3T3BQCC5.js";
import {
  CommonModule,
  Component,
  NgIf,
  RouterLink,
  RouterModule,
  RouterOutlet,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4YERQOE2.js";

// src/app/child/pages/menu/menu.component.ts
function MenuComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "div", 20);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Cerrando sesi\xF3n...");
    \u0275\u0275elementEnd()()();
  }
}
var MenuComponent = class _MenuComponent {
  constructor(auth) {
    this.auth = auth;
    this.childName = "Campe\xF3n";
    this.loggingOut = false;
  }
  ngOnInit() {
    const user = this.auth.getCurrentUser();
    this.childName = user?.username || "Campe\xF3n";
  }
  logout() {
    this.loggingOut = true;
    setTimeout(() => {
      this.auth.logout();
    }, 1200);
  }
  static {
    this.\u0275fac = function MenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MenuComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuComponent, selectors: [["app-menu"]], decls: 49, vars: 4, consts: [["outlet", "outlet"], [1, "child-page"], ["class", "loading-overlay", 4, "ngIf"], [1, "child-header"], [1, "brand"], [1, "logo"], ["src", "assets/images/logoo.png", "alt", "Logo ObesiApp"], [1, "user-actions"], [1, "logout-btn", 3, "click"], [1, "welcome-card"], [1, "menu-grid"], [1, "menu-card", "blue"], [1, "icon"], ["routerLink", "/menu/jugar"], [1, "menu-card", "yellow"], ["routerLink", "/menu/trofeos"], [1, "menu-card", "green"], ["routerLink", "/menu/progreso"], [1, "loading-overlay"], [1, "loader-card"], [1, "spinner"]], template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, MenuComponent_div_1_Template, 5, 0, "div", 2);
        \u0275\u0275elementStart(2, "header", 3)(3, "div", 4)(4, "div", 5);
        \u0275\u0275element(5, "img", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "ObesiApp");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 7)(9, "span");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 8);
        \u0275\u0275listener("click", function MenuComponent_Template_button_click_11_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275text(12, " Cerrar sesi\xF3n ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div")(14, "section", 9)(15, "h1");
        \u0275\u0275text(16, "\xA1Bienvenido a tu aventura! \u{1F44B}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18, " Explora las secciones, completa retos y gana recompensas saludables. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "section", 10)(20, "div", 11)(21, "div", 12);
        \u0275\u0275text(22, "\u{1F3AE}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h3");
        \u0275\u0275text(24, "\xA1A Jugar!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, " Completa desaf\xEDos divertidos sobre salud y movimiento. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 13);
        \u0275\u0275text(28, "Entrar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 14)(30, "div", 12);
        \u0275\u0275text(31, "\u{1F3C6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "h3");
        \u0275\u0275text(33, "Mis Trofeos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p");
        \u0275\u0275text(35, " Consulta tus premios, medallas y puntos ganados. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 15);
        \u0275\u0275text(37, "Ver trofeos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 16)(39, "div", 12);
        \u0275\u0275text(40, "\u{1F6A9}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "h3");
        \u0275\u0275text(42, "Mi Camino Saludable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44, " Revisa tu progreso y sigue avanzando cada d\xEDa. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 17);
        \u0275\u0275text(46, "Ver progreso");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(47, "router-outlet", null, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const outlet_r2 = \u0275\u0275reference(48);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loggingOut);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("Hola, ", ctx.childName, "! \u2B50");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("hidden", outlet_r2.isActivated);
      }
    }, dependencies: [RouterLink, CommonModule, NgIf, RouterModule, RouterOutlet], styles: ["\n\n.child-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #eff6ff;\n  padding: 30px;\n  font-family: Arial, sans-serif;\n}\n.child-header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 18px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 18px;\n  box-shadow: 0 8px 22px rgba(37, 99, 235, 0.12);\n  margin-bottom: 28px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: auto;\n  object-fit: contain;\n  display: block;\n}\n.brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin: 0;\n}\n.user-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  font-weight: bold;\n  color: #1e3a8a;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 10px 16px;\n  border-radius: 14px;\n  font-weight: bold;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.welcome-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  text-align: center;\n  padding: 42px 24px;\n  border-radius: 30px;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);\n  margin-bottom: 30px;\n}\n.welcome-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  font-size: 38px;\n  margin: 0 0 10px;\n}\n.welcome-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 18px;\n  margin: 0;\n}\n.menu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 26px;\n}\n.menu-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 34px 26px;\n  border-radius: 30px;\n  text-align: center;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);\n  transition: transform 0.2s ease;\n}\n.menu-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n}\n.menu-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 58px;\n  margin-bottom: 16px;\n}\n.menu-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin: 0 0 10px;\n  color: #1e3a8a;\n}\n.menu-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  line-height: 1.5;\n  margin-bottom: 22px;\n}\n.menu-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 16px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.blue[_ngcontent-%COMP%] {\n  border-top: 8px solid #2563eb;\n}\n.blue[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.yellow[_ngcontent-%COMP%] {\n  border-top: 8px solid #f59e0b;\n}\n.yellow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.green[_ngcontent-%COMP%] {\n  border-top: 8px solid #22c55e;\n}\n.green[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loader-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 24px;\n  text-align: center;\n  min-width: 300px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.loader-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  color: #1e3a8a;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  border: 6px solid #dbeafe;\n  border-top: 6px solid #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@media (max-width: 1000px) {\n  .menu-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .child-page[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .child-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n  }\n  .brand[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .user-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n    gap: 12px;\n  }\n  .logout-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .welcome-card[_ngcontent-%COMP%] {\n    padding: 32px 18px;\n  }\n  .welcome-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .welcome-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .menu-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .menu-card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n  .menu-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .menu-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=menu.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuComponent, [{
    type: Component,
    args: [{ selector: "app-menu", standalone: true, imports: [RouterLink, CommonModule, RouterModule], template: '<div class="child-page">\r\n\r\n  <div class="loading-overlay" *ngIf="loggingOut">\r\n    <div class="loader-card">\r\n      <div class="spinner"></div>\r\n      <h3>Cerrando sesi\xF3n...</h3>\r\n    </div>\r\n  </div>\r\n\r\n  <header class="child-header">\r\n    <div class="brand">\r\n      <div class="logo">\r\n        <img src="assets/images/logoo.png" alt="Logo ObesiApp">\r\n      </div>\r\n      <h2>ObesiApp</h2>\r\n    </div>\r\n\r\n    <div class="user-actions">\r\n      <span>Hola, {{ childName }}! \u2B50</span>\r\n      <button class="logout-btn" (click)="logout()">\r\n        Cerrar sesi\xF3n\r\n      </button>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- CAMBIO AQU\xCD: En lugar de *ngIf, usamos [class.hidden] para ocultarlo sin destruir el espacio bruscamente -->\r\n  <div [class.hidden]="outlet.isActivated">\r\n    \r\n    <section class="welcome-card">\r\n      <h1>\xA1Bienvenido a tu aventura! \u{1F44B}</h1>\r\n      <p>\r\n        Explora las secciones, completa retos y gana recompensas saludables.\r\n      </p>\r\n    </section>\r\n\r\n    <section class="menu-grid">\r\n\r\n      <div class="menu-card blue">\r\n        <div class="icon">\u{1F3AE}</div>\r\n        <h3>\xA1A Jugar!</h3>\r\n        <p>\r\n          Completa desaf\xEDos divertidos sobre salud y movimiento.\r\n        </p>\r\n        <button routerLink="/menu/jugar">Entrar</button>\r\n      </div>\r\n\r\n      <div class="menu-card yellow">\r\n        <div class="icon">\u{1F3C6}</div>\r\n        <h3>Mis Trofeos</h3>\r\n        <p>\r\n          Consulta tus premios, medallas y puntos ganados.\r\n        </p>\r\n        <button routerLink="/menu/trofeos">Ver trofeos</button>\r\n      </div>\r\n\r\n      <div class="menu-card green">\r\n        <div class="icon">\u{1F6A9}</div>\r\n        <h3>Mi Camino Saludable</h3>\r\n        <p>\r\n          Revisa tu progreso y sigue avanzando cada d\xEDa.\r\n        </p>\r\n        <button routerLink="/menu/progreso">Ver progreso</button>\r\n      </div>\r\n\r\n    </section>\r\n\r\n  </div>\r\n\r\n  <!-- El router-outlet se queda igual abajo -->\r\n  <router-outlet #outlet="outlet"></router-outlet>\r\n\r\n</div>', styles: ["/* src/app/child/pages/menu/menu.component.scss */\n.child-page {\n  min-height: 100vh;\n  background: #eff6ff;\n  padding: 30px;\n  font-family: Arial, sans-serif;\n}\n.child-header {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 18px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 18px;\n  box-shadow: 0 8px 22px rgba(37, 99, 235, 0.12);\n  margin-bottom: 28px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.brand .logo {\n  width: 70px;\n  height: 70px;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand .logo img {\n  width: 70px;\n  height: auto;\n  object-fit: contain;\n  display: block;\n}\n.brand h2 {\n  color: #1e3a8a;\n  margin: 0;\n}\n.user-actions {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  font-weight: bold;\n  color: #1e3a8a;\n}\n.logout-btn {\n  border: none;\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 10px 16px;\n  border-radius: 14px;\n  font-weight: bold;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.welcome-card {\n  background: #ffffff;\n  text-align: center;\n  padding: 42px 24px;\n  border-radius: 30px;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);\n  margin-bottom: 30px;\n}\n.welcome-card h1 {\n  color: #1e3a8a;\n  font-size: 38px;\n  margin: 0 0 10px;\n}\n.welcome-card p {\n  color: #64748b;\n  font-size: 18px;\n  margin: 0;\n}\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 26px;\n}\n.menu-card {\n  background: #ffffff;\n  padding: 34px 26px;\n  border-radius: 30px;\n  text-align: center;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);\n  transition: transform 0.2s ease;\n}\n.menu-card:hover {\n  transform: translateY(-6px);\n}\n.menu-card .icon {\n  font-size: 58px;\n  margin-bottom: 16px;\n}\n.menu-card h3 {\n  font-size: 26px;\n  margin: 0 0 10px;\n  color: #1e3a8a;\n}\n.menu-card p {\n  color: #64748b;\n  line-height: 1.5;\n  margin-bottom: 22px;\n}\n.menu-card button {\n  border: none;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 16px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.blue {\n  border-top: 8px solid #2563eb;\n}\n.blue button {\n  background: #2563eb;\n}\n.yellow {\n  border-top: 8px solid #f59e0b;\n}\n.yellow button {\n  background: #f59e0b;\n}\n.green {\n  border-top: 8px solid #22c55e;\n}\n.green button {\n  background: #22c55e;\n}\n.loading-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loader-card {\n  background: white;\n  padding: 30px;\n  border-radius: 24px;\n  text-align: center;\n  min-width: 300px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.loader-card h3 {\n  margin-top: 18px;\n  color: #1e3a8a;\n}\n.spinner {\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  border: 6px solid #dbeafe;\n  border-top: 6px solid #2563eb;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@media (max-width: 1000px) {\n  .menu-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .child-page {\n    padding: 18px;\n  }\n  .child-header {\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n  }\n  .brand {\n    flex-direction: column;\n  }\n  .user-actions {\n    flex-direction: column;\n    width: 100%;\n    gap: 12px;\n  }\n  .logout-btn {\n    width: 100%;\n  }\n  .welcome-card {\n    padding: 32px 18px;\n  }\n  .welcome-card h1 {\n    font-size: 28px;\n  }\n  .welcome-card p {\n    font-size: 16px;\n  }\n  .menu-grid {\n    grid-template-columns: 1fr;\n  }\n  .menu-card {\n    padding: 28px 20px;\n  }\n  .menu-card h3 {\n    font-size: 24px;\n  }\n  .menu-card button {\n    width: 100%;\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.hidden {\n  display: none !important;\n}\n/*# sourceMappingURL=menu.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuComponent, { className: "MenuComponent", filePath: "src/app/child/pages/menu/menu.component.ts", lineNumber: 13 });
})();
export {
  MenuComponent
};
//# sourceMappingURL=chunk-6LMQNRR2.js.map

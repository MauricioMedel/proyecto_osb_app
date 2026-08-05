import {
  Component,
  Router,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-4YERQOE2.js";

// src/app/child/pages/trofeos/trofeos.component.ts
var TrofeosComponent = class _TrofeosComponent {
  constructor(router) {
    this.router = router;
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function TrofeosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrofeosComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrofeosComponent, selectors: [["app-trofeos"]], decls: 57, vars: 0, consts: [[1, "rewards-page"], [1, "top-bar"], ["routerLink", "/menu"], [1, "rewards-grid"], [1, "reward-card", "unlocked"], [1, "medal"], [1, "reward-card", "locked"], [1, "lock"]], template: function TrofeosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
        \u0275\u0275text(3, "\u2190 Volver");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "\xA1Mis Recompensas! \u{1F3C6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "\u2B50 150 puntos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "section", 3)(9, "div", 4)(10, "div", 5);
        \u0275\u0275text(11, "\u{1F3C6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h3");
        \u0275\u0275text(13, "Campe\xF3n del Salto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15, "Desbloqueado");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 4)(17, "div", 5);
        \u0275\u0275text(18, "\u{1F947}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "h3");
        \u0275\u0275text(20, "Semana Saludable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p");
        \u0275\u0275text(22, "Desbloqueado");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 4)(24, "div", 5);
        \u0275\u0275text(25, "\u{1F34E}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "h3");
        \u0275\u0275text(27, "Comida Sana");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, "Desbloqueado");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 6)(31, "div", 7);
        \u0275\u0275text(32, "\u{1F512}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 5);
        \u0275\u0275text(34, "\u{1F381}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "h3");
        \u0275\u0275text(36, "Cofre Nivel 5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p");
        \u0275\u0275text(38, "Bloqueado");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 6)(40, "div", 7);
        \u0275\u0275text(41, "\u{1F512}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 5);
        \u0275\u0275text(43, "\u{1F6B4}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "h3");
        \u0275\u0275text(45, "Desaf\xEDo Ciclismo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p");
        \u0275\u0275text(47, "Bloqueado");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 6)(49, "div", 7);
        \u0275\u0275text(50, "\u{1F512}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 5);
        \u0275\u0275text(52, "\u{1F4AA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "h3");
        \u0275\u0275text(54, "Brazos Fuertes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p");
        \u0275\u0275text(56, "Bloqueado");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [RouterLink], styles: ["\n\n.rewards-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 30px;\n  background: #eff6ff;\n  font-family: Arial, sans-serif;\n}\n.top-bar[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 22px 28px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 8px 22px rgba(37, 99, 235, 0.12);\n  margin-bottom: 30px;\n}\n.top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin: 0;\n}\n.top-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: #1e3a8a;\n  color: white;\n  padding: 12px 16px;\n  border-radius: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.top-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-weight: bold;\n}\n.rewards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.reward-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 28px;\n  padding: 30px;\n  text-align: center;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);\n}\n.reward-card[_ngcontent-%COMP%]   .medal[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 14px;\n}\n.reward-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n  margin: 0 0 8px;\n}\n.reward-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: bold;\n}\n.unlocked[_ngcontent-%COMP%] {\n  border: 3px solid #22c55e;\n}\n.unlocked[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.locked[_ngcontent-%COMP%] {\n  filter: grayscale(1);\n  opacity: 0.65;\n  border: 3px solid #cbd5e1;\n}\n.locked[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.lock[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  font-size: 22px;\n}\n@media (max-width: 900px) {\n  .rewards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=trofeos.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrofeosComponent, [{
    type: Component,
    args: [{ selector: "app-trofeos", imports: [RouterLink], template: '<div class="rewards-page">\r\n\r\n  <header class="top-bar">\r\n    <button routerLink="/menu">\u2190 Volver</button>\r\n    <h1>\xA1Mis Recompensas! \u{1F3C6}</h1>\r\n    <span>\u2B50 150 puntos</span>\r\n  </header>\r\n\r\n  <section class="rewards-grid">\r\n\r\n    <div class="reward-card unlocked">\r\n      <div class="medal">\u{1F3C6}</div>\r\n      <h3>Campe\xF3n del Salto</h3>\r\n      <p>Desbloqueado</p>\r\n    </div>\r\n\r\n    <div class="reward-card unlocked">\r\n      <div class="medal">\u{1F947}</div>\r\n      <h3>Semana Saludable</h3>\r\n      <p>Desbloqueado</p>\r\n    </div>\r\n\r\n    <div class="reward-card unlocked">\r\n      <div class="medal">\u{1F34E}</div>\r\n      <h3>Comida Sana</h3>\r\n      <p>Desbloqueado</p>\r\n    </div>\r\n\r\n    <div class="reward-card locked">\r\n      <div class="lock">\u{1F512}</div>\r\n      <div class="medal">\u{1F381}</div>\r\n      <h3>Cofre Nivel 5</h3>\r\n      <p>Bloqueado</p>\r\n    </div>\r\n\r\n    <div class="reward-card locked">\r\n      <div class="lock">\u{1F512}</div>\r\n      <div class="medal">\u{1F6B4}</div>\r\n      <h3>Desaf\xEDo Ciclismo</h3>\r\n      <p>Bloqueado</p>\r\n    </div>\r\n\r\n    <div class="reward-card locked">\r\n      <div class="lock">\u{1F512}</div>\r\n      <div class="medal">\u{1F4AA}</div>\r\n      <h3>Brazos Fuertes</h3>\r\n      <p>Bloqueado</p>\r\n    </div>\r\n\r\n  </section>\r\n\r\n</div>', styles: ["/* src/app/child/pages/trofeos/trofeos.component.scss */\n.rewards-page {\n  min-height: 100vh;\n  padding: 30px;\n  background: #eff6ff;\n  font-family: Arial, sans-serif;\n}\n.top-bar {\n  background: white;\n  border-radius: 24px;\n  padding: 22px 28px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 8px 22px rgba(37, 99, 235, 0.12);\n  margin-bottom: 30px;\n}\n.top-bar h1 {\n  color: #1e3a8a;\n  margin: 0;\n}\n.top-bar button {\n  border: none;\n  background: #1e3a8a;\n  color: white;\n  padding: 12px 16px;\n  border-radius: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.top-bar span {\n  color: #f59e0b;\n  font-weight: bold;\n}\n.rewards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.reward-card {\n  position: relative;\n  background: white;\n  border-radius: 28px;\n  padding: 30px;\n  text-align: center;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);\n}\n.reward-card .medal {\n  font-size: 64px;\n  margin-bottom: 14px;\n}\n.reward-card h3 {\n  color: #1e3a8a;\n  margin: 0 0 8px;\n}\n.reward-card p {\n  margin: 0;\n  font-weight: bold;\n}\n.unlocked {\n  border: 3px solid #22c55e;\n}\n.unlocked p {\n  color: #22c55e;\n}\n.locked {\n  filter: grayscale(1);\n  opacity: 0.65;\n  border: 3px solid #cbd5e1;\n}\n.locked p {\n  color: #64748b;\n}\n.lock {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  font-size: 22px;\n}\n@media (max-width: 900px) {\n  .rewards-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=trofeos.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrofeosComponent, { className: "TrofeosComponent", filePath: "src/app/child/pages/trofeos/trofeos.component.ts", lineNumber: 10 });
})();
export {
  TrofeosComponent
};
//# sourceMappingURL=chunk-VRNPQ7FS.js.map

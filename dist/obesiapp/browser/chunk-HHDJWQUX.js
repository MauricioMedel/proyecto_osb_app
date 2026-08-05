import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HI7UTQF2.js";
import {
  CommonModule,
  Component,
  HostListener,
  Input,
  NgForOf,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4YERQOE2.js";

// src/app/core/components/navbar/navbar.component.ts
function NavbarComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 11);
    \u0275\u0275listener("click", function NavbarComponent_li_9_Template_a_click_1_listener($event) {
      const link_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.scrollTo(link_r2.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Ir a " + link_r2.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r2.label, " ");
  }
}
function NavbarComponent_li_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 12);
    \u0275\u0275listener("click", function NavbarComponent_li_19_Template_a_click_1_listener($event) {
      const link_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.scrollTo(link_r5.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", link_r5.label, " ");
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor(router) {
    this.router = router;
    this.menuOpen = false;
    this.scrolled = false;
    this.navLinks = [
      { label: "Inicio", id: "inicio" },
      { label: "Problema", id: "problema" },
      { label: "Funciones", id: "funciones" },
      { label: "C\xF3mo funciona", id: "como-funciona" },
      { label: "Beneficios", id: "beneficios" },
      { label: "Metodolog\xEDa", id: "metodologia" },
      { label: "Informaci\xF3n", id: "descargar" }
    ];
  }
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  scrollTo(id) {
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  login() {
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 23, vars: 9, consts: [["role", "banner", 1, "navbar"], [1, "container", "navbar__inner"], ["href", "#", "aria-label", "OBS Infantil inicio", 1, "navbar__logo", 3, "click"], [1, "navbar__logo-text"], ["role", "navigation", "aria-label", "Navegaci\xF3n principal", 1, "navbar__nav"], [1, "navbar__links"], [4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Iniciar sesi\xF3n en OBS Infantil", 1, "navbar__link", 3, "click"], ["aria-label", "Abrir men\xFA", 1, "navbar__hamburger", 3, "click"], ["role", "dialog", "aria-label", "Men\xFA m\xF3vil", 1, "navbar__mobile"], [1, "navbar__mobile-links"], ["href", "#", 1, "navbar__link", 3, "click"], ["href", "#", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_2_listener() {
          return ctx.scrollTo("inicio");
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "OBS Infantil ");
        \u0275\u0275elementStart(5, "strong");
        \u0275\u0275text(6, "App");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "nav", 4)(8, "ul", 5);
        \u0275\u0275template(9, NavbarComponent_li_9_Template, 3, 2, "li", 6);
        \u0275\u0275elementStart(10, "li")(11, "a", 7);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_11_listener($event) {
          $event.preventDefault();
          return ctx.login();
        });
        \u0275\u0275text(12, " Iniciar\n");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_13_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275element(14, "span")(15, "span")(16, "span");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "ul", 10);
        \u0275\u0275template(19, NavbarComponent_li_19_Template, 3, 1, "li", 6);
        \u0275\u0275elementStart(20, "li")(21, "a", 7);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_21_listener($event) {
          $event.preventDefault();
          return ctx.login();
        });
        \u0275\u0275text(22, " Iniciar\n");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("navbar--scrolled", ctx.scrolled);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.navLinks);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("navbar__hamburger--active", ctx.menuOpen);
        \u0275\u0275attribute("aria-expanded", ctx.menuOpen);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("navbar__mobile--open", ctx.menuOpen);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.navLinks);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  padding: 16px 0;\n  transition: var(--transition);\n  background: transparent;\n}\n.navbar--scrolled[_ngcontent-%COMP%] {\n  background: rgba(20, 76, 117, 0.97);\n  backdrop-filter: blur(12px);\n  padding: 10px 0;\n  box-shadow: 0 4px 24px rgba(20, 76, 117, 0.3);\n}\n.navbar__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.navbar__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.navbar__logo-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.navbar__logo-text[_ngcontent-%COMP%] {\n  font-family: "Baloo 2", cursive;\n  font-size: 24px;\n  color: var(--white);\n  font-weight: 600;\n}\n.navbar__logo-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: var(--yellow);\n}\n.navbar__nav[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.navbar__links[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  gap: 4px;\n  justify-content: center;\n}\n.navbar__link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 600;\n  font-size: 14px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  transition: var(--transition);\n  text-decoration: none;\n}\n.navbar__link[_ngcontent-%COMP%]:hover {\n  color: var(--yellow);\n  background: rgba(255, 255, 255, 0.1);\n}\n.navbar__cta[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 14px;\n  padding: 10px 20px;\n}\n.navbar__hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 8px;\n  transition: var(--transition);\n  margin-left: auto;\n}\n.navbar__hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 24px;\n  height: 2.5px;\n  background: var(--white);\n  border-radius: 2px;\n  transition: var(--transition);\n  transform-origin: center;\n}\n.navbar__hamburger--active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7.5px) rotate(45deg);\n}\n.navbar__hamburger--active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n  transform: scaleX(0);\n}\n.navbar__hamburger--active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7.5px) rotate(-45deg);\n}\n.navbar__mobile[_ngcontent-%COMP%] {\n  display: none;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s ease;\n  background: var(--primary);\n}\n.navbar__mobile--open[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.navbar__mobile-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 16px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.navbar__mobile-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n  padding: 12px 16px;\n  border-radius: 10px;\n  transition: var(--transition);\n  text-decoration: none;\n}\n.navbar__mobile-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--yellow);\n}\n.navbar__mobile-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  justify-content: center;\n}\n@media (max-width: 900px) {\n  .navbar__nav[_ngcontent-%COMP%], \n   .navbar__cta[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar__hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .navbar__mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .navbar--scrolled[_ngcontent-%COMP%]   .navbar__mobile[_ngcontent-%COMP%] {\n    background: rgba(20, 76, 117, 0.97);\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule], template: `<header class="navbar" [class.navbar--scrolled]="scrolled" role="banner">\r
  <div class="container navbar__inner">\r
\r
    <!-- Logo -->\r
    <a class="navbar__logo" href="#" (click)="scrollTo('inicio')" aria-label="OBS Infantil inicio">\r
      <span class="navbar__logo-text">OBS Infantil <strong>App</strong></span>\r
    </a>\r
\r
    <!-- Desktop Nav -->\r
    <nav class="navbar__nav" role="navigation" aria-label="Navegaci\xF3n principal">\r
      <ul class="navbar__links">\r
\r
        <li *ngFor="let link of navLinks">\r
          <a\r
            class="navbar__link"\r
            href="#"\r
            (click)="$event.preventDefault(); scrollTo(link.id)"\r
            [attr.aria-label]="'Ir a ' + link.label"\r
          >\r
            {{ link.label }}\r
          </a>\r
        </li>\r
\r
        <!-- Iniciar sesi\xF3n -->\r
        <li>\r
          <a\r
  class="navbar__link"\r
  href="#"\r
  (click)="$event.preventDefault(); login()"\r
  aria-label="Iniciar sesi\xF3n en OBS Infantil"\r
>\r
  Iniciar\r
</a>\r
        </li>\r
\r
      </ul>\r
    </nav>\r
\r
    <!-- CTA Button -->\r
    \r
\r
    <!-- Hamburger -->\r
    <button\r
      class="navbar__hamburger"\r
      [class.navbar__hamburger--active]="menuOpen"\r
      (click)="toggleMenu()"\r
      [attr.aria-expanded]="menuOpen"\r
      aria-label="Abrir men\xFA"\r
    >\r
      <span></span>\r
      <span></span>\r
      <span></span>\r
    </button>\r
\r
  </div>\r
\r
  <!-- Mobile Menu -->\r
  <div class="navbar__mobile" [class.navbar__mobile--open]="menuOpen" role="dialog" aria-label="Men\xFA m\xF3vil">\r
    <ul class="navbar__mobile-links">\r
\r
      <li *ngFor="let link of navLinks">\r
        <a\r
          href="#"\r
          (click)="$event.preventDefault(); scrollTo(link.id)"\r
        >\r
          {{ link.label }}\r
        </a>\r
      </li>\r
\r
      <li>\r
        <a\r
  class="navbar__link"\r
  href="#"\r
  (click)="$event.preventDefault(); login()"\r
  aria-label="Iniciar sesi\xF3n en OBS Infantil"\r
>\r
  Iniciar\r
</a>\r
      </li>\r
\r
    \r
\r
    </ul>\r
  </div>\r
\r
</header>`, styles: ['/* src/app/core/components/navbar/navbar.component.scss */\n.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  padding: 16px 0;\n  transition: var(--transition);\n  background: transparent;\n}\n.navbar--scrolled {\n  background: rgba(20, 76, 117, 0.97);\n  backdrop-filter: blur(12px);\n  padding: 10px 0;\n  box-shadow: 0 4px 24px rgba(20, 76, 117, 0.3);\n}\n.navbar__inner {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.navbar__logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.navbar__logo-icon {\n  font-size: 28px;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.navbar__logo-text {\n  font-family: "Baloo 2", cursive;\n  font-size: 24px;\n  color: var(--white);\n  font-weight: 600;\n}\n.navbar__logo-text strong {\n  font-weight: 900;\n  color: var(--yellow);\n}\n.navbar__nav {\n  flex: 1;\n}\n.navbar__links {\n  display: flex;\n  list-style: none;\n  gap: 4px;\n  justify-content: center;\n}\n.navbar__link {\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 600;\n  font-size: 14px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  transition: var(--transition);\n  text-decoration: none;\n}\n.navbar__link:hover {\n  color: var(--yellow);\n  background: rgba(255, 255, 255, 0.1);\n}\n.navbar__cta {\n  flex-shrink: 0;\n  font-size: 14px;\n  padding: 10px 20px;\n}\n.navbar__hamburger {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 8px;\n  transition: var(--transition);\n  margin-left: auto;\n}\n.navbar__hamburger span {\n  display: block;\n  width: 24px;\n  height: 2.5px;\n  background: var(--white);\n  border-radius: 2px;\n  transition: var(--transition);\n  transform-origin: center;\n}\n.navbar__hamburger--active span:nth-child(1) {\n  transform: translateY(7.5px) rotate(45deg);\n}\n.navbar__hamburger--active span:nth-child(2) {\n  opacity: 0;\n  transform: scaleX(0);\n}\n.navbar__hamburger--active span:nth-child(3) {\n  transform: translateY(-7.5px) rotate(-45deg);\n}\n.navbar__mobile {\n  display: none;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s ease;\n  background: var(--primary);\n}\n.navbar__mobile--open {\n  max-height: 500px;\n}\n.navbar__mobile-links {\n  list-style: none;\n  padding: 16px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.navbar__mobile-links li a {\n  display: block;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n  padding: 12px 16px;\n  border-radius: 10px;\n  transition: var(--transition);\n  text-decoration: none;\n}\n.navbar__mobile-links li a:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--yellow);\n}\n.navbar__mobile-links li button {\n  width: 100%;\n  margin-top: 8px;\n  justify-content: center;\n}\n@media (max-width: 900px) {\n  .navbar__nav,\n  .navbar__cta {\n    display: none;\n  }\n  .navbar__hamburger {\n    display: flex;\n  }\n  .navbar__mobile {\n    display: block;\n  }\n  .navbar--scrolled .navbar__mobile {\n    background: rgba(20, 76, 117, 0.97);\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */\n'] }]
  }], () => [{ type: Router }], { onScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/core/components/navbar/navbar.component.ts", lineNumber: 12 });
})();

// src/app/core/components/footer/footer.component.ts
function FooterComponent_li_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 17);
    \u0275\u0275listener("click", function FooterComponent_li_21_Template_a_click_1_listener($event) {
      const link_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.scrollTo(link_r2.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", link_r2.label, " ");
  }
}
function FooterComponent_li_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", member_r4, " ");
  }
}
var FooterComponent = class _FooterComponent {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.members = [
      "Mauricio Medel de jesus",
      "David Flores Pozos",
      "Sandra Yamileth Jim\xE9nez As\xEDs",
      "Miguel Angel Briones Villagrana"
    ];
    this.quickLinks = [
      { label: "Inicio", id: "inicio" },
      { label: "El Problema", id: "problema" },
      { label: "Funciones", id: "funciones" },
      { label: "C\xF3mo funciona", id: "como-funciona" },
      { label: "Beneficios", id: "beneficios" },
      { label: "Metodolog\xEDa", id: "metodologia" }
    ];
  }
  scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 52, vars: 3, consts: [["role", "contentinfo", 1, "footer"], [1, "footer__top"], [1, "container", "footer__grid"], [1, "footer__brand"], [1, "footer__logo"], [1, "footer__tagline"], [1, "footer__university"], [1, "footer__col"], [1, "footer__col-title"], [1, "footer__links"], [4, "ngFor", "ngForOf"], [1, "footer__members"], [1, "footer__contact-items"], ["href", "mailto:obesiapp@utcv.edu.mx", 1, "footer__contact-item"], [1, "footer__contact-item"], [1, "footer__bottom"], [1, "container", "footer__bottom-inner"], ["href", "#", 3, "click"], ["aria-hidden", "true", 1, "footer__member-dot"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span");
        \u0275\u0275text(6, "OBS Infantil ");
        \u0275\u0275elementStart(7, "strong");
        \u0275\u0275text(8, "App");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "p", 5);
        \u0275\u0275text(10, " Transformando h\xE1bitos infantiles con tecnolog\xEDa, gamificaci\xF3n e inteligencia artificial. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "div")(13, "strong");
        \u0275\u0275text(14, "UTCV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16, "Universidad Tecnol\xF3gica del Centro de Veracruz");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "div", 7)(18, "h4", 8);
        \u0275\u0275text(19, "Enlaces r\xE1pidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "ul", 9);
        \u0275\u0275template(21, FooterComponent_li_21_Template, 3, 1, "li", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 7)(23, "h4", 8);
        \u0275\u0275text(24, "Equipo de desarrollo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "ul", 11);
        \u0275\u0275template(26, FooterComponent_li_26_Template, 3, 1, "li", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 7)(28, "h4", 8);
        \u0275\u0275text(29, "Contacto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 12)(31, "a", 13)(32, "span");
        \u0275\u0275text(33, "\u{1F4E7}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35, "obsinfantil@utcv.edu.mx");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 14)(37, "span");
        \u0275\u0275text(38, "\u{1F4CD}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span");
        \u0275\u0275text(40, "Cuitl\xE1huac, Veracruz, M\xE9xico");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 14)(42, "span");
        \u0275\u0275text(43, "\u{1F550}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span");
        \u0275\u0275text(45, "Lun\u2013Vie, 9:00 \u2013 18:00");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(46, "div", 15)(47, "div", 16)(48, "span");
        \u0275\u0275text(49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span");
        \u0275\u0275text(51, "Hecho con \u2764\uFE0F para la salud infantil de M\xE9xico");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.quickLinks);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.members);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " ObesiApp \u2014 UTCV. Todos los derechos reservados.");
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['@charset "UTF-8";\n\n\n\n.footer[_ngcontent-%COMP%] {\n  background: #0d3550;\n  color: rgba(255, 255, 255, 0.85);\n}\n.footer__top[_ngcontent-%COMP%] {\n  padding: 72px 0 48px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.footer__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr;\n  gap: 48px;\n}\n.footer__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family: "Baloo 2", cursive;\n  font-size: 26px;\n  font-weight: 600;\n  color: var(--white);\n  margin-bottom: 16px;\n}\n.footer__logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 32px;\n}\n.footer__logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: var(--yellow);\n}\n.footer__tagline[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.6);\n  margin-bottom: 24px;\n  max-width: 280px;\n}\n.footer__university[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: var(--radius);\n  padding: 14px 16px;\n}\n.footer__university-badge[_ngcontent-%COMP%] {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.footer__university[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.footer__university[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--yellow);\n  font-weight: 800;\n}\n.footer__university[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.55);\n}\n.footer__col-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: var(--yellow);\n  margin-bottom: 20px;\n}\n.footer__links[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.footer__links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.65);\n  transition: var(--transition);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.footer__links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: "\\2192";\n  opacity: 0;\n  transform: translateX(-6px);\n  transition: var(--transition);\n}\n.footer__links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--white);\n  padding-left: 4px;\n}\n.footer__links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  transform: translateX(0);\n}\n.footer__members[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.footer__members[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.65);\n}\n.footer__member-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--success);\n  flex-shrink: 0;\n}\n.footer__contact-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.footer__contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.65);\n  text-decoration: none;\n  transition: var(--transition);\n}\n.footer__contact-item[_ngcontent-%COMP%]:hover {\n  color: var(--yellow);\n}\n.footer__contact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.footer__bottom[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.footer__bottom-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.4);\n}\n@media (max-width: 900px) {\n  .footer__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 36px;\n  }\n  .footer__brand[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 560px) {\n  .footer__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .footer__brand[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .footer__bottom-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [CommonModule], template: '<footer class="footer" role="contentinfo">\r\n  <div class="footer__top">\r\n    <div class="container footer__grid">\r\n      <!-- Brand -->\r\n      <div class="footer__brand">\r\n        <div class="footer__logo">\r\n          <span>OBS Infantil <strong>App</strong></span>\r\n        </div>\r\n        <p class="footer__tagline">\r\n          Transformando h\xE1bitos infantiles con tecnolog\xEDa, gamificaci\xF3n e inteligencia artificial.\r\n        </p>\r\n        <div class="footer__university">\r\n          <div>\r\n            <strong>UTCV</strong>\r\n            <span>Universidad Tecnol\xF3gica del Centro de Veracruz</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Quick Links -->\r\n      <div class="footer__col">\r\n        <h4 class="footer__col-title">Enlaces r\xE1pidos</h4>\r\n        <ul class="footer__links">\r\n          <li *ngFor="let link of quickLinks">\r\n            <a href="#" (click)="$event.preventDefault(); scrollTo(link.id)">\r\n              {{ link.label }}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <!-- Team -->\r\n      <div class="footer__col">\r\n        <h4 class="footer__col-title">Equipo de desarrollo</h4>\r\n        <ul class="footer__members">\r\n          <li *ngFor="let member of members">\r\n            <span class="footer__member-dot" aria-hidden="true"></span>\r\n            {{ member }}\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <!-- Contact -->\r\n      <div class="footer__col">\r\n        <h4 class="footer__col-title">Contacto</h4>\r\n        <div class="footer__contact-items">\r\n          <a href="mailto:obesiapp@utcv.edu.mx" class="footer__contact-item">\r\n            <span>\u{1F4E7}</span>\r\n            <span>obsinfantil&#64;utcv.edu.mx</span>\r\n          </a>\r\n          <div class="footer__contact-item">\r\n            <span>\u{1F4CD}</span>\r\n            <span>Cuitl\xE1huac, Veracruz, M\xE9xico</span>\r\n          </div>\r\n          <div class="footer__contact-item">\r\n            <span>\u{1F550}</span>\r\n            <span>Lun\u2013Vie, 9:00 \u2013 18:00</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="footer__bottom">\r\n    <div class="container footer__bottom-inner">\r\n      <span>\xA9 {{ year }} ObesiApp \u2014 UTCV. Todos los derechos reservados.</span>\r\n      <span>Hecho con \u2764\uFE0F para la salud infantil de M\xE9xico</span>\r\n    </div>\r\n  </div>\r\n</footer>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/core/components/footer/footer.component.scss */\n.footer {\n  background: #0d3550;\n  color: rgba(255, 255, 255, 0.85);\n}\n.footer__top {\n  padding: 72px 0 48px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.footer__grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr;\n  gap: 48px;\n}\n.footer__logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family: "Baloo 2", cursive;\n  font-size: 26px;\n  font-weight: 600;\n  color: var(--white);\n  margin-bottom: 16px;\n}\n.footer__logo span:first-child {\n  font-size: 32px;\n}\n.footer__logo strong {\n  font-weight: 900;\n  color: var(--yellow);\n}\n.footer__tagline {\n  font-size: 14px;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.6);\n  margin-bottom: 24px;\n  max-width: 280px;\n}\n.footer__university {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: var(--radius);\n  padding: 14px 16px;\n}\n.footer__university-badge {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.footer__university div {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.footer__university div strong {\n  font-size: 15px;\n  color: var(--yellow);\n  font-weight: 800;\n}\n.footer__university div span {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.55);\n}\n.footer__col-title {\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: var(--yellow);\n  margin-bottom: 20px;\n}\n.footer__links {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.footer__links li a {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.65);\n  transition: var(--transition);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.footer__links li a::before {\n  content: "\\2192";\n  opacity: 0;\n  transform: translateX(-6px);\n  transition: var(--transition);\n}\n.footer__links li a:hover {\n  color: var(--white);\n  padding-left: 4px;\n}\n.footer__links li a:hover::before {\n  opacity: 1;\n  transform: translateX(0);\n}\n.footer__members {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.footer__members li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.65);\n}\n.footer__member-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--success);\n  flex-shrink: 0;\n}\n.footer__contact-items {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.footer__contact-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.65);\n  text-decoration: none;\n  transition: var(--transition);\n}\n.footer__contact-item:hover {\n  color: var(--yellow);\n}\n.footer__contact-item span:first-child {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.footer__bottom {\n  padding: 20px 0;\n}\n.footer__bottom-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.4);\n}\n@media (max-width: 900px) {\n  .footer__grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 36px;\n  }\n  .footer__brand {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 560px) {\n  .footer__grid {\n    grid-template-columns: 1fr;\n  }\n  .footer__brand {\n    grid-column: auto;\n  }\n  .footer__bottom-inner {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/core/components/footer/footer.component.ts", lineNumber: 11 });
})();

// src/app/features/landing/components/hero/hero.component.ts
var HeroComponent = class _HeroComponent {
  scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  static {
    this.\u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeroComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], decls: 78, vars: 0, consts: [["id", "inicio", "aria-label", "Secci\xF3n principal", 1, "hero"], ["aria-hidden", "true", 1, "hero__blob", "hero__blob--1"], ["aria-hidden", "true", 1, "hero__blob", "hero__blob--2"], ["aria-hidden", "true", 1, "hero__blob", "hero__blob--3"], ["aria-hidden", "true", 1, "hero__float", "hero__float--3"], ["aria-hidden", "true", 1, "hero__float", "hero__float--5"], [1, "container", "hero__inner"], [1, "hero__content"], [1, "hero__badge"], [1, "hero__title"], [1, "hero__title-highlight"], [1, "hero__subtitle"], [1, "hero__actions"], ["aria-label", "Conocer m\xE1s sobre OBS Infantil", 1, "btn", "btn--outline", "hero__btn", 3, "click"], [1, "hero__stats"], [1, "hero__stat"], [1, "hero__stat-number"], [1, "hero__stat-label"], ["aria-hidden", "true", 1, "hero__stat-divider"], ["aria-label", "Mockup de la aplicaci\xF3n OBS Infantil", 1, "hero__mockup"], [1, "hero__phone"], [1, "hero__phone-notch"], [1, "hero__phone-screen"], [1, "hero__app-header"], [1, "hero__app-avatar"], [1, "hero__app-level"], [1, "hero__app-level-info"], [1, "hero__app-xp"], [1, "hero__app-bar"], [1, "hero__app-bar-fill", 2, "width", "75%"], [1, "hero__app-challenge"], [1, "hero__app-challenge-title"], [1, "hero__app-challenge-item"], [1, "hero__app-challenge-item", "done"], [1, "hero__app-reward"], ["aria-hidden", "true", 1, "hero__phone-glow"], ["aria-hidden", "true", 1, "hero__wave"], ["viewBox", "0 0 1440 80", "preserveAspectRatio", "none"], ["d", "M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z", "fill", "var(--bg)"]], template: function HeroComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275text(5, "\u2B50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275text(7, "\u{1F4AA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "span");
        \u0275\u0275text(12, "\u{1F680}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " IA + Gamificaci\xF3n + Salud ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "h1", 9);
        \u0275\u0275text(15, " Transformando h\xE1bitos,");
        \u0275\u0275element(16, "br");
        \u0275\u0275elementStart(17, "span", 10);
        \u0275\u0275text(18, "construyendo futuros saludables");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "br");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p", 11);
        \u0275\u0275text(21, " OBS Infantil combina IA nutricional y gamificaci\xF3n para prevenir la obesidad infantil de forma divertida y efectiva. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 12)(23, "button", 13);
        \u0275\u0275listener("click", function HeroComponent_Template_button_click_23_listener() {
          return ctx.scrollTo("funciones");
        });
        \u0275\u0275text(24, " Conocer m\xE1s \u2192 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 14)(26, "div", 15)(27, "span", 16);
        \u0275\u0275text(28, "+500");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 17);
        \u0275\u0275text(30, "Familias");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(31, "div", 18);
        \u0275\u0275elementStart(32, "div", 15)(33, "span", 16);
        \u0275\u0275text(34, "98%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 17);
        \u0275\u0275text(36, "Satisfacci\xF3n");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(37, "div", 18);
        \u0275\u0275elementStart(38, "div", 15)(39, "span", 16);
        \u0275\u0275text(40, "3x");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "span", 17);
        \u0275\u0275text(42, "M\xE1s efectivo");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "div", 19)(44, "div", 20);
        \u0275\u0275element(45, "div", 21);
        \u0275\u0275elementStart(46, "div", 22)(47, "div", 23)(48, "span");
        \u0275\u0275text(49, "Hola, Daniela! \u{1F44B}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 24);
        \u0275\u0275text(51, "D");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 25)(53, "div", 26)(54, "span");
        \u0275\u0275text(55, "\u2B50 Nivel 5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span", 27);
        \u0275\u0275text(57, "450 / 600 XP");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 28);
        \u0275\u0275element(59, "div", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 30)(61, "div", 31);
        \u0275\u0275text(62, "\u{1F3AF} Reto de hoy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 32);
        \u0275\u0275text(64, "\u{1F957} Come 3 porciones de verduras");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 32);
        \u0275\u0275text(66, "\u{1F4A7} Toma 8 vasos de agua");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 33);
        \u0275\u0275text(68, "\u2705 Camina 30 minutos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 34)(70, "span");
        \u0275\u0275text(71, "\u{1F3C6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "span");
        \u0275\u0275text(73, "\xA1Ganaste 50 XP ayer!");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(74, "div", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 36);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(76, "svg", 37);
        \u0275\u0275element(77, "path", 38);
        \u0275\u0275elementEnd()()();
      }
    }, styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 60%,\n      #2d8fd4 100%);\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  padding: 100px 0 80px;\n}\n.hero__blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  opacity: 0.25;\n  animation: _ngcontent-%COMP%_blobPulse 8s ease-in-out infinite;\n}\n.hero__blob--1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background: var(--yellow);\n  top: -150px;\n  right: -100px;\n  animation-delay: 0s;\n}\n.hero__blob--2[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: var(--success);\n  bottom: -100px;\n  left: -80px;\n  animation-delay: 2s;\n}\n.hero__blob--3[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: var(--orange);\n  top: 40%;\n  left: 40%;\n  animation-delay: 4s;\n}\n.hero__float[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 36px;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n  pointer-events: none;\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));\n}\n.hero__float--1[_ngcontent-%COMP%] {\n  top: 15%;\n  left: 5%;\n  animation-delay: 0s;\n}\n.hero__float--2[_ngcontent-%COMP%] {\n  top: 25%;\n  right: 8%;\n  animation-delay: 1s;\n}\n.hero__float--3[_ngcontent-%COMP%] {\n  top: 65%;\n  right: 12%;\n  animation-delay: 2s;\n  font-size: 28px;\n}\n.hero__float--4[_ngcontent-%COMP%] {\n  bottom: 20%;\n  left: 8%;\n  animation-delay: 0.5s;\n  font-size: 30px;\n}\n.hero__float--5[_ngcontent-%COMP%] {\n  top: 75%;\n  left: 45%;\n  animation-delay: 3s;\n  font-size: 24px;\n}\n.hero__inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.hero__content[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.hero__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: var(--white);\n  padding: 8px 18px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  margin-bottom: 28px;\n  animation: _ngcontent-%COMP%_fadeInDown 0.8s ease;\n}\n.hero__title[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 5vw, 56px);\n  font-weight: 900;\n  line-height: 1.1;\n  margin-bottom: 24px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.9s ease 0.1s both;\n}\n.hero__title-highlight[_ngcontent-%COMP%] {\n  color: var(--yellow);\n  position: relative;\n}\n.hero__title-highlight[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--yellow);\n  border-radius: 2px;\n  opacity: 0.6;\n}\n.hero__subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.85);\n  margin-bottom: 36px;\n  max-width: 480px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.9s ease 0.2s both;\n}\n.hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 48px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.9s ease 0.3s both;\n}\n.hero__btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.hero__stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  animation: _ngcontent-%COMP%_fadeInUp 0.9s ease 0.4s both;\n}\n.hero__stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.hero__stat-number[_ngcontent-%COMP%] {\n  font-family: "Baloo 2", cursive;\n  font-size: 28px;\n  font-weight: 900;\n  color: var(--yellow);\n  line-height: 1;\n}\n.hero__stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 600;\n}\n.hero__stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.25);\n}\n.hero__mockup[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeInRight 1s ease 0.3s both;\n}\n.hero__phone-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 280px;\n  height: 280px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 183, 3, 0.4),\n      transparent 70%);\n  border-radius: 50%;\n  z-index: 0;\n  animation: _ngcontent-%COMP%_blobPulse 4s ease-in-out infinite;\n}\n.hero__phone[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 280px;\n  height: 560px;\n  background: #0a0a0a;\n  border-radius: 44px;\n  padding: 16px;\n  box-shadow:\n    0 40px 80px rgba(0, 0, 0, 0.4),\n    0 0 0 2px rgba(255, 255, 255, 0.15),\n    inset 0 0 0 1px rgba(255, 255, 255, 0.05);\n  animation: _ngcontent-%COMP%_phoneFloat 4s ease-in-out infinite;\n}\n.hero__phone-notch[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 28px;\n  background: #0a0a0a;\n  border-radius: 0 0 20px 20px;\n  margin: -16px auto 12px;\n  position: relative;\n  z-index: 2;\n}\n.hero__phone-screen[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      160deg,\n      #f0f9ff 0%,\n      #e8f4e8 100%);\n  border-radius: 32px;\n  height: calc(100% - 12px);\n  padding: 20px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  overflow: hidden;\n}\n.hero__app-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--primary);\n}\n.hero__app-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: var(--secondary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 14px;\n}\n.hero__app-level[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 12px;\n}\n.hero__app-level-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 8px;\n}\n.hero__app-xp[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-weight: 600;\n}\n.hero__app-bar[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  border-radius: 50px;\n  height: 8px;\n  overflow: hidden;\n}\n.hero__app-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--success),\n      var(--yellow));\n  border-radius: 50px;\n  animation: _ngcontent-%COMP%_fillBar 1.5s ease 1s both;\n}\n.hero__app-challenge[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 12px;\n  flex: 1;\n}\n.hero__app-challenge-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--primary);\n  margin-bottom: 10px;\n}\n.hero__app-challenge-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text);\n  padding: 6px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-weight: 600;\n}\n.hero__app-challenge-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.hero__app-challenge-item.done[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.hero__app-reward[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--yellow),\n      var(--orange));\n  border-radius: 12px;\n  padding: 10px 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n}\n.hero__wave[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.hero__wave[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 80px;\n}\n@media (max-width: 900px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 120px 0 60px;\n  }\n  .hero__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n    text-align: center;\n  }\n  .hero__subtitle[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .hero__actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .hero__stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .hero__mockup[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .hero__phone[_ngcontent-%COMP%] {\n    width: 240px;\n    height: 480px;\n  }\n}\n@media (max-width: 480px) {\n  .hero__float[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@keyframes _ngcontent-%COMP%_blobPulse {\n  0%, 100% {\n    transform: scale(1) translate(0, 0);\n  }\n  50% {\n    transform: scale(1.1) translate(20px, -20px);\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(10deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_phoneFloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInRight {\n  from {\n    opacity: 0;\n    transform: translateX(50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fillBar {\n  from {\n    width: 0;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "app-hero", standalone: true, imports: [], template: `<section id="inicio" class="hero" aria-label="Secci\xF3n principal">\r
  <!-- Animated background blobs -->\r
  <div class="hero__blob hero__blob--1" aria-hidden="true"></div>\r
  <div class="hero__blob hero__blob--2" aria-hidden="true"></div>\r
  <div class="hero__blob hero__blob--3" aria-hidden="true"></div>\r
\r
  <!-- Floating emojis -->\r
  <div class="hero__float hero__float--3" aria-hidden="true">\u2B50</div>\r
  <div class="hero__float hero__float--5" aria-hidden="true">\u{1F4AA}</div>\r
\r
  <div class="container hero__inner">\r
    <!-- Text Content -->\r
    <div class="hero__content">\r
      <div class="hero__badge">\r
        <span>\u{1F680}</span> IA + Gamificaci\xF3n + Salud\r
      </div>\r
\r
      <h1 class="hero__title">\r
        Transformando h\xE1bitos,<br>\r
        <span class="hero__title-highlight">construyendo futuros saludables</span><br>\r
      </h1>\r
\r
      <p class="hero__subtitle">\r
        OBS Infantil combina IA nutricional y gamificaci\xF3n para prevenir\r
        la obesidad infantil de forma divertida y efectiva.\r
      </p>\r
\r
      <div class="hero__actions">\r
     \r
\r
        <button\r
          class="btn btn--outline hero__btn"\r
          (click)="scrollTo('funciones')"\r
          aria-label="Conocer m\xE1s sobre OBS Infantil"\r
        >\r
          Conocer m\xE1s \u2192\r
        </button>\r
      </div>\r
\r
      <!-- Stats -->\r
      <div class="hero__stats">\r
        <div class="hero__stat">\r
          <span class="hero__stat-number">+500</span>\r
          <span class="hero__stat-label">Familias</span>\r
        </div>\r
\r
        <div class="hero__stat-divider" aria-hidden="true"></div>\r
\r
        <div class="hero__stat">\r
          <span class="hero__stat-number">98%</span>\r
          <span class="hero__stat-label">Satisfacci\xF3n</span>\r
        </div>\r
\r
        <div class="hero__stat-divider" aria-hidden="true"></div>\r
\r
        <div class="hero__stat">\r
          <span class="hero__stat-number">3x</span>\r
          <span class="hero__stat-label">M\xE1s efectivo</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Phone Mockup -->\r
    <div class="hero__mockup" aria-label="Mockup de la aplicaci\xF3n OBS Infantil">\r
      <div class="hero__phone">\r
        <div class="hero__phone-notch"></div>\r
\r
        <div class="hero__phone-screen">\r
          <div class="hero__app-header">\r
            <span>Hola, Daniela! \u{1F44B}</span>\r
            <div class="hero__app-avatar">D</div>\r
          </div>\r
\r
          <div class="hero__app-level">\r
            <div class="hero__app-level-info">\r
              <span>\u2B50 Nivel 5</span>\r
              <span class="hero__app-xp">450 / 600 XP</span>\r
            </div>\r
\r
            <div class="hero__app-bar">\r
              <div class="hero__app-bar-fill" style="width: 75%"></div>\r
            </div>\r
          </div>\r
\r
          <div class="hero__app-challenge">\r
            <div class="hero__app-challenge-title">\u{1F3AF} Reto de hoy</div>\r
            <div class="hero__app-challenge-item">\u{1F957} Come 3 porciones de verduras</div>\r
            <div class="hero__app-challenge-item">\u{1F4A7} Toma 8 vasos de agua</div>\r
            <div class="hero__app-challenge-item done">\u2705 Camina 30 minutos</div>\r
          </div>\r
\r
          <div class="hero__app-reward">\r
            <span>\u{1F3C6}</span>\r
            <span>\xA1Ganaste 50 XP ayer!</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Glow effect -->\r
      <div class="hero__phone-glow" aria-hidden="true"></div>\r
    </div>\r
  </div>\r
\r
  <!-- Wave bottom -->\r
  <div class="hero__wave" aria-hidden="true">\r
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">\r
      <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg)"/>\r
    </svg>\r
  </div>\r
</section>`, styles: ['/* src/app/features/landing/components/hero/hero.component.scss */\n.hero {\n  position: relative;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 60%,\n      #2d8fd4 100%);\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  padding: 100px 0 80px;\n}\n.hero__blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  opacity: 0.25;\n  animation: blobPulse 8s ease-in-out infinite;\n}\n.hero__blob--1 {\n  width: 500px;\n  height: 500px;\n  background: var(--yellow);\n  top: -150px;\n  right: -100px;\n  animation-delay: 0s;\n}\n.hero__blob--2 {\n  width: 400px;\n  height: 400px;\n  background: var(--success);\n  bottom: -100px;\n  left: -80px;\n  animation-delay: 2s;\n}\n.hero__blob--3 {\n  width: 300px;\n  height: 300px;\n  background: var(--orange);\n  top: 40%;\n  left: 40%;\n  animation-delay: 4s;\n}\n.hero__float {\n  position: absolute;\n  font-size: 36px;\n  animation: float 6s ease-in-out infinite;\n  pointer-events: none;\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));\n}\n.hero__float--1 {\n  top: 15%;\n  left: 5%;\n  animation-delay: 0s;\n}\n.hero__float--2 {\n  top: 25%;\n  right: 8%;\n  animation-delay: 1s;\n}\n.hero__float--3 {\n  top: 65%;\n  right: 12%;\n  animation-delay: 2s;\n  font-size: 28px;\n}\n.hero__float--4 {\n  bottom: 20%;\n  left: 8%;\n  animation-delay: 0.5s;\n  font-size: 30px;\n}\n.hero__float--5 {\n  top: 75%;\n  left: 45%;\n  animation-delay: 3s;\n  font-size: 24px;\n}\n.hero__inner {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.hero__content {\n  color: var(--white);\n}\n.hero__badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: var(--white);\n  padding: 8px 18px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  margin-bottom: 28px;\n  animation: fadeInDown 0.8s ease;\n}\n.hero__title {\n  font-size: clamp(32px, 5vw, 56px);\n  font-weight: 900;\n  line-height: 1.1;\n  margin-bottom: 24px;\n  animation: fadeInUp 0.9s ease 0.1s both;\n}\n.hero__title-highlight {\n  color: var(--yellow);\n  position: relative;\n}\n.hero__title-highlight::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--yellow);\n  border-radius: 2px;\n  opacity: 0.6;\n}\n.hero__subtitle {\n  font-size: 18px;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.85);\n  margin-bottom: 36px;\n  max-width: 480px;\n  animation: fadeInUp 0.9s ease 0.2s both;\n}\n.hero__actions {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 48px;\n  animation: fadeInUp 0.9s ease 0.3s both;\n}\n.hero__btn {\n  font-size: 16px;\n}\n.hero__stats {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  animation: fadeInUp 0.9s ease 0.4s both;\n}\n.hero__stat {\n  display: flex;\n  flex-direction: column;\n}\n.hero__stat-number {\n  font-family: "Baloo 2", cursive;\n  font-size: 28px;\n  font-weight: 900;\n  color: var(--yellow);\n  line-height: 1;\n}\n.hero__stat-label {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 600;\n}\n.hero__stat-divider {\n  width: 1px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.25);\n}\n.hero__mockup {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  animation: fadeInRight 1s ease 0.3s both;\n}\n.hero__phone-glow {\n  position: absolute;\n  width: 280px;\n  height: 280px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 183, 3, 0.4),\n      transparent 70%);\n  border-radius: 50%;\n  z-index: 0;\n  animation: blobPulse 4s ease-in-out infinite;\n}\n.hero__phone {\n  position: relative;\n  z-index: 1;\n  width: 280px;\n  height: 560px;\n  background: #0a0a0a;\n  border-radius: 44px;\n  padding: 16px;\n  box-shadow:\n    0 40px 80px rgba(0, 0, 0, 0.4),\n    0 0 0 2px rgba(255, 255, 255, 0.15),\n    inset 0 0 0 1px rgba(255, 255, 255, 0.05);\n  animation: phoneFloat 4s ease-in-out infinite;\n}\n.hero__phone-notch {\n  width: 100px;\n  height: 28px;\n  background: #0a0a0a;\n  border-radius: 0 0 20px 20px;\n  margin: -16px auto 12px;\n  position: relative;\n  z-index: 2;\n}\n.hero__phone-screen {\n  background:\n    linear-gradient(\n      160deg,\n      #f0f9ff 0%,\n      #e8f4e8 100%);\n  border-radius: 32px;\n  height: calc(100% - 12px);\n  padding: 20px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  overflow: hidden;\n}\n.hero__app-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--primary);\n}\n.hero__app-avatar {\n  width: 32px;\n  height: 32px;\n  background: var(--secondary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 14px;\n}\n.hero__app-level {\n  background: white;\n  border-radius: 12px;\n  padding: 12px;\n}\n.hero__app-level-info {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 8px;\n}\n.hero__app-xp {\n  color: var(--muted);\n  font-weight: 600;\n}\n.hero__app-bar {\n  background: #e8e8e8;\n  border-radius: 50px;\n  height: 8px;\n  overflow: hidden;\n}\n.hero__app-bar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--success),\n      var(--yellow));\n  border-radius: 50px;\n  animation: fillBar 1.5s ease 1s both;\n}\n.hero__app-challenge {\n  background: white;\n  border-radius: 12px;\n  padding: 12px;\n  flex: 1;\n}\n.hero__app-challenge-title {\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--primary);\n  margin-bottom: 10px;\n}\n.hero__app-challenge-item {\n  font-size: 12px;\n  color: var(--text);\n  padding: 6px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-weight: 600;\n}\n.hero__app-challenge-item:last-child {\n  border-bottom: none;\n}\n.hero__app-challenge-item.done {\n  color: var(--success);\n}\n.hero__app-reward {\n  background:\n    linear-gradient(\n      135deg,\n      var(--yellow),\n      var(--orange));\n  border-radius: 12px;\n  padding: 10px 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n}\n.hero__wave {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.hero__wave svg {\n  display: block;\n  width: 100%;\n  height: 80px;\n}\n@media (max-width: 900px) {\n  .hero {\n    padding: 120px 0 60px;\n  }\n  .hero__inner {\n    grid-template-columns: 1fr;\n    gap: 48px;\n    text-align: center;\n  }\n  .hero__subtitle {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .hero__actions {\n    justify-content: center;\n  }\n  .hero__stats {\n    justify-content: center;\n  }\n  .hero__mockup {\n    order: -1;\n  }\n  .hero__phone {\n    width: 240px;\n    height: 480px;\n  }\n}\n@media (max-width: 480px) {\n  .hero__float {\n    font-size: 24px;\n  }\n}\n@keyframes blobPulse {\n  0%, 100% {\n    transform: scale(1) translate(0, 0);\n  }\n  50% {\n    transform: scale(1.1) translate(20px, -20px);\n  }\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(10deg);\n  }\n}\n@keyframes phoneFloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translateX(50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes fillBar {\n  from {\n    width: 0;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/features/landing/components/hero/hero.component.ts", lineNumber: 10 });
})();

// src/app/shared/components/section-title/section-title.component.ts
function SectionTitleComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.tag);
  }
}
function SectionTitleComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
var SectionTitleComponent = class _SectionTitleComponent {
  constructor() {
    this.title = "";
    this.subtitle = "";
    this.tag = "";
    this.light = false;
  }
  static {
    this.\u0275fac = function SectionTitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SectionTitleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionTitleComponent, selectors: [["app-section-title"]], inputs: { title: "title", subtitle: "subtitle", tag: "tag", light: "light" }, decls: 5, vars: 5, consts: [[1, "section-title"], ["class", "section-title__tag", 4, "ngIf"], [1, "section-title__heading"], ["class", "section-title__subtitle", 4, "ngIf"], [1, "section-title__tag"], [1, "section-title__subtitle"]], template: function SectionTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, SectionTitleComponent_span_1_Template, 2, 1, "span", 1);
        \u0275\u0275elementStart(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, SectionTitleComponent_p_4_Template, 2, 1, "p", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("section-title--light", ctx.light);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tag);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subtitle);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 56px;\n}\n.section-title__tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--yellow);\n  color: var(--primary);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 6px 18px;\n  border-radius: 50px;\n  margin-bottom: 16px;\n}\n.section-title__heading[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 5vw, 44px);\n  font-weight: 800;\n  color: var(--primary);\n  margin-bottom: 16px;\n  line-height: 1.15;\n}\n.section-title__subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--muted);\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.section-title--light[_ngcontent-%COMP%]   .section-title__heading[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.section-title--light[_ngcontent-%COMP%]   .section-title__subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n/*# sourceMappingURL=section-title.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionTitleComponent, [{
    type: Component,
    args: [{ selector: "app-section-title", standalone: true, imports: [CommonModule], template: '<div class="section-title" [class.section-title--light]="light">\r\n  <span *ngIf="tag" class="section-title__tag">{{ tag }}</span>\r\n  <h2 class="section-title__heading">{{ title }}</h2>\r\n  <p *ngIf="subtitle" class="section-title__subtitle">{{ subtitle }}</p>\r\n</div>\r\n', styles: ["/* src/app/shared/components/section-title/section-title.component.scss */\n.section-title {\n  text-align: center;\n  margin-bottom: 56px;\n}\n.section-title__tag {\n  display: inline-block;\n  background: var(--yellow);\n  color: var(--primary);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 6px 18px;\n  border-radius: 50px;\n  margin-bottom: 16px;\n}\n.section-title__heading {\n  font-size: clamp(28px, 5vw, 44px);\n  font-weight: 800;\n  color: var(--primary);\n  margin-bottom: 16px;\n  line-height: 1.15;\n}\n.section-title__subtitle {\n  font-size: 18px;\n  color: var(--muted);\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.section-title--light .section-title__heading {\n  color: var(--white);\n}\n.section-title--light .section-title__subtitle {\n  color: rgba(255, 255, 255, 0.8);\n}\n/*# sourceMappingURL=section-title.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], tag: [{
    type: Input
  }], light: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionTitleComponent, { className: "SectionTitleComponent", filePath: "src/app/shared/components/section-title/section-title.component.ts", lineNumber: 11 });
})();

// src/app/features/landing/components/problem/problem.component.ts
function ProblemComponent_article_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 8)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275styleProp("--delay", i_r2 * 0.1 + "s")("--accent", stat_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", stat_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r1.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.desc);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", stat_r1.color);
  }
}
var ProblemComponent = class _ProblemComponent {
  constructor() {
    this.stats = [
      {
        icon: "\u{1F3E5}",
        number: "1 de 3",
        label: "Salud en riesgo",
        desc: "Uno de cada tres ni\xF1os en M\xE9xico padece sobrepeso u obesidad, una crisis de salud p\xFAblica que requiere acci\xF3n inmediata.",
        color: "#c1121f"
      },
      {
        icon: "\u{1F964}",
        number: "40%",
        label: "Mala alimentaci\xF3n",
        desc: "El 40% de la dieta infantil est\xE1 compuesta por alimentos ultra-procesados con alto contenido cal\xF3rico y bajo valor nutricional.",
        color: "#fb8500"
      },
      {
        icon: "\u{1F4F1}",
        number: "5 hrs",
        label: "Sedentarismo digital",
        desc: "Los ni\xF1os pasan en promedio 5 horas frente a pantallas por d\xEDa, reemplazando la actividad f\xEDsica necesaria.",
        color: "#2372b2"
      },
      {
        icon: "\u{1F4C8}",
        number: "3x",
        label: "Tendencia en alza",
        desc: "La prevalencia de obesidad infantil se ha triplicado en los \xFAltimos 30 a\xF1os, convirti\xE9ndose en una pandemia silenciosa.",
        color: "#8fc93a"
      }
    ];
  }
  static {
    this.\u0275fac = function ProblemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProblemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProblemComponent, selectors: [["app-problem"]], decls: 12, vars: 1, consts: [["id", "problema", "aria-label", "El problema de la obesidad infantil", 1, "problem"], [1, "container"], ["tag", "El Problema", "title", "La obesidad infantil es una crisis real", "subtitle", "M\xE9xico enfrenta una emergencia de salud p\xFAblica: millones de ni\xF1os crecen con h\xE1bitos que comprometen su futuro."], [1, "problem__grid"], ["class", "problem__card reveal", 3, "--delay", "--accent", 4, "ngFor", "ngForOf"], [1, "problem__callout", "reveal"], [1, "problem__callout-icon"], [1, "problem__callout-text"], [1, "problem__card", "reveal"], [1, "problem__card-icon"], [1, "problem__card-number"], [1, "problem__card-label"], [1, "problem__card-desc"], [1, "problem__card-accent"]], template: function ProblemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-section-title", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275template(4, ProblemComponent_article_4_Template, 10, 12, "article", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7, "\u{1F4A1}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "strong");
        \u0275\u0275text(10, "OBS Infantil es la soluci\xF3n:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " tecnolog\xEDa accesible, gamificada y personalizada para revertir esta tendencia desde casa. ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.stats);
      }
    }, dependencies: [CommonModule, NgForOf, SectionTitleComponent], styles: ['\n\n.problem[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: var(--bg);\n}\n.problem__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  margin-bottom: 48px;\n}\n.problem__card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 32px 24px;\n  box-shadow: var(--shadow);\n  position: relative;\n  overflow: hidden;\n  transition: var(--transition);\n  transition-delay: var(--delay, 0s);\n}\n.problem__card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n}\n.problem__card[_ngcontent-%COMP%]:hover   .problem__card-accent[_ngcontent-%COMP%] {\n  height: 6px;\n}\n.problem__card-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 16px;\n  display: block;\n}\n.problem__card-number[_ngcontent-%COMP%] {\n  font-family: "Baloo 2", cursive;\n  font-size: 42px;\n  font-weight: 900;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.problem__card-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--text);\n  margin-bottom: 12px;\n}\n.problem__card-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--muted);\n  line-height: 1.6;\n}\n.problem__card-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  transition: height 0.3s ease;\n}\n.problem__callout[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  border-radius: var(--radius-lg);\n  padding: 28px 36px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  color: var(--white);\n}\n.problem__callout-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  flex-shrink: 0;\n}\n.problem__callout-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.5;\n  color: rgba(255, 255, 255, 0.9);\n}\n.problem__callout-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--yellow);\n  font-weight: 800;\n}\n@media (max-width: 900px) {\n  .problem__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .problem[_ngcontent-%COMP%] {\n    padding: 72px 0;\n  }\n  .problem__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .problem__callout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 24px;\n  }\n}\n/*# sourceMappingURL=problem.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProblemComponent, [{
    type: Component,
    args: [{ selector: "app-problem", standalone: true, imports: [CommonModule, SectionTitleComponent], template: `<section id="problema" class="problem" aria-label="El problema de la obesidad infantil">\r
  <div class="container">\r
    <app-section-title\r
      tag="El Problema"\r
      title="La obesidad infantil es una crisis real"\r
      subtitle="M\xE9xico enfrenta una emergencia de salud p\xFAblica: millones de ni\xF1os crecen con h\xE1bitos que comprometen su futuro."\r
    />\r
\r
    <div class="problem__grid">\r
      <article\r
        *ngFor="let stat of stats; let i = index"\r
        class="problem__card reveal"\r
        [style.--delay]="i * 0.1 + 's'"\r
        [style.--accent]="stat.color"\r
      >\r
        <div class="problem__card-icon">{{ stat.icon }}</div>\r
        <div class="problem__card-number" [style.color]="stat.color">{{ stat.number }}</div>\r
        <h3 class="problem__card-label">{{ stat.label }}</h3>\r
        <p class="problem__card-desc">{{ stat.desc }}</p>\r
        <div class="problem__card-accent" [style.background]="stat.color"></div>\r
      </article>\r
    </div>\r
\r
    <div class="problem__callout reveal">\r
      <div class="problem__callout-icon">\u{1F4A1}</div>\r
      <div class="problem__callout-text">\r
        <strong>OBS Infantil es la soluci\xF3n:</strong> tecnolog\xEDa accesible, gamificada y personalizada para revertir esta tendencia desde casa.\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/landing/components/problem/problem.component.scss */\n.problem {\n  padding: 100px 0;\n  background: var(--bg);\n}\n.problem__grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  margin-bottom: 48px;\n}\n.problem__card {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 32px 24px;\n  box-shadow: var(--shadow);\n  position: relative;\n  overflow: hidden;\n  transition: var(--transition);\n  transition-delay: var(--delay, 0s);\n}\n.problem__card:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n}\n.problem__card:hover .problem__card-accent {\n  height: 6px;\n}\n.problem__card-icon {\n  font-size: 40px;\n  margin-bottom: 16px;\n  display: block;\n}\n.problem__card-number {\n  font-family: "Baloo 2", cursive;\n  font-size: 42px;\n  font-weight: 900;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.problem__card-label {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--text);\n  margin-bottom: 12px;\n}\n.problem__card-desc {\n  font-size: 14px;\n  color: var(--muted);\n  line-height: 1.6;\n}\n.problem__card-accent {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  transition: height 0.3s ease;\n}\n.problem__callout {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  border-radius: var(--radius-lg);\n  padding: 28px 36px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  color: var(--white);\n}\n.problem__callout-icon {\n  font-size: 36px;\n  flex-shrink: 0;\n}\n.problem__callout-text {\n  font-size: 18px;\n  line-height: 1.5;\n  color: rgba(255, 255, 255, 0.9);\n}\n.problem__callout-text strong {\n  color: var(--yellow);\n  font-weight: 800;\n}\n@media (max-width: 900px) {\n  .problem__grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .problem {\n    padding: 72px 0;\n  }\n  .problem__grid {\n    grid-template-columns: 1fr;\n  }\n  .problem__callout {\n    flex-direction: column;\n    text-align: center;\n    padding: 24px;\n  }\n}\n/*# sourceMappingURL=problem.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProblemComponent, { className: "ProblemComponent", filePath: "src/app/features/landing/components/problem/problem.component.ts", lineNumber: 12 });
})();

// src/app/features/landing/components/features/features.component.ts
function FeaturesComponent_article_4_li_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r1 = ctx.$implicit;
    const feature_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("--dot-color", feature_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", h_r1, " ");
  }
}
function FeaturesComponent_article_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 5)(1, "div", 6)(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9)(7, "h3", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 12);
    \u0275\u0275template(12, FeaturesComponent_article_4_li_12_Template, 2, 3, "li", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275styleProp("--delay", i_r3 * 0.15 + "s");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", feature_r2.gradient);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", feature_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", feature_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r2.subtitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", feature_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r2.desc);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", feature_r2.highlights);
  }
}
var FeaturesComponent = class _FeaturesComponent {
  constructor() {
    this.features = [
      {
        icon: "\u{1F916}",
        title: "IA Nutricional",
        subtitle: "Inteligencia artificial al servicio de la salud",
        desc: "El sistema analiza el perfil \xFAnico de cada paciente \u2014edad, peso, actividad y preferencias\u2014 para generar planes alimentarios 100% personalizados que evolucionan en tiempo real.",
        highlights: ["Planes adaptativos", "An\xE1lisis de h\xE1bitos", "Recomendaciones diarias"],
        color: "var(--secondary)",
        gradient: "linear-gradient(135deg, #e8f4ff 0%, #d0e8ff 100%)"
      },
      {
        icon: "\u{1F3AE}",
        title: "Gamificaci\xF3n",
        subtitle: "Aprender siendo un h\xE9roe de la salud",
        desc: "La aplicaci\xF3n convierte cada h\xE1bito saludable en una aventura. Los retos diarios, las insignias coleccionables, los puntos de experiencia y las tablas de clasificaci\xF3n mantienen la motivaci\xF3n de los usuarios siempre encendida.",
        highlights: ["Retos diarios", "Insignias y recompensas", "Ranking familiar"],
        color: "var(--orange)",
        gradient: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)"
      },
      {
        icon: "\u{1F4CA}",
        title: "Monitoreo Inteligente",
        subtitle: "Seguimiento en tiempo real",
        desc: "La plataforma ofrece un registro visual del progreso, gr\xE1ficas de evoluci\xF3n, sincronizaci\xF3n con dispositivos wearables y reportes semanales detallados para los padres y los profesionales de la salud.",
        highlights: ["Dashboards visuales", "Sincronizaci\xF3n wearables", "Reportes para padres"],
        color: "var(--success)",
        gradient: "linear-gradient(135deg, #f0f9e8 0%, #d4f0b0 100%)"
      }
    ];
  }
  static {
    this.\u0275fac = function FeaturesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeaturesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesComponent, selectors: [["app-features"]], decls: 5, vars: 1, consts: [["id", "funciones", "aria-label", "Funciones de ObesiApp", 1, "features"], [1, "container"], ["tag", "\xBFQu\xE9 es OBS Infantil?", "title", "Tecnolog\xEDa que cuida a tus hijos", "subtitle", "Tres pilares tecnol\xF3gicos dise\xF1ados para hacer de la salud una experiencia divertida y sostenible."], [1, "features__grid"], ["class", "feature-card reveal", 3, "--delay", 4, "ngFor", "ngForOf"], [1, "feature-card", "reveal"], [1, "feature-card__header"], [1, "feature-card__icon"], [1, "feature-card__badge"], [1, "feature-card__body"], [1, "feature-card__title"], [1, "feature-card__desc"], [1, "feature-card__highlights"], [3, "--dot-color", 4, "ngFor", "ngForOf"]], template: function FeaturesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-section-title", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275template(4, FeaturesComponent_article_4_Template, 13, 15, "article", 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.features);
      }
    }, dependencies: [CommonModule, NgForOf, SectionTitleComponent], styles: ['\n\n.features[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      180deg,\n      #f0f8ff 0%,\n      var(--bg) 100%);\n}\n.feature-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n  transition-delay: var(--delay, 0s);\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: var(--shadow-lg);\n}\n.feature-card__header[_ngcontent-%COMP%] {\n  padding: 36px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: relative;\n}\n.feature-card__icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  line-height: 1;\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));\n}\n.feature-card__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: white;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  padding: 4px 12px;\n  border-radius: 50px;\n  width: fit-content;\n}\n.feature-card__body[_ngcontent-%COMP%] {\n  padding: 28px;\n}\n.feature-card__title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n.feature-card__desc[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-size: 15px;\n  line-height: 1.7;\n  margin-bottom: 20px;\n}\n.feature-card__highlights[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.feature-card__highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text);\n  padding-left: 20px;\n  position: relative;\n}\n.feature-card__highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--dot-color, var(--secondary));\n}\n.features__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n}\n@media (max-width: 900px) {\n  .features__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 480px;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=features.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesComponent, [{
    type: Component,
    args: [{ selector: "app-features", standalone: true, imports: [CommonModule, SectionTitleComponent], template: `<section id="funciones" class="features" aria-label="Funciones de ObesiApp">\r
  <div class="container">\r
    <app-section-title\r
      tag="\xBFQu\xE9 es OBS Infantil?"\r
      title="Tecnolog\xEDa que cuida a tus hijos"\r
      subtitle="Tres pilares tecnol\xF3gicos dise\xF1ados para hacer de la salud una experiencia divertida y sostenible."\r
    />\r
\r
    <div class="features__grid">\r
      <article\r
        *ngFor="let feature of features; let i = index"\r
        class="feature-card reveal"\r
        [style.--delay]="i * 0.15 + 's'"\r
      >\r
        <div class="feature-card__header" [style.background]="feature.gradient">\r
          <div class="feature-card__icon" [style.color]="feature.color">{{ feature.icon }}</div>\r
          <div class="feature-card__badge" [style.background]="feature.color">\r
            {{ feature.subtitle }}\r
          </div>\r
        </div>\r
        <div class="feature-card__body">\r
          <h3 class="feature-card__title" [style.color]="feature.color">{{ feature.title }}</h3>\r
          <p class="feature-card__desc">{{ feature.desc }}</p>\r
          <ul class="feature-card__highlights">\r
            <li *ngFor="let h of feature.highlights" [style.--dot-color]="feature.color">\r
              {{ h }}\r
            </li>\r
          </ul>\r
        </div>\r
      </article>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/landing/components/features/features.component.scss */\n.features {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      180deg,\n      #f0f8ff 0%,\n      var(--bg) 100%);\n}\n.feature-card {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n  transition-delay: var(--delay, 0s);\n}\n.feature-card:hover {\n  transform: translateY(-10px);\n  box-shadow: var(--shadow-lg);\n}\n.feature-card__header {\n  padding: 36px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: relative;\n}\n.feature-card__icon {\n  font-size: 52px;\n  line-height: 1;\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));\n}\n.feature-card__badge {\n  display: inline-block;\n  color: white;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  padding: 4px 12px;\n  border-radius: 50px;\n  width: fit-content;\n}\n.feature-card__body {\n  padding: 28px;\n}\n.feature-card__title {\n  font-size: 26px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n.feature-card__desc {\n  color: var(--muted);\n  font-size: 15px;\n  line-height: 1.7;\n  margin-bottom: 20px;\n}\n.feature-card__highlights {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.feature-card__highlights li {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text);\n  padding-left: 20px;\n  position: relative;\n}\n.feature-card__highlights li::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--dot-color, var(--secondary));\n}\n.features__grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n}\n@media (max-width: 900px) {\n  .features__grid {\n    grid-template-columns: 1fr;\n    max-width: 480px;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=features.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesComponent, { className: "FeaturesComponent", filePath: "src/app/features/landing/components/features/features.component.ts", lineNumber: 12 });
})();

// src/app/features/landing/components/how-it-works/how-it-works.component.ts
function HowItWorksComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 8)(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275styleProp("--delay", i_r2 * 0.12 + "s");
    \u0275\u0275classProp("hiw__step--even", i_r2 % 2 === 1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", step_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275styleProp("--accent", step_r1.color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", step_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r1.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.desc);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", step_r1.color);
  }
}
var HowItWorksComponent = class _HowItWorksComponent {
  constructor() {
    this.steps = [
      {
        number: "01",
        icon: "\u{1F476}",
        title: "Registro de Usuario y Tutor",
        desc: "El sistema permite la creaci\xF3n del perfil del paciente y del tutor en minutos. La aplicaci\xF3n recopila datos b\xE1sicos de salud para personalizar la experiencia desde el primer d\xEDa.",
        color: "var(--secondary)"
      },
      {
        number: "02",
        icon: "\u{1F4CB}",
        title: "Evaluaci\xF3n Inicial",
        desc: "El motor de inteligencia artificial realiza una evaluaci\xF3n nutricional y de h\xE1bitos completa, identificando \xE1reas de mejora con base en est\xE1ndares m\xE9dicos pedi\xE1tricos.",
        color: "var(--yellow)"
      },
      {
        number: "03",
        icon: "\u{1F3AF}",
        title: "Plan Personalizado",
        desc: "La plataforma genera un plan alimentario y de actividad f\xEDsica totalmente adaptado al paciente, el cual se actualiza semanalmente con base en el progreso registrado.",
        color: "var(--orange)"
      },
      {
        number: "04",
        icon: "\u{1F3C6}",
        title: "Retos Diarios",
        desc: "El sistema presenta desaf\xEDos diarios interactivos, tales como el consumo de vegetales, hidrataci\xF3n adecuada o actividad f\xEDsica. Al completarlos, el usuario obtiene puntos de experiencia (XP) y desbloquea recompensas.",
        color: "var(--success)"
      },
      {
        number: "05",
        icon: "\u{1F4C8}",
        title: "Seguimiento y Logros",
        desc: "Se mantiene un monitoreo continuo del progreso. Los tutores reciben reportes semanales detallados, mientras que el paciente acumula insignias que celebran cada objetivo alcanzado.",
        color: "var(--primary)"
      }
    ];
  }
  static {
    this.\u0275fac = function HowItWorksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HowItWorksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HowItWorksComponent, selectors: [["app-how-it-works"]], decls: 6, vars: 1, consts: [["id", "como-funciona", "aria-label", "C\xF3mo funciona ObesiApp", 1, "how-it-works"], [1, "container"], ["tag", "C\xF3mo funciona", "title", "Tu camino a la salud en 5 pasos", "subtitle", "Un proceso simple, guiado y divertido para transformar los h\xE1bitos de toda la familia."], [1, "hiw__timeline"], ["aria-hidden", "true", 1, "hiw__line"], ["class", "hiw__step reveal", 3, "hiw__step--even", "--delay", 4, "ngFor", "ngForOf"], [1, "hiw__step", "reveal"], ["aria-hidden", "true", 1, "hiw__step-dot"], [1, "hiw__step-card"], [1, "hiw__step-number"], [1, "hiw__step-title"], [1, "hiw__step-desc"], ["aria-hidden", "true", 1, "hiw__step-bar"]], template: function HowItWorksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-section-title", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "div", 4);
        \u0275\u0275template(5, HowItWorksComponent_div_5_Template, 12, 16, "div", 5);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.steps);
      }
    }, dependencies: [CommonModule, NgForOf, SectionTitleComponent], styles: ['\n\n.how-it-works[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: var(--bg);\n}\n.hiw__timeline[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.hiw__line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--secondary),\n      var(--success));\n  transform: translateX(-50%);\n  border-radius: 3px;\n}\n.hiw__step[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 32px;\n  align-items: center;\n  margin-bottom: 32px;\n  transition-delay: var(--delay, 0s);\n}\n.hiw__step--even[_ngcontent-%COMP%]   .hiw__step-card[_ngcontent-%COMP%] {\n  order: 3;\n  text-align: left;\n}\n.hiw__step--even[_ngcontent-%COMP%]   .hiw__step-dot[_ngcontent-%COMP%] {\n  order: 2;\n}\n.hiw__step--even[_ngcontent-%COMP%]::before {\n  content: "";\n  grid-column: 1;\n}\n.hiw__step[_ngcontent-%COMP%]:not(.hiw__step--even)   .hiw__step-card[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n  grid-column: 1;\n}\n.hiw__step[_ngcontent-%COMP%]:not(.hiw__step--even)   .hiw__step-card[_ngcontent-%COMP%]   .hiw__step-bar[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.hiw__step[_ngcontent-%COMP%]:not(.hiw__step--even)   .hiw__step-dot[_ngcontent-%COMP%] {\n  order: 2;\n  grid-column: 2;\n}\n.hiw__step[_ngcontent-%COMP%]:not(.hiw__step--even)::after {\n  content: "";\n  grid-column: 3;\n}\n.hiw__step-dot[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1;\n  transition: var(--transition);\n}\n.hiw__step-dot[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.hiw__step-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 28px;\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n  border-top: 3px solid var(--accent, var(--primary));\n  max-width: 380px;\n}\n.hiw__step-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg);\n}\n.hiw__step-number[_ngcontent-%COMP%] {\n  font-family: "Baloo 2", cursive;\n  font-size: 36px;\n  font-weight: 900;\n  line-height: 1;\n  opacity: 0.3;\n  margin-bottom: 4px;\n}\n.hiw__step-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text);\n  margin-bottom: 10px;\n}\n.hiw__step-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--muted);\n  line-height: 1.6;\n  margin-bottom: 12px;\n}\n.hiw__step-bar[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 40px;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .hiw__line[_ngcontent-%COMP%] {\n    left: 30px;\n  }\n  .hiw__step[_ngcontent-%COMP%] {\n    grid-template-columns: auto 1fr;\n    gap: 20px;\n  }\n  .hiw__step--even[_ngcontent-%COMP%]   .hiw__step-card[_ngcontent-%COMP%], \n   .hiw__step[_ngcontent-%COMP%]:not(.hiw__step--even)   .hiw__step-card[_ngcontent-%COMP%] {\n    order: 2;\n    text-align: left;\n    grid-column: auto;\n  }\n  .hiw__step--even[_ngcontent-%COMP%]   .hiw__step-card[_ngcontent-%COMP%]   .hiw__step-bar[_ngcontent-%COMP%], \n   .hiw__step[_ngcontent-%COMP%]:not(.hiw__step--even)   .hiw__step-card[_ngcontent-%COMP%]   .hiw__step-bar[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .hiw__step--even[_ngcontent-%COMP%]   .hiw__step-dot[_ngcontent-%COMP%], \n   .hiw__step[_ngcontent-%COMP%]:not(.hiw__step--even)   .hiw__step-dot[_ngcontent-%COMP%] {\n    order: 1;\n    grid-column: auto;\n  }\n  .hiw__step--even[_ngcontent-%COMP%]::before, \n   .hiw__step--even[_ngcontent-%COMP%]::after, \n   .hiw__step[_ngcontent-%COMP%]:not(.hiw__step--even)::before, \n   .hiw__step[_ngcontent-%COMP%]:not(.hiw__step--even)::after {\n    display: none;\n  }\n  .hiw__step-dot[_ngcontent-%COMP%] {\n    width: 52px;\n    height: 52px;\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=how-it-works.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HowItWorksComponent, [{
    type: Component,
    args: [{ selector: "app-how-it-works", standalone: true, imports: [CommonModule, SectionTitleComponent], template: `<section id="como-funciona" class="how-it-works" aria-label="C\xF3mo funciona ObesiApp">\r
  <div class="container">\r
    <app-section-title\r
      tag="C\xF3mo funciona"\r
      title="Tu camino a la salud en 5 pasos"\r
      subtitle="Un proceso simple, guiado y divertido para transformar los h\xE1bitos de toda la familia."\r
    />\r
\r
    <div class="hiw__timeline">\r
      <div class="hiw__line" aria-hidden="true"></div>\r
\r
      <div\r
        *ngFor="let step of steps; let i = index"\r
        class="hiw__step reveal"\r
        [class.hiw__step--even]="i % 2 === 1"\r
        [style.--delay]="i * 0.12 + 's'"\r
      >\r
        <div class="hiw__step-dot" [style.background]="step.color" aria-hidden="true">\r
          <span>{{ step.icon }}</span>\r
        </div>\r
\r
        <div class="hiw__step-card" [style.--accent]="step.color">\r
          <div class="hiw__step-number" [style.color]="step.color">{{ step.number }}</div>\r
          <h3 class="hiw__step-title">{{ step.title }}</h3>\r
          <p class="hiw__step-desc">{{ step.desc }}</p>\r
          <div class="hiw__step-bar" [style.background]="step.color" aria-hidden="true"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/landing/components/how-it-works/how-it-works.component.scss */\n.how-it-works {\n  padding: 100px 0;\n  background: var(--bg);\n}\n.hiw__timeline {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.hiw__line {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--secondary),\n      var(--success));\n  transform: translateX(-50%);\n  border-radius: 3px;\n}\n.hiw__step {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 32px;\n  align-items: center;\n  margin-bottom: 32px;\n  transition-delay: var(--delay, 0s);\n}\n.hiw__step--even .hiw__step-card {\n  order: 3;\n  text-align: left;\n}\n.hiw__step--even .hiw__step-dot {\n  order: 2;\n}\n.hiw__step--even::before {\n  content: "";\n  grid-column: 1;\n}\n.hiw__step:not(.hiw__step--even) .hiw__step-card {\n  order: 1;\n  text-align: right;\n  grid-column: 1;\n}\n.hiw__step:not(.hiw__step--even) .hiw__step-card .hiw__step-bar {\n  margin-left: auto;\n}\n.hiw__step:not(.hiw__step--even) .hiw__step-dot {\n  order: 2;\n  grid-column: 2;\n}\n.hiw__step:not(.hiw__step--even)::after {\n  content: "";\n  grid-column: 3;\n}\n.hiw__step-dot {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1;\n  transition: var(--transition);\n}\n.hiw__step-dot:hover {\n  transform: scale(1.15);\n}\n.hiw__step-card {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 28px;\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n  border-top: 3px solid var(--accent, var(--primary));\n  max-width: 380px;\n}\n.hiw__step-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg);\n}\n.hiw__step-number {\n  font-family: "Baloo 2", cursive;\n  font-size: 36px;\n  font-weight: 900;\n  line-height: 1;\n  opacity: 0.3;\n  margin-bottom: 4px;\n}\n.hiw__step-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text);\n  margin-bottom: 10px;\n}\n.hiw__step-desc {\n  font-size: 14px;\n  color: var(--muted);\n  line-height: 1.6;\n  margin-bottom: 12px;\n}\n.hiw__step-bar {\n  height: 3px;\n  width: 40px;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .hiw__line {\n    left: 30px;\n  }\n  .hiw__step {\n    grid-template-columns: auto 1fr;\n    gap: 20px;\n  }\n  .hiw__step--even .hiw__step-card,\n  .hiw__step:not(.hiw__step--even) .hiw__step-card {\n    order: 2;\n    text-align: left;\n    grid-column: auto;\n  }\n  .hiw__step--even .hiw__step-card .hiw__step-bar,\n  .hiw__step:not(.hiw__step--even) .hiw__step-card .hiw__step-bar {\n    margin-left: 0;\n  }\n  .hiw__step--even .hiw__step-dot,\n  .hiw__step:not(.hiw__step--even) .hiw__step-dot {\n    order: 1;\n    grid-column: auto;\n  }\n  .hiw__step--even::before,\n  .hiw__step--even::after,\n  .hiw__step:not(.hiw__step--even)::before,\n  .hiw__step:not(.hiw__step--even)::after {\n    display: none;\n  }\n  .hiw__step-dot {\n    width: 52px;\n    height: 52px;\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=how-it-works.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HowItWorksComponent, { className: "HowItWorksComponent", filePath: "src/app/features/landing/components/how-it-works/how-it-works.component.ts", lineNumber: 12 });
})();

// src/app/features/landing/components/benefits/benefits.component.ts
function BenefitsComponent_article_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 5)(1, "div", 6)(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 8)(5, "h3", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefit_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275styleProp("--delay", i_r2 * 0.08 + "s");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", benefit_r1.gradient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", benefit_r1.accent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(benefit_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r1.desc);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", benefit_r1.accent);
  }
}
var BenefitsComponent = class _BenefitsComponent {
  constructor() {
    this.benefits = [
      {
        icon: "\u{1F957}",
        title: "Educaci\xF3n alimentaria temprana",
        desc: "Los ni\xF1os aprenden de forma natural a distinguir alimentos saludables, porciones adecuadas y la importancia de la variedad nutricional desde peque\xF1os.",
        gradient: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
        accent: "#4CAF50"
      },
      {
        icon: "\u{1F525}",
        title: "Motivaci\xF3n constante",
        desc: "El sistema de gamificaci\xF3n mantiene el entusiasmo activo. Cada logro, cada reto completado y cada recompensa refuerza los comportamientos positivos.",
        gradient: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
        accent: "#FB8C00"
      },
      {
        icon: "\u2696\uFE0F",
        title: "Prevenci\xF3n del sobrepeso",
        desc: "Intervenci\xF3n temprana con planes personalizados por IA que ajustan gradualmente los h\xE1bitos, previniendo el desarrollo de obesidad de forma efectiva.",
        gradient: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
        accent: "#2372b2"
      },
      {
        icon: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
        title: "Participaci\xF3n familiar",
        desc: "Toda la familia se involucra. Los padres monitorean el progreso, participan en retos y reciben orientaci\xF3n para apoyar los cambios desde el hogar.",
        gradient: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
        accent: "#E91E63"
      },
      {
        icon: "\u{1FA7A}",
        title: "Respaldado por profesionales",
        desc: "Los planes y recomendaciones de ObesiApp se desarrollaron con nutri\xF3logos y pediatras, garantizando que cada sugerencia sea segura y efectiva.",
        gradient: "linear-gradient(135deg, #f3e5f5, #e1bee7)",
        accent: "#9C27B0"
      },
      {
        icon: "\u{1F4E1}",
        title: "Tecnolog\xEDa de vanguardia",
        desc: "Integraci\xF3n con wearables, modelos de IA adaptativa y an\xE1lisis de datos en tiempo real para una experiencia verdaderamente inteligente y personalizada.",
        gradient: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
        accent: "#00ACC1"
      }
    ];
  }
  static {
    this.\u0275fac = function BenefitsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BenefitsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BenefitsComponent, selectors: [["app-benefits"]], decls: 5, vars: 1, consts: [["id", "beneficios", "aria-label", "Beneficios de ObesiApp", 1, "benefits"], [1, "container"], ["tag", "Beneficios", "title", "Impacto real en la vida de tu familia", "subtitle", "ObesiApp no solo registra datos: genera cambios reales, duraderos y medibles."], [1, "benefits__grid"], ["class", "benefit-card reveal", 3, "--delay", 4, "ngFor", "ngForOf"], [1, "benefit-card", "reveal"], [1, "benefit-card__icon-wrap"], [1, "benefit-card__icon"], [1, "benefit-card__content"], [1, "benefit-card__title"], [1, "benefit-card__desc"], [1, "benefit-card__line"]], template: function BenefitsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-section-title", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275template(4, BenefitsComponent_article_4_Template, 10, 11, "article", 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.benefits);
      }
    }, dependencies: [CommonModule, NgForOf, SectionTitleComponent], styles: ["\n\n.benefits[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      180deg,\n      #f0f8ff 0%,\n      var(--bg) 100%);\n}\n.benefits__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n@media (max-width: 900px) {\n  .benefits__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .benefits__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.benefit-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 28px;\n  box-shadow: var(--shadow);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  transition: var(--transition);\n  transition-delay: var(--delay, 0s);\n  position: relative;\n  overflow: hidden;\n}\n.benefit-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n}\n.benefit-card__icon-wrap[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.benefit-card__icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));\n}\n.benefit-card__content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.benefit-card__title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 800;\n  margin-bottom: 8px;\n  line-height: 1.3;\n}\n.benefit-card__desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--muted);\n  line-height: 1.65;\n}\n.benefit-card__line[_ngcontent-%COMP%] {\n  height: 3px;\n  border-radius: 3px;\n  width: 40px;\n  transition: width 0.4s ease;\n}\n.benefit-card[_ngcontent-%COMP%]:hover   .benefit-card__line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=benefits.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BenefitsComponent, [{
    type: Component,
    args: [{ selector: "app-benefits", standalone: true, imports: [CommonModule, SectionTitleComponent], template: `<section id="beneficios" class="benefits" aria-label="Beneficios de ObesiApp">\r
  <div class="container">\r
    <app-section-title\r
      tag="Beneficios"\r
      title="Impacto real en la vida de tu familia"\r
      subtitle="ObesiApp no solo registra datos: genera cambios reales, duraderos y medibles."\r
    />\r
\r
    <div class="benefits__grid">\r
      <article\r
        *ngFor="let benefit of benefits; let i = index"\r
        class="benefit-card reveal"\r
        [style.--delay]="i * 0.08 + 's'"\r
      >\r
        <div class="benefit-card__icon-wrap" [style.background]="benefit.gradient">\r
          <span class="benefit-card__icon">{{ benefit.icon }}</span>\r
        </div>\r
        <div class="benefit-card__content">\r
          <h3 class="benefit-card__title" [style.color]="benefit.accent">{{ benefit.title }}</h3>\r
          <p class="benefit-card__desc">{{ benefit.desc }}</p>\r
        </div>\r
        <div class="benefit-card__line" [style.background]="benefit.accent"></div>\r
      </article>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/features/landing/components/benefits/benefits.component.scss */\n.benefits {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      180deg,\n      #f0f8ff 0%,\n      var(--bg) 100%);\n}\n.benefits__grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n@media (max-width: 900px) {\n  .benefits__grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .benefits__grid {\n    grid-template-columns: 1fr;\n  }\n}\n.benefit-card {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 28px;\n  box-shadow: var(--shadow);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  transition: var(--transition);\n  transition-delay: var(--delay, 0s);\n  position: relative;\n  overflow: hidden;\n}\n.benefit-card:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n}\n.benefit-card__icon-wrap {\n  width: 68px;\n  height: 68px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.benefit-card__icon {\n  font-size: 32px;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));\n}\n.benefit-card__content {\n  flex: 1;\n}\n.benefit-card__title {\n  font-size: 17px;\n  font-weight: 800;\n  margin-bottom: 8px;\n  line-height: 1.3;\n}\n.benefit-card__desc {\n  font-size: 14px;\n  color: var(--muted);\n  line-height: 1.65;\n}\n.benefit-card__line {\n  height: 3px;\n  border-radius: 3px;\n  width: 40px;\n  transition: width 0.4s ease;\n}\n.benefit-card:hover .benefit-card__line {\n  width: 100%;\n}\n/*# sourceMappingURL=benefits.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BenefitsComponent, { className: "BenefitsComponent", filePath: "src/app/features/landing/components/benefits/benefits.component.ts", lineNumber: 12 });
})();

// src/app/features/landing/components/methodology/methodology.component.ts
function MethodologyComponent_article_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    const pillar_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background", pillar_r2.color + "20")("color", pillar_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r1);
  }
}
function MethodologyComponent_article_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275template(8, MethodologyComponent_article_4_span_8_Template, 2, 5, "span", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pillar_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275styleProp("--delay", i_r3 * 0.12 + "s")("--accent", pillar_r2.color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", pillar_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pillar_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pillar_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pillar_r2.desc);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", pillar_r2.tags);
  }
}
var MethodologyComponent = class _MethodologyComponent {
  constructor() {
    this.pillars = [];
    this.techStack = [];
  }
  static {
    this.\u0275fac = function MethodologyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MethodologyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MethodologyComponent, selectors: [["app-methodology"]], decls: 5, vars: 1, consts: [["id", "metodologia", "aria-label", "Metodolog\xEDa tecnol\xF3gica de ObesiApp", 1, "methodology"], [1, "container"], ["tag", "Metodolog\xEDa Tech", "title", "Construido con las mejores pr\xE1cticas", "subtitle", "ObesiApp nace de una ingenier\xEDa s\xF3lida y una metodolog\xEDa probada para garantizar confiabilidad y escalabilidad."], [1, "methodology__pillars"], ["class", "pillar-card reveal", 3, "--delay", "--accent", 4, "ngFor", "ngForOf"], [1, "pillar-card", "reveal"], [1, "pillar-card__icon"], [1, "pillar-card__title"], [1, "pillar-card__desc"], [1, "pillar-card__tags"], ["class", "pillar-card__tag", 3, "background", "color", 4, "ngFor", "ngForOf"], [1, "pillar-card__tag"]], template: function MethodologyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-section-title", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275template(4, MethodologyComponent_article_4_Template, 9, 10, "article", 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.pillars);
      }
    }, dependencies: [CommonModule, NgForOf, SectionTitleComponent], styles: ["\n\n.methodology[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: var(--bg);\n}\n.methodology__pillars[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-bottom: 56px;\n}\n.methodology__stack[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 40px;\n  box-shadow: var(--shadow);\n}\n.methodology__stack-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--primary);\n  text-align: center;\n  margin-bottom: 28px;\n}\n.methodology__stack-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .methodology__stack-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .methodology__stack-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.methodology__tech[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 20px 12px;\n  border-radius: var(--radius);\n  background: var(--bg);\n  transition: var(--transition);\n}\n.methodology__tech[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f4ff,\n      #f0f9e8);\n  transform: translateY(-4px);\n}\n.methodology__tech-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.methodology__tech-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--text);\n}\n.methodology__tech-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--muted);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .methodology__pillars[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 500px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.pillar-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  box-shadow: var(--shadow);\n  border-left: 4px solid var(--accent, var(--primary));\n  transition: var(--transition);\n  transition-delay: var(--delay, 0s);\n}\n.pillar-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(8px);\n  box-shadow: var(--shadow-lg);\n}\n.pillar-card__icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 16px;\n  display: block;\n}\n.pillar-card__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text);\n  margin-bottom: 12px;\n}\n.pillar-card__desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--muted);\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n.pillar-card__tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pillar-card__tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  padding: 4px 12px;\n  border-radius: 50px;\n  letter-spacing: 0.3px;\n}\n/*# sourceMappingURL=methodology.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MethodologyComponent, [{
    type: Component,
    args: [{ selector: "app-methodology", standalone: true, imports: [CommonModule, SectionTitleComponent], template: `<section id="metodologia" class="methodology" aria-label="Metodolog\xEDa tecnol\xF3gica de ObesiApp">\r
  <div class="container">\r
    <app-section-title\r
      tag="Metodolog\xEDa Tech"\r
      title="Construido con las mejores pr\xE1cticas"\r
      subtitle="ObesiApp nace de una ingenier\xEDa s\xF3lida y una metodolog\xEDa probada para garantizar confiabilidad y escalabilidad."\r
    />\r
\r
    <div class="methodology__pillars">\r
      <article\r
        *ngFor="let pillar of pillars; let i = index"\r
        class="pillar-card reveal"\r
        [style.--delay]="i * 0.12 + 's'"\r
        [style.--accent]="pillar.color"\r
      >\r
        <div class="pillar-card__icon" [style.color]="pillar.color">{{ pillar.icon }}</div>\r
        <h3 class="pillar-card__title">{{ pillar.title }}</h3>\r
        <p class="pillar-card__desc">{{ pillar.desc }}</p>\r
        <div class="pillar-card__tags">\r
          <span\r
            *ngFor="let tag of pillar.tags"\r
            class="pillar-card__tag"\r
            [style.background]="pillar.color + '20'"\r
            [style.color]="pillar.color"\r
          >{{ tag }}</span>\r
        </div>\r
      </article>\r
    </div>\r
\r
    <!-- Tech Stack -->\r
    \r
  </div>\r
</section>\r
`, styles: ["/* src/app/features/landing/components/methodology/methodology.component.scss */\n.methodology {\n  padding: 100px 0;\n  background: var(--bg);\n}\n.methodology__pillars {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-bottom: 56px;\n}\n.methodology__stack {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 40px;\n  box-shadow: var(--shadow);\n}\n.methodology__stack-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--primary);\n  text-align: center;\n  margin-bottom: 28px;\n}\n.methodology__stack-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .methodology__stack-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .methodology__stack-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.methodology__tech {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 20px 12px;\n  border-radius: var(--radius);\n  background: var(--bg);\n  transition: var(--transition);\n}\n.methodology__tech:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f4ff,\n      #f0f9e8);\n  transform: translateY(-4px);\n}\n.methodology__tech-icon {\n  font-size: 32px;\n}\n.methodology__tech-name {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--text);\n}\n.methodology__tech-desc {\n  font-size: 11px;\n  color: var(--muted);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .methodology__pillars {\n    grid-template-columns: 1fr;\n    max-width: 500px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.pillar-card {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  box-shadow: var(--shadow);\n  border-left: 4px solid var(--accent, var(--primary));\n  transition: var(--transition);\n  transition-delay: var(--delay, 0s);\n}\n.pillar-card:hover {\n  transform: translateX(8px);\n  box-shadow: var(--shadow-lg);\n}\n.pillar-card__icon {\n  font-size: 40px;\n  margin-bottom: 16px;\n  display: block;\n}\n.pillar-card__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text);\n  margin-bottom: 12px;\n}\n.pillar-card__desc {\n  font-size: 14px;\n  color: var(--muted);\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n.pillar-card__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pillar-card__tag {\n  font-size: 11px;\n  font-weight: 800;\n  padding: 4px 12px;\n  border-radius: 50px;\n  letter-spacing: 0.3px;\n}\n/*# sourceMappingURL=methodology.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MethodologyComponent, { className: "MethodologyComponent", filePath: "src/app/features/landing/components/methodology/methodology.component.ts", lineNumber: 12 });
})();

// src/app/features/landing/components/cta/cta.component.ts
function CtaComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275text(2, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "\xA1Gracias por suscribirte!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Te enviaremos las \xFAltimas novedades de ObesiApp.");
    \u0275\u0275elementEnd()()();
  }
}
function CtaComponent_form_30_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function CtaComponent_form_30_div_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F M\xEDnimo 2 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function CtaComponent_form_30_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, CtaComponent_form_30_div_5_span_1_Template, 2, 0, "span", 32)(2, CtaComponent_form_30_div_5_span_2_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nombre.errors == null ? null : ctx_r1.nombre.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nombre.errors == null ? null : ctx_r1.nombre.errors["minlength"]);
  }
}
function CtaComponent_form_30_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F El correo es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function CtaComponent_form_30_div_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F Ingresa un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function CtaComponent_form_30_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, CtaComponent_form_30_div_10_span_1_Template, 2, 0, "span", 32)(2, CtaComponent_form_30_div_10_span_2_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.email.errors == null ? null : ctx_r1.email.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.email.errors == null ? null : ctx_r1.email.errors["email"]);
  }
}
function CtaComponent_form_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 22);
    \u0275\u0275listener("ngSubmit", function CtaComponent_form_30_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "label", 24);
    \u0275\u0275text(3, "Tu nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 25);
    \u0275\u0275template(5, CtaComponent_form_30_div_5_Template, 3, 2, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23)(7, "label", 27);
    \u0275\u0275text(8, "Correo electr\xF3nico *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 28);
    \u0275\u0275template(10, CtaComponent_form_30_div_10_Template, 3, 2, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 30);
    \u0275\u0275text(12, " \u{1F680} Quiero novedades ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("form-group--error", ctx_r1.submitted && ctx_r1.nombre.invalid);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-invalid", ctx_r1.submitted && ctx_r1.nombre.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.nombre.invalid);
    \u0275\u0275advance();
    \u0275\u0275classProp("form-group--error", ctx_r1.submitted && ctx_r1.email.invalid);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-invalid", ctx_r1.submitted && ctx_r1.email.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.email.invalid);
  }
}
var CtaComponent = class _CtaComponent {
  constructor(fb) {
    this.fb = fb;
    this.submitted = false;
    this.success = false;
    this.form = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]]
    });
  }
  get nombre() {
    return this.form.get("nombre");
  }
  get email() {
    return this.form.get("email");
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.success = true;
      this.form.reset();
      this.submitted = false;
      setTimeout(() => this.success = false, 5e3);
    }
  }
  scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  static {
    this.\u0275fac = function CtaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CtaComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CtaComponent, selectors: [["app-cta"]], decls: 31, vars: 2, consts: [["id", "descargar", "aria-label", "Descargar ObesiApp y suscripci\xF3n", 1, "cta"], ["aria-hidden", "true", 1, "cta__blob", "cta__blob--1"], ["aria-hidden", "true", 1, "cta__blob", "cta__blob--2"], [1, "container", "cta__inner"], [1, "cta__main", "reveal"], [1, "cta__badge"], [1, "cta__title"], [1, "cta__title-highlight"], [1, "cta__subtitle"], [1, "cta__download-btns"], ["href", "/login", "aria-label", "Descargar en Google Play", 1, "cta__store-btn"], [1, "cta__store-sub"], [1, "cta__store-name"], [1, "cta__form-wrap", "reveal"], [1, "cta__form-card"], [1, "cta__form-header"], [1, "cta__form-icon"], [1, "cta__form-title"], [1, "cta__form-desc"], ["class", "cta__success", "role", "alert", "aria-live", "polite", 4, "ngIf"], ["novalidate", "", "aria-label", "Formulario de suscripci\xF3n", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 1, "cta__success"], ["novalidate", "", "aria-label", "Formulario de suscripci\xF3n", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "nombre", 1, "form-label"], ["id", "nombre", "type", "text", "formControlName", "nombre", "placeholder", "Ej. Mar\xEDa Garc\xEDa", "autocomplete", "given-name", "aria-describedby", "nombre-error", 1, "form-input"], ["id", "nombre-error", "class", "form-error", "role", "alert", 4, "ngIf"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "tu@correo.com", "autocomplete", "email", "aria-describedby", "email-error", 1, "form-input"], ["id", "email-error", "class", "form-error", "role", "alert", 4, "ngIf"], ["type", "submit", 1, "btn", "btn--primary", "form-submit"], ["id", "nombre-error", "role", "alert", 1, "form-error"], [4, "ngIf"], ["id", "email-error", "role", "alert", 1, "form-error"]], template: function CtaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " \xA1\xDAnete hoy!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h2", 6);
        \u0275\u0275text(8, " Empieza hoy el cambio");
        \u0275\u0275element(9, "br");
        \u0275\u0275elementStart(10, "span", 7);
        \u0275\u0275text(11, "hacia una vida saludable");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "p", 8);
        \u0275\u0275text(13, " Miles de familias ya est\xE1n transformando sus h\xE1bitos con OBS Infantil. Desc\xE1rgala gratis y empieza tu primer reto hoy mismo. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "a", 10)(16, "div");
        \u0275\u0275element(17, "span", 11);
        \u0275\u0275elementStart(18, "span", 12);
        \u0275\u0275text(19, "Inicia sesi\xF3n");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "span", 16);
        \u0275\u0275text(24, "\u{1F4EC}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h3", 17);
        \u0275\u0275text(26, "Mantente al tanto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p", 18);
        \u0275\u0275text(28, "Recibe novedades, consejos y actualizaciones de OBS Infantil.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(29, CtaComponent_div_29_Template, 8, 0, "div", 19)(30, CtaComponent_form_30_Template, 13, 9, "form", 20);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(29);
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.success);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.cta[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--primary-2) 50%,\n      var(--secondary) 100%);\n  position: relative;\n  overflow: hidden;\n}\n.cta__blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.2;\n}\n.cta__blob--1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background: var(--yellow);\n  top: -200px;\n  right: -100px;\n}\n.cta__blob--2[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: var(--success);\n  bottom: -150px;\n  left: -80px;\n}\n.cta__inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.cta__main[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.cta__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--yellow);\n  color: var(--primary);\n  font-size: 13px;\n  font-weight: 800;\n  padding: 6px 18px;\n  border-radius: 50px;\n  margin-bottom: 24px;\n}\n.cta__title[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 4vw, 48px);\n  font-weight: 900;\n  line-height: 1.1;\n  margin-bottom: 20px;\n}\n.cta__title-highlight[_ngcontent-%COMP%] {\n  color: var(--yellow);\n}\n.cta__subtitle[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.7;\n  margin-bottom: 36px;\n}\n.cta__download-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cta__store-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(8px);\n  border: 1.5px solid rgba(255, 255, 255, 0.25);\n  color: var(--white);\n  padding: 14px 22px;\n  border-radius: var(--radius);\n  transition: var(--transition);\n  text-decoration: none;\n}\n.cta__store-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n  transform: translateY(-3px);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.cta__store-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.cta__store-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  opacity: 0.7;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.cta__store-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: 800;\n}\n.cta__form-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 36px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);\n}\n.cta__form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.cta__form-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.cta__form-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--primary);\n  margin-bottom: 8px;\n}\n.cta__form-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--muted);\n}\n.cta__success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9,\n      #c8e6c9);\n  border-radius: var(--radius);\n  padding: 20px;\n  border-left: 4px solid var(--success);\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease;\n}\n.cta__success[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 32px;\n  flex-shrink: 0;\n}\n.cta__success[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  color: #2e7d32;\n  margin-bottom: 4px;\n}\n.cta__success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #388e3c;\n}\n@media (max-width: 900px) {\n  .cta__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n  .cta__main[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .cta__download-btns[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group--error[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n  background: #fff5f5;\n}\n.form-group--error[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(193, 18, 31, 0.15);\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 8px;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 18px;\n  border: 2px solid #e0e0e0;\n  border-radius: var(--radius);\n  font-family: "Nunito", sans-serif;\n  font-size: 15px;\n  color: var(--text);\n  background: var(--bg);\n  transition: var(--transition);\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #bdbdbd;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--secondary);\n  background: var(--white);\n  box-shadow: 0 0 0 3px rgba(35, 114, 178, 0.12);\n}\n.form-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 6px;\n  font-size: 13px;\n  color: var(--danger);\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_fadeInDown 0.3s ease;\n}\n.form-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  font-size: 16px;\n  padding: 16px;\n  margin-top: 8px;\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=cta.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CtaComponent, [{
    type: Component,
    args: [{ selector: "app-cta", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<section id="descargar" class="cta" aria-label="Descargar ObesiApp y suscripci\xF3n">\r
  <!-- Decorative blobs -->\r
  <div class="cta__blob cta__blob--1" aria-hidden="true"></div>\r
  <div class="cta__blob cta__blob--2" aria-hidden="true"></div>\r
\r
  <div class="container cta__inner">\r
    <!-- Main CTA -->\r
    <div class="cta__main reveal">\r
      <div class="cta__badge"> \xA1\xDAnete hoy!</div>\r
      <h2 class="cta__title">\r
        Empieza hoy el cambio<br>\r
        <span class="cta__title-highlight">hacia una vida saludable</span>\r
      </h2>\r
      <p class="cta__subtitle">\r
        Miles de familias ya est\xE1n transformando sus h\xE1bitos con OBS Infantil.\r
        Desc\xE1rgala gratis y empieza tu primer reto hoy mismo.\r
      </p>\r
\r
      <div class="cta__download-btns">\r
       \r
        <a href="/login" class="cta__store-btn" aria-label="Descargar en Google Play">\r
          <div>\r
            <span class="cta__store-sub"></span>\r
            <span class="cta__store-name">Inicia sesi\xF3n</span>\r
          </div>\r
        </a>\r
      </div>\r
    </div>\r
\r
    <!-- Newsletter Form -->\r
    <div class="cta__form-wrap reveal">\r
      <div class="cta__form-card">\r
        <div class="cta__form-header">\r
          <span class="cta__form-icon">\u{1F4EC}</span>\r
          <h3 class="cta__form-title">Mantente al tanto</h3>\r
          <p class="cta__form-desc">Recibe novedades, consejos y actualizaciones de OBS Infantil.</p>\r
        </div>\r
\r
        <!-- Success message -->\r
        <div *ngIf="success" class="cta__success" role="alert" aria-live="polite">\r
          <span>\u{1F389}</span>\r
          <div>\r
            <strong>\xA1Gracias por suscribirte!</strong>\r
            <p>Te enviaremos las \xFAltimas novedades de ObesiApp.</p>\r
          </div>\r
        </div>\r
\r
        <form\r
          *ngIf="!success"\r
          [formGroup]="form"\r
          (ngSubmit)="onSubmit()"\r
          novalidate\r
          aria-label="Formulario de suscripci\xF3n"\r
        >\r
          <!-- Nombre -->\r
          <div class="form-group" [class.form-group--error]="submitted && nombre.invalid">\r
            <label for="nombre" class="form-label">Tu nombre *</label>\r
            <input\r
              id="nombre"\r
              type="text"\r
              class="form-input"\r
              formControlName="nombre"\r
              placeholder="Ej. Mar\xEDa Garc\xEDa"\r
              autocomplete="given-name"\r
              [attr.aria-invalid]="submitted && nombre.invalid"\r
              aria-describedby="nombre-error"\r
            />\r
            <div\r
              *ngIf="submitted && nombre.invalid"\r
              id="nombre-error"\r
              class="form-error"\r
              role="alert"\r
            >\r
              <span *ngIf="nombre.errors?.['required']">\u26A0\uFE0F El nombre es obligatorio.</span>\r
              <span *ngIf="nombre.errors?.['minlength']">\u26A0\uFE0F M\xEDnimo 2 caracteres.</span>\r
            </div>\r
          </div>\r
\r
          <!-- Email -->\r
          <div class="form-group" [class.form-group--error]="submitted && email.invalid">\r
            <label for="email" class="form-label">Correo electr\xF3nico *</label>\r
            <input\r
              id="email"\r
              type="email"\r
              class="form-input"\r
              formControlName="email"\r
              placeholder="tu@correo.com"\r
              autocomplete="email"\r
              [attr.aria-invalid]="submitted && email.invalid"\r
              aria-describedby="email-error"\r
            />\r
            <div\r
              *ngIf="submitted && email.invalid"\r
              id="email-error"\r
              class="form-error"\r
              role="alert"\r
            >\r
              <span *ngIf="email.errors?.['required']">\u26A0\uFE0F El correo es obligatorio.</span>\r
              <span *ngIf="email.errors?.['email']">\u26A0\uFE0F Ingresa un correo v\xE1lido.</span>\r
            </div>\r
          </div>\r
\r
          <button type="submit" class="btn btn--primary form-submit">\r
            \u{1F680} Quiero novedades\r
          </button>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/landing/components/cta/cta.component.scss */\n.cta {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--primary-2) 50%,\n      var(--secondary) 100%);\n  position: relative;\n  overflow: hidden;\n}\n.cta__blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.2;\n}\n.cta__blob--1 {\n  width: 500px;\n  height: 500px;\n  background: var(--yellow);\n  top: -200px;\n  right: -100px;\n}\n.cta__blob--2 {\n  width: 400px;\n  height: 400px;\n  background: var(--success);\n  bottom: -150px;\n  left: -80px;\n}\n.cta__inner {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.cta__main {\n  color: var(--white);\n}\n.cta__badge {\n  display: inline-block;\n  background: var(--yellow);\n  color: var(--primary);\n  font-size: 13px;\n  font-weight: 800;\n  padding: 6px 18px;\n  border-radius: 50px;\n  margin-bottom: 24px;\n}\n.cta__title {\n  font-size: clamp(28px, 4vw, 48px);\n  font-weight: 900;\n  line-height: 1.1;\n  margin-bottom: 20px;\n}\n.cta__title-highlight {\n  color: var(--yellow);\n}\n.cta__subtitle {\n  font-size: 17px;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.7;\n  margin-bottom: 36px;\n}\n.cta__download-btns {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cta__store-btn {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(8px);\n  border: 1.5px solid rgba(255, 255, 255, 0.25);\n  color: var(--white);\n  padding: 14px 22px;\n  border-radius: var(--radius);\n  transition: var(--transition);\n  text-decoration: none;\n}\n.cta__store-btn:hover {\n  background: rgba(255, 255, 255, 0.22);\n  transform: translateY(-3px);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.cta__store-icon {\n  font-size: 28px;\n}\n.cta__store-sub {\n  display: block;\n  font-size: 10px;\n  opacity: 0.7;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.cta__store-name {\n  display: block;\n  font-size: 16px;\n  font-weight: 800;\n}\n.cta__form-card {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 36px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);\n}\n.cta__form-header {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.cta__form-icon {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.cta__form-title {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--primary);\n  margin-bottom: 8px;\n}\n.cta__form-desc {\n  font-size: 14px;\n  color: var(--muted);\n}\n.cta__success {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9,\n      #c8e6c9);\n  border-radius: var(--radius);\n  padding: 20px;\n  border-left: 4px solid var(--success);\n  animation: fadeInUp 0.5s ease;\n}\n.cta__success > span {\n  font-size: 32px;\n  flex-shrink: 0;\n}\n.cta__success strong {\n  display: block;\n  font-size: 16px;\n  color: #2e7d32;\n  margin-bottom: 4px;\n}\n.cta__success p {\n  font-size: 14px;\n  color: #388e3c;\n}\n@media (max-width: 900px) {\n  .cta__inner {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n  .cta__main {\n    text-align: center;\n  }\n  .cta__download-btns {\n    justify-content: center;\n  }\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group--error .form-input {\n  border-color: var(--danger);\n  background: #fff5f5;\n}\n.form-group--error .form-input:focus {\n  box-shadow: 0 0 0 3px rgba(193, 18, 31, 0.15);\n}\n.form-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 8px;\n}\n.form-input {\n  width: 100%;\n  padding: 14px 18px;\n  border: 2px solid #e0e0e0;\n  border-radius: var(--radius);\n  font-family: "Nunito", sans-serif;\n  font-size: 15px;\n  color: var(--text);\n  background: var(--bg);\n  transition: var(--transition);\n  outline: none;\n}\n.form-input::placeholder {\n  color: #bdbdbd;\n}\n.form-input:focus {\n  border-color: var(--secondary);\n  background: var(--white);\n  box-shadow: 0 0 0 3px rgba(35, 114, 178, 0.12);\n}\n.form-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 6px;\n  font-size: 13px;\n  color: var(--danger);\n  font-weight: 600;\n  animation: fadeInDown 0.3s ease;\n}\n.form-submit {\n  width: 100%;\n  justify-content: center;\n  font-size: 16px;\n  padding: 16px;\n  margin-top: 8px;\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=cta.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CtaComponent, { className: "CtaComponent", filePath: "src/app/features/landing/components/cta/cta.component.ts", lineNumber: 12 });
})();

// src/app/features/landing/pages/landing-page/landing-page.component.ts
var LandingPageComponent = class _LandingPageComponent {
  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          entry.target.classList.add("reveal-left--visible");
          entry.target.classList.add("reveal-right--visible");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
    setTimeout(() => {
      const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
      elements.forEach((el) => this.observer.observe(el));
    }, 100);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  static {
    this.\u0275fac = function LandingPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingPageComponent, selectors: [["app-landing-page"]], decls: 10, vars: 0, consts: [["id", "main-content", "role", "main"]], template: function LandingPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "main", 0);
        \u0275\u0275element(2, "app-hero")(3, "app-problem")(4, "app-features")(5, "app-how-it-works")(6, "app-benefits")(7, "app-methodology")(8, "app-cta");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "app-footer");
      }
    }, dependencies: [
      NavbarComponent,
      FooterComponent,
      HeroComponent,
      ProblemComponent,
      FeaturesComponent,
      HowItWorksComponent,
      BenefitsComponent,
      MethodologyComponent,
      CtaComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=landing-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingPageComponent, [{
    type: Component,
    args: [{ selector: "app-landing-page", standalone: true, imports: [
      NavbarComponent,
      FooterComponent,
      HeroComponent,
      ProblemComponent,
      FeaturesComponent,
      HowItWorksComponent,
      BenefitsComponent,
      MethodologyComponent,
      CtaComponent
    ], template: '<app-navbar />\r\n\r\n<main id="main-content" role="main">\r\n  <app-hero />\r\n  <app-problem />\r\n  <app-features />\r\n  <app-how-it-works />\r\n  <app-benefits />\r\n  <app-methodology />\r\n  <app-cta />\r\n</main>\r\n\r\n<app-footer />\r\n', styles: ["/* src/app/features/landing/pages/landing-page/landing-page.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=landing-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingPageComponent, { className: "LandingPageComponent", filePath: "src/app/features/landing/pages/landing-page/landing-page.component.ts", lineNumber: 29 });
})();
export {
  LandingPageComponent
};
//# sourceMappingURL=chunk-HHDJWQUX.js.map

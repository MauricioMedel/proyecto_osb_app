import {
  AuthService
} from "./chunk-3T3BQCC5.js";
import {
  Component,
  Router,
  RouterOutlet,
  bootstrapApplication,
  catchError,
  inject,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-4YERQOE2.js";

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated())
    return true;
  router.navigate(["/login"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  // ── Rutas públicas ────────────────────────────────────────────────────────
  // Landing pública
  {
    path: "",
    loadComponent: () => import("./chunk-HHDJWQUX.js").then((m) => m.LandingPageComponent)
  },
  // Login
  {
    path: "login",
    loadComponent: () => import("./chunk-4F6HTID3.js").then((m) => m.LoginComponent)
  },
  // Registro usuario
  {
    path: "registro_usuario",
    loadComponent: () => import("./chunk-DNQQRCOH.js").then((m) => m.RegistroUsuarioComponent)
  },
  // ── Rutas protegidas (requieren sesión activa) ────────────────────────────
  //Tutor
  {
    path: "panel",
    canActivate: [authGuard],
    data: { roles: ["guardian"] },
    loadComponent: () => import("./chunk-QCHZFCGK.js").then((m) => m.PanelComponent)
  },
  {
    path: "panel/registrar-nino",
    canActivate: [authGuard],
    data: { roles: ["guardian"] },
    loadComponent: () => import("./chunk-CM7VUYYN.js").then((m) => m.RegistrarNinoComponent)
  },
  //Niños
  {
    path: "menu",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-6LMQNRR2.js").then((m) => m.MenuComponent)
  },
  {
    path: "menu/jugar",
    canActivate: [authGuard],
    data: { roles: ["child"] },
    loadComponent: () => import("./chunk-I7NJENEJ.js").then((m) => m.JugarComponent)
  },
  {
    path: "menu/trofeos",
    canActivate: [authGuard],
    data: { roles: ["child"] },
    loadComponent: () => import("./chunk-VRNPQ7FS.js").then((m) => m.TrofeosComponent)
  },
  {
    path: "menu/progreso",
    canActivate: [authGuard],
    data: { roles: ["child"] },
    loadComponent: () => import("./chunk-HPF5SIBW.js").then((m) => m.ProgresoComponent)
  },
  //Admin
  {
    path: "administrador",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-EXURZCKG.js").then((m) => m.AdministradorComponent)
  },
  // ── Fallback ──────────────────────────────────────────────────────────────
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(authReq).pipe(catchError((err) => {
    if (err.status === 401 || err.status === 403) {
      auth.logout();
    }
    return throwError(() => err);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor])
      // ← esta línea es la clave
    )
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: `<router-outlet />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map

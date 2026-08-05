import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
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
  HttpClientModule,
  HttpParams,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  RouterModule,
  Subject,
  catchError,
  forkJoin,
  interval,
  map,
  of,
  setClassMetadata,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4YERQOE2.js";

// src/app/services/admin.service.ts
var AdminService = class _AdminService {
  constructor(http) {
    this.http = http;
    this.API = environment.apiUrl;
  }
  // ── KPIs ──────────────────────────────────────────────────────────────────
  // ── KPIs ──────────────────────────────────────────────────────────────────
  getKpis() {
    const baseUrl = this.API.replace("/api/v1", "");
    return forkJoin({
      stats: this.http.get(`${this.API}/admin/stats`).pipe(catchError(() => of(null))),
      health: this.http.get(`${baseUrl}/health`).pipe(catchError(() => of({ status: "error", db: "error", uptime: "N/A" })))
    }).pipe(map(({ stats, health }) => ({
      totalUsers: stats?.data?.total_users ?? 0,
      totalGuardians: stats?.data?.total_guardians ?? 0,
      totalChildren: stats?.data?.total_children ?? 0,
      totalAdmins: stats?.data?.total_admins ?? 0,
      activeUsers: stats?.data?.active_users ?? 0,
      lockedUsers: stats?.data?.locked_users ?? 0,
      newThisWeek: stats?.data?.new_this_week ?? 0,
      apiStatus: health?.status ?? "error",
      dbStatus: health?.db ?? "error",
      uptime: health?.uptime ?? "N/A"
    })));
  }
  // ── CRUD de usuarios ──────────────────────────────────────────────────────
  getUsers(params = {}) {
    let p = new HttpParams().set("page", params.page ?? 1).set("limit", params.limit ?? 10);
    if (params.role)
      p = p.set("role", params.role);
    if (params.search)
      p = p.set("search", params.search);
    if (params.active !== void 0)
      p = p.set("active", params.active.toString());
    return this.http.get(`${this.API}/admin/users`, { params: p }).pipe(map((r) => ({ data: r.data ?? [], meta: r.meta ?? { total: 0, page: 1, limit: 10, totalPages: 1 } })));
  }
  getUserById(id) {
    return this.http.get(`${this.API}/admin/users/${id}`).pipe(map((r) => r.data));
  }
  createUser(dto) {
    return this.http.post(`${this.API}/auth/register`, dto).pipe(map((r) => r.data));
  }
  updateUser(id, dto) {
    return this.http.patch(`${this.API}/admin/users/${id}`, dto).pipe(map((r) => r.data));
  }
  toggleUserStatus(id, active) {
    return this.http.patch(`${this.API}/admin/users/${id}`, { is_active: active }).pipe(map((r) => r.data));
  }
  unlockUser(id) {
    return this.http.patch(`${this.API}/admin/users/${id}/unlock`, {}).pipe(map((r) => r.data));
  }
  deleteUser(id) {
    return this.http.delete(`${this.API}/admin/users/${id}`).pipe(map((r) => r.data));
  }
  resetPassword(id, newPassword) {
    return this.http.patch(`${this.API}/admin/users/${id}/reset-password`, { newPassword }).pipe(map((r) => r.data));
  }
  // ── Auditoría ─────────────────────────────────────────────────────────────
  getAuditLog(page = 1, limit = 10) {
    const p = new HttpParams().set("page", page).set("limit", limit);
    return this.http.get(`${this.API}/admin/audit`, { params: p }).pipe(map((r) => ({ data: r.data ?? [], meta: r.meta ?? { total: 0, page: 1, limit: 10, totalPages: 1 } })));
  }
  // ── Health check ──────────────────────────────────────────────────────────
  checkHealth() {
    return this.http.get("http://localhost:3000/health").pipe(catchError(() => of({ status: "error", db: "error", uptime: "N/A" })));
  }
  static {
    this.\u0275fac = function AdminService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/admin/pages/administrador/administrador.component.ts
function AdministradorComponent_section_45_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64);
    \u0275\u0275element(4, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r2.pct, "%")("background", item_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r2.value, " (", item_r2.pct, "%)");
  }
}
function AdministradorComponent_section_45__svg_ng_container_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "circle", 67);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("stroke", item_r3.color)("stroke-dashoffset", ctx_r4.getDashOffset(i_r4))("stroke-dashoffset", ctx_r4.getDashOffset(i_r4));
  }
}
function AdministradorComponent_section_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 26)(1, "div", 27)(2, "div", 28)(3, "div", 29);
    \u0275\u0275text(4, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30)(6, "span", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 32);
    \u0275\u0275text(9, "Total usuarios");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 34)(13, "div", 29);
    \u0275\u0275text(14, "\u{1F9D1}\u200D\u{1F467}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 30)(16, "span", 31);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 32);
    \u0275\u0275text(19, "Tutores");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 33);
    \u0275\u0275text(21, "registrados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 35)(23, "div", 29);
    \u0275\u0275text(24, "\u{1F9D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 30)(26, "span", 31);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 32);
    \u0275\u0275text(29, "Ni\xF1os");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 33);
    \u0275\u0275text(31, "perfiles activos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 36)(33, "div", 29);
    \u0275\u0275text(34, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 30)(36, "span", 31);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 32);
    \u0275\u0275text(39, "Bloqueados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 33);
    \u0275\u0275text(41, "requieren atenci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 37)(43, "div", 29);
    \u0275\u0275text(44, "\u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 30)(46, "span", 31);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 32);
    \u0275\u0275text(49, "Nuevos esta semana");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 33);
    \u0275\u0275text(51, "\xFAltimos 7 d\xEDas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 38)(53, "div", 29);
    \u0275\u0275text(54, "\u{1F5C4}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 30)(56, "span", 31);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 32);
    \u0275\u0275text(59, "Base de datos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 33);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 39)(63, "div", 40)(64, "h3", 41);
    \u0275\u0275text(65, "Distribuci\xF3n por rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 42);
    \u0275\u0275template(67, AdministradorComponent_section_45_div_67_Template, 7, 7, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(69, "svg", 45);
    \u0275\u0275element(70, "circle", 46);
    \u0275\u0275template(71, AdministradorComponent_section_45__svg_ng_container_71_Template, 2, 3, "ng-container", 47);
    \u0275\u0275elementStart(72, "text", 48);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(74, "div", 49)(75, "h3", 41);
    \u0275\u0275text(76, "Estado del sistema");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 50)(78, "div", 51)(79, "span", 52);
    \u0275\u0275text(80, "\u{1F310}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 53);
    \u0275\u0275text(82, "API REST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 54);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 51)(86, "span", 52);
    \u0275\u0275text(87, "\u{1F5C4}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span", 53);
    \u0275\u0275text(89, "PostgreSQL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 54);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 51)(93, "span", 52);
    \u0275\u0275text(94, "\u23F1\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 53);
    \u0275\u0275text(96, "Uptime del servidor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "span", 55);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 51)(100, "span", 52);
    \u0275\u0275text(101, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span", 53);
    \u0275\u0275text(103, "Cuentas bloqueadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "span", 55);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "button", 56);
    \u0275\u0275listener("click", function AdministradorComponent_section_45_Template_button_click_106_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadKpis());
    });
    \u0275\u0275text(107, " \u{1F504} Actualizar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 57)(109, "h3", 41);
    \u0275\u0275text(110, "Acciones r\xE1pidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 58)(112, "button", 59);
    \u0275\u0275listener("click", function AdministradorComponent_section_45_Template_button_click_112_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      ctx_r4.setTab("usuarios");
      return \u0275\u0275resetView(ctx_r4.openModal("create"));
    });
    \u0275\u0275elementStart(113, "span", 60);
    \u0275\u0275text(114, "\u2795");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "span");
    \u0275\u0275text(116, "Crear tutor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "button", 59);
    \u0275\u0275listener("click", function AdministradorComponent_section_45_Template_button_click_117_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      ctx_r4.setTab("usuarios");
      ctx_r4.filterRole = "child";
      return \u0275\u0275resetView(ctx_r4.onFilterChange());
    });
    \u0275\u0275elementStart(118, "span", 60);
    \u0275\u0275text(119, "\u{1F9D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "span");
    \u0275\u0275text(121, "Ver ni\xF1os");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "button", 61);
    \u0275\u0275listener("click", function AdministradorComponent_section_45_Template_button_click_122_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      ctx_r4.setTab("usuarios");
      ctx_r4.filterActive = "false";
      return \u0275\u0275resetView(ctx_r4.onFilterChange());
    });
    \u0275\u0275elementStart(123, "span", 60);
    \u0275\u0275text(124, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "span");
    \u0275\u0275text(126, "Ver bloqueados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "button", 59);
    \u0275\u0275listener("click", function AdministradorComponent_section_45_Template_button_click_127_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.setTab("auditoria"));
    });
    \u0275\u0275elementStart(128, "span", 60);
    \u0275\u0275text(129, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "span");
    \u0275\u0275text(131, "Ver auditor\xEDa");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r4.kpis.totalUsers);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r4.kpis.activeUsers, " activos");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r4.kpis.totalGuardians);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r4.kpis.totalChildren);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r4.kpis.lockedUsers);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r4.kpis.newThisWeek);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx_r4.kpis.dbStatus !== "ok");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.kpis.dbStatus === "ok" ? "OK" : "ERROR");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Uptime: ", ctx_r4.kpis.uptime, "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r4.chartData);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r4.chartData);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.kpis.totalUsers, " ");
    \u0275\u0275advance(10);
    \u0275\u0275classProp("ok", ctx_r4.kpis.apiStatus === "ok")("err", ctx_r4.kpis.apiStatus !== "ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.kpis.apiStatus === "ok" ? "\u2713 Operativa" : "\u2717 Degradada", " ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("ok", ctx_r4.kpis.dbStatus === "ok")("err", ctx_r4.kpis.dbStatus !== "ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.kpis.dbStatus === "ok" ? "\u2713 Conectada" : "\u2717 Sin conexi\xF3n", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r4.kpis.uptime);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("warn", ctx_r4.kpis.lockedUsers > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.kpis.lockedUsers);
  }
}
function AdministradorComponent_section_46_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "div", 88);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Cargando usuarios...");
    \u0275\u0275elementEnd()();
  }
}
function AdministradorComponent_section_46_table_30_tr_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r8.display_name || user_r8.nickname, " ");
  }
}
function AdministradorComponent_section_46_table_30_tr_20_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_table_30_tr_20_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.openModal("edit", user_r8));
    });
    \u0275\u0275text(1, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function AdministradorComponent_section_46_table_30_tr_20_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 110);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_table_30_tr_20_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const user_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.unlockUser(user_r8));
    });
    \u0275\u0275text(1, "\u{1F513}");
    \u0275\u0275elementEnd();
  }
}
function AdministradorComponent_section_46_table_30_tr_20_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_table_30_tr_20_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const user_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.openModal("delete", user_r8));
    });
    \u0275\u0275text(1, "\u{1F5D1}");
    \u0275\u0275elementEnd();
  }
}
function AdministradorComponent_section_46_table_30_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 92)(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 94);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdministradorComponent_section_46_table_30_tr_20_div_8_Template, 2, 1, "div", 95);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 96);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 97);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "div", 98);
    \u0275\u0275element(16, "span", 99);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 100);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 100);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td")(27, "div", 101)(28, "button", 102);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_table_30_tr_20_Template_button_click_28_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.openModal("view", user_r8));
    });
    \u0275\u0275text(29, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, AdministradorComponent_section_46_table_30_tr_20_button_30_Template, 2, 0, "button", 103);
    \u0275\u0275elementStart(31, "button", 104);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_table_30_tr_20_Template_button_click_31_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.openModal("reset-password", user_r8));
    });
    \u0275\u0275text(32, "\u{1F511}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 105);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_table_30_tr_20_Template_button_click_33_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.toggleStatus(user_r8));
    });
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, AdministradorComponent_section_46_table_30_tr_20_button_35_Template, 2, 0, "button", 106)(36, AdministradorComponent_section_46_table_30_tr_20_button_36_Template, 2, 0, "button", 107);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-inactive", !user_r8.is_active)("row-locked", ctx_r4.isLocked(user_r8));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r8.username.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r8.username);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r8.display_name || user_r8.nickname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r8.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r4.getRoleBadgeClass(user_r8.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.getRoleLabel(user_r8.role), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", user_r8.is_active && !ctx_r4.isLocked(user_r8))("locked", ctx_r4.isLocked(user_r8))("inactive", !user_r8.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.isLocked(user_r8) ? "Bloqueado" : user_r8.is_active ? "Activo" : "Inactivo");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-danger", user_r8.failed_login_attempts >= 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r8.failed_login_attempts, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.formatDate(user_r8.last_login_at));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.formatDate(user_r8.created_at));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", user_r8.role !== "admin" || (ctx_r4.currentUser == null ? null : ctx_r4.currentUser.role) === "admin");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", user_r8.is_active ? "Desactivar" : "Activar");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r8.is_active ? "\u{1F6AB}" : "\u2705", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.isLocked(user_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r8.account_id !== (ctx_r4.currentUser == null ? null : ctx_r4.currentUser.accountId));
  }
}
function AdministradorComponent_section_46_table_30_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 112)(2, "div", 113)(3, "span", 114);
    \u0275\u0275text(4, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "No se encontraron usuarios con los filtros aplicados");
    \u0275\u0275elementEnd()()()();
  }
}
function AdministradorComponent_section_46_table_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 89)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Intentos fallidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\xDAltimo acceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Creado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, AdministradorComponent_section_46_table_30_tr_20_Template, 37, 27, "tr", 90)(21, AdministradorComponent_section_46_table_30_tr_21_Template, 7, 0, "tr", 91);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r4.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.users.length === 0);
  }
}
function AdministradorComponent_section_46_div_31_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_div_31_button_5_Template_button_click_0_listener() {
      const p_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.goToPage(p_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r14 === ctx_r4.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r14);
  }
}
function AdministradorComponent_section_46_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "button", 116);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_div_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goToPage(1));
    });
    \u0275\u0275text(2, "\xAB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 116);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_div_31_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goToPage(ctx_r4.currentPage - 1));
    });
    \u0275\u0275text(4, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdministradorComponent_section_46_div_31_button_5_Template, 2, 3, "button", 117);
    \u0275\u0275elementStart(6, "button", 116);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_div_31_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goToPage(ctx_r4.currentPage + 1));
    });
    \u0275\u0275text(7, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 116);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_div_31_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goToPage(ctx_r4.totalPages));
    });
    \u0275\u0275text(9, "\xBB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 118);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r4.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentPage === ctx_r4.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r4.currentPage === ctx_r4.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r4.currentPage, " / ", ctx_r4.totalPages, "");
  }
}
function AdministradorComponent_section_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 26)(1, "div", 68)(2, "div", 69)(3, "div", 70)(4, "span", 71);
    \u0275\u0275text(5, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 72);
    \u0275\u0275listener("input", function AdministradorComponent_section_46_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onSearch($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function AdministradorComponent_section_46_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.filterRole, $event) || (ctx_r4.filterRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AdministradorComponent_section_46_Template_select_change_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onFilterChange());
    });
    \u0275\u0275elementStart(8, "option", 74);
    \u0275\u0275text(9, "Todos los roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 75);
    \u0275\u0275text(11, "Tutores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 76);
    \u0275\u0275text(13, "Ni\xF1os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 77);
    \u0275\u0275text(15, "Admins");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function AdministradorComponent_section_46_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.filterActive, $event) || (ctx_r4.filterActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AdministradorComponent_section_46_Template_select_change_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onFilterChange());
    });
    \u0275\u0275elementStart(17, "option", 74);
    \u0275\u0275text(18, "Todos los estados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 78);
    \u0275\u0275text(20, "Activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 79);
    \u0275\u0275text(22, "Inactivos / Bloqueados");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 80)(24, "span", 81);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 82);
    \u0275\u0275listener("click", function AdministradorComponent_section_46_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openModal("create"));
    });
    \u0275\u0275text(27, " \u2795 Nuevo tutor ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 83);
    \u0275\u0275template(29, AdministradorComponent_section_46_div_29_Template, 4, 0, "div", 84)(30, AdministradorComponent_section_46_table_30_Template, 22, 2, "table", 85)(31, AdministradorComponent_section_46_div_31_Template, 12, 7, "div", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r4.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.filterRole);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.filterActive);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r4.totalUsers, " usuarios");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r4.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.totalPages > 1);
  }
}
function AdministradorComponent_section_47_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "div", 88);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Cargando auditor\xEDa...");
    \u0275\u0275elementEnd()();
  }
}
function AdministradorComponent_section_47_table_8_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 123);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 124);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 96);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 100);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 100);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r16 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.getEventIcon(entry_r16.event_type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r16.event_type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r16.actor_username || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r16.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r16.ip_address || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.formatDate(entry_r16.occurred_at));
  }
}
function AdministradorComponent_section_47_table_8_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 125)(2, "div", 113)(3, "span", 114);
    \u0275\u0275text(4, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "No hay registros de auditor\xEDa a\xFAn");
    \u0275\u0275elementEnd()()()();
  }
}
function AdministradorComponent_section_47_table_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 89)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Evento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Actor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "IP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Fecha");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, AdministradorComponent_section_47_table_8_tr_16_Template, 14, 6, "tr", 47)(17, AdministradorComponent_section_47_table_8_tr_17_Template, 7, 0, "tr", 91);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r4.auditLog);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.auditLog.length === 0);
  }
}
function AdministradorComponent_section_47_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "button", 116);
    \u0275\u0275listener("click", function AdministradorComponent_section_47_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r4 = \u0275\u0275nextContext(2);
      ctx_r4.auditPage = ctx_r4.auditPage - 1;
      return \u0275\u0275resetView(ctx_r4.loadAudit());
    });
    \u0275\u0275text(2, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 118);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 116);
    \u0275\u0275listener("click", function AdministradorComponent_section_47_div_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r4 = \u0275\u0275nextContext(2);
      ctx_r4.auditPage = ctx_r4.auditPage + 1;
      return \u0275\u0275resetView(ctx_r4.loadAudit());
    });
    \u0275\u0275text(6, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.auditPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r4.auditPage, " / ", ctx_r4.auditTotalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.auditPage === ctx_r4.auditTotalPages);
  }
}
function AdministradorComponent_section_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 26)(1, "div", 120)(2, "div", 121)(3, "h3", 41);
    \u0275\u0275text(4, "Bit\xE1cora de eventos del sistema");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 122);
    \u0275\u0275listener("click", function AdministradorComponent_section_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadAudit());
    });
    \u0275\u0275text(6, "\u{1F504} Actualizar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdministradorComponent_section_47_div_7_Template, 4, 0, "div", 84)(8, AdministradorComponent_section_47_table_8_Template, 18, 2, "table", 85)(9, AdministradorComponent_section_47_div_9_Template, 7, 4, "div", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r4.loadingAudit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.loadingAudit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.auditTotalPages > 1);
  }
}
function AdministradorComponent_div_48_ng_container_2_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131)(1, "span");
    \u0275\u0275text(2, "XP acumulado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (tmp_3_0 = ctx_r4.selectedUser.current_xp) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0, " pts");
  }
}
function AdministradorComponent_div_48_ng_container_2_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131)(1, "span");
    \u0275\u0275text(2, "Racha actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (tmp_3_0 = ctx_r4.selectedUser.streak_days) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0, " d\xEDas");
  }
}
function AdministradorComponent_div_48_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 128)(2, "h2");
    \u0275\u0275text(3, "\u{1F441} Detalle del usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 129);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.closeModal());
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 130)(7, "div", 131)(8, "span");
    \u0275\u0275text(9, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "code");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 131)(13, "span");
    \u0275\u0275text(14, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "b");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 131)(18, "span");
    \u0275\u0275text(19, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 131)(23, "span");
    \u0275\u0275text(24, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 131)(28, "span");
    \u0275\u0275text(29, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 97);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 131)(33, "span");
    \u0275\u0275text(34, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, AdministradorComponent_div_48_ng_container_2_div_37_Template, 5, 1, "div", 132)(38, AdministradorComponent_div_48_ng_container_2_div_38_Template, 5, 1, "div", 132);
    \u0275\u0275elementStart(39, "div", 131)(40, "span");
    \u0275\u0275text(41, "Intentos fallidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 131)(45, "span");
    \u0275\u0275text(46, "Bloqueado hasta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 131)(50, "span");
    \u0275\u0275text(51, "\xDAltimo acceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 131)(55, "span");
    \u0275\u0275text(56, "Creado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 133)(60, "button", 134);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_2_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.closeModal());
    });
    \u0275\u0275text(61, "Cerrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 82);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_2_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.openModal("edit", ctx_r4.selectedUser));
    });
    \u0275\u0275text(63, "Editar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r4.selectedUser.account_id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.selectedUser.username);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.selectedUser.display_name || ctx_r4.selectedUser.nickname || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.selectedUser.email || "Sin email (ni\xF1o)");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r4.getRoleBadgeClass(ctx_r4.selectedUser.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.getRoleLabel(ctx_r4.selectedUser.role));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-success", ctx_r4.selectedUser.is_active)("text-danger", !ctx_r4.selectedUser.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.selectedUser.is_active ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.selectedUser.role === "child");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.selectedUser.role === "child");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-danger", (ctx_r4.selectedUser.failed_login_attempts || 0) >= 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.selectedUser.failed_login_attempts || 0, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.formatDate(ctx_r4.selectedUser.locked_until));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.formatDate(ctx_r4.selectedUser.last_login_at));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.formatDate(ctx_r4.selectedUser.created_at));
  }
}
function AdministradorComponent_div_48_ng_container_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.modalError);
  }
}
function AdministradorComponent_div_48_ng_container_3_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1, " M\xEDnimo 3 caracteres, solo letras, n\xFAmeros, _ . - ");
    \u0275\u0275elementEnd();
  }
}
function AdministradorComponent_div_48_ng_container_3_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1, "Email inv\xE1lido");
    \u0275\u0275elementEnd();
  }
}
function AdministradorComponent_div_48_ng_container_3_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1, "M\xEDnimo 2 caracteres");
    \u0275\u0275elementEnd();
  }
}
function AdministradorComponent_div_48_ng_container_3_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1, " M\xEDnimo 10 caracteres con may\xFAscula, n\xFAmero y car\xE1cter especial (!@#$%) ");
    \u0275\u0275elementEnd();
  }
}
function AdministradorComponent_div_48_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 128)(2, "h2");
    \u0275\u0275text(3, "\u2795 Crear nuevo tutor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 129);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.closeModal());
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 135);
    \u0275\u0275template(7, AdministradorComponent_div_48_ng_container_3_div_7_Template, 2, 1, "div", 136);
    \u0275\u0275elementStart(8, "form", 137);
    \u0275\u0275listener("ngSubmit", function AdministradorComponent_div_48_ng_container_3_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.submitCreate());
    });
    \u0275\u0275elementStart(9, "div", 138)(10, "label");
    \u0275\u0275text(11, "Nombre de usuario *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 139);
    \u0275\u0275template(13, AdministradorComponent_div_48_ng_container_3_span_13_Template, 2, 0, "span", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 138)(15, "label");
    \u0275\u0275text(16, "Correo electr\xF3nico *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 141);
    \u0275\u0275template(18, AdministradorComponent_div_48_ng_container_3_span_18_Template, 2, 0, "span", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 138)(20, "label");
    \u0275\u0275text(21, "Nombre completo *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 142);
    \u0275\u0275template(23, AdministradorComponent_div_48_ng_container_3_span_23_Template, 2, 0, "span", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 138)(25, "label");
    \u0275\u0275text(26, "Contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 143);
    \u0275\u0275template(28, AdministradorComponent_div_48_ng_container_3_span_28_Template, 2, 0, "span", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 144);
    \u0275\u0275text(30, " \u2139\uFE0F Los perfiles de ni\xF1os solo pueden crearse desde el panel del tutor, no desde aqu\xED. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 133)(32, "button", 134);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_3_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.closeModal());
    });
    \u0275\u0275text(33, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 145);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_3_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.submitCreate());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r4.modalError);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r4.createForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r4.isInvalid(ctx_r4.createForm, "username"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.isInvalid(ctx_r4.createForm, "username"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r4.isInvalid(ctx_r4.createForm, "email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.isInvalid(ctx_r4.createForm, "email"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r4.isInvalid(ctx_r4.createForm, "displayName"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.isInvalid(ctx_r4.createForm, "displayName"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r4.isInvalid(ctx_r4.createForm, "password"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.isInvalid(ctx_r4.createForm, "password"));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r4.modalLoading || ctx_r4.createForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.modalLoading ? "Creando..." : "Crear tutor", " ");
  }
}
function AdministradorComponent_div_48_ng_container_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.modalError);
  }
}
function AdministradorComponent_div_48_ng_container_4_div_17_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1, "Email inv\xE1lido");
    \u0275\u0275elementEnd();
  }
}
function AdministradorComponent_div_48_ng_container_4_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "label");
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 157);
    \u0275\u0275template(4, AdministradorComponent_div_48_ng_container_4_div_17_span_4_Template, 2, 0, "span", 140);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r4.isInvalid(ctx_r4.editForm, "email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.isInvalid(ctx_r4.editForm, "email"));
  }
}
function AdministradorComponent_div_48_ng_container_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "label");
    \u0275\u0275text(2, "Nombre para mostrar");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 158);
    \u0275\u0275elementEnd();
  }
}
function AdministradorComponent_div_48_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 128)(2, "h2");
    \u0275\u0275text(3, "\u270F\uFE0F Editar usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 129);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.closeModal());
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 135);
    \u0275\u0275template(7, AdministradorComponent_div_48_ng_container_4_div_7_Template, 2, 1, "div", 136);
    \u0275\u0275elementStart(8, "div", 148)(9, "div", 149);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "b");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 150);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "form", 151);
    \u0275\u0275template(17, AdministradorComponent_div_48_ng_container_4_div_17_Template, 5, 3, "div", 152)(18, AdministradorComponent_div_48_ng_container_4_div_18_Template, 4, 0, "div", 152);
    \u0275\u0275elementStart(19, "div", 153)(20, "label");
    \u0275\u0275text(21, "Cuenta activa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 154);
    \u0275\u0275element(23, "input", 155)(24, "span", 156);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 133)(26, "button", 134);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_4_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.closeModal());
    });
    \u0275\u0275text(27, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 145);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_4_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.submitEdit());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r4.modalError);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.selectedUser.username.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.selectedUser.username);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r4.getRoleBadgeClass(ctx_r4.selectedUser.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.getRoleLabel(ctx_r4.selectedUser.role), " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r4.editForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.selectedUser.role !== "child");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.selectedUser.role !== "child");
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r4.modalLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.modalLoading ? "Guardando..." : "Guardar cambios", " ");
  }
}
function AdministradorComponent_div_48_ng_container_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.modalError);
  }
}
function AdministradorComponent_div_48_ng_container_5_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1, " M\xEDnimo 10 caracteres con may\xFAscula, n\xFAmero y car\xE1cter especial ");
    \u0275\u0275elementEnd();
  }
}
function AdministradorComponent_div_48_ng_container_5_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1, " Las contrase\xF1as no coinciden ");
    \u0275\u0275elementEnd();
  }
}
function AdministradorComponent_div_48_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 128)(2, "h2");
    \u0275\u0275text(3, "\u{1F511} Restablecer contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 129);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.closeModal());
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 135);
    \u0275\u0275template(7, AdministradorComponent_div_48_ng_container_5_div_7_Template, 2, 1, "div", 136);
    \u0275\u0275elementStart(8, "p", 159);
    \u0275\u0275text(9, " Establecer nueva contrase\xF1a para ");
    \u0275\u0275elementStart(10, "b");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, ". Se registrar\xE1 en la bit\xE1cora de auditor\xEDa. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "form", 151)(14, "div", 138)(15, "label");
    \u0275\u0275text(16, "Nueva contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 160);
    \u0275\u0275template(18, AdministradorComponent_div_48_ng_container_5_span_18_Template, 2, 0, "span", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 138)(20, "label");
    \u0275\u0275text(21, "Confirmar contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 161);
    \u0275\u0275template(23, AdministradorComponent_div_48_ng_container_5_span_23_Template, 2, 0, "span", 140);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 133)(25, "button", 134);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_5_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.closeModal());
    });
    \u0275\u0275text(26, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 162);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_5_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.submitResetPassword());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r4.modalError);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.selectedUser.username);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r4.resetPasswordForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r4.isInvalid(ctx_r4.resetPasswordForm, "newPassword"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.isInvalid(ctx_r4.resetPasswordForm, "newPassword"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", (ctx_r4.resetPasswordForm.errors == null ? null : ctx_r4.resetPasswordForm.errors["mismatch"]) && ((tmp_7_0 = ctx_r4.resetPasswordForm.get("confirm")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r4.resetPasswordForm.errors == null ? null : ctx_r4.resetPasswordForm.errors["mismatch"]) && ((tmp_8_0 = ctx_r4.resetPasswordForm.get("confirm")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r4.modalLoading || ctx_r4.resetPasswordForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.modalLoading ? "Restableciendo..." : "Restablecer contrase\xF1a", " ");
  }
}
function AdministradorComponent_div_48_ng_container_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.modalError);
  }
}
function AdministradorComponent_div_48_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 163)(2, "h2");
    \u0275\u0275text(3, "\u{1F5D1} Eliminar usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 129);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.closeModal());
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 135);
    \u0275\u0275template(7, AdministradorComponent_div_48_ng_container_6_div_7_Template, 2, 1, "div", 136);
    \u0275\u0275elementStart(8, "div", 164)(9, "div", 165);
    \u0275\u0275text(10, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "\xBFEst\xE1s seguro de eliminar al usuario ");
    \u0275\u0275elementStart(13, "b");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 100);
    \u0275\u0275text(17, " Esta acci\xF3n es ");
    \u0275\u0275elementStart(18, "b");
    \u0275\u0275text(19, "irreversible");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, ". Se eliminar\xE1n todos sus datos asociados (perfil, h\xE1bitos, retos y v\xEDnculos). ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 133)(22, "button", 134);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_6_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.closeModal());
    });
    \u0275\u0275text(23, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 166);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_ng_container_6_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.confirmDelete());
    });
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r4.modalError);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r4.selectedUser.username);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r4.modalLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.modalLoading ? "Eliminando..." : "S\xED, eliminar", " ");
  }
}
function AdministradorComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 127);
    \u0275\u0275listener("click", function AdministradorComponent_div_48_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, AdministradorComponent_div_48_ng_container_2_Template, 64, 19, "ng-container", 91)(3, AdministradorComponent_div_48_ng_container_3_Template, 36, 16, "ng-container", 91)(4, AdministradorComponent_div_48_ng_container_4_Template, 30, 10, "ng-container", 91)(5, AdministradorComponent_div_48_ng_container_5_Template, 29, 11, "ng-container", 91)(6, AdministradorComponent_div_48_ng_container_6_Template, 26, 4, "ng-container", 91);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.modalMode === "view" && ctx_r4.selectedUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.modalMode === "create");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.modalMode === "edit" && ctx_r4.selectedUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.modalMode === "reset-password" && ctx_r4.selectedUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.modalMode === "delete" && ctx_r4.selectedUser);
  }
}
function AdministradorComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap("toast toast-" + ctx_r4.toast.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.toast.msg, "\n");
  }
}
var AdministradorComponent = class _AdministradorComponent {
  getDashOffset(i) {
    const total = this.chartData.slice(0, i).reduce((a, c) => a + c.pct, 0);
    return -(total * 2.513);
  }
  // ── Gráfica de roles (datos calculados) ───────────────────────────────────
  get chartData() {
    const total = this.kpis.totalUsers || 1;
    return [
      { label: "Tutores", value: this.kpis.totalGuardians, pct: Math.round(this.kpis.totalGuardians / total * 100), color: "#3b82f6" },
      { label: "Ni\xF1os", value: this.kpis.totalChildren, pct: Math.round(this.kpis.totalChildren / total * 100), color: "#10b981" },
      { label: "Admins", value: this.kpis.totalAdmins, pct: Math.round(this.kpis.totalAdmins / total * 100), color: "#f59e0b" }
    ];
  }
  constructor(adminSvc, auth, fb) {
    this.adminSvc = adminSvc;
    this.auth = auth;
    this.fb = fb;
    this.destroy$ = new Subject();
    this.activeTab = "dashboard";
    this.loading = false;
    this.loadingKpis = false;
    this.sidebarOpen = true;
    this.currentUser = this.auth.getCurrentUser();
    this.kpis = {
      totalUsers: 0,
      totalGuardians: 0,
      totalChildren: 0,
      totalAdmins: 0,
      activeUsers: 0,
      lockedUsers: 0,
      newThisWeek: 0,
      apiStatus: "ok",
      dbStatus: "ok",
      uptime: "N/A"
    };
    this.users = [];
    this.totalUsers = 0;
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 1;
    this.searchTerm = "";
    this.filterRole = "";
    this.filterActive = "";
    this.sortField = "created_at";
    this.sortDir = "desc";
    this.auditLog = [];
    this.auditPage = 1;
    this.auditTotal = 0;
    this.auditTotalPages = 1;
    this.loadingAudit = false;
    this.modalMode = null;
    this.selectedUser = null;
    this.modalLoading = false;
    this.modalError = "";
    this.modalSuccess = "";
    this.toast = null;
  }
  ngOnInit() {
    this.buildForms();
    this.loadKpis();
    this.loadUsers();
    interval(6e4).pipe(takeUntil(this.destroy$), switchMap(() => this.adminSvc.getKpis())).subscribe((k) => this.kpis = k);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ── Formularios ───────────────────────────────────────────────────────────
  buildForms() {
    this.createForm = this.fb.group({
      username: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern(/^[a-zA-Z0-9_.-]+$/)
      ]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*_\-.])/)
      ]],
      displayName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(80)]]
    });
    this.editForm = this.fb.group({
      email: ["", [Validators.email]],
      display_name: ["", [Validators.minLength(2), Validators.maxLength(80)]],
      is_active: [true]
    });
    this.resetPasswordForm = this.fb.group({
      newPassword: ["", [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*_\-.])/)
      ]],
      confirm: ["", Validators.required]
    }, { validators: this.passwordMatchValidator });
  }
  passwordMatchValidator(g) {
    return g.get("newPassword")?.value === g.get("confirm")?.value ? null : { mismatch: true };
  }
  // ── Carga de datos ─────────────────────────────────────────────────────────
  loadKpis() {
    this.loadingKpis = true;
    this.adminSvc.getKpis().pipe(takeUntil(this.destroy$)).subscribe({
      next: (k) => {
        this.kpis = k;
        this.loadingKpis = false;
      },
      error: () => this.loadingKpis = false
    });
  }
  loadUsers() {
    this.loading = true;
    this.adminSvc.getUsers({
      page: this.currentPage,
      limit: this.pageSize,
      role: this.filterRole || void 0,
      search: this.searchTerm || void 0,
      active: this.filterActive === "" ? void 0 : this.filterActive === "true"
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.users = res.data;
        this.totalUsers = res.meta.total;
        this.totalPages = res.meta.totalPages;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showToast(err.error?.error?.message || "Error al cargar usuarios", "error");
      }
    });
  }
  loadAudit() {
    this.loadingAudit = true;
    this.adminSvc.getAuditLog(this.auditPage, 15).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.auditLog = res.data;
        this.auditTotal = res.meta.total;
        this.auditTotalPages = res.meta.totalPages;
        this.loadingAudit = false;
      },
      error: () => this.loadingAudit = false
    });
  }
  // ── Búsqueda con debounce ─────────────────────────────────────────────────
  onSearch(value) {
    this.searchTerm = value;
    this.currentPage = 1;
    this.loadUsers();
  }
  onFilterChange() {
    this.currentPage = 1;
    this.loadUsers();
  }
  // ── Paginación ────────────────────────────────────────────────────────────
  goToPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.loadUsers();
  }
  get pages() {
    const total = this.totalPages;
    const cur = this.currentPage;
    const pages = [];
    const start = Math.max(1, cur - 2);
    const end = Math.min(total, cur + 2);
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  // ── Tabs ──────────────────────────────────────────────────────────────────
  setTab(tab) {
    this.activeTab = tab;
    if (tab === "auditoria" && this.auditLog.length === 0)
      this.loadAudit();
  }
  // ── Modal ─────────────────────────────────────────────────────────────────
  openModal(mode, user) {
    this.modalMode = mode;
    this.selectedUser = user ?? null;
    this.modalError = "";
    this.modalSuccess = "";
    if (mode === "edit" && user) {
      this.editForm.patchValue({
        email: user.email ?? "",
        display_name: user.display_name ?? "",
        is_active: user.is_active
      });
    }
    if (mode === "create") {
      this.createForm.reset();
    }
    if (mode === "reset-password") {
      this.resetPasswordForm.reset();
    }
  }
  closeModal() {
    this.modalMode = null;
    this.selectedUser = null;
    this.modalError = "";
  }
  // ── CRUD ──────────────────────────────────────────────────────────────────
  submitCreate() {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }
    this.modalLoading = true;
    this.modalError = "";
    this.adminSvc.createUser(this.createForm.value).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.modalLoading = false;
        this.closeModal();
        this.showToast("Tutor creado correctamente", "success");
        this.loadUsers();
        this.loadKpis();
      },
      error: (err) => {
        this.modalLoading = false;
        this.modalError = err.error?.error?.message || "Error al crear usuario";
      }
    });
  }
  submitEdit() {
    if (this.editForm.invalid || !this.selectedUser)
      return;
    this.modalLoading = true;
    this.modalError = "";
    this.adminSvc.updateUser(this.selectedUser.account_id, this.editForm.value).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.modalLoading = false;
        this.closeModal();
        this.showToast("Usuario actualizado correctamente", "success");
        this.loadUsers();
      },
      error: (err) => {
        this.modalLoading = false;
        this.modalError = err.error?.error?.message || "Error al actualizar";
      }
    });
  }
  confirmDelete() {
    if (!this.selectedUser)
      return;
    this.modalLoading = true;
    this.adminSvc.deleteUser(this.selectedUser.account_id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.modalLoading = false;
        this.closeModal();
        this.showToast("Usuario eliminado correctamente", "success");
        this.loadUsers();
        this.loadKpis();
      },
      error: (err) => {
        this.modalLoading = false;
        this.modalError = err.error?.error?.message || "Error al eliminar";
      }
    });
  }
  toggleStatus(user) {
    const newStatus = !user.is_active;
    this.adminSvc.toggleUserStatus(user.account_id, newStatus).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        user.is_active = newStatus;
        this.showToast(newStatus ? "Usuario activado" : "Usuario desactivado", newStatus ? "success" : "warning");
      },
      error: (err) => this.showToast(err.error?.error?.message || "Error al cambiar estado", "error")
    });
  }
  unlockUser(user) {
    this.adminSvc.unlockUser(user.account_id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        user.locked_until = null;
        user.failed_login_attempts = 0;
        this.showToast("Cuenta desbloqueada", "success");
      },
      error: (err) => this.showToast(err.error?.error?.message || "Error al desbloquear", "error")
    });
  }
  submitResetPassword() {
    if (this.resetPasswordForm.invalid || !this.selectedUser)
      return;
    this.modalLoading = true;
    this.modalError = "";
    this.adminSvc.resetPassword(this.selectedUser.account_id, this.resetPasswordForm.value.newPassword).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.modalLoading = false;
        this.closeModal();
        this.showToast("Contrase\xF1a restablecida correctamente", "success");
      },
      error: (err) => {
        this.modalLoading = false;
        this.modalError = err.error?.error?.message || "Error al restablecer contrase\xF1a";
      }
    });
  }
  // ── Helpers de UI ─────────────────────────────────────────────────────────
  isLocked(user) {
    return !!user.locked_until && new Date(user.locked_until) > /* @__PURE__ */ new Date();
  }
  getRoleBadgeClass(role) {
    return { guardian: "badge-guardian", child: "badge-child", admin: "badge-admin" }[role] ?? "";
  }
  getRoleLabel(role) {
    return { guardian: "Tutor", child: "Ni\xF1o", admin: "Admin" }[role] ?? role;
  }
  getEventIcon(type) {
    const map2 = {
      account_created: "\u{1F464}",
      login: "\u{1F511}",
      logout: "\u{1F6AA}",
      password_changed: "\u{1F512}",
      role_changed: "\u{1F6E1}\uFE0F",
      data_export: "\u{1F4E4}",
      admin_action: "\u2699\uFE0F",
      link_created: "\u{1F517}",
      link_revoked: "\u2702\uFE0F"
    };
    return map2[type] ?? "\u{1F4CB}";
  }
  formatDate(date) {
    if (!date)
      return "\u2014";
    return new Date(date).toLocaleString("es-MX", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  // ── Toast ─────────────────────────────────────────────────────────────────
  showToast(msg, type) {
    this.toast = { msg, type };
    setTimeout(() => this.toast = null, 3500);
  }
  // ── Validaciones helper ───────────────────────────────────────────────────
  f(form, field) {
    return form.get(field);
  }
  isInvalid(form, field) {
    const c = form.get(field);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function AdministradorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdministradorComponent)(\u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdministradorComponent, selectors: [["app-administrador"]], decls: 50, vars: 21, consts: [[1, "admin-shell"], [1, "sidebar"], [1, "sidebar-brand"], [1, "brand-icon"], [1, "brand-text"], [1, "sidebar-nav"], [1, "nav-item", 3, "click"], [1, "nav-icon"], [1, "nav-label"], [1, "sidebar-footer"], [1, "user-info"], [1, "user-avatar"], [1, "user-meta"], [1, "user-name"], [1, "user-role"], ["title", "Cerrar sesi\xF3n", 1, "btn-logout", 3, "click"], [1, "main-content"], [1, "topbar"], [1, "btn-toggle-sidebar", 3, "click"], [1, "topbar-title"], [1, "topbar-actions"], [1, "api-badge"], [1, "dot"], ["class", "tab-content", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "toast", 3, "class", 4, "ngIf"], [1, "tab-content"], [1, "kpi-grid"], [1, "kpi-card", "kpi-total"], [1, "kpi-icon"], [1, "kpi-data"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-sub"], [1, "kpi-card", "kpi-guardian"], [1, "kpi-card", "kpi-child"], [1, "kpi-card", "kpi-locked"], [1, "kpi-card", "kpi-new"], [1, "kpi-card", "kpi-server"], [1, "dashboard-row"], [1, "card", "chart-card"], [1, "card-title"], [1, "chart-bars"], ["class", "chart-row", 4, "ngFor", "ngForOf"], [1, "donut-wrap"], ["viewBox", "0 0 100 100", 1, "donut-svg"], ["cx", "50", "cy", "50", "r", "40", "fill", "none", "stroke", "#1e293b", "stroke-width", "18"], [4, "ngFor", "ngForOf"], ["x", "50", "y", "54", "text-anchor", "middle", 1, "donut-label"], [1, "card", "system-card"], [1, "system-rows"], [1, "system-row"], [1, "sys-icon"], [1, "sys-name"], [1, "sys-badge"], [1, "sys-value"], [1, "btn", "btn-secondary", "btn-sm", "mt-12", 3, "click"], [1, "card", "actions-card"], [1, "quick-actions"], [1, "quick-btn", 3, "click"], [1, "qa-icon"], [1, "quick-btn", "warn", 3, "click"], [1, "chart-row"], [1, "chart-label"], [1, "chart-bar-wrap"], [1, "chart-bar"], [1, "chart-val"], ["cx", "50", "cy", "50", "r", "40", "fill", "none", "stroke-width", "18", "transform", "rotate(-90 50 50)"], [1, "table-toolbar"], [1, "toolbar-left"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "Buscar por username o email...", 1, "search-input", 3, "input", "value"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "guardian"], ["value", "child"], ["value", "admin"], ["value", "true"], ["value", "false"], [1, "toolbar-right"], [1, "total-badge"], [1, "btn", "btn-primary", 3, "click"], [1, "card", "table-card"], ["class", "table-loading", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "table-loading"], [1, "spinner"], [1, "data-table"], [3, "row-inactive", "row-locked", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "user-cell"], [1, "avatar-sm"], [1, "username"], ["class", "display-name", 4, "ngIf"], [1, "text-muted"], [1, "badge", 3, "ngClass"], [1, "status-cell"], [1, "status-dot"], [1, "text-muted", "text-sm"], [1, "action-btns"], ["title", "Ver detalle", 1, "btn-icon", 3, "click"], ["class", "btn-icon", "title", "Editar", 3, "click", 4, "ngIf"], ["title", "Restablecer contrase\xF1a", 1, "btn-icon", 3, "click"], [1, "btn-icon", 3, "click", "title"], ["class", "btn-icon warn", "title", "Desbloquear", 3, "click", 4, "ngIf"], ["class", "btn-icon danger", "title", "Eliminar", 3, "click", 4, "ngIf"], [1, "display-name"], ["title", "Editar", 1, "btn-icon", 3, "click"], ["title", "Desbloquear", 1, "btn-icon", "warn", 3, "click"], ["title", "Eliminar", 1, "btn-icon", "danger", 3, "click"], ["colspan", "8", 1, "empty-row"], [1, "empty-state"], [1, "empty-icon"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "page-info"], [1, "page-btn", 3, "click"], [1, "card"], [1, "card-header-row"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "audit-icon"], [1, "badge", "badge-audit"], ["colspan", "6", 1, "empty-row"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body", "detail-grid"], [1, "detail-row"], ["class", "detail-row", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "modal-body"], ["class", "alert alert-error", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "field-group"], ["formControlName", "username", "placeholder", "ej: tutor_maria"], ["class", "field-error", 4, "ngIf"], ["formControlName", "email", "type", "email", "placeholder", "correo@ejemplo.com"], ["formControlName", "displayName", "placeholder", "ej: Mar\xEDa Garc\xEDa"], ["formControlName", "password", "type", "password", "placeholder", "M\xEDn. 10 chars, may\xFAs, n\xFAmero, especial"], [1, "info-box"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "alert", "alert-error"], [1, "field-error"], [1, "user-summary"], [1, "avatar-md"], [1, "badge", "ml-8", 3, "ngClass"], [3, "formGroup"], ["class", "field-group", 4, "ngIf"], [1, "field-group", "toggle-field"], [1, "toggle"], ["type", "checkbox", "formControlName", "is_active"], [1, "slider"], ["formControlName", "email", "type", "email"], ["formControlName", "display_name"], [1, "modal-desc"], ["formControlName", "newPassword", "type", "password", "placeholder", "M\xEDn. 10 chars, may\xFAs, n\xFAmero, especial"], ["formControlName", "confirm", "type", "password"], [1, "btn", "btn-warning", 3, "click", "disabled"], [1, "modal-header", "danger"], [1, "delete-confirm"], [1, "delete-icon"], [1, "btn", "btn-danger", 3, "click", "disabled"], [1, "toast"]], template: function AdministradorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F3E5}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "ObsApp");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 5)(8, "button", 6);
        \u0275\u0275listener("click", function AdministradorComponent_Template_button_click_8_listener() {
          return ctx.setTab("dashboard");
        });
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275text(10, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 8);
        \u0275\u0275text(12, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 6);
        \u0275\u0275listener("click", function AdministradorComponent_Template_button_click_13_listener() {
          return ctx.setTab("usuarios");
        });
        \u0275\u0275elementStart(14, "span", 7);
        \u0275\u0275text(15, "\u{1F465}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 8);
        \u0275\u0275text(17, "Usuarios");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 6);
        \u0275\u0275listener("click", function AdministradorComponent_Template_button_click_18_listener() {
          return ctx.setTab("auditoria");
        });
        \u0275\u0275elementStart(19, "span", 7);
        \u0275\u0275text(20, "\u{1F4CB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 8);
        \u0275\u0275text(22, "Auditor\xEDa");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 9)(24, "div", 10)(25, "div", 11);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 12)(28, "span", 13);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 14);
        \u0275\u0275text(31, "Administrador");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "button", 15);
        \u0275\u0275listener("click", function AdministradorComponent_Template_button_click_32_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(33, "\u238B");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "main", 16)(35, "header", 17)(36, "button", 18);
        \u0275\u0275listener("click", function AdministradorComponent_Template_button_click_36_listener() {
          return ctx.sidebarOpen = !ctx.sidebarOpen;
        });
        \u0275\u0275text(37, "\u2630");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 19)(39, "h1");
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 20)(42, "div", 21);
        \u0275\u0275element(43, "span", 22);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(45, AdministradorComponent_section_45_Template, 132, 27, "section", 23)(46, AdministradorComponent_section_46_Template, 32, 7, "section", 23)(47, AdministradorComponent_section_47_Template, 10, 3, "section", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(48, AdministradorComponent_div_48_Template, 7, 5, "div", 24)(49, AdministradorComponent_div_49_Template, 2, 3, "div", 25);
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance();
        \u0275\u0275classProp("collapsed", !ctx.sidebarOpen);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("active", ctx.activeTab === "dashboard");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "usuarios");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "auditoria");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.username == null ? null : (tmp_4_0 = ctx.currentUser.username.charAt(0)) == null ? null : tmp_4_0.toUpperCase());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.username);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.activeTab === "dashboard" ? "Dashboard" : ctx.activeTab === "usuarios" ? "Gesti\xF3n de Usuarios" : "Auditor\xEDa del Sistema");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("ok", ctx.kpis.apiStatus === "ok")("degraded", ctx.kpis.apiStatus !== "ok");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" API ", ctx.kpis.apiStatus === "ok" ? "Operativa" : "Degradada", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "dashboard");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "usuarios");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "auditoria");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.modalMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.toast);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule, HttpClientModule], styles: ['@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  --bg-base: #0a0f1a;\n  --bg-surface: #111827;\n  --bg-card: #1a2235;\n  --bg-hover: #1e2a3a;\n  --border: #1e3a5f30;\n  --border-solid: #1e3a5f60;\n  --text-primary: #e2e8f0;\n  --text-secondary: #94a3b8;\n  --text-muted: #64748b;\n  --accent: #0ea5e9;\n  --accent-dark: #0284c7;\n  --green: #10b981;\n  --amber: #f59e0b;\n  --red: #ef4444;\n  --purple: #8b5cf6;\n  --sidebar-w: 240px;\n  --sidebar-w-coll: 64px;\n  --topbar-h: 60px;\n  --radius: 10px;\n  --radius-sm: 6px;\n  font-family: "DM Sans", sans-serif;\n  color: var(--text-primary);\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  background: none;\n  font-family: inherit;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.admin-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg-base);\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  background: var(--bg-surface);\n  border-right: 1px solid var(--border-solid);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.25s ease;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  z-index: 100;\n  overflow: hidden;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: var(--sidebar-w-coll);\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 18px;\n  border-bottom: 1px solid var(--border-solid);\n  white-space: nowrap;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.brand-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--accent);\n  letter-spacing: -0.3px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.0823529412);\n  color: var(--accent);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 20px;\n  text-align: center;\n}\n.nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  border-top: 1px solid var(--border-solid);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  overflow: hidden;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.btn-logout[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-radius: var(--radius-sm);\n  color: var(--text-muted);\n  font-size: 16px;\n  transition: 0.15s;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--red);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: var(--sidebar-w);\n  transition: margin-left 0.25s ease;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]    ~ .main-content[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-w-coll);\n}\n.topbar[_ngcontent-%COMP%] {\n  height: var(--topbar-h);\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-solid);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 0 24px;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.btn-toggle-sidebar[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-muted);\n  padding: 4px 8px;\n  border-radius: var(--radius-sm);\n}\n.btn-toggle-sidebar[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: var(--bg-hover);\n}\n.topbar-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.api-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px solid;\n}\n.api-badge.ok[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.0823529412);\n  border-color: rgba(16, 185, 129, 0.1882352941);\n  color: var(--green);\n}\n.api-badge.degraded[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.0823529412);\n  border-color: rgba(239, 68, 68, 0.1882352941);\n  color: var(--red);\n}\n.api-badge[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n.ok[_ngcontent-%COMP%]   .api-badge[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--green);\n  box-shadow: 0 0 6px var(--green);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.degraded[_ngcontent-%COMP%]   .api-badge[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--red);\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  flex: 1;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-solid);\n  border-radius: var(--radius);\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  transition: transform 0.2s, border-color 0.2s;\n  position: relative;\n  overflow: hidden;\n}\n.kpi-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.kpi-card.kpi-total[_ngcontent-%COMP%]::before {\n  background: var(--accent);\n}\n.kpi-card.kpi-guardian[_ngcontent-%COMP%]::before {\n  background: var(--purple);\n}\n.kpi-card.kpi-child[_ngcontent-%COMP%]::before {\n  background: var(--green);\n}\n.kpi-card.kpi-locked[_ngcontent-%COMP%]::before {\n  background: var(--amber);\n}\n.kpi-card.kpi-new[_ngcontent-%COMP%]::before {\n  background: #06b6d4;\n}\n.kpi-card.kpi-server[_ngcontent-%COMP%]::before {\n  background: var(--green);\n}\n.kpi-card.kpi-server.error[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.1882352941);\n}\n.kpi-card.kpi-server.error[_ngcontent-%COMP%]::before {\n  background: var(--red);\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.kpi-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  font-family: "DM Mono", monospace;\n  color: var(--text-primary);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.dashboard-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr 0.8fr;\n  gap: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-solid);\n  border-radius: var(--radius);\n  padding: 20px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n}\n.card-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.chart-bars[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.chart-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n}\n.chart-label[_ngcontent-%COMP%] {\n  width: 64px;\n  color: var(--text-secondary);\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.chart-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--bg-base);\n  border-radius: 4px;\n  height: 8px;\n  overflow: hidden;\n}\n.chart-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.6s ease;\n}\n.chart-val[_ngcontent-%COMP%] {\n  width: 80px;\n  text-align: right;\n  font-size: 12px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.donut-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 16px;\n}\n.donut-svg[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n}\n.donut-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  fill: var(--text-primary);\n  font-family: "DM Mono", monospace;\n}\n.system-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.system-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n}\n.sys-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  text-align: center;\n}\n.sys-name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--text-secondary);\n}\n.sys-value[_ngcontent-%COMP%] {\n  font-family: "DM Mono", monospace;\n  font-size: 12px;\n}\n.sys-value.warn[_ngcontent-%COMP%] {\n  color: var(--amber);\n}\n.sys-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.sys-badge.ok[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1254901961);\n  color: var(--green);\n}\n.sys-badge.err[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1254901961);\n  color: var(--red);\n}\n.mt-12[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background: var(--bg-hover);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n  transition: 0.15s;\n  border: 1px solid transparent;\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(14, 165, 233, 0.0823529412);\n  border-color: rgba(14, 165, 233, 0.1882352941);\n  color: var(--accent);\n}\n.quick-btn.warn[_ngcontent-%COMP%]:hover {\n  background: rgba(245, 158, 11, 0.0823529412);\n  border-color: rgba(245, 158, 11, 0.1882352941);\n  color: var(--amber);\n}\n.qa-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding: 8px 12px 8px 34px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-solid);\n  border-radius: var(--radius-sm);\n  color: var(--text-primary);\n  font-size: 13px;\n  width: 260px;\n  outline: none;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-solid);\n  border-radius: var(--radius-sm);\n  color: var(--text-secondary);\n  font-size: 13px;\n  outline: none;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n}\n.total-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: var(--bg-surface);\n  border-radius: 20px;\n  font-size: 12px;\n  color: var(--text-muted);\n  border: 1px solid var(--border-solid);\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.table-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 48px;\n  color: var(--text-muted);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-solid);\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.data-table[_ngcontent-%COMP%]   tr.row-locked[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.0235294118);\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  color: white;\n  flex-shrink: 0;\n}\n.avatar-md[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n  color: white;\n  flex-shrink: 0;\n}\n.username[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.display-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  display: inline-block;\n}\n.badge.badge-guardian[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1254901961);\n  color: #a78bfa;\n}\n.badge.badge-child[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1254901961);\n  color: #34d399;\n}\n.badge.badge-admin[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1254901961);\n  color: #fbbf24;\n}\n.badge.badge-audit[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n  font-family: "DM Mono", monospace;\n  font-size: 10px;\n}\n.status-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n.status-dot.active[_ngcontent-%COMP%] {\n  background: var(--green);\n  box-shadow: 0 0 6px var(--green);\n}\n.status-dot.inactive[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n}\n.status-dot.locked[_ngcontent-%COMP%] {\n  background: var(--amber);\n  box-shadow: 0 0 6px var(--amber);\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: nowrap;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  padding: 5px 7px;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  transition: 0.15s;\n  background: transparent;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.warn[_ngcontent-%COMP%]:hover {\n  background: rgba(245, 158, 11, 0.0823529412);\n  color: var(--amber);\n}\n.btn-icon.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1254901961);\n  color: var(--red);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 16px;\n  border-top: 1px solid var(--border-solid);\n}\n.page-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  transition: 0.15s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-left: 8px;\n}\n.empty-row[_ngcontent-%COMP%] {\n  padding: 48px !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: var(--text-muted);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.audit-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 600;\n  transition: 0.15s;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--accent-dark);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  border: 1px solid var(--border-solid);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.btn.btn-warning[_ngcontent-%COMP%] {\n  background: var(--amber);\n  color: #000;\n}\n.btn.btn-warning[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.btn.btn-warning[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background: var(--red);\n  color: white;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 16px;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-solid);\n  border-radius: 14px;\n  width: 100%;\n  max-width: 520px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.2s ease;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid var(--border-solid);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n}\n.modal-header.danger[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.modal-close[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: 4px;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: var(--bg-hover);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px 20px;\n  border-top: 1px solid var(--border-solid);\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.modal-desc[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  line-height: 1.5;\n}\n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-solid);\n  border-radius: var(--radius-sm);\n  color: var(--text-primary);\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n}\n.field-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%], \n.field-group[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%] {\n  border-color: var(--red);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--red);\n}\n.toggle-field[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 42px;\n  height: 22px;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--bg-hover);\n  border-radius: 22px;\n  cursor: pointer;\n  transition: 0.3s;\n  border: 1px solid var(--border-solid);\n}\n.toggle[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 3px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 14px;\n  height: 14px;\n  background: var(--text-muted);\n  border-radius: 50%;\n  transition: 0.3s;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background: var(--accent);\n  border-color: var(--accent);\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before {\n  transform: translateX(20px) translateY(-50%);\n  background: white;\n}\n.info-box[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: rgba(14, 165, 233, 0.062745098);\n  border: 1px solid rgba(14, 165, 233, 0.1882352941);\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n  font-size: 13px;\n  gap: 12px;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-muted);\n  font-size: 12px;\n  min-width: 130px;\n}\n.detail-row[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "DM Mono", monospace;\n  font-size: 11px;\n  color: var(--text-muted);\n  word-break: break-all;\n  text-align: right;\n}\n.user-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--bg-card);\n  border-radius: var(--radius-sm);\n}\n.ml-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.delete-confirm[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: center;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1254901961);\n  border: 1px solid rgba(239, 68, 68, 0.2509803922);\n  color: #fca5a5;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  padding: 12px 20px;\n  border-radius: var(--radius);\n  font-size: 13px;\n  font-weight: 600;\n  z-index: 2000;\n  animation: _ngcontent-%COMP%_toastIn 0.25s ease;\n  max-width: 360px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);\n}\n.toast.toast-success[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.toast.toast-error[_ngcontent-%COMP%] {\n  background: var(--red);\n  color: white;\n}\n.toast.toast-warning[_ngcontent-%COMP%] {\n  background: var(--amber);\n  color: #000;\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--border-solid);\n  border-top-color: var(--accent);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.text-success[_ngcontent-%COMP%] {\n  color: var(--green);\n}\n@media (max-width: 900px) {\n  .dashboard-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: var(--sidebar-w-coll);\n  }\n  .sidebar[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%], \n   .sidebar[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], \n   .sidebar[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: var(--sidebar-w-coll);\n  }\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .tab-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .modal[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0 8px;\n  }\n}\n/*# sourceMappingURL=administrador.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministradorComponent, [{
    type: Component,
    args: [{ selector: "app-administrador", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule], template: `<!-- src/app/admin/pages/administrador/administrador.component.html -->\r
\r
<div class="admin-shell">\r
\r
  <!-- \u2550\u2550\u2550 SIDEBAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <aside class="sidebar" [class.collapsed]="!sidebarOpen">\r
    <div class="sidebar-brand">\r
      <span class="brand-icon">\u{1F3E5}</span>\r
      <span class="brand-text">ObsApp</span>\r
    </div>\r
\r
    <nav class="sidebar-nav">\r
      <button class="nav-item" [class.active]="activeTab==='dashboard'"\r
              (click)="setTab('dashboard')">\r
        <span class="nav-icon">\u{1F4CA}</span>\r
        <span class="nav-label">Dashboard</span>\r
      </button>\r
      <button class="nav-item" [class.active]="activeTab==='usuarios'"\r
              (click)="setTab('usuarios')">\r
        <span class="nav-icon">\u{1F465}</span>\r
        <span class="nav-label">Usuarios</span>\r
      </button>\r
      <button class="nav-item" [class.active]="activeTab==='auditoria'"\r
              (click)="setTab('auditoria')">\r
        <span class="nav-icon">\u{1F4CB}</span>\r
        <span class="nav-label">Auditor\xEDa</span>\r
      </button>\r
    </nav>\r
\r
    <div class="sidebar-footer">\r
      <div class="user-info">\r
        <div class="user-avatar">{{ currentUser?.username?.charAt(0)?.toUpperCase() }}</div>\r
        <div class="user-meta">\r
          <span class="user-name">{{ currentUser?.username }}</span>\r
          <span class="user-role">Administrador</span>\r
        </div>\r
      </div>\r
      <button class="btn-logout" (click)="logout()" title="Cerrar sesi\xF3n">\u238B</button>\r
    </div>\r
  </aside>\r
\r
  <!-- \u2550\u2550\u2550 CONTENIDO PRINCIPAL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <main class="main-content">\r
\r
    <!-- Top bar -->\r
    <header class="topbar">\r
      <button class="btn-toggle-sidebar" (click)="sidebarOpen=!sidebarOpen">\u2630</button>\r
      <div class="topbar-title">\r
        <h1>{{ activeTab === 'dashboard' ? 'Dashboard' : activeTab === 'usuarios' ? 'Gesti\xF3n de Usuarios' : 'Auditor\xEDa del Sistema' }}</h1>\r
      </div>\r
      <div class="topbar-actions">\r
        <div class="api-badge" [class.ok]="kpis.apiStatus==='ok'" [class.degraded]="kpis.apiStatus!=='ok'">\r
          <span class="dot"></span>\r
          API {{ kpis.apiStatus === 'ok' ? 'Operativa' : 'Degradada' }}\r
        </div>\r
      </div>\r
    </header>\r
\r
    <!-- \u2550\u2550 TAB: DASHBOARD \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <section *ngIf="activeTab==='dashboard'" class="tab-content">\r
\r
      <!-- KPI Cards -->\r
      <div class="kpi-grid">\r
        <div class="kpi-card kpi-total">\r
          <div class="kpi-icon">\u{1F465}</div>\r
          <div class="kpi-data">\r
            <span class="kpi-value">{{ kpis.totalUsers }}</span>\r
            <span class="kpi-label">Total usuarios</span>\r
          </div>\r
          <div class="kpi-sub">{{ kpis.activeUsers }} activos</div>\r
        </div>\r
\r
        <div class="kpi-card kpi-guardian">\r
          <div class="kpi-icon">\u{1F9D1}\u200D\u{1F467}</div>\r
          <div class="kpi-data">\r
            <span class="kpi-value">{{ kpis.totalGuardians }}</span>\r
            <span class="kpi-label">Tutores</span>\r
          </div>\r
          <div class="kpi-sub">registrados</div>\r
        </div>\r
\r
        <div class="kpi-card kpi-child">\r
          <div class="kpi-icon">\u{1F9D2}</div>\r
          <div class="kpi-data">\r
            <span class="kpi-value">{{ kpis.totalChildren }}</span>\r
            <span class="kpi-label">Ni\xF1os</span>\r
          </div>\r
          <div class="kpi-sub">perfiles activos</div>\r
        </div>\r
\r
        <div class="kpi-card kpi-locked">\r
          <div class="kpi-icon">\u{1F512}</div>\r
          <div class="kpi-data">\r
            <span class="kpi-value">{{ kpis.lockedUsers }}</span>\r
            <span class="kpi-label">Bloqueados</span>\r
          </div>\r
          <div class="kpi-sub">requieren atenci\xF3n</div>\r
        </div>\r
\r
        <div class="kpi-card kpi-new">\r
          <div class="kpi-icon">\u2728</div>\r
          <div class="kpi-data">\r
            <span class="kpi-value">{{ kpis.newThisWeek }}</span>\r
            <span class="kpi-label">Nuevos esta semana</span>\r
          </div>\r
          <div class="kpi-sub">\xFAltimos 7 d\xEDas</div>\r
        </div>\r
\r
        <div class="kpi-card kpi-server" [class.error]="kpis.dbStatus!=='ok'">\r
          <div class="kpi-icon">\u{1F5C4}\uFE0F</div>\r
          <div class="kpi-data">\r
            <span class="kpi-value">{{ kpis.dbStatus === 'ok' ? 'OK' : 'ERROR' }}</span>\r
            <span class="kpi-label">Base de datos</span>\r
          </div>\r
          <div class="kpi-sub">Uptime: {{ kpis.uptime }}</div>\r
        </div>\r
      </div>\r
\r
      <!-- Distribuci\xF3n y \xFAltimos usuarios -->\r
      <div class="dashboard-row">\r
\r
        <!-- Gr\xE1fica de distribuci\xF3n por rol -->\r
        <div class="card chart-card">\r
          <h3 class="card-title">Distribuci\xF3n por rol</h3>\r
          <div class="chart-bars">\r
            <div *ngFor="let item of chartData" class="chart-row">\r
              <span class="chart-label">{{ item.label }}</span>\r
              <div class="chart-bar-wrap">\r
                <div class="chart-bar" [style.width.%]="item.pct"\r
                     [style.background]="item.color"></div>\r
              </div>\r
              <span class="chart-val">{{ item.value }} ({{ item.pct }}%)</span>\r
            </div>\r
          </div>\r
\r
          <!-- Donut visual simple -->\r
          <div class="donut-wrap">\r
  <svg viewBox="0 0 100 100" class="donut-svg">\r
    <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" stroke-width="18"/>\r
\r
    <ng-container *ngFor="let item of chartData; let i = index">\r
      <circle cx="50" cy="50" r="40" fill="none"\r
              [attr.stroke]="item.color"\r
              stroke-width="18"\r
              [attr.stroke-dashoffset]="getDashOffset(i)"\r
              [attr.stroke-dashoffset]="getDashOffset(i)"\r
              transform="rotate(-90 50 50)"/>\r
    </ng-container>\r
\r
    <text x="50" y="54" text-anchor="middle" class="donut-label">\r
      {{ kpis.totalUsers }}\r
    </text>\r
  </svg>\r
  </div> <!-- chart-card -->\r
</div>\r
\r
        <!-- Estado del sistema -->\r
        <div class="card system-card">\r
          <h3 class="card-title">Estado del sistema</h3>\r
          <div class="system-rows">\r
            <div class="system-row">\r
              <span class="sys-icon">\u{1F310}</span>\r
              <span class="sys-name">API REST</span>\r
              <span class="sys-badge" [class.ok]="kpis.apiStatus==='ok'" [class.err]="kpis.apiStatus!=='ok'">\r
                {{ kpis.apiStatus === 'ok' ? '\u2713 Operativa' : '\u2717 Degradada' }}\r
              </span>\r
            </div>\r
            <div class="system-row">\r
              <span class="sys-icon">\u{1F5C4}\uFE0F</span>\r
              <span class="sys-name">PostgreSQL</span>\r
              <span class="sys-badge" [class.ok]="kpis.dbStatus==='ok'" [class.err]="kpis.dbStatus!=='ok'">\r
                {{ kpis.dbStatus === 'ok' ? '\u2713 Conectada' : '\u2717 Sin conexi\xF3n' }}\r
              </span>\r
            </div>\r
            <div class="system-row">\r
              <span class="sys-icon">\u23F1\uFE0F</span>\r
              <span class="sys-name">Uptime del servidor</span>\r
              <span class="sys-value">{{ kpis.uptime }}</span>\r
            </div>\r
            <div class="system-row">\r
              <span class="sys-icon">\u{1F510}</span>\r
              <span class="sys-name">Cuentas bloqueadas</span>\r
              <span class="sys-value" [class.warn]="kpis.lockedUsers > 0">{{ kpis.lockedUsers }}</span>\r
            </div>\r
          </div>\r
          <button class="btn btn-secondary btn-sm mt-12" (click)="loadKpis()">\r
            \u{1F504} Actualizar\r
          </button>\r
        </div>\r
\r
        <!-- Accesos r\xE1pidos -->\r
        <div class="card actions-card">\r
          <h3 class="card-title">Acciones r\xE1pidas</h3>\r
          <div class="quick-actions">\r
            <button class="quick-btn" (click)="setTab('usuarios'); openModal('create')">\r
              <span class="qa-icon">\u2795</span>\r
              <span>Crear tutor</span>\r
            </button>\r
            <button class="quick-btn" (click)="setTab('usuarios'); filterRole='child'; onFilterChange()">\r
              <span class="qa-icon">\u{1F9D2}</span>\r
              <span>Ver ni\xF1os</span>\r
            </button>\r
            <button class="quick-btn warn" (click)="setTab('usuarios'); filterActive='false'; onFilterChange()">\r
              <span class="qa-icon">\u{1F512}</span>\r
              <span>Ver bloqueados</span>\r
            </button>\r
            <button class="quick-btn" (click)="setTab('auditoria')">\r
              <span class="qa-icon">\u{1F4CB}</span>\r
              <span>Ver auditor\xEDa</span>\r
            </button>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </section>\r
\r
    <!-- \u2550\u2550 TAB: USUARIOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <section *ngIf="activeTab==='usuarios'" class="tab-content">\r
\r
      <!-- Toolbar -->\r
      <div class="table-toolbar">\r
        <div class="toolbar-left">\r
          <div class="search-wrap">\r
            <span class="search-icon">\u{1F50D}</span>\r
            <input class="search-input" type="text"\r
                   placeholder="Buscar por username o email..."\r
                   [value]="searchTerm"\r
                   (input)="onSearch($any($event.target).value)"/>\r
          </div>\r
\r
          <select class="filter-select" [(ngModel)]="filterRole" (change)="onFilterChange()">\r
            <option value="">Todos los roles</option>\r
            <option value="guardian">Tutores</option>\r
            <option value="child">Ni\xF1os</option>\r
            <option value="admin">Admins</option>\r
          </select>\r
\r
          <select class="filter-select" [(ngModel)]="filterActive" (change)="onFilterChange()">\r
            <option value="">Todos los estados</option>\r
            <option value="true">Activos</option>\r
            <option value="false">Inactivos / Bloqueados</option>\r
          </select>\r
        </div>\r
\r
        <div class="toolbar-right">\r
          <span class="total-badge">{{ totalUsers }} usuarios</span>\r
          <button class="btn btn-primary" (click)="openModal('create')">\r
            \u2795 Nuevo tutor\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Tabla -->\r
      <div class="card table-card">\r
        <div *ngIf="loading" class="table-loading">\r
          <div class="spinner"></div>\r
          <span>Cargando usuarios...</span>\r
        </div>\r
\r
        <table *ngIf="!loading" class="data-table">\r
          <thead>\r
            <tr>\r
              <th>Usuario</th>\r
              <th>Email</th>\r
              <th>Rol</th>\r
              <th>Estado</th>\r
              <th>Intentos fallidos</th>\r
              <th>\xDAltimo acceso</th>\r
              <th>Creado</th>\r
              <th>Acciones</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let user of users" [class.row-inactive]="!user.is_active"\r
                [class.row-locked]="isLocked(user)">\r
              <td>\r
                <div class="user-cell">\r
                  <div class="avatar-sm">{{ user.username.charAt(0).toUpperCase() }}</div>\r
                  <div>\r
                    <div class="username">{{ user.username }}</div>\r
                    <div class="display-name" *ngIf="user.display_name || user.nickname">\r
                      {{ user.display_name || user.nickname }}\r
                    </div>\r
                  </div>\r
                </div>\r
              </td>\r
              <td class="text-muted">{{ user.email || '\u2014' }}</td>\r
              <td>\r
                <span class="badge" [ngClass]="getRoleBadgeClass(user.role)">\r
                  {{ getRoleLabel(user.role) }}\r
                </span>\r
              </td>\r
              <td>\r
                <div class="status-cell">\r
                  <span class="status-dot" [class.active]="user.is_active && !isLocked(user)"\r
                        [class.locked]="isLocked(user)"\r
                        [class.inactive]="!user.is_active"></span>\r
                  <span>{{ isLocked(user) ? 'Bloqueado' : user.is_active ? 'Activo' : 'Inactivo' }}</span>\r
                </div>\r
              </td>\r
              <td>\r
                <span [class.text-danger]="user.failed_login_attempts >= 3">\r
                  {{ user.failed_login_attempts }}\r
                </span>\r
              </td>\r
              <td class="text-muted text-sm">{{ formatDate(user.last_login_at) }}</td>\r
              <td class="text-muted text-sm">{{ formatDate(user.created_at) }}</td>\r
              <td>\r
                <div class="action-btns">\r
                  <button class="btn-icon" title="Ver detalle" (click)="openModal('view', user)">\u{1F441}</button>\r
                  <button class="btn-icon" title="Editar" (click)="openModal('edit', user)"\r
                          *ngIf="user.role !== 'admin' || currentUser?.role === 'admin'">\u270F\uFE0F</button>\r
                  <button class="btn-icon" title="Restablecer contrase\xF1a"\r
                          (click)="openModal('reset-password', user)">\u{1F511}</button>\r
                  <button class="btn-icon" [title]="user.is_active ? 'Desactivar' : 'Activar'"\r
                          (click)="toggleStatus(user)">\r
                    {{ user.is_active ? '\u{1F6AB}' : '\u2705' }}\r
                  </button>\r
                  <button class="btn-icon warn" title="Desbloquear" *ngIf="isLocked(user)"\r
                          (click)="unlockUser(user)">\u{1F513}</button>\r
                  <button class="btn-icon danger" title="Eliminar"\r
                          (click)="openModal('delete', user)"\r
                          *ngIf="user.account_id !== currentUser?.accountId">\u{1F5D1}</button>\r
                </div>\r
              </td>\r
            </tr>\r
\r
            <tr *ngIf="users.length === 0">\r
              <td colspan="8" class="empty-row">\r
                <div class="empty-state">\r
                  <span class="empty-icon">\u{1F50D}</span>\r
                  <span>No se encontraron usuarios con los filtros aplicados</span>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
\r
        <!-- Paginaci\xF3n -->\r
        <div class="pagination" *ngIf="totalPages > 1">\r
          <button class="page-btn" (click)="goToPage(1)" [disabled]="currentPage===1">\xAB</button>\r
          <button class="page-btn" (click)="goToPage(currentPage-1)" [disabled]="currentPage===1">\u2039</button>\r
          <button *ngFor="let p of pages" class="page-btn"\r
                  [class.active]="p===currentPage" (click)="goToPage(p)">{{ p }}</button>\r
          <button class="page-btn" (click)="goToPage(currentPage+1)" [disabled]="currentPage===totalPages">\u203A</button>\r
          <button class="page-btn" (click)="goToPage(totalPages)" [disabled]="currentPage===totalPages">\xBB</button>\r
          <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- \u2550\u2550 TAB: AUDITOR\xCDA \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <section *ngIf="activeTab==='auditoria'" class="tab-content">\r
      <div class="card">\r
        <div class="card-header-row">\r
          <h3 class="card-title">Bit\xE1cora de eventos del sistema</h3>\r
          <button class="btn btn-secondary btn-sm" (click)="loadAudit()">\u{1F504} Actualizar</button>\r
        </div>\r
\r
        <div *ngIf="loadingAudit" class="table-loading">\r
          <div class="spinner"></div><span>Cargando auditor\xEDa...</span>\r
        </div>\r
\r
        <table *ngIf="!loadingAudit" class="data-table">\r
          <thead>\r
            <tr>\r
              <th>Evento</th>\r
              <th>Tipo</th>\r
              <th>Actor</th>\r
              <th>Descripci\xF3n</th>\r
              <th>IP</th>\r
              <th>Fecha</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let entry of auditLog">\r
              <td class="audit-icon">{{ getEventIcon(entry.event_type) }}</td>\r
              <td>\r
                <span class="badge badge-audit">{{ entry.event_type }}</span>\r
              </td>\r
              <td class="text-muted">{{ entry.actor_username || '\u2014' }}</td>\r
              <td>{{ entry.description }}</td>\r
              <td class="text-muted text-sm">{{ entry.ip_address || '\u2014' }}</td>\r
              <td class="text-muted text-sm">{{ formatDate(entry.occurred_at) }}</td>\r
            </tr>\r
            <tr *ngIf="auditLog.length === 0">\r
              <td colspan="6" class="empty-row">\r
                <div class="empty-state">\r
                  <span class="empty-icon">\u{1F4CB}</span>\r
                  <span>No hay registros de auditor\xEDa a\xFAn</span>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
\r
        <!-- Paginaci\xF3n auditor\xEDa -->\r
        <div class="pagination" *ngIf="auditTotalPages > 1">\r
          <button class="page-btn" (click)="auditPage=auditPage-1; loadAudit()" [disabled]="auditPage===1">\u2039</button>\r
          <span class="page-info">{{ auditPage }} / {{ auditTotalPages }}</span>\r
          <button class="page-btn" (click)="auditPage=auditPage+1; loadAudit()" [disabled]="auditPage===auditTotalPages">\u203A</button>\r
        </div>\r
      </div>\r
    </section>\r
\r
  </main><!-- /main-content -->\r
</div><!-- /admin-shell -->\r
\r
<!-- \u2550\u2550\u2550 MODALES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal-backdrop" *ngIf="modalMode" (click)="closeModal()">\r
  <div class="modal" (click)="$event.stopPropagation()">\r
\r
    <!-- \u2500\u2500 Ver detalle \u2500\u2500 -->\r
    <ng-container *ngIf="modalMode==='view' && selectedUser">\r
      <div class="modal-header">\r
        <h2>\u{1F441} Detalle del usuario</h2>\r
        <button class="modal-close" (click)="closeModal()">\u2715</button>\r
      </div>\r
      <div class="modal-body detail-grid">\r
        <div class="detail-row"><span>ID</span><code>{{ selectedUser.account_id }}</code></div>\r
        <div class="detail-row"><span>Username</span><b>{{ selectedUser.username }}</b></div>\r
        <div class="detail-row"><span>Nombre</span><span>{{ selectedUser.display_name || selectedUser.nickname || '\u2014' }}</span></div>\r
        <div class="detail-row"><span>Email</span><span>{{ selectedUser.email || 'Sin email (ni\xF1o)' }}</span></div>\r
        <div class="detail-row"><span>Rol</span>\r
          <span class="badge" [ngClass]="getRoleBadgeClass(selectedUser.role)">{{ getRoleLabel(selectedUser.role) }}</span>\r
        </div>\r
        <div class="detail-row"><span>Estado</span>\r
          <span [class.text-success]="selectedUser.is_active" [class.text-danger]="!selectedUser.is_active">\r
            {{ selectedUser.is_active ? 'Activo' : 'Inactivo' }}\r
          </span>\r
        </div>\r
        <div class="detail-row" *ngIf="selectedUser.role==='child'">\r
          <span>XP acumulado</span><span>{{ selectedUser.current_xp ?? 0 }} pts</span>\r
        </div>\r
        <div class="detail-row" *ngIf="selectedUser.role==='child'">\r
          <span>Racha actual</span><span>{{ selectedUser.streak_days ?? 0 }} d\xEDas</span>\r
        </div>\r
        <div class="detail-row"><span>Intentos fallidos</span>\r
          <span [class.text-danger]="(selectedUser.failed_login_attempts || 0) >= 3">\r
            {{ selectedUser.failed_login_attempts || 0 }}\r
          </span>\r
        </div>\r
        <div class="detail-row"><span>Bloqueado hasta</span>\r
          <span>{{ formatDate(selectedUser.locked_until) }}</span>\r
        </div>\r
        <div class="detail-row"><span>\xDAltimo acceso</span><span>{{ formatDate(selectedUser.last_login_at) }}</span></div>\r
        <div class="detail-row"><span>Creado</span><span>{{ formatDate(selectedUser.created_at) }}</span></div>\r
      </div>\r
      <div class="modal-footer">\r
        <button class="btn btn-secondary" (click)="closeModal()">Cerrar</button>\r
        <button class="btn btn-primary" (click)="openModal('edit', selectedUser)">Editar</button>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2500\u2500 Crear tutor \u2500\u2500 -->\r
    <ng-container *ngIf="modalMode==='create'">\r
      <div class="modal-header">\r
        <h2>\u2795 Crear nuevo tutor</h2>\r
        <button class="modal-close" (click)="closeModal()">\u2715</button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="alert alert-error" *ngIf="modalError">{{ modalError }}</div>\r
        <form [formGroup]="createForm" (ngSubmit)="submitCreate()">\r
          <div class="field-group">\r
            <label>Nombre de usuario *</label>\r
            <input formControlName="username" placeholder="ej: tutor_maria"\r
                   [class.error]="isInvalid(createForm,'username')"/>\r
            <span class="field-error" *ngIf="isInvalid(createForm,'username')">\r
              M\xEDnimo 3 caracteres, solo letras, n\xFAmeros, _ . -\r
            </span>\r
          </div>\r
          <div class="field-group">\r
            <label>Correo electr\xF3nico *</label>\r
            <input formControlName="email" type="email" placeholder="correo@ejemplo.com"\r
                   [class.error]="isInvalid(createForm,'email')"/>\r
            <span class="field-error" *ngIf="isInvalid(createForm,'email')">Email inv\xE1lido</span>\r
          </div>\r
          <div class="field-group">\r
            <label>Nombre completo *</label>\r
            <input formControlName="displayName" placeholder="ej: Mar\xEDa Garc\xEDa"\r
                   [class.error]="isInvalid(createForm,'displayName')"/>\r
            <span class="field-error" *ngIf="isInvalid(createForm,'displayName')">M\xEDnimo 2 caracteres</span>\r
          </div>\r
          <div class="field-group">\r
            <label>Contrase\xF1a *</label>\r
            <input formControlName="password" type="password" placeholder="M\xEDn. 10 chars, may\xFAs, n\xFAmero, especial"\r
                   [class.error]="isInvalid(createForm,'password')"/>\r
            <span class="field-error" *ngIf="isInvalid(createForm,'password')">\r
              M\xEDnimo 10 caracteres con may\xFAscula, n\xFAmero y car\xE1cter especial (!&#64;#$%)\r
            </span>\r
          </div>\r
          <div class="info-box">\r
            \u2139\uFE0F Los perfiles de ni\xF1os solo pueden crearse desde el panel del tutor, no desde aqu\xED.\r
          </div>\r
        </form>\r
      </div>\r
      <div class="modal-footer">\r
        <button class="btn btn-secondary" (click)="closeModal()">Cancelar</button>\r
        <button class="btn btn-primary" [disabled]="modalLoading || createForm.invalid"\r
                (click)="submitCreate()">\r
          {{ modalLoading ? 'Creando...' : 'Crear tutor' }}\r
        </button>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2500\u2500 Editar \u2500\u2500 -->\r
    <ng-container *ngIf="modalMode==='edit' && selectedUser">\r
      <div class="modal-header">\r
        <h2>\u270F\uFE0F Editar usuario</h2>\r
        <button class="modal-close" (click)="closeModal()">\u2715</button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="alert alert-error" *ngIf="modalError">{{ modalError }}</div>\r
        <div class="user-summary">\r
          <div class="avatar-md">{{ selectedUser.username.charAt(0).toUpperCase() }}</div>\r
          <div>\r
            <b>{{ selectedUser.username }}</b>\r
            <span class="badge ml-8" [ngClass]="getRoleBadgeClass(selectedUser.role)">\r
              {{ getRoleLabel(selectedUser.role) }}\r
            </span>\r
          </div>\r
        </div>\r
        <form [formGroup]="editForm">\r
          <div class="field-group" *ngIf="selectedUser.role !== 'child'">\r
            <label>Email</label>\r
            <input formControlName="email" type="email"\r
                   [class.error]="isInvalid(editForm,'email')"/>\r
            <span class="field-error" *ngIf="isInvalid(editForm,'email')">Email inv\xE1lido</span>\r
          </div>\r
          <div class="field-group" *ngIf="selectedUser.role !== 'child'">\r
            <label>Nombre para mostrar</label>\r
            <input formControlName="display_name"/>\r
          </div>\r
          <div class="field-group toggle-field">\r
            <label>Cuenta activa</label>\r
            <label class="toggle">\r
              <input type="checkbox" formControlName="is_active"/>\r
              <span class="slider"></span>\r
            </label>\r
          </div>\r
        </form>\r
      </div>\r
      <div class="modal-footer">\r
        <button class="btn btn-secondary" (click)="closeModal()">Cancelar</button>\r
        <button class="btn btn-primary" [disabled]="modalLoading" (click)="submitEdit()">\r
          {{ modalLoading ? 'Guardando...' : 'Guardar cambios' }}\r
        </button>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2500\u2500 Resetear contrase\xF1a \u2500\u2500 -->\r
    <ng-container *ngIf="modalMode==='reset-password' && selectedUser">\r
      <div class="modal-header">\r
        <h2>\u{1F511} Restablecer contrase\xF1a</h2>\r
        <button class="modal-close" (click)="closeModal()">\u2715</button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="alert alert-error" *ngIf="modalError">{{ modalError }}</div>\r
        <p class="modal-desc">\r
          Establecer nueva contrase\xF1a para <b>{{ selectedUser.username }}</b>.\r
          Se registrar\xE1 en la bit\xE1cora de auditor\xEDa.\r
        </p>\r
        <form [formGroup]="resetPasswordForm">\r
          <div class="field-group">\r
            <label>Nueva contrase\xF1a *</label>\r
            <input formControlName="newPassword" type="password"\r
                   placeholder="M\xEDn. 10 chars, may\xFAs, n\xFAmero, especial"\r
                   [class.error]="isInvalid(resetPasswordForm,'newPassword')"/>\r
            <span class="field-error" *ngIf="isInvalid(resetPasswordForm,'newPassword')">\r
              M\xEDnimo 10 caracteres con may\xFAscula, n\xFAmero y car\xE1cter especial\r
            </span>\r
          </div>\r
          <div class="field-group">\r
            <label>Confirmar contrase\xF1a *</label>\r
            <input formControlName="confirm" type="password"\r
                   [class.error]="resetPasswordForm.errors?.['mismatch'] && resetPasswordForm.get('confirm')?.touched"/>\r
            <span class="field-error"\r
                  *ngIf="resetPasswordForm.errors?.['mismatch'] && resetPasswordForm.get('confirm')?.touched">\r
              Las contrase\xF1as no coinciden\r
            </span>\r
          </div>\r
        </form>\r
      </div>\r
      <div class="modal-footer">\r
        <button class="btn btn-secondary" (click)="closeModal()">Cancelar</button>\r
        <button class="btn btn-warning" [disabled]="modalLoading || resetPasswordForm.invalid"\r
                (click)="submitResetPassword()">\r
          {{ modalLoading ? 'Restableciendo...' : 'Restablecer contrase\xF1a' }}\r
        </button>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2500\u2500 Eliminar \u2500\u2500 -->\r
    <ng-container *ngIf="modalMode==='delete' && selectedUser">\r
      <div class="modal-header danger">\r
        <h2>\u{1F5D1} Eliminar usuario</h2>\r
        <button class="modal-close" (click)="closeModal()">\u2715</button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="alert alert-error" *ngIf="modalError">{{ modalError }}</div>\r
        <div class="delete-confirm">\r
          <div class="delete-icon">\u26A0\uFE0F</div>\r
          <p>\xBFEst\xE1s seguro de eliminar al usuario <b>{{ selectedUser.username }}</b>?</p>\r
          <p class="text-muted text-sm">\r
            Esta acci\xF3n es <b>irreversible</b>. Se eliminar\xE1n todos sus datos asociados\r
            (perfil, h\xE1bitos, retos y v\xEDnculos).\r
          </p>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button class="btn btn-secondary" (click)="closeModal()">Cancelar</button>\r
        <button class="btn btn-danger" [disabled]="modalLoading" (click)="confirmDelete()">\r
          {{ modalLoading ? 'Eliminando...' : 'S\xED, eliminar' }}\r
        </button>\r
      </div>\r
    </ng-container>\r
\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550 TOAST \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="toast" *ngIf="toast" [class]="'toast toast-'+toast.type">\r
  {{ toast.msg }}\r
</div>`, styles: ['@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap";\n\n/* src/app/admin/pages/administrador/administrador.component.scss */\n:host {\n  --bg-base: #0a0f1a;\n  --bg-surface: #111827;\n  --bg-card: #1a2235;\n  --bg-hover: #1e2a3a;\n  --border: #1e3a5f30;\n  --border-solid: #1e3a5f60;\n  --text-primary: #e2e8f0;\n  --text-secondary: #94a3b8;\n  --text-muted: #64748b;\n  --accent: #0ea5e9;\n  --accent-dark: #0284c7;\n  --green: #10b981;\n  --amber: #f59e0b;\n  --red: #ef4444;\n  --purple: #8b5cf6;\n  --sidebar-w: 240px;\n  --sidebar-w-coll: 64px;\n  --topbar-h: 60px;\n  --radius: 10px;\n  --radius-sm: 6px;\n  font-family: "DM Sans", sans-serif;\n  color: var(--text-primary);\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbutton {\n  cursor: pointer;\n  border: none;\n  background: none;\n  font-family: inherit;\n}\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n}\n.admin-shell {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg-base);\n}\n.sidebar {\n  width: var(--sidebar-w);\n  background: var(--bg-surface);\n  border-right: 1px solid var(--border-solid);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.25s ease;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  z-index: 100;\n  overflow: hidden;\n}\n.sidebar.collapsed {\n  width: var(--sidebar-w-coll);\n}\n.sidebar.collapsed .brand-text,\n.sidebar.collapsed .nav-label,\n.sidebar.collapsed .user-meta,\n.sidebar.collapsed .btn-logout span {\n  display: none;\n}\n.sidebar-brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 18px;\n  border-bottom: 1px solid var(--border-solid);\n  white-space: nowrap;\n}\n.brand-icon {\n  font-size: 22px;\n}\n.brand-text {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--accent);\n  letter-spacing: -0.3px;\n}\n.sidebar-nav {\n  flex: 1;\n  padding: 16px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.nav-item:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.nav-item.active {\n  background: rgba(14, 165, 233, 0.0823529412);\n  color: var(--accent);\n}\n.nav-icon {\n  font-size: 16px;\n  width: 20px;\n  text-align: center;\n}\n.nav-label {\n  flex: 1;\n}\n.sidebar-footer {\n  padding: 16px 12px;\n  border-top: 1px solid var(--border-solid);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  overflow: hidden;\n}\n.user-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.user-meta {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.btn-logout {\n  padding: 6px;\n  border-radius: var(--radius-sm);\n  color: var(--text-muted);\n  font-size: 16px;\n  transition: 0.15s;\n}\n.btn-logout:hover {\n  background: var(--bg-hover);\n  color: var(--red);\n}\n.main-content {\n  flex: 1;\n  margin-left: var(--sidebar-w);\n  transition: margin-left 0.25s ease;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar.collapsed ~ .main-content {\n  margin-left: var(--sidebar-w-coll);\n}\n.topbar {\n  height: var(--topbar-h);\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-solid);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 0 24px;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.btn-toggle-sidebar {\n  font-size: 20px;\n  color: var(--text-muted);\n  padding: 4px 8px;\n  border-radius: var(--radius-sm);\n}\n.btn-toggle-sidebar:hover {\n  color: var(--text-primary);\n  background: var(--bg-hover);\n}\n.topbar-title h1 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.topbar-actions {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.api-badge {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px solid;\n}\n.api-badge.ok {\n  background: rgba(16, 185, 129, 0.0823529412);\n  border-color: rgba(16, 185, 129, 0.1882352941);\n  color: var(--green);\n}\n.api-badge.degraded {\n  background: rgba(239, 68, 68, 0.0823529412);\n  border-color: rgba(239, 68, 68, 0.1882352941);\n  color: var(--red);\n}\n.api-badge .dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n.ok .api-badge .dot {\n  background: var(--green);\n  box-shadow: 0 0 6px var(--green);\n  animation: pulse 2s infinite;\n}\n.degraded .api-badge .dot {\n  background: var(--red);\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.tab-content {\n  padding: 24px;\n  flex: 1;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border-solid);\n  border-radius: var(--radius);\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  transition: transform 0.2s, border-color 0.2s;\n  position: relative;\n  overflow: hidden;\n}\n.kpi-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n}\n.kpi-card:hover {\n  transform: translateY(-2px);\n}\n.kpi-card.kpi-total::before {\n  background: var(--accent);\n}\n.kpi-card.kpi-guardian::before {\n  background: var(--purple);\n}\n.kpi-card.kpi-child::before {\n  background: var(--green);\n}\n.kpi-card.kpi-locked::before {\n  background: var(--amber);\n}\n.kpi-card.kpi-new::before {\n  background: #06b6d4;\n}\n.kpi-card.kpi-server::before {\n  background: var(--green);\n}\n.kpi-card.kpi-server.error {\n  border-color: rgba(239, 68, 68, 0.1882352941);\n}\n.kpi-card.kpi-server.error::before {\n  background: var(--red);\n}\n.kpi-icon {\n  font-size: 24px;\n}\n.kpi-data {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.kpi-value {\n  font-size: 28px;\n  font-weight: 700;\n  font-family: "DM Mono", monospace;\n  color: var(--text-primary);\n}\n.kpi-label {\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-sub {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.dashboard-row {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr 0.8fr;\n  gap: 20px;\n}\n.card {\n  background: var(--bg-card);\n  border: 1px solid var(--border-solid);\n  border-radius: var(--radius);\n  padding: 20px;\n}\n.card-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n}\n.card-header-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.chart-card {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.chart-bars {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.chart-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n}\n.chart-label {\n  width: 64px;\n  color: var(--text-secondary);\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.chart-bar-wrap {\n  flex: 1;\n  background: var(--bg-base);\n  border-radius: 4px;\n  height: 8px;\n  overflow: hidden;\n}\n.chart-bar {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.6s ease;\n}\n.chart-val {\n  width: 80px;\n  text-align: right;\n  font-size: 12px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.donut-wrap {\n  display: flex;\n  justify-content: center;\n  margin-top: 16px;\n}\n.donut-svg {\n  width: 110px;\n  height: 110px;\n}\n.donut-label {\n  font-size: 18px;\n  font-weight: 700;\n  fill: var(--text-primary);\n  font-family: "DM Mono", monospace;\n}\n.system-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.system-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n}\n.sys-icon {\n  width: 24px;\n  text-align: center;\n}\n.sys-name {\n  flex: 1;\n  color: var(--text-secondary);\n}\n.sys-value {\n  font-family: "DM Mono", monospace;\n  font-size: 12px;\n}\n.sys-value.warn {\n  color: var(--amber);\n}\n.sys-badge {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.sys-badge.ok {\n  background: rgba(16, 185, 129, 0.1254901961);\n  color: var(--green);\n}\n.sys-badge.err {\n  background: rgba(239, 68, 68, 0.1254901961);\n  color: var(--red);\n}\n.mt-12 {\n  margin-top: 12px;\n}\n.quick-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.quick-btn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background: var(--bg-hover);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n  transition: 0.15s;\n  border: 1px solid transparent;\n}\n.quick-btn:hover {\n  background: rgba(14, 165, 233, 0.0823529412);\n  border-color: rgba(14, 165, 233, 0.1882352941);\n  color: var(--accent);\n}\n.quick-btn.warn:hover {\n  background: rgba(245, 158, 11, 0.0823529412);\n  border-color: rgba(245, 158, 11, 0.1882352941);\n  color: var(--amber);\n}\n.qa-icon {\n  font-size: 16px;\n}\n.table-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.search-wrap {\n  position: relative;\n}\n.search-wrap .search-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n}\n.search-wrap .search-input {\n  padding: 8px 12px 8px 34px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-solid);\n  border-radius: var(--radius-sm);\n  color: var(--text-primary);\n  font-size: 13px;\n  width: 260px;\n  outline: none;\n}\n.search-wrap .search-input:focus {\n  border-color: var(--accent);\n}\n.filter-select {\n  padding: 8px 12px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-solid);\n  border-radius: var(--radius-sm);\n  color: var(--text-secondary);\n  font-size: 13px;\n  outline: none;\n}\n.filter-select:focus {\n  border-color: var(--accent);\n}\n.total-badge {\n  padding: 6px 12px;\n  background: var(--bg-surface);\n  border-radius: 20px;\n  font-size: 12px;\n  color: var(--text-muted);\n  border: 1px solid var(--border-solid);\n}\n.table-card {\n  padding: 0;\n  overflow: hidden;\n}\n.table-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 48px;\n  color: var(--text-muted);\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-solid);\n  white-space: nowrap;\n}\n.data-table td {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  vertical-align: middle;\n}\n.data-table tr:last-child td {\n  border-bottom: none;\n}\n.data-table tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tr.row-inactive td {\n  opacity: 0.6;\n}\n.data-table tr.row-locked td {\n  background: rgba(245, 158, 11, 0.0235294118);\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar-sm {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  color: white;\n  flex-shrink: 0;\n}\n.avatar-md {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n  color: white;\n  flex-shrink: 0;\n}\n.username {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.display-name {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.badge {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  display: inline-block;\n}\n.badge.badge-guardian {\n  background: rgba(139, 92, 246, 0.1254901961);\n  color: #a78bfa;\n}\n.badge.badge-child {\n  background: rgba(16, 185, 129, 0.1254901961);\n  color: #34d399;\n}\n.badge.badge-admin {\n  background: rgba(245, 158, 11, 0.1254901961);\n  color: #fbbf24;\n}\n.badge.badge-audit {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n  font-family: "DM Mono", monospace;\n  font-size: 10px;\n}\n.status-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.status-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n.status-dot.active {\n  background: var(--green);\n  box-shadow: 0 0 6px var(--green);\n}\n.status-dot.inactive {\n  background: var(--text-muted);\n}\n.status-dot.locked {\n  background: var(--amber);\n  box-shadow: 0 0 6px var(--amber);\n}\n.action-btns {\n  display: flex;\n  gap: 4px;\n  flex-wrap: nowrap;\n}\n.btn-icon {\n  padding: 5px 7px;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  transition: 0.15s;\n  background: transparent;\n  color: var(--text-muted);\n}\n.btn-icon:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.warn:hover {\n  background: rgba(245, 158, 11, 0.0823529412);\n  color: var(--amber);\n}\n.btn-icon.danger:hover {\n  background: rgba(239, 68, 68, 0.1254901961);\n  color: var(--red);\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 16px;\n  border-top: 1px solid var(--border-solid);\n}\n.page-btn {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  transition: 0.15s;\n}\n.page-btn:hover:not(:disabled) {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.page-btn.active {\n  background: var(--accent);\n  color: white;\n}\n.page-btn:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.page-info {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-left: 8px;\n}\n.empty-row {\n  padding: 48px !important;\n}\n.empty-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: var(--text-muted);\n}\n.empty-icon {\n  font-size: 24px;\n}\n.audit-icon {\n  font-size: 18px;\n}\n.btn {\n  padding: 9px 18px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 600;\n  transition: 0.15s;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn.btn-primary {\n  background: var(--accent);\n  color: white;\n}\n.btn.btn-primary:hover {\n  background: var(--accent-dark);\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  border: 1px solid var(--border-solid);\n}\n.btn.btn-secondary:hover {\n  color: var(--text-primary);\n}\n.btn.btn-warning {\n  background: var(--amber);\n  color: #000;\n}\n.btn.btn-warning:hover {\n  opacity: 0.9;\n}\n.btn.btn-warning:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-danger {\n  background: var(--red);\n  color: white;\n}\n.btn.btn-danger:hover {\n  opacity: 0.9;\n}\n.btn.btn-danger:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 16px;\n  animation: fadeIn 0.15s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-solid);\n  border-radius: 14px;\n  width: 100%;\n  max-width: 520px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: slideUp 0.2s ease;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid var(--border-solid);\n}\n.modal-header h2 {\n  font-size: 16px;\n  font-weight: 700;\n}\n.modal-header.danger h2 {\n  color: var(--red);\n}\n.modal-close {\n  font-size: 18px;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: 4px;\n}\n.modal-close:hover {\n  color: var(--text-primary);\n  background: var(--bg-hover);\n}\n.modal-body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.modal-footer {\n  padding: 16px 24px 20px;\n  border-top: 1px solid var(--border-solid);\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.modal-desc {\n  color: var(--text-secondary);\n  font-size: 14px;\n  line-height: 1.5;\n}\n.field-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.field-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field-group input,\n.field-group select {\n  padding: 9px 12px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-solid);\n  border-radius: var(--radius-sm);\n  color: var(--text-primary);\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field-group input:focus,\n.field-group select:focus {\n  border-color: var(--accent);\n}\n.field-group input.error,\n.field-group select.error {\n  border-color: var(--red);\n}\n.field-error {\n  font-size: 11px;\n  color: var(--red);\n}\n.toggle-field {\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.toggle {\n  position: relative;\n  display: inline-block;\n  width: 42px;\n  height: 22px;\n}\n.toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle .slider {\n  position: absolute;\n  inset: 0;\n  background: var(--bg-hover);\n  border-radius: 22px;\n  cursor: pointer;\n  transition: 0.3s;\n  border: 1px solid var(--border-solid);\n}\n.toggle .slider::before {\n  content: "";\n  position: absolute;\n  left: 3px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 14px;\n  height: 14px;\n  background: var(--text-muted);\n  border-radius: 50%;\n  transition: 0.3s;\n}\n.toggle input:checked + .slider {\n  background: var(--accent);\n  border-color: var(--accent);\n}\n.toggle input:checked + .slider::before {\n  transform: translateX(20px) translateY(-50%);\n  background: white;\n}\n.info-box {\n  padding: 10px 14px;\n  background: rgba(14, 165, 233, 0.062745098);\n  border: 1px solid rgba(14, 165, 233, 0.1882352941);\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.detail-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n  font-size: 13px;\n  gap: 12px;\n}\n.detail-row:last-child {\n  border-bottom: none;\n}\n.detail-row > span:first-child {\n  color: var(--text-muted);\n  font-size: 12px;\n  min-width: 130px;\n}\n.detail-row code {\n  font-family: "DM Mono", monospace;\n  font-size: 11px;\n  color: var(--text-muted);\n  word-break: break-all;\n  text-align: right;\n}\n.user-summary {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--bg-card);\n  border-radius: var(--radius-sm);\n}\n.ml-8 {\n  margin-left: 8px;\n}\n.delete-confirm {\n  text-align: center;\n  padding: 8px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: center;\n}\n.delete-icon {\n  font-size: 40px;\n}\n.alert {\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n}\n.alert.alert-error {\n  background: rgba(239, 68, 68, 0.1254901961);\n  border: 1px solid rgba(239, 68, 68, 0.2509803922);\n  color: #fca5a5;\n}\n.toast {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  padding: 12px 20px;\n  border-radius: var(--radius);\n  font-size: 13px;\n  font-weight: 600;\n  z-index: 2000;\n  animation: toastIn 0.25s ease;\n  max-width: 360px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);\n}\n.toast.toast-success {\n  background: #10b981;\n  color: white;\n}\n.toast.toast-error {\n  background: var(--red);\n  color: white;\n}\n.toast.toast-warning {\n  background: var(--amber);\n  color: #000;\n}\n@keyframes toastIn {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--border-solid);\n  border-top-color: var(--accent);\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-sm {\n  font-size: 12px;\n}\n.text-danger {\n  color: var(--red);\n}\n.text-success {\n  color: var(--green);\n}\n@media (max-width: 900px) {\n  .dashboard-row {\n    grid-template-columns: 1fr;\n  }\n  .kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .search-wrap .search-input {\n    width: 180px;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar {\n    width: var(--sidebar-w-coll);\n  }\n  .sidebar .brand-text,\n  .sidebar .nav-label,\n  .sidebar .user-meta {\n    display: none;\n  }\n  .main-content {\n    margin-left: var(--sidebar-w-coll);\n  }\n  .kpi-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .tab-content {\n    padding: 16px;\n  }\n  .modal {\n    max-width: 100%;\n    margin: 0 8px;\n  }\n}\n/*# sourceMappingURL=administrador.component.css.map */\n'] }]
  }], () => [{ type: AdminService }, { type: AuthService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdministradorComponent, { className: "AdministradorComponent", filePath: "src/app/admin/pages/administrador/administrador.component.ts", lineNumber: 25 });
})();
export {
  AdministradorComponent
};
//# sourceMappingURL=chunk-EXURZCKG.js.map

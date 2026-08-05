import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  Router,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4YERQOE2.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "https://api-obesiapp.onrender.com/api/v1"
};

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.TOKEN_KEY = "hk_token";
    this.API = `${environment.apiUrl}/auth`;
    this.userSubject = new BehaviorSubject(this.getDecodedToken());
    this.currentUser$ = this.userSubject.asObservable();
  }
  // ── Registro ──────────────────────────────────────────────────────────────
  register(data) {
    return this.http.post(`${this.API}/register`, data);
  }
  // ── Login ─────────────────────────────────────────────────────────────────
  login(username, password) {
    return this.http.post(`${this.API}/login`, { username, password }).pipe(tap((response) => {
      if (response.success) {
        sessionStorage.setItem(this.TOKEN_KEY, response.data.token);
        this.userSubject.next(this.getDecodedToken());
      }
    }));
  }
  // ── Logout ────────────────────────────────────────────────────────────────
  logout() {
    sessionStorage.removeItem(this.TOKEN_KEY);
    this.userSubject.next(null);
    this.router.navigate(["/login"]);
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  getToken() {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }
  getDecodedToken() {
    const token = this.getToken();
    if (!token)
      return null;
    try {
      return jwtDecode(token);
    } catch {
      return null;
    }
  }
  isAuthenticated() {
    const user = this.getDecodedToken();
    if (!user)
      return false;
    return Date.now() < user.exp * 1e3;
  }
  getCurrentUser() {
    return this.userSubject.value;
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  environment,
  AuthService
};
//# sourceMappingURL=chunk-3T3BQCC5.js.map

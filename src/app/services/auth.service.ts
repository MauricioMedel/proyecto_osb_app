import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../environments/environment';

export interface AuthUser {
  accountId:   string;
  role:        'child' | 'guardian' | 'admin';
  username:    string;
  guardianId?: string;
  childId?:    string;
  exp:         number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly TOKEN_KEY = 'hk_token';
  private readonly API = `${environment.apiUrl}/auth`;

  private userSubject = new BehaviorSubject<AuthUser | null>(this.getDecodedToken());
  currentUser$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  // ── Registro ──────────────────────────────────────────────────────────────
  register(data: {
    username:     string;
    email:        string;
    password:     string;
    displayName?: string;
  }): Observable<any> {
    return this.http.post(`${this.API}/register`, data);
  }

  // ── Login ─────────────────────────────────────────────────────────────────
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.API}/login`, { username, password })
      .pipe(tap(response => {
        if (response.success) {
          sessionStorage.setItem(this.TOKEN_KEY, response.data.token);
          this.userSubject.next(this.getDecodedToken());
        }
      }));
  }

  // ── Logout ────────────────────────────────────────────────────────────────
  logout(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  getDecodedToken(): AuthUser | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      return jwtDecode<AuthUser>(token);
    } catch {
      return null;
    }
  }

  isAuthenticated(): boolean {
    const user = this.getDecodedToken();
    if (!user) return false;
    return Date.now() < user.exp * 1000;
  }

  getCurrentUser(): AuthUser | null {
    return this.userSubject.value;
  }
}
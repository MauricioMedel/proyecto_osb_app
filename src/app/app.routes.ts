import { Routes }    from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  // ── Rutas públicas ────────────────────────────────────────────────────────

  // Landing pública
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/pages/landing-page/landing-page.component')
      .then(m => m.LandingPageComponent),
  },

  // Login
  {
    path: 'login',
    loadComponent: () =>
      import('./admin/pages/login/login.component')
      .then(m => m.LoginComponent),
  },

  // Registro usuario
  {
    path: 'registro_usuario',
    loadComponent: () =>
      import('./admin/pages/registro-usuario/registro-usuario.component')
      .then(m => m.RegistroUsuarioComponent),
  },

  // ── Rutas protegidas (requieren sesión activa) ────────────────────────────

  // Panel
  {
    path: 'panel',
    canActivate: [authGuard],              // ← protegida con JWT
    loadComponent: () =>
      import('./panel/pages/panel/panel.component')
      .then(m => m.PanelComponent),
  },

  // ── Fallback ──────────────────────────────────────────────────────────────
  {
    path: '**',
    redirectTo: '',
  }

];
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

{
  path: 'panel',
  canActivate: [authGuard,],
  data: { roles: ['admin'] },
  loadComponent: () => import('./panel/pages/panel/panel.component')
    .then(m => m.PanelComponent),
},

{
  path: 'menu',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./child/pages/menu/menu.component')
    .then(m => m.MenuComponent),
},

{
  path: 'administrador',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./admin/pages/administrador/administrador.component')
    .then(m => m.AdministradorComponent),
},
  // ── Fallback ──────────────────────────────────────────────────────────────
  {
    path: '**',
    redirectTo: '',
  }

];
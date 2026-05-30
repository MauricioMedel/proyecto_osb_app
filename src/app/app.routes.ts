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

  //Tutor
{
  path: 'panel',
  canActivate: [authGuard,],
  data: { roles: ['guardian'] },
  loadComponent: () => import('./panel/pages/panel/panel.component')
    .then(m => m.PanelComponent),
},
{
  path: 'panel/registrar-nino',
  canActivate: [authGuard],
  data: { roles: ['guardian'] },
  loadComponent: () =>
    import('./panel/pages/registrar-nino/registrar-nino.component')
      .then(m => m.RegistrarNinoComponent),
},
//Niños
{
  path: 'menu',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./child/pages/menu/menu.component')
    .then(m => m.MenuComponent),
},
{
  path: 'menu/jugar',
  canActivate: [authGuard],
  data: { roles: ['child'] },
  loadComponent: () =>
    import('./child/pages/jugar/jugar.component')
      .then(m => m.JugarComponent),
},

{
  path: 'menu/trofeos',
  canActivate: [authGuard],
  data: { roles: ['child'] },
  loadComponent: () =>
    import('./child/pages/trofeos/trofeos.component')
      .then(m => m.TrofeosComponent),
},

{
  path: 'menu/progreso',
  canActivate: [authGuard],
  data: { roles: ['child'] },
  loadComponent: () =>
    import('./child/pages/progreso/progreso.component')
      .then(m => m.ProgresoComponent),
},
//Admin
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
import { Routes } from '@angular/router';

export const routes: Routes = [

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

  // Panel
  {
    path: 'panel',
    loadComponent: () =>
      import('./panel/pages/panel/panel.component')
      .then(m => m.PanelComponent),
  },

  {
    path: '**',
    redirectTo: '',
  }

];
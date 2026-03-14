import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(private router: Router) {}

  menuOpen = false;
  scrolled = false;

  navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Problema', id: 'problema' },
    { label: 'Funciones', id: 'funciones' },
    { label: 'Cómo funciona', id: 'como-funciona' },
    { label: 'Beneficios', id: 'beneficios' },
    { label: 'Metodología', id: 'metodologia' },
    { label: 'Descargar', id: 'descargar' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string) {
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  login() {
    this.router.navigate(['/login']);
  }

}
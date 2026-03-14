import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();

  members = [
    'Mauricio Medel de jesus', 'David Flores Pozos'
  ];

  quickLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'El Problema', id: 'problema' },
    { label: 'Funciones', id: 'funciones' },
    { label: 'Cómo funciona', id: 'como-funciona' },
    { label: 'Beneficios', id: 'beneficios' },
    { label: 'Metodología', id: 'metodologia' },
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

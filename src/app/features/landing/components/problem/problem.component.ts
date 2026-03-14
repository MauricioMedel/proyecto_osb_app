import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss'],
})
export class ProblemComponent {
  stats = [
    {
      icon: '🏥',
      number: '1 de 3',
      label: 'Salud en riesgo',
      desc: 'Uno de cada tres niños en México padece sobrepeso u obesidad, una crisis de salud pública que requiere acción inmediata.',
      color: '#c1121f',
    },
    {
      icon: '🥤',
      number: '40%',
      label: 'Mala alimentación',
      desc: 'El 40% de la dieta infantil está compuesta por alimentos ultra-procesados con alto contenido calórico y bajo valor nutricional.',
      color: '#fb8500',
    },
    {
      icon: '📱',
      number: '5 hrs',
      label: 'Sedentarismo digital',
      desc: 'Los niños pasan en promedio 5 horas frente a pantallas por día, reemplazando la actividad física necesaria.',
      color: '#2372b2',
    },
    {
      icon: '📈',
      number: '3x',
      label: 'Tendencia en alza',
      desc: 'La prevalencia de obesidad infantil se ha triplicado en los últimos 30 años, convirtiéndose en una pandemia silenciosa.',
      color: '#8fc93a',
    },
  ];
}

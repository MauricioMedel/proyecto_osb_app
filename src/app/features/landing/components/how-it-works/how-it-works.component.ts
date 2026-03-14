import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent {
  steps = [
    {
      number: '01',
      icon: '👶',
      title: 'Registro Niño/Tutor',
      desc: 'Crea el perfil del niño y del tutor en minutos. La app recoge datos básicos de salud para personalizar la experiencia desde el primer día.',
      color: 'var(--secondary)',
    },
    {
      number: '02',
      icon: '📋',
      title: 'Evaluación Inicial',
      desc: 'Nuestra IA realiza una evaluación nutricional y de hábitos completa, identificando áreas de mejora con base en estándares médicos pediátricos.',
      color: 'var(--yellow)',
    },
    {
      number: '03',
      icon: '🎯',
      title: 'Plan Personalizado',
      desc: 'Se genera un plan alimentario y de actividad 100% adaptado al niño, revisado semanalmente con base en el progreso registrado.',
      color: 'var(--orange)',
    },
    {
      number: '04',
      icon: '🏆',
      title: 'Retos Diarios',
      desc: 'Cada día nuevos desafíos divertidos: comer vegetales, tomar agua, hacer ejercicio. Completarlos suma XP y desbloquea recompensas.',
      color: 'var(--success)',
    },
    {
      number: '05',
      icon: '📈',
      title: 'Seguimiento y Logros',
      desc: 'Monitoreo continuo del progreso. Los padres reciben reportes semanales y el niño acumula insignias que celebran cada avance conseguido.',
      color: 'var(--primary)',
    },
  ];
}

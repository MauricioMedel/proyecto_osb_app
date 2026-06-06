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
      title: 'Registro de Usuario y Tutor',
      desc: 'El sistema permite la creación del perfil del paciente y del tutor en minutos. La aplicación recopila datos básicos de salud para personalizar la experiencia desde el primer día.',
      color: 'var(--secondary)',
    },
    {
      number: '02',
      icon: '📋',
      title: 'Evaluación Inicial',
      desc: 'El motor de inteligencia artificial realiza una evaluación nutricional y de hábitos completa, identificando áreas de mejora con base en estándares médicos pediátricos.',
      color: 'var(--yellow)',
    },
    {
      number: '03',
      icon: '🎯',
      title: 'Plan Personalizado',
      desc: 'La plataforma genera un plan alimentario y de actividad física totalmente adaptado al paciente, el cual se actualiza semanalmente con base en el progreso registrado.',
      color: 'var(--orange)',
    },
    {
      number: '04',
      icon: '🏆',
      title: 'Retos Diarios',
      desc: 'El sistema presenta desafíos diarios interactivos, tales como el consumo de vegetales, hidratación adecuada o actividad física. Al completarlos, el usuario obtiene puntos de experiencia (XP) y desbloquea recompensas.',
      color: 'var(--success)',
    },
    {
      number: '05',
      icon: '📈',
      title: 'Seguimiento y Logros',
      desc: 'Se mantiene un monitoreo continuo del progreso. Los tutores reciben reportes semanales detallados, mientras que el paciente acumula insignias que celebran cada objetivo alcanzado.',
      color: 'var(--primary)',
    },
  ];
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent {
  benefits = [
    {
      icon: '🥗',
      title: 'Educación alimentaria temprana',
      desc: 'Los niños aprenden de forma natural a distinguir alimentos saludables, porciones adecuadas y la importancia de la variedad nutricional desde pequeños.',
      gradient: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
      accent: '#4CAF50',
    },
    {
      icon: '🔥',
      title: 'Motivación constante',
      desc: 'El sistema de gamificación mantiene el entusiasmo activo. Cada logro, cada reto completado y cada recompensa refuerza los comportamientos positivos.',
      gradient: 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
      accent: '#FB8C00',
    },
    {
      icon: '⚖️',
      title: 'Prevención del sobrepeso',
      desc: 'Intervención temprana con planes personalizados por IA que ajustan gradualmente los hábitos, previniendo el desarrollo de obesidad de forma efectiva.',
      gradient: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
      accent: '#2372b2',
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Participación familiar',
      desc: 'Toda la familia se involucra. Los padres monitorean el progreso, participan en retos y reciben orientación para apoyar los cambios desde el hogar.',
      gradient: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
      accent: '#E91E63',
    },
    {
      icon: '🩺',
      title: 'Respaldado por profesionales',
      desc: 'Los planes y recomendaciones de ObesiApp se desarrollaron con nutriólogos y pediatras, garantizando que cada sugerencia sea segura y efectiva.',
      gradient: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
      accent: '#9C27B0',
    },
    {
      icon: '📡',
      title: 'Tecnología de vanguardia',
      desc: 'Integración con wearables, modelos de IA adaptativa y análisis de datos en tiempo real para una experiencia verdaderamente inteligente y personalizada.',
      gradient: 'linear-gradient(135deg, #e0f7fa, #b2ebf2)',
      accent: '#00ACC1',
    },
  ];
}

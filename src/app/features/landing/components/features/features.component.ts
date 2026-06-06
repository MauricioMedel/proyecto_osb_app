import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  features = [
    {
      icon: '🤖',
      title: 'IA Nutricional',
      subtitle: 'Inteligencia artificial al servicio de la salud',
      desc: 'El sistema analiza el perfil único de cada paciente —edad, peso, actividad y preferencias— para generar planes alimentarios 100% personalizados que evolucionan en tiempo real.',
      highlights: ['Planes adaptativos', 'Análisis de hábitos', 'Recomendaciones diarias'],
      color: 'var(--secondary)',
      gradient: 'linear-gradient(135deg, #e8f4ff 0%, #d0e8ff 100%)',
    },
    {
      icon: '🎮',
      title: 'Gamificación',
      subtitle: 'Aprender siendo un héroe de la salud',
      desc: 'La aplicación convierte cada hábito saludable en una aventura. Los retos diarios, las insignias coleccionables, los puntos de experiencia y las tablas de clasificación mantienen la motivación de los usuarios siempre encendida.',
      highlights: ['Retos diarios', 'Insignias y recompensas', 'Ranking familiar'],
      color: 'var(--orange)',
      gradient: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
    },
    {
      icon: '📊',
      title: 'Monitoreo Inteligente',
      subtitle: 'Seguimiento en tiempo real',
      desc: 'La plataforma ofrece un registro visual del progreso, gráficas de evolución, sincronización con dispositivos wearables y reportes semanales detallados para los padres y los profesionales de la salud.',
      highlights: ['Dashboards visuales', 'Sincronización wearables', 'Reportes para padres'],
      color: 'var(--success)',
      gradient: 'linear-gradient(135deg, #f0f9e8 0%, #d4f0b0 100%)',
    },
  ];
}
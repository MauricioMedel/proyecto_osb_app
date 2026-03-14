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
      desc: 'Nuestra IA analiza el perfil único de cada niño —edad, peso, actividad y preferencias— para generar planes alimentarios 100% personalizados que evolucionan en tiempo real.',
      highlights: ['Planes adaptativos', 'Análisis de hábitos', 'Recomendaciones diarias'],
      color: 'var(--secondary)',
      gradient: 'linear-gradient(135deg, #e8f4ff 0%, #d0e8ff 100%)',
    },
    {
      icon: '🎮',
      title: 'Gamificación',
      subtitle: 'Aprender siendo un héroe de la salud',
      desc: 'Convertimos cada hábito saludable en una aventura. Retos diarios, insignias coleccionables, puntos de experiencia y tablas de clasificación mantienen la motivación siempre encendida.',
      highlights: ['Retos diarios', 'Insignias y recompensas', 'Ranking familiar'],
      color: 'var(--orange)',
      gradient: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
    },
    {
      icon: '📊',
      title: 'Monitoreo Inteligente',
      subtitle: 'Seguimiento en tiempo real',
      desc: 'Registro visual del progreso, gráficas de evolución, sincronización con dispositivos wearables y reportes semanales para padres y profesionales de salud.',
      highlights: ['Dashboards visuales', 'Sincronización wearables', 'Reportes para padres'],
      color: 'var(--success)',
      gradient: 'linear-gradient(135deg, #f0f9e8 0%, #d4f0b0 100%)',
    },
  ];
}

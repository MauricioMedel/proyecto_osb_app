import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.scss'],
})
export class MethodologyComponent {
  pillars = [
    {
      icon: '🔄',
      title: 'Scrum Ágil',
      desc: 'Desarrollo iterativo en sprints de 2 semanas, con entregas continuas y retroalimentación constante para garantizar calidad y adaptabilidad.',
      tags: ['Sprints', 'Daily stand-ups', 'Retrospectivas'],
      color: 'var(--secondary)',
    },
    {
      icon: '🧩',
      title: 'Arquitectura Modular',
      desc: 'Diseño orientado a servicios con microservicios independientes, APIs RESTful y capas de abstracción que garantizan escalabilidad y mantenibilidad.',
      tags: ['Microservicios', 'API REST', 'Clean Architecture'],
      color: 'var(--orange)',
    },
    {
      icon: '🧠',
      title: 'IA + Dispositivos',
      desc: 'Modelos de machine learning para nutrición personalizada integrados con APIs de dispositivos externos como relojes inteligentes y básulas conectadas.',
      tags: ['Machine Learning', 'Wearables API', 'Tiempo real'],
      color: 'var(--success)',
    },
  ];

  techStack = [
    { name: 'Angular', icon: '🅰️', desc: 'Frontend' },
    { name: 'Spring Boot', icon: '🌿', desc: 'Backend' },
    { name: 'TensorFlow', icon: '🧠', desc: 'IA / ML' },
    { name: 'PostgreSQL', icon: '🐘', desc: 'Base de datos' },
    { name: 'Docker', icon: '🐋', desc: 'Despliegue' },
    { name: 'Firebase', icon: '🔥', desc: 'Notificaciones' },
  ];
}

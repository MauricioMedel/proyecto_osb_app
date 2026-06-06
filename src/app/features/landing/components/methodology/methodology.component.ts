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
  pillars: any[] = [];
  techStack: any[] = [];
}
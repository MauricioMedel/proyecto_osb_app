import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NavbarComponent } from '../../../../core/components/navbar/navbar.component';
import { FooterComponent } from '../../../../core/components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProblemComponent } from '../../components/problem/problem.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { MethodologyComponent } from '../../components/methodology/methodology.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ProblemComponent,
    FeaturesComponent,
    HowItWorksComponent,
    BenefitsComponent,
    MethodologyComponent,
    CtaComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            entry.target.classList.add('reveal-left--visible');
            entry.target.classList.add('reveal-right--visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      elements.forEach((el) => this.observer.observe(el));
    }, 100);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}

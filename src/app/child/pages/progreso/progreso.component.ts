import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-progreso',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './progreso.component.html',
  styleUrl: './progreso.component.scss'
})
export class ProgresoComponent {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  logout() {
    this.auth.logout();
  }
}
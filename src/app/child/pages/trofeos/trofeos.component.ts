import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-trofeos',
  imports: [RouterLink],
  templateUrl: './trofeos.component.html',
  styleUrl: './trofeos.component.scss'
})
export class TrofeosComponent {

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}

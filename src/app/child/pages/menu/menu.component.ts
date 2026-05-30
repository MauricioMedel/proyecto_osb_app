import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  childName = 'Campeón';
  loggingOut = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    const user = this.auth.getCurrentUser();
    this.childName = user?.username || 'Campeón';
  }

  logout() {
    this.loggingOut = true;

    setTimeout(() => {
      this.auth.logout();
    }, 1200);
  }
}
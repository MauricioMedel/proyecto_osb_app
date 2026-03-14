import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}

  email: string = '';
  password: string = '';

  // 👁️ mostrar / ocultar contraseña
  showPassword: boolean = false;

  togglePassword(){
    this.showPassword = !this.showPassword;
  }

  login() {

    if (!this.email || !this.password) {
      alert('Por favor llena todos los campos');
      return;
    }

    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // aquí después conectarás tu backend
    this.router.navigate(['/panel']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goRegister(){
  this.router.navigate(['/registro_usuario']);
}

}
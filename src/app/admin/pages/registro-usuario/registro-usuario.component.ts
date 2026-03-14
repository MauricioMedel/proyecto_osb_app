import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent {

  constructor(private router: Router) {}

  nombre = '';
  apellidos = '';
  edad: number | null = null;
  estatura: number | null = null;
  sexo = '';
  email = '';
  password = '';

  showPassword = false;

  togglePassword(){
    this.showPassword = !this.showPassword;
  }

  register(){

    if(!this.nombre || !this.apellidos || !this.edad || !this.estatura || !this.sexo || !this.email || !this.password){
      alert('Por favor completa todos los campos');
      return;
    }

    console.log({
      nombre: this.nombre,
      apellidos: this.apellidos,
      edad: this.edad,
      estatura: this.estatura,
      sexo: this.sexo,
      email: this.email,
      password: this.password
    });

    alert('Usuario registrado correctamente');

    this.router.navigate(['/login']);
  }

  goLogin(){
    this.router.navigate(['/login']);
  }

  goHome(){
    this.router.navigate(['/']);
  }

}
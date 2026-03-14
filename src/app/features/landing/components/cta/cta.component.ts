import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  form: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get nombre() { return this.form.get('nombre')!; }
  get email() { return this.form.get('email')!; }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.success = true;
      this.form.reset();
      this.submitted = false;
      setTimeout(() => this.success = false, 5000);
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

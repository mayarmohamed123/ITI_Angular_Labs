import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  fb = inject(FormBuilder); // ✅ Works immediately
  showPassword = signal(false);

  signupForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  togglePassword() {
    this.showPassword.update((v) => !v);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      alert('✅ Submitted');
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  error: string = '';

  private router = inject(Router);

  login(): void {
    if (this.email === 'admin@shop.com' && this.password === '1234') {
      this.router.navigate(['/produits']);
    } else {
      this.error = 'Email ou mot de passe incorrect !';
    }
  }
}

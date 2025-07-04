import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">404</h1>
        <p class="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <button 
          (click)="goHome()" 
          class="text-blue-500 hover:text-blue-700 underline cursor-pointer"
        >
          Return to Home
        </button>
      </div>
    </div>
  `
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
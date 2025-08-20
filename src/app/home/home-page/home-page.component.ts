import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  private router = inject(Router);

  goToRufsila() {
    this.router.navigate(['/forms/rufsila-form']);
  }

  goToBhagath() {
    this.router.navigate(['/forms/bhagath-form']);
  }

  goToNavaneetha() {
    this.router.navigate(['/forms/navaneetha-form']);
  }
}

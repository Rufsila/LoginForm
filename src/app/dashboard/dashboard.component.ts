import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  traveller: any;

  constructor(private router: Router) {
    // Read traveller details from localStorage
    const storedData = localStorage.getItem('travellerData');
    this.traveller = storedData ? JSON.parse(storedData) : null;
  }

  goToTravellerDetails() {
    this.router.navigate(['/traveller-details']);
  }
}

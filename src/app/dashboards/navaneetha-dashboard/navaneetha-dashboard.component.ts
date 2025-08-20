import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navaneetha-dashboard',
  imports: [],
  templateUrl: './navaneetha-dashboard.component.html',
  styleUrl: './navaneetha-dashboard.component.css',
})
export class NavaneethaDashboardComponent {
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

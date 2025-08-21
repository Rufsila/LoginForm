import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navaneetha-dashboard',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatTableModule],
  templateUrl: './navaneetha-dashboard.component.html',
  styleUrl: './navaneetha-dashboard.component.css',
})
// export class NavaneethaDashboardComponent {
//   travellers: any[] = [];
//   displayedColumns: string[] = [
//     'firstName',
//     'lastName',
//     'gender',
//     'dob',
//     'email',
//     'phone',
//     'passportNo',
//     'nationality',
//   ];

//   private router = inject(Router);

//   constructor() {
//     const storedData = localStorage.getItem('travellerData');
//     this.travellers = storedData ? JSON.parse(storedData) : [];
//   }

//   goToTravellerDetails() {
//     this.router.navigate(['/forms/navaneetha-form']);
//   }
// }
export class NavaneethaDashboardComponent implements OnInit {
  travellers: any[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'gender',
    'dob',
    'email',
    'phone',
    'passportNo',
    'nationality',
  ];

  private router = inject(Router);

  // ✅ Fetch travellers when component initializes
  ngOnInit(): void {
    const storedData = localStorage.getItem('travellerData');
    this.travellers = storedData ? JSON.parse(storedData) : [];
  }

  goToTravellerDetails() {
    this.router.navigate(['/forms/navaneetha-form']);
  }
}
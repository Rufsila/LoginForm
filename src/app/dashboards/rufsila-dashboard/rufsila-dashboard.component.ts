import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rufsila-dashboard',
  imports: [CommonModule],
  templateUrl: './rufsila-dashboard.component.html',
  styleUrl: './rufsila-dashboard.component.css',
})
export class RufsilaDashboardComponent implements OnInit {
  travellers: any[] = [];

  ngOnInit(): void {
    const data = localStorage.getItem('travellers');
    this.travellers = data ? JSON.parse(data) : [];
    console.log('Loaded travellers:', this.travellers); // ✅ debug check
  }
}

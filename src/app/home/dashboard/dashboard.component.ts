import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TravellerFormStateService } from '../../services/state/traveller-form-state.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private router = inject(Router);
  private state = inject(TravellerFormStateService); 

  travellers: any[] = [];

  ngOnInit() {
    // Subscribe to state service to get updated traveller data
    this.state.travellerData$.subscribe((data) => {
      this.travellers = data;
    });
  }

  goToRufsila() {
    this.router.navigate(['/rufsila/details']);
  }
}

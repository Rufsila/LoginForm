import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonStateService } from '../../services/state/common-state.service';
import { DashboardsRoutingModule } from "../dashboards-routing.module";

@Component({
  selector: 'app-bhagath-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, DashboardsRoutingModule],
  templateUrl: './bhagath-dashboard.component.html',
  styleUrls: ['./bhagath-dashboard.component.css']
})
export class BhagathDashboardComponent implements OnInit {
  userDataList: any[] = [];

  private state = inject(CommonStateService)

  ngOnInit(): void {
    this.userDataList = this.state.bhagathGetAllUserData();
  }

  clearData() {
    this.state.bhagathClearAllUserData();
    this.userDataList = [];
  }
}

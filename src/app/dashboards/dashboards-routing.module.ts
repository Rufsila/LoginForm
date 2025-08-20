import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RufsilaDashboardComponent } from './rufsila-dashboard/rufsila-dashboard.component';
import { BhagathDashboardComponent } from './bhagath-dashboard/bhagath-dashboard.component';
import { NavaneethaDashboardComponent } from './navaneetha-dashboard/navaneetha-dashboard.component';

const routes: Routes = [
  { path: 'rufsila-db', component: RufsilaDashboardComponent },
  { path: 'bhagath-db', component: BhagathDashboardComponent },
  { path: 'navaneetha-db', component: NavaneethaDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }

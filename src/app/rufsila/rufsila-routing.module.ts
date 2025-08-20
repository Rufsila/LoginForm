import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravellerDetailsComponent } from './traveller-details/traveller-details.component';

const routes: Routes = [
  { path: 'details', component: TravellerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RufsilaRoutingModule { }

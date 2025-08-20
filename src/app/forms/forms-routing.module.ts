import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RufsilaFormComponent } from './rufsila-form/rufsila-form.component';
import { NavaneethaFormComponent } from './navaneetha-form/navaneetha-form.component';
import { BhagathFormComponent } from './bhagath-form/bhagath-form.component';

const routes: Routes = [
  { path: 'rufsila-form', component: RufsilaFormComponent },
  { path: 'navaneetha-form', component: NavaneethaFormComponent },
  { path: 'bhagath-form', component: BhagathFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }

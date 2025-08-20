import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'rufsila',
    loadChildren: () => import('./rufsila/rufsila.module').then(m => m.RufsilaModule) 
  }, 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { HomeRoutingModule } from "./home/home-routing.module";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, HomeRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LoginForm';
}

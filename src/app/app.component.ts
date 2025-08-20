import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeComponent } from "./change/change.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LoginForm';
}

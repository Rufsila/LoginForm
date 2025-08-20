import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-bhagath-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './bhagath-form.component.html',
  styleUrl: './bhagath-form.component.css',
})
export class BhagathFormComponent implements OnInit {
  userForm!: FormGroup;


  countries = ['India', 'USA', 'UK', 'Australia'];
  destinations = ['Paris', 'New York', 'Tokyo', 'Dubai'];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    localStorage.setItem('userData', JSON.stringify(this.userForm.value));
    this.router.navigate(['/bhagath-db']);
  }

  getError(controlName: string): string {
    const control = this.userForm.get(controlName);
    if (control?.hasError('required')) return `${controlName} is required`;
    if (control?.hasError('pattern')) return `${controlName} is invalid`;
    return '';
  }
}

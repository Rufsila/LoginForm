import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navaneetha-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './navaneetha-form.component.html',
  styleUrl: './navaneetha-form.component.css',
})
export class NavaneethaFormComponent {
  travellerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.travellerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      passportNo: ['', Validators.required],
      nationality: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.travellerForm.valid) {
      console.log('Traveller Details:', this.travellerForm.value);

      // ✅ Save traveller details to localStorage
      localStorage.setItem(
        'travellerData',
        JSON.stringify(this.travellerForm.value)
      );

      alert('Traveller details saved successfully!');
      this.router.navigate(['/dashboard']);
    } else {
      this.travellerForm.markAllAsTouched();
    }
  }
}

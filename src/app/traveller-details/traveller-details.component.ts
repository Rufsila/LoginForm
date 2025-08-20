import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traveller-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './traveller-details.component.html',
  styleUrl: './traveller-details.component.css',
})
export class TravellerDetailsComponent {
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

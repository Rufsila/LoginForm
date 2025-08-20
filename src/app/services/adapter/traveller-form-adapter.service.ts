import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class TravellerFormAdapterService {
  constructor(private fb: FormBuilder) {}

  buildForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      from: ['', Validators.required],
      to: ['', Validators.required],
      address: ['', Validators.required],
      travelDate: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }
}

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsAdapterService {
  constructor(private fb: FormBuilder) { }

  /**
   * Build Login Form
   * Common login validation
   */
  buildLoginForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  /**
   * Build Rufsila Form (Specific form for Rufsila's use case)
   */
  buildRufsilaForm(): FormGroup {
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

  buildNavaneethaForm(): FormGroup {
    return this.fb.group({
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

  bhagathFormValidation(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      country: ['', Validators.required],
      destination: ['', Validators.required],
      travelDate: ['', Validators.required],
    });
  }
}

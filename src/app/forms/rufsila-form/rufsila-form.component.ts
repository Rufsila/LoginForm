import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsAdapterService } from '../../services/adapter/forms-adapter.service';
import { AuthService } from '../../services/api/auth.service';
import { CommonHelperService } from '../../services/helper/common-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rufsila-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './rufsila-form.component.html',
  styleUrl: './rufsila-form.component.css',
})
export class RufsilaFormComponent implements OnInit {
  form!: FormGroup;
  countries: string[] = ['India', 'USA', 'UK', 'Canada', 'Australia'];
  countryCodes: string[] = ['+91', '+1', '+44', '+61'];

  private adapter = inject(FormsAdapterService);
  private helper = inject(CommonHelperService);
  private api = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.form = this.adapter.buildRufsilaForm();
  }

  onSubmit() {
    if (this.form.invalid) {
      this.helper.markFormGroupTouched(this.form);
      return;
    }

    const data = this.form.value;

    this.api.submitTravellerDetails(data).subscribe({
      next: (res) => {
        // ✅ Save details in localStorage
        let existing = JSON.parse(localStorage.getItem('travellers') || '[]');
        existing.push(data);
        localStorage.setItem('travellers', JSON.stringify(existing));

        alert('Form submitted successfully!');
        this.form.reset();

        // ✅ Navigate to dashboard
        this.router.navigate(['/dashboards/rufsila-db']);
      },
      error: (err) => {
        alert('Submission failed: ' + err.message);
      },
    });
  }

  minDate(): Date {
    return new Date(); // disables past dates
  }
}

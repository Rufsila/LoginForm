import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsAdapterService } from '../../services/adapter/forms-adapter.service';

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
// export class NavaneethaFormComponent {
//   travellerForm: FormGroup;
//   private formAdapter = inject(FormsAdapterService);
//   private router = inject(Router);

//   constructor() {
//     // ✅ Use adapter service to build the form
//     this.travellerForm = this.formAdapter.buildNavaneethaForm();
//   }

//   onSubmit() {
//     if (this.travellerForm.valid) {
//       const newTraveller = this.travellerForm.value;

//       // ✅ Read existing data
//       const storedData = localStorage.getItem('travellerData');
//       let travellers = [];

//       if (storedData) {
//         try {
//           const parsed = JSON.parse(storedData);
//           // If parsed is already an array, use it. If it's an object, wrap in array.
//           travellers = Array.isArray(parsed) ? parsed : [parsed];
//         } catch (e) {
//           travellers = [];
//         }
//       }

//       // ✅ Add new traveller
//       travellers.push(newTraveller);

//       // ✅ Save back
//       localStorage.setItem('travellerData', JSON.stringify(travellers));

//       alert('Traveller details saved successfully!');
//       this.router.navigate(['/dashboards/navaneetha-db']);
//     } else {
//       this.travellerForm.markAllAsTouched();
//     }
//   }
// }
export class NavaneethaFormComponent implements OnInit {
  private formAdapter = inject(FormsAdapterService);
  private router = inject(Router);

  travellerForm!: FormGroup;

  // ✅ Use ngOnInit for initialization
  ngOnInit(): void {
    this.travellerForm = this.formAdapter.buildNavaneethaForm();
  }

  onSubmit() {
    if (this.travellerForm.valid) {
      const newTraveller = this.travellerForm.value;

      // ✅ Read existing data
      const storedData = localStorage.getItem('travellerData');
      let travellers: any[] = [];

      if (storedData) {
        try {
          const parsed = JSON.parse(storedData);
          travellers = Array.isArray(parsed) ? parsed : [parsed];
        } catch {
          travellers = [];
        }
      }

      // ✅ Add new traveller
      travellers.push(newTraveller);

      // ✅ Save back
      localStorage.setItem('travellerData', JSON.stringify(travellers));

      alert('Traveller details saved successfully!');
      this.router.navigate(['/dashboards/navaneetha-db']);
    } else {
      this.travellerForm.markAllAsTouched();
    }
  }
}
// import { CommonModule } from '@angular/common';
// import { Component, inject, OnInit } from '@angular/core';
// import { FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { TravellerFormHelperService } from '../../services/helper/traveller-form-helper.service';
// import { TravellerFormService } from '../../services/api/traveller-form.service';
// import { TravellerFormStateService } from '../../services/state/traveller-form-state.service';
// import { FormsAdapterService } from '../../services/adapter/forms-adapter.service';

// @Component({
//   selector: 'app-traveller-details',
//   imports: [
//     ReactiveFormsModule,
//     CommonModule,
//     MatInputModule,
//     MatSelectModule,
//     MatCheckboxModule,
//     MatButtonModule,
//     MatDatepickerModule,
//     MatNativeDateModule,
//   ],
//   templateUrl: './traveller-details.component.html',
//   styleUrl: './traveller-details.component.css',
// })
// export class TravellerDetailsComponent implements OnInit {
//   form!: FormGroup;
//   countries: string[] = ['India', 'USA', 'UK', 'Canada', 'Australia'];
//   countryCodes: string[] = ['+91', '+1', '+44', '+61'];

//   private adapter = inject(FormsAdapterService);
//   private helper = inject(TravellerFormHelperService);
//   private api = inject(TravellerFormService);
//   private state = inject(TravellerFormStateService);

//   ngOnInit(): void {
//     this.form = this.adapter.buildRufsilaForm();
//   }

//   onSubmit() {
//     if (this.form.invalid) {
//       this.helper.markFormGroupTouched(this.form);
//       return;
//     }

//     const data = this.form.value;
//     this.api.submitTravellerDetails(data).subscribe({
//       next: (res) => {
//         this.state.setTravellerData(data);
//         alert('Form submitted successfully!');
//         this.form.reset();
//       },
//       error: (err) => {
//         alert('Submission failed: ' + err.message);
//       },
//     });
//   }

//   minDate(): Date {
//     return new Date(); // disables past dates
//   }
// }

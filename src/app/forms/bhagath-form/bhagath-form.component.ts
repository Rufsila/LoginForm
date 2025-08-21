import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonStateService } from '../../services/state/common-state.service';
import { FormsAdapterService } from '../../services/adapter/forms-adapter.service';
import { CommonHelperService } from '../../services/helper/common-helper.service';

@Component({
  selector: 'app-bhagath-form',
  standalone: true,
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


  private router = inject(Router)
  private state = inject(CommonStateService)
  private adapter = inject(FormsAdapterService)
  private helper = inject(CommonHelperService)


  ngOnInit(): void {
    this.userForm = this.adapter.bhagathFormValidation();
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.state.bhagathSaveUserData(this.userForm.value);

    this.router.navigate(['/bhagathDb']);

  }

  getError(controlName: string): string {
    return this.helper.bhagathGetError(this.userForm.get(controlName), controlName);
  }
}

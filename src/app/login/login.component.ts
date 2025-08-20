import { Component, inject, Inject, OnInit } from '@angular/core';
import { AuthService } from '../services/api/auth.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsAdapterService } from '../services/adapter/forms-adapter.service';
import { CommonHelperService } from '../services/helper/common-helper.service';
import { CommonStateService } from '../services/state/common-state.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  errorMsg = '';
  successMsg = '';

  private adapter = inject(FormsAdapterService);
  private api = inject(AuthService);
  private state = inject(CommonStateService);
  private helper = inject(CommonHelperService);
  private router = inject(Router);

  ngOnInit(): void {
    this.loginForm = this.adapter.buildLoginForm(); // ✅ initialized after DI works
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.helper.markFormGroupTouched(this.loginForm);
      return;
    }

    // ✅ optional: check extra business rules
    const businessError = this.helper.checkBusinessRules(this.loginForm);
    if (businessError) {
      this.errorMsg = businessError;
      return;
    }

    this.loading = true;
    this.errorMsg = '';
    this.successMsg = '';

    const { username, password } = this.loginForm.value;

    this.api.login(username, password).subscribe({
      next: (res) => {
        this.loading = false;
        this.successMsg = 'Login successful ';
        this.state.setLoginStatus(true);
        console.log('Logged in User:', username);
        console.log('Token:', res.token);
        console.log('Role:', res.role);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.message;
        this.state.setLoginStatus(false);
      },
    });
  }

  // ✅ You can use this in template for showing field-level errors
  getError(controlName: string): string {
    return this.helper.getErrorMessage(this.loginForm, controlName);
  }
}

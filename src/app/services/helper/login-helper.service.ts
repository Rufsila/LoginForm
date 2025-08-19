import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginHelperService {
  constructor() {}

  /**
   * Mark all controls in the form as touched
   * (so validation messages show up).
   */
  markFormGroupTouched(form: FormGroup): void {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
    });
  }

  /**
   * Get a readable validation error message for a control.
   */
  getErrorMessage(form: FormGroup, controlName: string): string {
    const control = form.get(controlName);
    if (!control || !control.errors || !control.touched) {
      return '';
    }

    if (control.errors['required']) {
      return `${this.capitalize(controlName)} is required`;
    }
    if (control.errors['minlength']) {
      return `${this.capitalize(controlName)} must be at least ${
        control.errors['minlength'].requiredLength
      } characters`;
    }

    return 'Invalid input';
  }

  /**
   * Business rules specific to login form.
   * Example: username cannot contain spaces
   */
  checkBusinessRules(form: FormGroup): string | null {
    const username = form.get('username')?.value;
    if (username && username.includes(' ')) {
      return 'Username cannot contain spaces';
    }
    return null;
  }

  /** Small util */
  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

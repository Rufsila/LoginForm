import { Injectable } from '@angular/core';
import { delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }

  private users = [
    { username: 'admin', password: 'admin', role: 'Admin' },
    { username: 'user1', password: 'pass123', role: 'User' },
  ];

  login(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // ✅ success response with fake token
      return of({
        success: true,
        token: 'fake-jwt-token-' + user.username,
        role: user.role,
      }).pipe(delay(1000)); // simulate network delay
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }

  submitTravellerDetails(data: any) {
    console.log('API call with data:', data);
    // Simulate API call
    return of({ success: true }).pipe(delay(1000));
  }
}
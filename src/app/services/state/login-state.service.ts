import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginStateService {
  constructor() {}

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  // Expose as observable
  get loginStatus() {
    return this.isLoggedIn$.asObservable();
  }

  setLoginStatus(status: boolean) {
    this.isLoggedIn$.next(status);
  }
}

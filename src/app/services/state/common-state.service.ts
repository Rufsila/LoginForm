import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonStateService {

  private readonly storageKey = 'brkData';

  constructor() { }

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  private travellerDataSubject = new BehaviorSubject<any>(null);
  travellerData$ = this.travellerDataSubject.asObservable();

  // Expose as observable
  get loginStatus() {
    return this.isLoggedIn$.asObservable();
  }

  setLoginStatus(status: boolean) {
    this.isLoggedIn$.next(status);
  }

  setTravellerData(data: any) {
    this.travellerDataSubject.next(data);
  }

  bhagathSaveUserData(brkData: any) {
    let users = this.bhagathGetAllUserData();

    // ✅ Ensure it's always an array
    if (!Array.isArray(users)) {
      users = [];
    }

    users.push(brkData);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  bhagathGetAllUserData(): any[] {
    const data = localStorage.getItem(this.storageKey);

    try {
      return data ? JSON.parse(data) : [];
    } catch {
      console.warn('Invalid localStorage data found. Resetting.');
      return [];
    }
  }

  bhagathClearAllUserData() {
    localStorage.removeItem(this.storageKey);
  }


}

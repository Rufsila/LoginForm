import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonStateService {

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
  
}

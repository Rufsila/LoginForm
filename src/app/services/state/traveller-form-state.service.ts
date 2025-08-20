import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravellerFormStateService {
  private travellerDataSubject = new BehaviorSubject<any>(null);
  travellerData$ = this.travellerDataSubject.asObservable();

  setTravellerData(data: any) {
    this.travellerDataSubject.next(data);
  }
}

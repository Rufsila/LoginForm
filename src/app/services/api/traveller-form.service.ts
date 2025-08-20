import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravellerFormService {
  submitTravellerDetails(data: any) {
    console.log('API call with data:', data);
    // Simulate API call
    return of({ success: true }).pipe(delay(1000));
  }
}

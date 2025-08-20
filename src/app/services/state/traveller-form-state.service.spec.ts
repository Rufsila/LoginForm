import { TestBed } from '@angular/core/testing';

import { TravellerFormStateService } from './traveller-form-state.service';

describe('TravellerFormStateService', () => {
  let service: TravellerFormStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravellerFormStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

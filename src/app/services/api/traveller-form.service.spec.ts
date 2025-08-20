import { TestBed } from '@angular/core/testing';

import { TravellerFormService } from './traveller-form.service';

describe('TravellerFormService', () => {
  let service: TravellerFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravellerFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

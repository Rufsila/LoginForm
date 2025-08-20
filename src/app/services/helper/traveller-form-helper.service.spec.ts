import { TestBed } from '@angular/core/testing';

import { TravellerFormHelperService } from './traveller-form-helper.service';

describe('TravellerFormHelperService', () => {
  let service: TravellerFormHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravellerFormHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TravellerFormAdapterService } from './traveller-form-adapter.service';

describe('TravellerFormAdapterService', () => {
  let service: TravellerFormAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravellerFormAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

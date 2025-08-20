import { TestBed } from '@angular/core/testing';

import { FormsAdapterService } from './forms-adapter.service';

describe('FormsAdapterService', () => {
  let service: FormsAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

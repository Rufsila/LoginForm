import { TestBed } from '@angular/core/testing';

import { LoginFormAdapterService } from './login-form-adapter.service';

describe('LoginFormAdapterService', () => {
  let service: LoginFormAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

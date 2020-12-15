import { TestBed } from '@angular/core/testing';

import { EmployesServiceService } from './employes-service.service';

describe('EmployesServiceService', () => {
  let service: EmployesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

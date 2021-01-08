import { TestBed } from '@angular/core/testing';

import { ServiceEntraineurService } from './service-entraineur.service';

describe('ServiceEntraineurService', () => {
  let service: ServiceEntraineurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEntraineurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServiceJoueursService } from './service-joueurs.service';

describe('ServiceJoueursService', () => {
  let service: ServiceJoueursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceJoueursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

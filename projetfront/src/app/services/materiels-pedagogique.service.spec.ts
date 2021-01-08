import { TestBed } from '@angular/core/testing';

import { MaterielsPedagogiqueService } from './materiels-pedagogique.service';

describe('MaterielsPedagogiqueService', () => {
  let service: MaterielsPedagogiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterielsPedagogiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

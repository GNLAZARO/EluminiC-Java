import { TestBed } from '@angular/core/testing';

import { CdbcalculadoraService } from './cdb-calculadora.service';

describe('CdbcalculadoraService', () => {
  let service: CdbcalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdbcalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

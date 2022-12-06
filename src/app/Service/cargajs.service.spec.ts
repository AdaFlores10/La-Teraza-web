import { TestBed } from '@angular/core/testing';

import { CargajsService } from './cargajs.service';

describe('CargajsService', () => {
  let service: CargajsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargajsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

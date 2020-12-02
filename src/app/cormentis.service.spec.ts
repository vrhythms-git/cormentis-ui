import { TestBed } from '@angular/core/testing';

import { CormentisService } from './cormentis.service';

describe('CormentisService', () => {
  let service: CormentisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CormentisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

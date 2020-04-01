import { TestBed } from '@angular/core/testing';

import { FhService } from './fh.service';

describe('FhService', () => {
  let service: FhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

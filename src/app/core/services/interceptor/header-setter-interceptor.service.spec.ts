import { TestBed } from '@angular/core/testing';

import { HeaderSetterInterceptorService } from './header-setter-interceptor.service';

describe('HeaderSetterInterceptorService', () => {
  let service: HeaderSetterInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderSetterInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

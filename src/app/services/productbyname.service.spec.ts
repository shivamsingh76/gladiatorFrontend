import { TestBed } from '@angular/core/testing';

import { ProductbynameService } from './productbyname.service';

describe('ProductbynameService', () => {
  let service: ProductbynameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductbynameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

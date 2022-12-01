import { TestBed } from '@angular/core/testing';

import { CreateUpdateRequestService } from './create-update-request.service';

describe('CreateUpdateRequestService', () => {
  let service: CreateUpdateRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUpdateRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

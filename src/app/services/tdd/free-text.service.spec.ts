import { TestBed } from '@angular/core/testing';

import { FreeTextService } from '../free-text.service';

describe('FreeTextService', () => {
  let service: FreeTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

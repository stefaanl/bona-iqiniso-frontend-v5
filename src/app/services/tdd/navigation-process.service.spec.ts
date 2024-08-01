import { TestBed } from '@angular/core/testing';

import { NavigationProcessService } from '../navigation-process.service';

describe('NavigationProcessService', () => {
  let service: NavigationProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

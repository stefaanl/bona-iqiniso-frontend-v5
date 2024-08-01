import { TestBed } from '@angular/core/testing';

import { NavigationComponentService } from '../navigation-component.service';

describe('NavigationComponentService', () => {
  let service: NavigationComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

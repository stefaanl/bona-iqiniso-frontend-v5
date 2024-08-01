import { TestBed } from '@angular/core/testing';
import { SpinnerService } from '../spinner.service';
import { BehaviorSubject } from 'rxjs';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerService]
    });
    service = TestBed.inject(SpinnerService);
  });

  describe('#show', () => {
    it('should set the spinner to true', (done: DoneFn) => {
      // Act
      service.show();

      // Assert
      service.spinner$.subscribe((value) => {
        expect(value).toBeTrue();
        done();
      });
    });
  });

  describe('#hide', () => {
    it('should set the spinner to false', (done: DoneFn) => {
      // Arrange
      service.show();

      // Act
      service.hide();

      // Assert
      service.spinner$.subscribe((value) => {
        expect(value).toBeFalse();
        done();
      });
    });
  });

  describe('spinner$', () => {
    it('should initially be false', (done: DoneFn) => {
      // Assert
      service.spinner$.subscribe((value) => {
        expect(value).toBeFalse();
        done();
      });
    });
  });
});

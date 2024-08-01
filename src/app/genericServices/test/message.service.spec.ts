import { TestBed } from '@angular/core/testing';
import { MessageService } from '../message.service';
import {V3BiAlertBase} from "../../models/V3BiAlertBase";
import {V3BiAlertArray} from "../../models/V3BiAlertArray";
import {V3BiTranslationBase} from "../../models/V3BiTranslationBase";

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.inject(MessageService);
    window.sessionStorage.clear();
  });

  afterEach(() => {
    window.sessionStorage.clear();
  });

  describe('#clearAlerts', () => {
    it('should set session storage item ALERTS to an empty V3BiAlertArray', () => {
      // Act
      service.clearAlerts();

      // Assert
      const alerts = JSON.parse(window.sessionStorage.getItem('alerts') || '{}');
      expect(alerts.items).toEqual([]);
    });
  });

  describe('#addAlerts', () => {
    it('should add the alert to the V3BiAlertArray in session storage', () => {
      // Arrange
      const alert = new V3BiAlertBase('Test alert', 'info', [new V3BiTranslationBase('en', 'Test alert')]);

      // Act
      service.addAlerts(alert);

      // Assert
      const alerts = JSON.parse(window.sessionStorage.getItem('alerts') || '{}');
      expect(alerts.items).toContain(expect.objectContaining({ message: 'Test alert', type: 'info' }));
    });

    it('should keep the V3BiAlertArray unchanged when no alert is provided', () => {
      // Arrange
      const initialAlerts = new V3BiAlertArray([new V3BiAlertBase('Test alert', 'info', [new V3BiTranslationBase('en', 'Test alert')])]);
      window.sessionStorage.setItem('alerts', JSON.stringify(initialAlerts));

      // Act
      service.addAlerts(undefined);

      // Assert
      const alerts = JSON.parse(window.sessionStorage.getItem('alerts') || '{}');
      expect(alerts.items).toEqual(expect.arrayContaining([expect.objectContaining({ message: 'Initial alert', type: 'warning' })]));
    });

    it('should add the alert to the existing V3BiAlertArray in session storage', () => {
      // Arrange
      const initialAlerts = new V3BiAlertArray([new V3BiAlertBase('Test alert', 'info', [new V3BiTranslationBase('en', 'Test alert')])]);
      window.sessionStorage.setItem('alerts', JSON.stringify(initialAlerts));
      const alert = new V3BiAlertBase('Test alert', 'info', [new V3BiTranslationBase('en', 'Test alert')]);

      // Act
      service.addAlerts(alert);

      // Assert
      const alerts = JSON.parse(window.sessionStorage.getItem('alerts') || '{}');
      expect(alerts.items).toEqual(expect.arrayContaining([
        expect.objectContaining({ message: 'Initial alert', type: 'warning' }),
        expect.objectContaining({ message: 'New alert', type: 'info' })
      ]));
    });
  });

  describe('#getAlerts', () => {
    it('should return the V3BiAlertArray from session storage when alerts are present', () => {
      // Arrange
      const initialAlerts = new V3BiAlertArray([new V3BiAlertBase('Test alert', 'info', [new V3BiTranslationBase('en', 'Test alert')])]);
      window.sessionStorage.setItem('alerts', JSON.stringify(initialAlerts));

      // Act
      const alerts = service.getAlerts();

      // Assert
      expect(alerts.items).toEqual(expect.arrayContaining([expect.objectContaining({ message: 'Stored alert', type: 'info' })]));
    });

    it('should return an empty V3BiAlertArray when alerts are not present in session storage', () => {
      // Act
      const alerts = service.getAlerts();

      // Assert
      expect(alerts.items).toEqual([]);
    });
  });
});

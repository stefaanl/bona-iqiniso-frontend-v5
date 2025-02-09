import { V3BiAlertArray } from '../V3BiAlertArray';
import { V3BiAlertBase } from '../V3BiAlertBase';
import { V3BiTranslationBase } from '../V3BiTranslationBase';

describe('V3BiAlertArray', () => {
  let alertArray: V3BiAlertArray;
  let mockTranslation1: V3BiTranslationBase;
  let mockTranslation2: V3BiTranslationBase;
  let mockAlert1: V3BiAlertBase;
  let mockAlert2: V3BiAlertBase;

  beforeEach(() => {
    // Mock translations
    mockTranslation1 = new V3BiTranslationBase('en', 'Error occurred');
    mockTranslation2 = new V3BiTranslationBase('es', 'Ocurrió un error');

    // Mock alerts
    mockAlert1 = new V3BiAlertBase('alert1', 'error', [mockTranslation1]);
    mockAlert2 = new V3BiAlertBase('alert2', 'warning', [mockTranslation2]);

    // Initialize alert array
    alertArray = new V3BiAlertArray([mockAlert1, mockAlert2]);
  });

  it('should create an instance with provided alerts', () => {
    expect(alertArray).toBeTruthy();
    expect(alertArray.items.length).toBe(2);
    expect(alertArray.items).toContain(mockAlert1);
    expect(alertArray.items).toContain(mockAlert2);
  });

  it('should return an alert by reference', () => {
    const result = alertArray.getAlert('alert1');
    expect(result).toBe(mockAlert1);
  });

  it('should return undefined if the alert reference does not exist', () => {
    const result = alertArray.getAlert('nonExistentAlert');
    expect(result).toBeUndefined();
  });

  it('should return the correct alert message for a given language', () => {
    const result = alertArray.getAlertByLanguage('alert1', 'en');
    expect(result).toBe('Error occurred');
  });

  it('should return "unknown alert" if the language does not exist for the alert', () => {
    const result = alertArray.getAlertByLanguage('alert1', 'fr');
    expect(result).toBe('unknown alert');
  });

  it('should add a new alert if it does not already exist', () => {
    const newTranslations = [new V3BiTranslationBase('fr', 'Erreur survenue')];
    alertArray.addAlert('alert3', 'info', newTranslations);

    const newAlert = alertArray.getAlert('alert3');
    expect(newAlert).toBeTruthy();
    expect(alertArray.items.length).toBe(3);
    expect(newAlert?.state).toBe('info');
    expect(newAlert?.translations[0].language).toBe('fr');
    expect(newAlert?.translations[0].text).toBe('Erreur survenue');
  });

  it('should not add a duplicate alert with the same reference', () => {
    const initialLength = alertArray.items.length;
    alertArray.addAlert('alert1', 'error', [mockTranslation1]);

    expect(alertArray.items.length).toBe(initialLength);
  });
});

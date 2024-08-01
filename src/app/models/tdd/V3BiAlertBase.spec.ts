import {V3BiTranslationBase} from "../V3BiTranslationBase";
import {V3BiAlertBase} from "../V3BiAlertBase";
import {mockAlertBase} from "../mock/mock-B3BiAlertBase";

describe('V3BiAlertBase', () => {

  beforeEach(() => {
  });

  it('should create an instance', () => {
    const alert = mockAlertBase
    expect(alert).toBeTruthy();
    expect(alert.reference).toBe('alert1');
    expect(alert.state).toBe('error');
    expect(alert.translations.length).toBe(2);
  });

  it('should return the correct alert text for a known language', () => {
    const alert = mockAlertBase;
    const alertText = alert.getAlert('en');
    expect(alertText).toBe('This is an English alert');
  });

  it('should return "unknown alert" for an unknown language', () => {
    const alert = mockAlertBase;
    const alertText = alert.getAlert('fr');
    expect(alertText).toBe('Ceci est une alerte en français');
  });

  it('should return ubknow alert for an unknown language', () => {
    const alert = mockAlertBase
    const alertText = alert.getAlert('es');
    expect(alertText).toBe('unknown alert');
  });
  it('should throw an error when an invalid state value is provided', () => {
    const reference = 'alert1';
    const invalidState = 'invalidState';
    const translations: V3BiTranslationBase[] = [
      new V3BiTranslationBase('en', 'This is an English alert')
    ];

    expect(() => {
      new V3BiAlertBase(reference, invalidState, translations);
    }).toThrowError('Invalid state value');
  });
});

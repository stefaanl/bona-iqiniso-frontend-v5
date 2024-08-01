import { V3BiAlertArray } from '../V3BiAlertArray';
import { V3BiAlertBase } from '../V3BiAlertBase';
import { V3BiTranslationBase } from '../V3BiTranslationBase';

describe('V3BiAlertArray', () => {
  let alertArray: V3BiAlertArray;
  let alert1: V3BiAlertBase;
  let alert2: V3BiAlertBase;

  beforeEach(() => {
    const translations1 = [new V3BiTranslationBase('en', 'Alert 1')];
    const translations2 = [new V3BiTranslationBase('en', 'Alert 2')];
    alert1 = new V3BiAlertBase('ref1', 'error', translations1);
    alert2 = new V3BiAlertBase('ref2', 'warning', translations2);
    alertArray = new V3BiAlertArray([alert1, alert2]);
  });

  it('should initialize with given items', () => {
    expect(alertArray.items.length).toBe(2);
    expect(alertArray.items).toContain(alert1);
    expect(alertArray.items).toContain(alert2);
  });
  it('should return the correct alert when reference is found', () => {
    const alert = alertArray.getAlert('ref1');
    expect(alert).toBe(alert1);
  });

  it('should return undefined when reference is not found', () => {
    const alert = alertArray.getAlert('ref3');
    expect(alert).toBeUndefined();
  });


  it('should return the correct translation when alert is found', () => {
    jest.spyOn(alert1, 'getAlert').mockReturnValue('Alert 1');
    const translation = alertArray.getAlertByLanguage('ref1', 'en');
    expect(translation).toBe('Alert 1');
  });

  it('should return "unknown alert" when alert is not found', () => {
    const translation = alertArray.getAlertByLanguage('ref3', 'en');
    expect(translation).toBe('unknown alert');
  });

  it('should add a new alert when reference is unique', () => {
    const newTranslations = [new V3BiTranslationBase('en', 'Alert 3')];
    alertArray.addAlert('ref3', 'success', newTranslations);
    const newAlert = alertArray.getAlert('ref3');
    expect(newAlert).toBeDefined();
    expect(newAlert?.reference).toBe('ref3');
  });

  it('should throw an error when reference is duplicated', () => {
    const newTranslations = [new V3BiTranslationBase('en', 'Duplicate Alert')];
    expect(() => {
      alertArray.addAlert('ref1', 'error', newTranslations);
    }).toThrowError('duplicate alert');
  });
  it('should throw an error when state is invalid', () => {
    const newTranslations = [new V3BiTranslationBase('en', 'new Alert')];
    expect(() => {
      alertArray.addAlert('ref10', 'active', newTranslations);
    }).toThrowError('Invalid state value');
  });

});

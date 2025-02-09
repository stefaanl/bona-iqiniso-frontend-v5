import { V3BiAlertBase } from '../V3BiAlertBase';
import { V3BiTranslationBase } from '../V3BiTranslationBase';
import {mockTranslations} from "../mock/mock-V3BiTranslationBase";
import {mockAlertBase} from "../mock/mock-V3BiAlertBase";

describe('V3BiAlertBase', () => {

  beforeEach(() => {
  });

  it('should create an instance with valid state', () => {
    const alert = mockAlertBase;
    expect(alert).toBeTruthy();
    expect(alert.reference).toBe(mockAlertBase.reference);
    expect(alert.state).toBe(mockAlertBase.state);
    expect(alert.translations).toEqual(mockAlertBase.translations);
  });

  it('should throw an error if state is invalid', () => {
    expect(() => new V3BiAlertBase('alert2', 'invalidState', mockTranslations)).toThrowError('Invalid state value');
  });

  it('should return the correct alert message for a given language', () => {
    const alert = mockAlertBase;
    expect(alert.getAlert(mockTranslations[0].language)).toBe(mockTranslations[0].text);
    expect(alert.getAlert(mockTranslations[1].language)).toBe(mockTranslations[1].text);
  });

  it('should return "unknown alert" if the language does not exist', () => {
    const alert = mockAlertBase;
    expect(alert.getAlert('ch')).toBe('unknown alert');
  });
});

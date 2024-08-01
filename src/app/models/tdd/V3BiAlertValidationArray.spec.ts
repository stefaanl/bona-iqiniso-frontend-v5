import {V3BiTranslationBase} from "../V3BiTranslationBase";
import {V3BiAlertBase} from "../V3BiAlertBase";
import {V3BiAlertValidationBase} from "../V3BiAlertValidationBase";
import {V3BiAlertValidationArray} from "../V3BiAlertValidationArray";
import {mockAlertValidationArray} from "../mock/mock-V3BiAlertValidationArray";
import {mockAlertValidationBaseA} from "../mock/mock-V3BiAlertValidationBase";

describe('V3BiAlertValidationArray', () => {
  let alerts: V3BiAlertValidationBase[];
  let alertArray: V3BiAlertValidationArray;

  beforeEach(() => {
    alertArray = mockAlertValidationArray;
  });

  it('should return alerts by field', () => {
    const result = alertArray.getAlertByField('reference');
    expect(result.length).toBe(2);
    expect(result[0].field).toBe('reference');
    expect(result[1].field).toBe('reference');
  });

  it('should return an empty array if no alerts match the field', () => {
    const result = alertArray.getAlertByField('xxx');
    console.log('result empty', result);
    expect(result.length).toBe(0);
  });

  it('should return an alert by reference and field', () => {
    const result = alertArray.getAlertByReference('mockAlertValidationBaseC', 'reference');
    expect(result).toBeDefined();
    expect(result?.alertReference).toBe('mockAlertValidationBaseC');
    expect(result?.field).toBe('reference');
  });

  it('should return undefined if no alert matches the reference and field', () => {
    const result = alertArray.getAlertByReference('reference3', 'field3');
    expect(result).toBeUndefined();
  });


  it('should add a new alert', () => {

    alertArray.addAlertByReference('mockAlertValidationBaseE', 'field3');
    const result = alertArray.getAlertByReference('mockAlertValidationBaseE', 'field3');
    expect(result).toBeDefined();
    expect(result?.alertReference).toBe('mockAlertValidationBaseE');
    expect(result?.field).toBe('field3');
  });

  it('should throw an error when adding a duplicate alert', () => {
    expect(() => {
      alertArray.addAlertByReference(mockAlertValidationBaseA.alertReference, mockAlertValidationBaseA.field);
    }).toThrow(new Error('duplicate alert'));
  });
});

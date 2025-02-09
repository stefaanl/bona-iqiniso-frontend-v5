import { V3BiAlertValidationArray } from '../V3BiAlertValidationArray';
import { V3BiAlertValidationBase } from '../V3BiAlertValidationBase';
import {
  mockAlertValidationBaseB,
  mockAlertValidationBaseWithField,
  mockAlertValidationBaseWithoutField
} from "../mock/mock-V3BiAlertValidationBase";

describe('V3BiAlertValidationArray', () => {
  let alertArray: V3BiAlertValidationArray;
  let mockAlertBase1 = mockAlertValidationBaseWithoutField;
  let mockAlertBase2 = mockAlertValidationBaseWithField;

  beforeEach(() => {
    alertArray = new V3BiAlertValidationArray([mockAlertBase1, mockAlertBase2]);
  });

  it('should create an instance with provided alerts', () => {
    expect(alertArray).toBeTruthy();
    expect(alertArray.alerts.length).toBe(2);
  });

  it('should return alerts matching the specified field', () => {
    let field: string;
    if (mockAlertValidationBaseWithField.field) field = mockAlertValidationBaseWithField.field;
    else field = '';
    const result = alertArray.getAlertByField(field);
    expect(result.length).toBe(1);
    expect(result[0].field).toBe(field);
  });

  it('should return an empty array if no alerts match the specified field', () => {
    const result = alertArray.getAlertByField('nonExistentField');
    expect(result.length).toBe(0);
  });

  it('should return alerts matching an undefined field', () => {
    const result = alertArray.getAlertByField(undefined);
    expect(result.length).toBe(1);
    expect(result[0].field).toBeUndefined();
  });

  it('should return an alert matching the specified reference and field', () => {
    const reference = mockAlertValidationBaseWithField.alertReference;
    const field = mockAlertValidationBaseWithField.field;
    const result = alertArray.getAlertByReference(reference, field);
    expect(result).toBe(mockAlertValidationBaseWithField);
  });

  it('should return an alert matching the specified reference and undefined field', () => {
    const reference = mockAlertValidationBaseWithoutField.alertReference;
    const field = mockAlertValidationBaseWithoutField.field;
    const result = alertArray.getAlertByReference(reference, field);
    expect(result).toBe(mockAlertValidationBaseWithoutField);
  });

  it('should return undefined if no alert matches the specified reference and field', () => {
    const result = alertArray.getAlertByReference('nonExistentAlert', 'field1');
    expect(result).toBeUndefined();
  });

  it('should add a new alert if it does not already exist', () => {
    alertArray.addAlertByReference('to-be-added', undefined);
    expect(alertArray.alerts.length).toBe(3);
      const newAlert = alertArray.alerts.find(alert => alert.alertReference === 'to-be-added' && alert.field === undefined);
    expect(newAlert?.alertReference).toBe('to-be-added');
  });

  it('should do nothing if adding a duplicate alert', () => {
    alertArray.addAlertByReference(mockAlertValidationBaseWithField.alertReference, mockAlertValidationBaseWithField.field);
    expect(alertArray.alerts.length).toBe(2);
  });
});

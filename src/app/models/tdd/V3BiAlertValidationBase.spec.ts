import { V3BiAlertValidationBase } from '../V3BiAlertValidationBase';

describe('V3BiAlertValidationBase', () => {
  it('should create an instance with alertReference only', () => {
    const alertValidation = new V3BiAlertValidationBase('alert1');
    expect(alertValidation).toBeTruthy();
    expect(alertValidation.alertReference).toBe('alert1');
    expect(alertValidation.field).toBeUndefined();
  });

  it('should create an instance with both alertReference and field', () => {
    const alertValidation = new V3BiAlertValidationBase('alert1', 'field1');
    expect(alertValidation).toBeTruthy();
    expect(alertValidation.alertReference).toBe('alert1');
    expect(alertValidation.field).toBe('field1');
  });

  it('should handle empty string as field', () => {
    const alertValidation = new V3BiAlertValidationBase('alert1', '');
    expect(alertValidation).toBeTruthy();
    expect(alertValidation.alertReference).toBe('alert1');
    expect(alertValidation.field).toBeUndefined();
  });

  it('should handle undefined as field', () => {
    const alertValidation = new V3BiAlertValidationBase('alert1', undefined);
    expect(alertValidation).toBeTruthy();
    expect(alertValidation.alertReference).toBe('alert1');
    expect(alertValidation.field).toBeUndefined();
  });

  it('should handle special characters in field', () => {
    const alertValidation = new V3BiAlertValidationBase('alert1', '!@#field$%^');
    expect(alertValidation).toBeTruthy();
    expect(alertValidation.alertReference).toBe('alert1');
    expect(alertValidation.field).toBe('!@#field$%^');
  });
});

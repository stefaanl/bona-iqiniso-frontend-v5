import {V3BiAlertBase} from "../V3BiAlertBase";
import {V3BiAlertValidationBase} from "../V3BiAlertValidationBase";
import {mockAlertBase, MockV3BiAlertBase} from "../mock/mock-B3BiAlertBase";
import {
  mockAlertValidationBaseWithField, mockAlertValidationBaseWithoutField, mockAlertValidationBaseWithUndefinedField,
  MockV3BiAlertValidationBase
} from "../mock/mock-V3BiAlertValidationBase";


describe('V3BiAlertValidationBase', () => {

  beforeEach(() => {
    console.log('V3BiAlertValidationBase: ');
  });

  it('should create an instance without field', () => {
    const validationBase = mockAlertValidationBaseWithoutField;
    expect(validationBase).toBeTruthy();
    expect(validationBase.field).toBeUndefined();
    expect(validationBase.alertReference).toBe("mockAlertValidationBaseWithoutField");
  });

  it('should create an instance with undefined field', () => {
    const validationBase = mockAlertValidationBaseWithUndefinedField;
    expect(validationBase).toBeTruthy();
    expect(validationBase.field).toBeUndefined();
    expect(validationBase.alertReference).toBe('mockAlertValidationBaseWithUndefinedField');
  });

  it('should create an instance with field', () => {
    const validationBase = mockAlertValidationBaseWithField
    expect(validationBase).toBeTruthy();
    expect(validationBase.field).toBe('mockField');
    expect(validationBase.alertReference).toBe('mockAlertValidationBaseWithField');
  });

});

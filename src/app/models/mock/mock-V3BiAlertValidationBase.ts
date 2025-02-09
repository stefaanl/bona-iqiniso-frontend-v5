// Mock implementation of V3BiAlertValidationBase
import {V3BiAlertValidationBase} from "../V3BiAlertValidationBase";
import {
  mockAlertBase,
  mockAlertBaseA,
  mockAlertBaseB,
  mockAlertBaseC,
  mockAlertBaseD,
  mockAlertBaseE
} from "./mock-V3BiAlertBase";

export class MockV3BiAlertValidationBase extends V3BiAlertValidationBase {
  constructor(alert: string, field?: string) {
    super(alert, field);
  }
}

export const mockAlertValidationBaseWithField = new MockV3BiAlertValidationBase('mockAlertValidationBaseWithField', 'mockField');
export const mockAlertValidationBaseWithoutField = new MockV3BiAlertValidationBase('mockAlertValidationBaseWithoutField');
export const mockAlertValidationBaseWithUndefinedField = new MockV3BiAlertValidationBase('mockAlertValidationBaseWithUndefinedField', undefined);
export const mockAlertValidationBaseA = new MockV3BiAlertValidationBase('mockAlertValidationBaseA', undefined);
export const mockAlertValidationBaseB = new MockV3BiAlertValidationBase('mockAlertValidationBaseB','something');
export const mockAlertValidationBaseC = new MockV3BiAlertValidationBase('mockAlertValidationBaseC', 'reference');
export const mockAlertValidationBaseE = new MockV3BiAlertValidationBase('mockAlertValidationBaseE', 'reference');
export const mockAlertValidationBaseD = new MockV3BiAlertValidationBase('mockAlertValidationBaseD', 'en');

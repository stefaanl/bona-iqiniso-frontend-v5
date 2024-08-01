import {V3BiTranslationBase} from "../V3BiTranslationBase";
import {V3BiAlertBase} from "../V3BiAlertBase";
import {V3BiAlertValidationBase} from "../V3BiAlertValidationBase";
import {V3BiAlertValidationArray} from "../V3BiAlertValidationArray";
import {
  mockAlertValidationBaseA,
  mockAlertValidationBaseB,
  mockAlertValidationBaseC, mockAlertValidationBaseE
} from "./mock-V3BiAlertValidationBase";

export class MockV3BiAlertValidationArray extends V3BiAlertValidationArray {
}

// @ts-ignore
export const mockAlertValidationArray = new MockV3BiAlertValidationArray([mockAlertValidationBaseA, mockAlertValidationBaseB, mockAlertValidationBaseC, mockAlertValidationBaseE]);

import {V3BiTranslationBase} from "../V3BiTranslationBase";
import {V3BiAlertBase} from "../V3BiAlertBase";
import {mockTranslations} from "./mock-V3BiTranslationBase";

export class MockV3BiAlertBase extends V3BiAlertBase {
  constructor(reference: string, state: string, translations: V3BiTranslationBase[]) {
    super(reference, state, translations);
  }

  // Optionally override getAlert if specific behavior is needed for testing
  // @ts-ignore
  getAlert(language: string): string {
    return super.getAlert(language);
  }
}


export const mockAlertBase = new MockV3BiAlertBase('alert1', 'error', mockTranslations);
export const mockAlertBaseA = new MockV3BiAlertBase('alertA', 'error', mockTranslations);
export const mockAlertBaseB = new MockV3BiAlertBase('alertB', 'warning', mockTranslations);
export const mockAlertBaseC = new MockV3BiAlertBase('alertC', 'info', mockTranslations);
export const mockAlertBaseD = new MockV3BiAlertBase('alertD', 'success', mockTranslations);
export const mockAlertBaseE = new MockV3BiAlertBase('alertE', 'success', mockTranslations);

import {V3BiAlertBase} from "../V3BiAlertBase";
import {V3BiTranslationBase} from "../V3BiTranslationBase";
import {V3BiAlertArray} from "../V3BiAlertArray";
import {mockAlertBaseA, mockAlertBaseB, mockAlertBaseC, mockAlertBaseD, mockAlertBaseE} from "./mock-V3BiAlertBase";

export class MockV3BiAlertArray extends V3BiAlertArray {
  constructor(items: V3BiAlertBase[]) {
    super(items);
  }

  // Optionally override getAlert if specific behavior is needed for testing
  // @ts-ignore
  getAlert(reference: string): V3BiAlertBase | undefined {
    return super.getAlert(reference);
  }
  // @ts-ignore
  getAlertByLanguage(reference: string, language: string): string {
    return super.getAlertByLanguage(reference, language);
  }
  // @ts-ignore
  addAlert(reference: string, state: string, translations: V3BiTranslationBase[]){
    super.addAlert(reference, state, translations);
  }

}


export const mockAlertArray = new V3BiAlertArray([
  mockAlertBaseA, mockAlertBaseB, mockAlertBaseC, mockAlertBaseD, mockAlertBaseE
]);
export const mockAlertArray_empty = new V3BiAlertArray([]);

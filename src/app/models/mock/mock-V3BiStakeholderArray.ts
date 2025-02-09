import {V3BiInfluenceArray} from "../V3BiInfluenceArray";
import {V3BiInfluenceBase} from "../V3BiInfluenceBase";
import {V3BiTranslationBase} from "../V3BiTranslationBase";
import {V3BiStakeholderArray} from "../V3BiStakeholderArray";
import {V3BiStakeholderBase} from "../V3Bi-Stakeholder";

export class MockV3BiStakeholderArray extends V3BiStakeholderArray {
  constructor(items: V3BiStakeholderBase[]) {
    super(items);
  }

  // Optionally override getAlert if specific behavior is needed for testing
  // @ts-ignore
  getStakeholder(reference : string) {
    return super.getStakeholder(reference);
  }
  // @ts-ignore
  getStakeholderByLanguage(reference: string, language: string) {
    return super.getStakeholderByLanguage(reference, language);
  }

}


export const mockStakeholderArray_empty = new V3BiStakeholderArray([]);

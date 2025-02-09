import {V3BiTranslationBase} from "../V3BiTranslationBase";
import {V3BiInfluenceArray} from "../V3BiInfluenceArray";
import {mockTranslations} from "./mock-V3BiTranslationBase";
import {V3BiInfluenceBase} from "../V3BiInfluenceBase";
import {MockV3BiAlertBase} from "./mock-V3BiAlertBase";

export class MockV3BiInfluenceArray extends V3BiInfluenceArray {
  constructor(items: V3BiInfluenceBase[]) {
    super(items);
  }

  // Optionally override getAlert if specific behavior is needed for testing
  // @ts-ignore
  getInfluencerByLanguage(influencer: string, language: string):  V3BiTranslationBase | "undefined stakeholder" | undefined {
    return super.getInfluencerByLanguage(influencer, language);
  }
}


export const mockInfluenceArray_empty = new V3BiInfluenceArray([]);





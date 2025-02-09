import {V3BiInfluenceBase} from "../V3BiInfluenceBase";
import {V3BiTranslationBase} from "../V3BiTranslationBase";

export class MockV3BiInfluenceBase extends V3BiInfluenceBase {
  constructor(influencer: string, influence: V3BiTranslationBase[]) {
    super(influencer, influence);
  }

  // Optionally override getAlert if specific behavior is needed for testing
  // @ts-ignore
  getInfluencer(language: string) {
    return super.getInfluencer(language);
  }
}


export const mockInfluenceBase = new V3BiInfluenceBase('influencer1', [
  new V3BiTranslationBase('en', 'en-influencer1'),
  new V3BiTranslationBase('fr', 'fr-influencer1')]);

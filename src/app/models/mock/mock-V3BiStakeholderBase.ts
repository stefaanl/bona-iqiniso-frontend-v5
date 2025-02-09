import {V3BiInfluenceBase} from "../V3BiInfluenceBase";
import {V3BiTranslationBase} from "../V3BiTranslationBase";
import {V3BiStakeholderBase} from "../V3Bi-StakeholderBase";

export class MockV3BiStakeholderBase extends V3BiStakeholderBase {
  constructor(reference: string, description: V3BiTranslationBase[], influencedBy?: V3BiInfluenceBase[]) {
    super(reference, description, influencedBy);
  }

  // Optionally override getAlert if specific behavior is needed for testing
  // @ts-ignore
  getStakeholder(language : string) {
    return super.getStakeholder(language);
  }
}


export const mockStakeholderBase = new V3BiStakeholderBase('stakeholder1',
  [new V3BiTranslationBase('en', 'en-stakeholder1'),
  new V3BiTranslationBase('fr', 'fr-stakeholder1')],
  [new V3BiInfluenceBase('influencer1', [
    new V3BiTranslationBase('en', 'en-influencer1'),
    new V3BiTranslationBase('fr', 'fr-influencer1')])]);

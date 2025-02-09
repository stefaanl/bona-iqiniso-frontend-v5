import {V3BiTranslationBase} from "./V3BiTranslationBase";
import {V3BiInfluenceBase} from "./V3BiInfluenceBase";


/**************************************** V3BiStakeholderBase *****************************************************/
export class V3BiStakeholderBase {
  reference: string;
  description: V3BiTranslationBase[];
  influencedBy: V3BiInfluenceBase[];


  constructor(reference: string, description: V3BiTranslationBase[], influencedBy?: V3BiInfluenceBase[]) {
    this.reference = reference;
    this.description = description;
    this.influencedBy = influencedBy || [];
  }

  getStakeholder(language : string) {
    const result = this.description.find(trans => trans.language === language);
    return result?.text || 'unknown stakeholder description'
  }
}

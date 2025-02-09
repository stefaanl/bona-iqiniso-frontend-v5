import {V3BiTranslationBase} from "./V3BiTranslationBase";

/**************************************** V3BiInfluenceBase *****************************************************/
export class V3BiInfluenceBase {
  influencer: string;
  influence: V3BiTranslationBase[];


  constructor(influencer: string, influence: V3BiTranslationBase[]) {
    this.influencer = influencer;
    this.influence = influence;
  }

  getInfluencer(language: string) {
    const result = this.influence.find(inf => inf.language === language);
    return result || undefined;
  }
}

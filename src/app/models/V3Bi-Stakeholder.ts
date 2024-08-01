import {V3BiTranslationBase} from "./V3BiTranslationBase";


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
/**************************************** V3BiStakeholderArray *****************************************************/
export class V3BiStakeholderArray {
  items: V3BiStakeholderBase[];


  constructor(items: V3BiStakeholderBase[]) {
    this.items = items;
  }

  getStakeholder(reference : string) {
    const result = this.items.find(item => item.reference === reference);
    return result || undefined;
  }
  getStakeholderByLanguage(reference: string, language: string) {
    const result = this.items.find(label => label.reference === reference);
    if (result) {
      //console.log('found label ', result);
      return result.getStakeholder(language);
    } else return 'undefined stakeholder';
  }

}

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
  /**************************************** V3BiInfluenceArray *****************************************************/
  export class V3BiInfluenceArray{
  items : V3BiInfluenceBase[];

  constructor(items: V3BiInfluenceBase[]) {
    this.items = items;
  }

  getInfluencerByLanguage(influencer: string, language: string) {
    const result = this.items.find(item => item.influencer === influencer);
    if (result) {
      //console.log('found label ', result);
      return result.getInfluencer(language);
    } else return 'undefined stakeholder';

  }


}

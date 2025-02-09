import {V3BiInfluenceBase} from "./V3BiInfluenceBase";

/**************************************** V3BiInfluenceArray *****************************************************/
export class V3BiInfluenceArray{
  items : V3BiInfluenceBase[];

  constructor(items: V3BiInfluenceBase[]) {
    this.items = items;
  }

  getInfluencerByLanguage(influencer: string, language: string) {
    const result = this.items.find(item => item.influencer === influencer);
    if (result) {
      const end_result = result.getInfluencer(language);
      if (end_result) {
        return end_result;
      } else {
        return 'undefined stakeholder';
      }
      //console.log('found label ', result);
    } else return 'undefined stakeholder';

  }


}

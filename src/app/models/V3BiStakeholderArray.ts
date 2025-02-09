import {V3BiStakeholderBase} from "./V3BiStakeholderBase";

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
  getStakeholderByLanguage(reference: string, language: string) : string | "undefined stakeholder" {
    const result = this.items.find(label => label.reference === reference);
    if (result) {
      //console.log('found label ', result);
      return result.getStakeholder(language);
    } else return 'undefined stakeholder';
  }

}


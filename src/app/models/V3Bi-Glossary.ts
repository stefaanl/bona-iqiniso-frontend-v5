import {V3BiTranslationBase} from "./V3BiTranslationBase";


/****************************************    V3BiGlossaryBase    *****************************************************/
export class V3BiGlossaryBase {
   reference: string;
   organization: string;
   translations: V3BiTranslationBase[];

  constructor(reference: string, organization: string, translations: V3BiTranslationBase[]) {
    this.reference = reference;
    this.organization = organization;
    this.translations = translations;
  }

  getGlossary(language : string) {
    const result = this.translations.find(trans => trans.language === language);
    //console.log('found label in language ', result);

    return result?.text || 'unknown language'
  }

}


export class V3BiGlossaryArray {
  items: V3BiGlossaryBase[];


  constructor(items: V3BiGlossaryBase[]) {
    this.items = items;
  }

  getGlossary(reference: string, organization: string) {
    const result = this.items.find(label => label.reference === reference && label.organization === organization);
    return result || undefined;
  }
  getGlossarybyLanguage(reference: string, organization: string, language: string) {
    //console.log('looking for label ', reference, ' in language ', language);
    const result = this.items.find(label => label.reference === reference && label.organization === organization);
    if (result) {
      //console.log('found label ', result);
      return result.getGlossary(language);
    } else return 'undefined terminology';
  }
  addGlossary(reference: string, organization: string, translations: V3BiTranslationBase[]) {
    this.items.push(new V3BiGlossaryBase(reference, organization, translations));
  }


}

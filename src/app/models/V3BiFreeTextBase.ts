
import {V3BiTranslationBase} from "./V3BiTranslationBase";


/****************************************V3BiLAbelBase*****************************************************/
export class V3BiFreeTextBase {
   reference: string;
   translations: V3BiTranslationBase[];

  constructor(reference: string, translations: V3BiTranslationBase[]) {
    this.reference = reference;
    this.translations = translations;
  }

  getFreeText(language : string) : string {
    const result = this.translations.find(trans => trans.language === language);
    //console.log('found label in language ', result);

    return result?.text || 'unknown language'
  }

}



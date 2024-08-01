import {V3BiTranslationBase} from "./V3BiTranslationBase";

/****************************************V3BiLAbelBase*****************************************************/
export class V3BiLabelBase {
  reference: string;
  translations: V3BiTranslationBase[];

  constructor(reference: string, translations: V3BiTranslationBase[]) {
    if (!reference) {
      throw new Error('reference is required');
    }
    if (!translations) {
      throw new Error('translations are required');
    }

    this.reference = reference;
    this.translations = translations;
  }

  getLabel(language: string): string {
    const translation = this.translations.find(trans => trans.language === language);
    //console.log('translation', translation);
    return translation ? translation.text : 'unknown language';
  }

}


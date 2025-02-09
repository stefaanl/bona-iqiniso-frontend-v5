
import {V3BiLabelBase} from "./V3BiLabelBase";
import {V3BiTranslationBase} from "./V3BiTranslationBase";



export class V3BiLabelArray {
  items: V3BiLabelBase[];


  constructor(items: V3BiLabelBase[]) {
    if (!items) {this.items = [];}
    else {
      if (items.length > 0) {
        this.items = items;
      } else {
        this.items = [];
      }
    }
  }

  getLabel(reference: string): V3BiLabelBase | undefined {
    const result = this.items.find(label => label.reference === reference);
    return result || undefined
  }

  getLabelbyLanguage(reference: string, language: string) {
    //console.log('looking for label ', reference, ' in language ', language);
    const result = this.getLabel(reference);
    if (!result) {
      return 'undefined label';
    }
    //console.log('found label ', result);

    const translation = result.translations.find(trans => trans.language === language);
    if (!translation) {
      return 'unknown language';
    }
    //console.log('found translation ', translation);
    return translation.text;
  }
  addLabel(reference: string, translations: V3BiTranslationBase[]): void {
    this.items.push(new V3BiLabelBase(reference, translations));
  }


}

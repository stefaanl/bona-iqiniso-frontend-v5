
import {V3BiTranslationBase} from "./V3BiTranslationBase";
import {V3BiFreeTextBase} from "./V3BiFreeTextBase";


export class V3BiFreeTextArray {
  items: V3BiFreeTextBase[];


  constructor(items: V3BiFreeTextBase[]) {
    this.items = items;
  }

  getFreeText(reference: string) {
    const result = this.items.find(label => label.reference === reference);
    return result || undefined;
  }
  getFreeTextbyLanguage(reference: string, language: string) {
    const result = this.items.find(txt => txt.reference === reference);
    if (result) {
      return result.getFreeText(language);
    } else return 'unknown free text';
  }
  addFreeText(reference: string, translations: V3BiTranslationBase[]) {
    if (this.items.some(txt => txt.reference === reference)) {
      throw new Error('duplicate free text');
    }
    this.items.push(new V3BiFreeTextBase(reference, translations));
  }


}

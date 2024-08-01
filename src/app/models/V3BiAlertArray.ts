import {V3BiTranslationBase} from "./V3BiTranslationBase";
import {V3BiAlertBase} from "./V3BiAlertBase";



export class V3BiAlertArray {
  items: V3BiAlertBase[];


  constructor(items: V3BiAlertBase[]) {
    this.items = items;
  }

  getAlert(reference: string): V3BiAlertBase | undefined {
    const result = this.items.find(alert => alert.reference === reference);
    if (result) {
      return result;
    }
    return undefined;
  }
  getAlertByLanguage(reference: string, language: string): string {
    console.log('getAlertByLanguage', reference, language, ' - from ', this.items);
    const result = this.items.find(alert => alert.reference === reference);
    console.log('getAlertByLanguage - result', result);
    if (result) {
      const alertBase = new V3BiAlertBase(result.reference, result.state, result.translations);
      return alertBase.getAlert(language)
    }
    return 'unknown alert';
  }
  addAlert(reference: string, state: string, translations: V3BiTranslationBase[]){
    if (this.items.some(alert => alert.reference === reference)) {
      //throw new Error('duplicate alert');
    } else {
      this.items.push(new V3BiAlertBase(reference, state, translations));
    }
  }

}

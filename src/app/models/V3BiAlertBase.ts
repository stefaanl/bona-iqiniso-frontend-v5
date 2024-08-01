import {V3BiTranslationBase} from "./V3BiTranslationBase";


/****************************************V3BiImageBase*****************************************************/
export class V3BiAlertBase {
  reference: string;
  state: string;
  translations: V3BiTranslationBase[];

  constructor(reference: string, state: string, translations: V3BiTranslationBase[]) {
    const validStates = ['error', 'warning', 'info', 'success'];
    if (!validStates.includes(state)) {
      throw new Error('Invalid state value');
    }

    this.reference = reference;
    this.state = state;
    this.translations = translations;
  }

  getAlert(language: string): string {
    const result = this.translations.find(trans => trans.language === language);
    if (result) {
      return result.text;
    }
    return 'unknown alert';
  }
}

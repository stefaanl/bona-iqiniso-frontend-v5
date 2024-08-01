import {V3BiTranslationBase} from "./V3BiTranslationBase";

/****************************************V3BiImageBase*****************************************************/
export class V3BiTranslationArray {
  items: V3BiTranslationBase[];

  constructor(items?: V3BiTranslationBase[]) {
    //language must be unique in the array of V3BiTranslationbase
    if(items) {
      const languages = items.map(item => item.language);
      const uniqueLanguages = new Set(languages);
      if (languages.length !== uniqueLanguages.size) {
        throw new Error('Language must be unique');
      }
    }

    this.items = items || [];
  }

  addTranslation(language: string, text: string): void {
    //is language unique?
    const result = this.items.find(item => item.language === language);
    if (result) {
      throw new Error('Language already exists');
    }
    this.items.push(new V3BiTranslationBase(language, text));
  }
  removeTranslation(language: string): void {
    const result = this.items.find(item => item.language === language);
    if (result) {
      this.items = this.items.filter(item => item.language !== language);
    } else {
      throw new Error('Language does not exist');
    }
  }

  getTranslation(language: string): string | undefined {
    const result = this.items.find(item => item.language === language);
    if (result) {
      return result.text;
    } else {
      return undefined;
    }
  }


}

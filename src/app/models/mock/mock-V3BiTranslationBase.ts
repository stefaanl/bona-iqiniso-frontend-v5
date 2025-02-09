import {V3BiTranslationBase} from "../V3BiTranslationBase";

export class MockV3BiTranslationBase extends V3BiTranslationBase {
  constructor(language: string, text: string) {
    super(language, text);
  }
}

// Usage example for testing
export const mockTranslations = [
  new MockV3BiTranslationBase('en', 'This is an English alert'),
  new MockV3BiTranslationBase('fr', 'Ceci est une alerte en français'),
];

export const mockTranslations_label_simple = [
  new MockV3BiTranslationBase('en', 'en - simple reference'),
  new MockV3BiTranslationBase('fr', 'fr - simple reference'),
];
export const mockTranslations_to_add = [
  new MockV3BiTranslationBase('de', 'de - simple reference')
];

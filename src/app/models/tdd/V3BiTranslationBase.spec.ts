import { V3BiTranslationBase } from '../V3BiTranslationBase';

describe('V3BiTranslationBase', () => {
  it('should create an instance of V3BiTranslationBase', () => {
    const translation = new V3BiTranslationBase('en', 'Hello');
    expect(translation).toBeTruthy();
  });

  it('should have the correct language and text', () => {
    const language = 'en';
    const text = 'Hello';
    const translation = new V3BiTranslationBase(language, text);
    expect(translation.language).toBe(language);
    expect(translation.text).toBe(text);
  });

});

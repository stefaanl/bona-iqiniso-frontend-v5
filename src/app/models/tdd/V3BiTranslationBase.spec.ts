import { V3BiTranslationBase } from '../V3BiTranslationBase';

describe('V3BiTranslationBase', () => {
  let translation: V3BiTranslationBase;

  beforeEach(() => {
    translation = new V3BiTranslationBase('en', 'Hello');
  });

  it('should create an instance', () => {
    expect(translation).toBeTruthy();
  });

  it('should have the correct language and text', () => {
    expect(translation.language).toBe('en');
    expect(translation.text).toBe('Hello');
  });

  it('should allow updating the language', () => {
    translation.language = 'fr';
    expect(translation.language).toBe('fr');
  });

  it('should allow updating the text', () => {
    translation.text = 'Bonjour';
    expect(translation.text).toBe('Bonjour');
  });

  it('should handle empty language and text', () => {
    translation = new V3BiTranslationBase('', '');
    expect(translation.language).toBe('');
    expect(translation.text).toBe('');
  });

  it('should handle null values gracefully', () => {
    translation = new V3BiTranslationBase(null as any, null as any);
    expect(translation.language).toBeNull();
    expect(translation.text).toBeNull();
  });
});

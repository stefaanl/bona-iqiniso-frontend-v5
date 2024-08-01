// v3bifreetextbase.spec.ts

import {V3BiFreeTextBase} from "../V3BiFreeTextBase";
import {V3BiTranslationBase} from "../V3BiTranslationBase";

describe('V3BiFreeTextBase', () => {
  let freeTextBase: V3BiFreeTextBase;

  beforeEach(() => {
    const translations: V3BiTranslationBase[] = [
      { language: 'en', text: 'Hello' },
      { language: 'es', text: 'Hola' }
    ];
    freeTextBase = new V3BiFreeTextBase('greeting', translations);
  });

  it('should create an instance', () => {
    expect(freeTextBase).toBeTruthy();
  });

  it('should return the correct translation for a given language', () => {
    expect(freeTextBase.getFreeText('en')).toBe('Hello');
    expect(freeTextBase.getFreeText('es')).toBe('Hola');
  });

  it('should return "unknown language" if translation is not found', () => {
    expect(freeTextBase.getFreeText('fr')).toBe('unknown language');
  });

  it('should have a unique reference', () => {
    expect(freeTextBase.reference).toBe('greeting');
  });

  it('could contain at an empty translation array', () => {

    freeTextBase = new V3BiFreeTextBase('greeting', []);

    expect(freeTextBase.translations.length).toEqual(0);
  });
});

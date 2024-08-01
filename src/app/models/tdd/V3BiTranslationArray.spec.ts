import {V3BiTranslationArray} from "../V3BiTranslationArray";
import {V3BiTranslationBase} from "../V3BiTranslationBase";



describe('V3BiTranslationArray', () => {
  let translationArray: V3BiTranslationArray;

  beforeEach(() => {
    translationArray = new V3BiTranslationArray();
  });

  it('should create an instance', () => {
    expect(translationArray).toBeTruthy();
  });

  it('should initialize with unique languages', () => {
    const items = [new V3BiTranslationBase('en', 'Hello'), new V3BiTranslationBase('es', 'Hola')];
    translationArray = new V3BiTranslationArray(items);
    expect(translationArray.items.length).toBe(2);
  });

  it('should throw an error if languages are not unique', () => {
    const items = [new V3BiTranslationBase('en', 'Hello'), new V3BiTranslationBase('en', 'Hi')];
    expect(() => new V3BiTranslationArray(items)).toThrowError('Language must be unique');
  });

  it('should add a translation if language is unique', () => {
    translationArray.addTranslation('en', 'Hello');
    expect(translationArray.items.length).toBe(1);
    expect(translationArray.getTranslation('en')).toBe('Hello');
  });

  it('should throw an error if adding a translation with existing language', () => {
    translationArray.addTranslation('en', 'Hello');
    expect(() => translationArray.addTranslation('en', 'Hi')).toThrowError('Language already exists');
  });

  it('should retrieve the correct translation', () => {
    translationArray.addTranslation('en', 'Hello');
    expect(translationArray.getTranslation('en')).toBe('Hello');
  });

  it('should return undefined for a non-existent translation', () => {
    expect(translationArray.getTranslation('fr')).toBeUndefined();
  });
});

import { V3BiTranslationArray } from '../V3BiTranslationArray';
import { V3BiTranslationBase } from '../V3BiTranslationBase';
import {mockTranslations} from "../mock/mock-V3BiTranslationBase";

describe('V3BiTranslationArray', () => {
  let translationArray: V3BiTranslationArray;

  beforeEach(() => {

    translationArray = new V3BiTranslationArray(mockTranslations);
  });

  it('should create an instance', () => {
    expect(translationArray).toBeTruthy();
  });

  it('should throw an error if languages are not unique on initialization', () => {
    expect(() => new V3BiTranslationArray([
      new V3BiTranslationBase('en', 'Hello'),
      new V3BiTranslationBase('en', 'Hola')
    ])).toThrowError('Language must be unique');
  });
  it('should create empty item array if initialized without paramater', () => {
    const tmp = new V3BiTranslationArray();
    expect(tmp.items.length).toBe(0);
  });

  it('should add a new translation if the language is unique', () => {
    translationArray.addTranslation('es', 'Hola');
    expect(translationArray.items.length).toBe(3);
    expect(translationArray.items[2].language).toBe('es');
    expect(translationArray.items[2].text).toBe('Hola');
  });

  it('should throw an error if adding a translation with an existing language', () => {
    expect(() => translationArray.addTranslation('en', 'Hi')).toThrowError('Language already exists');
  });

  it('should remove a translation if the language exists', () => {
    translationArray.removeTranslation('en');
    expect(translationArray.items.length).toBe(1);
  });

  it('should throw an error if removing a translation with a non-existent language', () => {
    expect(() => translationArray.removeTranslation('ch')).toThrowError('Language does not exist');
  });

  it('should return the correct translation for a given language', () => {
    const result = translationArray.getTranslation('en');
    expect(result).toBe(mockTranslations[0].text);
  });

  it('should return undefined if the language does not exist', () => {
    const result = translationArray.getTranslation('nl');
    expect(result).toBeUndefined();
  });
});

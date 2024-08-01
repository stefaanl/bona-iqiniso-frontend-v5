import { V3BiFreeTextArray } from '../V3BiFreeTextArray';
import { V3BiFreeTextBase } from '../V3BiFreeTextBase';
import { V3BiTranslationBase } from '../V3BiTranslationBase';

describe('V3BiFreeTextArray', () => {
  let freeTextArray: V3BiFreeTextArray;

  beforeEach(() => {
    freeTextArray = new V3BiFreeTextArray([
      new V3BiFreeTextBase('ref1', [new V3BiTranslationBase('en', 'text1')]),
      new V3BiFreeTextBase('ref2', [new V3BiTranslationBase('en', 'text2')])
    ]);
  });

  it('should initialize items with a non-empty array of V3BiFreeTextBase', () => {
    const items = [new V3BiFreeTextBase('ref1', [new V3BiTranslationBase('en', 'text1')])];
    freeTextArray = new V3BiFreeTextArray(items);
    expect(freeTextArray.items).toEqual(items);
  });

  it('should initialize items with an empty array when given an empty array', () => {
    freeTextArray = new V3BiFreeTextArray([]);
    expect(freeTextArray.items).toEqual([]);
  });

  it('should return the V3BiFreeTextBase with the given reference', () => {
    const result = freeTextArray.getFreeText('ref1');
    expect(result).toEqual(expect.objectContaining({ reference: 'ref1' }));
  });

  it('should return undefined for a non-existing reference', () => {
    const result = freeTextArray.getFreeText('non-existing-ref');
    expect(result).toBeUndefined();
  });

  it('should return "unknown free text" for a non-existing reference in getFreeTextbyLanguage', () => {
    const result = freeTextArray.getFreeTextbyLanguage('non-existing-ref', 'en');
    expect(result).toBe('unknown free text');
  });

  it('should return "unknown language" for a non-existing language in getFreeTextbyLanguage', () => {
    const result = freeTextArray.getFreeTextbyLanguage('ref1', 'non-existing-lang');
    expect(result).toBe('unknown language');
  });

  it('should return the translation text for an existing reference and language', () => {
    const result = freeTextArray.getFreeTextbyLanguage('ref1', 'en');
    expect(result).toBe('text1');
  });

  it('should throw an error for a duplicate free text reference in addFreeText', () => {
    const translations = [new V3BiTranslationBase('en', 'text in english')];
    expect(() => freeTextArray.addFreeText('ref1', translations)).toThrow(new Error('duplicate free text'));
  });

  it('should add a new V3BiFreeTextBase for a non-existing reference in addFreeText', () => {
    const translations = [new V3BiTranslationBase('en', 'text in english')];
    freeTextArray.addFreeText('ref3', translations);
    expect(freeTextArray.items.length).toBe(3);
    expect(freeTextArray.getFreeText('ref3')).toEqual(expect.objectContaining({ reference: 'ref3' }));
  });
});

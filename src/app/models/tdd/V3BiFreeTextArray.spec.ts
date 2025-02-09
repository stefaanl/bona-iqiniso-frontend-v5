import { V3BiFreeTextArray } from '../V3BiFreeTextArray';
import { V3BiFreeTextBase } from '../V3BiFreeTextBase';
import { V3BiTranslationBase } from '../V3BiTranslationBase';

describe('V3BiFreeTextArray', () => {
  let freeTextArray: V3BiFreeTextArray;
  let mockFreeTextBase: jasmine.SpyObj<V3BiFreeTextBase>;

  beforeEach(() => {
    mockFreeTextBase = jasmine.createSpyObj('V3BiFreeTextBase', ['getFreeText']);
    mockFreeTextBase.reference = 'testRef';
    freeTextArray = new V3BiFreeTextArray([mockFreeTextBase]);
  });

  afterAll(() => {

  });

  it('should be created', () => {
    expect(freeTextArray).toBeTruthy();
  });

  it('should return the free text if found', () => {
    const result = freeTextArray.getFreeText('testRef');
    expect(result).toBe(mockFreeTextBase);
  });

  it('should return undefined if not found', () => {
    const result = freeTextArray.getFreeText('unknownRef');
    expect(result).toBeUndefined();
  });

  it('should return the free text in the specified language if found', () => {
    mockFreeTextBase.getFreeText.and.returnValue('translated text');
    const result = freeTextArray.getFreeTextbyLanguage('testRef', 'en');
    expect(result).toBe('translated text');
  });

  it('should return "unknown free text" if the reference is not found', () => {
    const result = freeTextArray.getFreeTextbyLanguage('unknownRef', 'en');
    expect(result).toBe('unknown free text');
  });

  it('should add a new free text if the reference is unique', () => {
    freeTextArray.addFreeText('newRef', [new V3BiTranslationBase('en', 'text')]);
    expect(freeTextArray.items.length).toBe(2);
  });

  it('should throw an error if the reference already exists', () => {
    expect(() => {
      freeTextArray.addFreeText('testRef', [new V3BiTranslationBase('en', 'text')]);
    }).toThrowError('duplicate free text');
  });
});

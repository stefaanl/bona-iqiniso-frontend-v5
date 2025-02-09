import { V3BiFreeTextBase } from '../V3BiFreeTextBase';
import {mockTranslations} from "../mock/mock-V3BiTranslationBase";
import {V3BiTranslationBase} from "../V3BiTranslationBase";

describe('V3BiFreeTextBase', () => {
  let freeTextBase: V3BiFreeTextBase;

  beforeEach(() => {
    freeTextBase = new V3BiFreeTextBase('testRef', mockTranslations);
  });

  it('should create an instance', () => {
    expect(freeTextBase).toBeTruthy();
  });

  it('should return the correct free text for a given language', () => {
    const result = freeTextBase.getFreeText('en');
    expect(result).toBe(mockTranslations[0].text);
  });

  it('should return "unknown" if the language does not exist', () => {
    const result = freeTextBase.getFreeText('ch');
    expect(result).toBe('unknown language');
  });

  it('should have the correct reference', () => {
    expect(freeTextBase.reference).toBe('testRef');
  });

  it('should return "unknown" if translations object is empty', () => {
    freeTextBase = new V3BiFreeTextBase('testRef', []);
    const result = freeTextBase.getFreeText('en');
    expect(result).toBe('unknown language');
  });

});

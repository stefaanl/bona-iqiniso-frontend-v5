import { V3BiLabelBase } from '../V3BiLabelBase';
import { V3BiTranslationBase } from '../V3BiTranslationBase';
import {mockTranslations} from "../mock/mock-V3BiTranslationBase";

describe('V3BiLabelBase', () => {
  let labelBase: V3BiLabelBase;

  beforeEach(() => {
    labelBase = new V3BiLabelBase('testRef', mockTranslations);
  });

  it('should create an instance', () => {
    expect(labelBase).toBeTruthy();
  });

  it('should throw an error if reference is not provided', () => {
    expect(() => new V3BiLabelBase('', mockTranslations)).toThrowError('reference is required');
  });

  it('should throw an error if translations are not provided', () => {
    expect(() => new V3BiLabelBase('testRef', null as any)).toThrowError('translations are required');
  });

  it('should return the correct label for a given language', () => {
    const result = labelBase.getLabel('en');
    expect(result).toBe(mockTranslations[0].text);
  });

  it('should return "unknown language" if the language does not exist', () => {
    const result = labelBase.getLabel('es');
    expect(result).toBe('unknown language');
  });

  it('should return the correct label for another language', () => {
    const result = labelBase.getLabel('fr');
    expect(result).toBe(mockTranslations[1].text);
  });
});

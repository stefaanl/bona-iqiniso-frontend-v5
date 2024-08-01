// src/app/v3bi-label-array.service.spec.ts


import {V3BiLabelArray} from "../V3BiLabelArray";
import {V3BiLabelBase} from "../V3BiLabelBase";
import {V3BiTranslationBase} from "../V3BiTranslationBase";

describe('V3BiLabelArray', () => {
  let labelArray: V3BiLabelArray;

  beforeEach(() => {
    const trans1 = new V3BiTranslationBase('en', 'Hello');
    const trans2 = new V3BiTranslationBase('es', 'Hola');
    const trans3 = new V3BiTranslationBase('en', 'Goodbye');
    const trans4 = new V3BiTranslationBase('es', 'Adiós');

    const items = [
      new V3BiLabelBase('ref1', [trans1, trans2]),
      new V3BiLabelBase('ref2', [trans3, trans4])
    ];
    labelArray = new V3BiLabelArray(items);
  });

  it('should initialize with provided non-empty array', () => {
    expect(labelArray.items.length).toBe(2);
  });

  it('should initialize with empty array if provided array is empty', () => {
    labelArray = new V3BiLabelArray([]);
    expect(labelArray.items.length).toBe(0);
  });

  it('should return label for existing reference', () => {
    const label = labelArray.getLabel('ref1');
    expect(label?.reference).toBe('ref1');
  });

  it('should return undefined for non-existing reference', () => {
    const label = labelArray.getLabel('non-existing-ref');
    expect(label).toBeUndefined();
  });

  it('should return undefined label for non-existing reference in getLabelbyLanguage', () => {
    const result = labelArray.getLabelbyLanguage('non-existing-ref', 'en');
    expect(result).toBe('undefined label');
  });

  it('should return unknown language for existing reference but non-existing language', () => {
    const result = labelArray.getLabelbyLanguage('ref1', 'fr');
    expect(result).toBe('unknown language');
  });

  it('should return translation for existing reference and language', () => {
    const result = labelArray.getLabelbyLanguage('ref1', 'en');
    expect(result).toBe('Hello');
  });

  it('should add a new label', () => {
    labelArray.addLabel('ref3', [
      new V3BiTranslationBase('en', 'Yes'),
      new V3BiTranslationBase('es', 'si')]);
    const label = labelArray.getLabel('ref3');
    expect(label?.reference).toBe('ref3');
    expect(label?.getLabel('en')).toBe('Yes');
  });
});

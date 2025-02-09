import { V3BiLabelArray } from '../V3BiLabelArray';
import {mockLabelBase_simple} from "../mock/mock-V3BiLabelBase";
import {V3BiTranslationBase} from "../V3BiTranslationBase";
import {mockTranslations_to_add} from "../mock/mock-V3BiTranslationBase";

describe('V3BiLabelArray', () => {
  let labelArray: V3BiLabelArray;

  beforeEach(() => {
    let mockLabelBase = mockLabelBase_simple;

    labelArray = new V3BiLabelArray([mockLabelBase]);
  });

  it('should create an instance', () => {
    expect(labelArray).toBeTruthy();
  });

  it('should initialize with an empty array if items is not provided', () => {
    const emptyLabelArray = new V3BiLabelArray(null as any);
    expect(emptyLabelArray.items.length).toBe(0);
  });

  it('should initialize with an empty array if items is empty array', () => {
    const emptyLabelArray = new V3BiLabelArray([]);
    expect(emptyLabelArray.items.length).toBe(0);
  });

  it('should return the correct label for a given reference', () => {
    const result = labelArray.getLabel(mockLabelBase_simple.reference);
    expect(result).toBe(mockLabelBase_simple);
  });

  it('should return undefined if the label reference does not exist', () => {
    const result = labelArray.getLabel('nonExistentLabel');
    expect(result).toBeUndefined();
  });

  it('should return the correct label text for a given reference and language', () => {
    const result = labelArray.getLabelbyLanguage(mockLabelBase_simple.reference, mockLabelBase_simple.translations[0].language);
    expect(result).toBe(mockLabelBase_simple.translations[0].text);
  });

  it('should return "undefined label" if the label reference does not exist', () => {
    const result = labelArray.getLabelbyLanguage('nonExistentLabel', mockLabelBase_simple.translations[0].language);
    expect(result).toBe('undefined label');
  });

  it('should return "unknown language" if the language does not exist for the label', () => {
    labelArray = new V3BiLabelArray([mockLabelBase_simple]);
    expect(labelArray.items.length).toBe(1);

    const result = labelArray.getLabelbyLanguage('label-reference', 'ch');
    console.log('should return "unknown language" if the language does not exist for the label: result', result)
    expect(result).toBe('unknown language');
  });

  it('should add a new label', () => {
    const nr = labelArray.items.length;
    labelArray.addLabel('label2', mockTranslations_to_add);
    expect(labelArray.items.length).toBe(nr + 1);
    expect(labelArray.items[nr].reference).toBe('label2');
    expect(labelArray.items[nr].translations[0].language).toBe(mockTranslations_to_add[0].language);
    expect(labelArray.items[nr].translations[0].text).toBe(mockTranslations_to_add[0].text);
  });
});

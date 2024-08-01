import {V3BiTranslationBase} from "../V3BiTranslationBase";
import {V3BiLabelBase} from "../V3BiLabelBase";

describe('V3BiLabelBase', () => {
  let translationEn: V3BiTranslationBase;
  let translationEs: V3BiTranslationBase;
  let translations: V3BiTranslationBase[];

  beforeEach(() => {
    translationEn = new V3BiTranslationBase('en', 'Hello');
    translationEs = new V3BiTranslationBase('es', 'Hola');
    translations = [translationEn, translationEs];
  });

  it('should create an instance of V3BiLabelBase with valid reference and translations', () => {
    const label = new V3BiLabelBase('greeting', translations);
    expect(label).toBeTruthy();
    expect(label.reference).toBe('greeting');
    expect(label.translations).toEqual(translations);
  });


  it('should create an instance with empty translations array if provided', () => {
    const label = new V3BiLabelBase('greeting', []);
    expect(label).toBeTruthy();
    expect(label.reference).toBe('greeting');
    expect(label.translations).toEqual([]);
  });

  it('should return the correct label text for a given language', () => {
    const label = new V3BiLabelBase('greeting', translations);
    expect(label.getLabel('en')).toBe('Hello');
    expect(label.getLabel('es')).toBe('Hola');
  });

  it('should return "unknown language" for an unsupported language', () => {
    const label = new V3BiLabelBase('greeting', translations);
    expect(label.getLabel('fr')).toBe('unknown language');
  });
});

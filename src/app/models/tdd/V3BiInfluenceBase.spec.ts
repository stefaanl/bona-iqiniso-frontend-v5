import { V3BiInfluenceBase } from '../V3BiInfluenceBase';
import { V3BiTranslationBase } from '../V3BiTranslationBase';

describe('V3BiInfluenceBase', () => {
  let translations: V3BiTranslationBase[];

  beforeEach(() => {
    translations = [
      new V3BiTranslationBase('en', 'Influence description in English'),
      new V3BiTranslationBase('es', 'Descripción de la influencia en español')
    ];
  });

  it('should create an instance with all attributes', () => {
    const influence = new V3BiInfluenceBase('influencer1', translations);
    expect(influence).toBeTruthy();
    expect(influence.influencer).toBe('influencer1');
    expect(influence.influence).toEqual(translations);
  });

  it('should return the correct influence description for a given language', () => {
    const influence = new V3BiInfluenceBase('influencer2', translations);
    const result = influence.getInfluencer('en');
    expect(result?.text).toBe('Influence description in English');
  });

  it('should return undefined if the language does not exist', () => {
    const influence = new V3BiInfluenceBase('influencer3', translations);
    const result = influence.getInfluencer('fr');
    expect(result).toBeUndefined();
  });
});

import { V3BiStakeholderBase } from '../V3BiStakeholderBase';
import { V3BiTranslationBase } from '../V3BiTranslationBase';
import { V3BiInfluenceBase } from '../V3BiInfluenceBase';

describe('V3BiStakeholderBase', () => {
  let translations_stakeholder: V3BiTranslationBase[];
  let translations_influence1: V3BiTranslationBase[];
  let translations_influence2: V3BiTranslationBase[];
  let influences: V3BiInfluenceBase[];

  beforeEach(() => {
    translations_stakeholder = [
      new V3BiTranslationBase('en', 'Stakeholder description in English'),
      new V3BiTranslationBase('es', 'Descripción del stakeholder en español')
    ];
    translations_influence1 = [
      new V3BiTranslationBase('en', 'en - influence1'),
      new V3BiTranslationBase('es', 'es - influence1')
    ];
    translations_influence2 = [
      new V3BiTranslationBase('en', 'en - influence2'),
      new V3BiTranslationBase('es', 'es - influence2')
    ];
    influences = [
      new V3BiInfluenceBase('influencer1',translations_influence1),
      new V3BiInfluenceBase('influencer2', translations_influence2)
    ];
  });

  it('should create an instance with all attributes', () => {
    const stakeholder = new V3BiStakeholderBase('stakeholder1', translations_stakeholder, influences);
    expect(stakeholder).toBeTruthy();
    expect(stakeholder.reference).toBe('stakeholder1');
    expect(stakeholder.description).toEqual(translations_stakeholder);
    expect(stakeholder.influencedBy).toEqual(influences);
  });

  it('should create an instance with an empty influencedBy array', () => {
    const stakeholder = new V3BiStakeholderBase('stakeholder2', translations_stakeholder);
    expect(stakeholder).toBeTruthy();
    expect(stakeholder.reference).toBe('stakeholder2');
    expect(stakeholder.description).toEqual(translations_stakeholder);
    expect(stakeholder.influencedBy).toEqual([]);
  });

  it('should return the correct stakeholder description for a given language', () => {
    const stakeholder = new V3BiStakeholderBase('stakeholder3', translations_stakeholder, influences);
    expect(stakeholder.getStakeholder('en')).toBe('Stakeholder description in English');
    expect(stakeholder.getStakeholder('es')).toBe('Descripción del stakeholder en español');
  });

  it('should return "unknown stakeholder description" if the language does not exist', () => {
    const stakeholder = new V3BiStakeholderBase('stakeholder4', translations_stakeholder, influences);
    expect(stakeholder.getStakeholder('fr')).toBe('unknown stakeholder description');
  });
});

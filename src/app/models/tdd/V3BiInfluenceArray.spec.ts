import { V3BiInfluenceArray } from '../V3BiInfluenceArray';
import { V3BiInfluenceBase } from '../V3BiInfluenceBase';
import {V3BiTranslationBase} from "../V3BiTranslationBase";

describe('V3BiInfluenceArray', () => {
  let influences: V3BiInfluenceBase[];
  let translations: V3BiTranslationBase[];
  let reply1: V3BiTranslationBase;
  let reply2: V3BiTranslationBase;

  beforeEach(() => {
    reply1 = new V3BiTranslationBase('en', 'Influencer description in English');
    reply2 = new V3BiTranslationBase('es', 'Descripción del influencer en español');
    translations = [
      reply1,
      reply2
    ];
    influences = [
      new V3BiInfluenceBase('influencer1', translations),
      new V3BiInfluenceBase('influencer2', translations)
    ];
  });

  it('should create an instance with provided items', () => {
    const influenceArray = new V3BiInfluenceArray(influences);
    expect(influenceArray).toBeTruthy();
    expect(influenceArray.items).toEqual(influences);
  });

  it('should return the correct influence description for a given influencer and language', () => {
    const influenceArray = new V3BiInfluenceArray(influences);
    expect(influenceArray.getInfluencerByLanguage('influencer1', 'en')).toBe(reply1);
    expect(influenceArray.getInfluencerByLanguage('influencer2', 'es')).toBe(reply2);
  });

  it('should return "undefined stakeholder" if the influencer does not exist', () => {
    const influenceArray = new V3BiInfluenceArray(influences);
    expect(influenceArray.getInfluencerByLanguage('influencer3', 'en')).toBe('undefined stakeholder');
    expect(influenceArray.getInfluencerByLanguage('influencer1', 'ch')).toBe('undefined stakeholder');
  });
});

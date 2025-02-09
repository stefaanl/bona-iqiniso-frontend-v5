import { V3BiStakeholderArray } from '../V3BiStakeholderArray';
import { V3BiStakeholderBase } from '../V3BiStakeholderBase';
import { V3BiTranslationBase } from '../V3BiTranslationBase';

describe('V3BiStakeholderArray', () => {
  let stakeholderArray: V3BiStakeholderArray;
  let stakeholders: V3BiStakeholderBase[];
  let translations: V3BiTranslationBase[];

  beforeEach(() => {
    translations = [
      new V3BiTranslationBase('en', 'Description 1'),
      new V3BiTranslationBase('es', 'Descripción 2')
    ]
    stakeholders = [
      new V3BiStakeholderBase('stakeholder1', translations),
      new V3BiStakeholderBase('stakeholder2', translations)
    ];
    stakeholderArray = new V3BiStakeholderArray(stakeholders);
  });

  it('should create an instance with provided items', () => {
    expect(stakeholderArray).toBeTruthy();
    expect(stakeholderArray.items.length).toBe(2);
  });

  it('should return the correct stakeholder for a valid reference', () => {
    const result = stakeholderArray.getStakeholder('stakeholder1');
    expect(result).toBe(stakeholders[0]);
  });

  it('should return undefined for a non-existent reference', () => {
    const result = stakeholderArray.getStakeholder('stakeholder3');
    expect(result).toBeUndefined();
  });

  it('should return the correct stakeholder description by language', () => {
    const result = stakeholderArray.getStakeholderByLanguage('stakeholder1', 'en');
    expect(result).toBe('Description 1');
  });

  it('should return "unknown stakeholder description" for a non-existent language', () => {
    const result = stakeholderArray.getStakeholderByLanguage('stakeholder1', 'fr');
    expect(result).toBe('unknown stakeholder description');
  });

  it('should return "undefined stakeholder" for a non-existent reference', () => {
    const result = stakeholderArray.getStakeholderByLanguage('stakeholder3', 'en');
    expect(result).toBe('undefined stakeholder');
  });
});

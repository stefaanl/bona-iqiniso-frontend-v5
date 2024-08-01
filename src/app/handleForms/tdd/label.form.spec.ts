import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import {PasseViteService} from "../../generic-services/passe-vite.service";
import {GoogletranslateService} from "../../generic-services/googletranslate.service";
import {LabelForm} from "../label.form";
import {LabelService} from "../../services/label.service";
import {V3BiLabelBase} from "../../models/V3BiLabelBase";
import {mockLabelBase_simple, MockV3BiLabelBase} from "../../models/mock/mock-V3BiLabelBase";

describe('LabelForm', () => {
  let fb: FormBuilder;
  let labelServiceSpy: jest.Mocked<LabelService>;
  let passeviteServiceSpy: jest.Mocked<PasseViteService>;
  let googleTranslateServiceSpy: jest.Mocked<GoogletranslateService>;
  let labelForm: LabelForm;

  beforeEach(() => {
    fb = new FormBuilder();
    labelServiceSpy = {
      // Mock specific methods if LabelService has any
    } as jest.Mocked<LabelService>;
    passeviteServiceSpy = {
    } as jest.Mocked<PasseViteService>;
    googleTranslateServiceSpy = {
    } as jest.Mocked<GoogletranslateService>;

    labelForm = new LabelForm(fb, labelServiceSpy, passeviteServiceSpy, googleTranslateServiceSpy);
  });

  it('should create label and translation forms on initialization', () => {
    expect(labelForm.labelForm instanceof FormGroup).toBeTruthy();
    expect(labelForm.translationForm instanceof FormGroup).toBeTruthy();
  });

  it('should add a new translation to the form array', () => {
    const initialTranslationsCount = labelForm.translations.length;
    labelForm.addTranslation('en', 'Hello');
    expect(labelForm.translations.length).toBe(initialTranslationsCount + 1);
    expect(labelForm.translations.at(initialTranslationsCount).value).toEqual({ language: 'en', text: 'Hello' });
  });

  it('should translate and patch translations correctly', (done) => {
    const translationResult = { data: { translations: [{ translatedText: 'Hola' }] } };
    googleTranslateServiceSpy.translate.mockReturnValue(of(translationResult));

    labelForm.addTranslation('en', 'Hello');
    labelForm.addTranslation('fr', '');
    labelForm.toTranslate(0, ['en', 'es']);

    expect(googleTranslateServiceSpy.translate).toHaveBeenCalledWith({ q: ['Hello'], target: 'es' });

    googleTranslateServiceSpy.translate.mock.results[0].value.subscribe(() => {
      expect(labelForm.translations.at(1).value.text).toBe('Hola');
      done();
    });
  });

  it('should call PasseViteService methods on toPasseVite', () => {
    labelForm.toPasseVite();
    expect(passeviteServiceSpy.reset).toHaveBeenCalledWith('label');
    expect(passeviteServiceSpy.add).toHaveBeenCalledWith('label', labelForm.labelForm.value);
  });

  it('should load data from PasseViteService on fromPasseVite', () => {
    const mockLabelData: MockV3BiLabelBase = mockLabelBase_simple
    passeviteServiceSpy.get.mockReturnValue(mockLabelData);

    labelForm.fromPasseVite();
    expect(passeviteServiceSpy.get).toHaveBeenCalledWith('label');
    expect(labelForm.labelForm.value).toEqual(mockLabelData);
  });
});

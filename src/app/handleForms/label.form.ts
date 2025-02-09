import {FormBuilder, FormControl, FormArray, FormGroup} from '@angular/forms';

import {V3BiLabelBase} from "../models/V3BiLabelBase";
import {V3BiTranslationBase} from "../models/V3BiTranslationBase";
import {LabelService} from "../services/label.service";
import {PasseViteService} from "../genericServices/passe-vite.service";
import {GoogletranslateService} from "../genericServices/googletranslate.service";


export function createLabelForm(fb: FormBuilder, initialValues?: V3BiLabelBase): FormGroup {
  return fb.group({
    reference: new FormControl(initialValues?.reference || ''),
    translations: fb.array((initialValues?.translations || []).map (translation => createTranslationForm(fb, translation)))
  });
}

export function createTranslationForm(fb: FormBuilder, initialValues?: V3BiTranslationBase): FormGroup {
  return fb.group({
    language: new FormControl(initialValues?.language || ''),
    text: new FormControl(initialValues?.text || '')
  });
}

export class LabelForm {
  labelForm: FormGroup;
  translationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private labelService: LabelService,
    private passeviteService: PasseViteService,
    private google: GoogletranslateService) {
    this.labelForm = createLabelForm(fb);
    this.translationForm = createTranslationForm(fb);
  }

  get translations() {
    return this.labelForm.controls["translations"] as FormArray;
  }
  addTranslation(language: string, text: string) {
    const toAdd = this.fb.group({
      language: new FormControl(language),
      text: new FormControl(text)
    });
    this.translations.push(toAdd);
  }
  get f() {
    return this.labelForm.controls;
  }
  toTranslate(nr: number, languages: string[]) {
    if (this.labelForm.value.translations && this.labelForm.value.translations[nr]) {
      let ar = this.labelForm.value.translations[nr] as V3BiTranslationBase;
      let txt = ar.text;
      for (let i = 0; i < languages.length; i++) {
        if (nr !== i) {
          const obj = {
            q: [txt],
            target: languages[i]
          };
          this.google.translate(obj).subscribe({
            next: (res: any) => {
              if (this.labelForm.get('translations') instanceof FormArray) {
                const translationsArray = this.labelForm.get('translations') as FormArray;
                if (translationsArray.at(i) instanceof FormGroup) {
                  const translationGroup = translationsArray.at(i) as FormGroup;
                  translationGroup.patchValue({
                    language: languages[i],
                    text: res.data.translations[0].translatedText
                  });
                }
              }
            }
          });
        }
      }
    }
  }
  toPasseVite() {
    this.passeviteService.reset('label');
    this.passeviteService.add('label', <V3BiLabelBase>this.labelForm.value);
  }
  fromPasseVite() {
    const labelData = this.passeviteService.get('label') as V3BiLabelBase;
    if (labelData) {
      this.labelForm = createLabelForm(this.fb, labelData);
    }
  }


}

import {mockTranslations, mockTranslations_label_simple} from "./mock-V3BiTranslationBase";
import {MockV3BiAlertBase} from "./mock-B3BiAlertBase";
import {V3BiLabelBase} from "../V3BiLabelBase";

export class MockV3BiLabelBase {
  getLabel(language: string): string {
    return 'mock-label-' + language;
  }
}


export const mockLabelBase_simple = new V3BiLabelBase('label-reference', mockTranslations_label_simple);

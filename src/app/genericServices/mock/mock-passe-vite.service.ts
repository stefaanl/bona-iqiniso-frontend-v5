import { Injectable } from '@angular/core';
import {V3BiComponentBase} from "../../models/V3BiComponent";
import {V3BiLabelBase} from "../../models/V3BiLabelBase";
import {V3BiTranslationBase} from "../../models/V3BiTranslationBase";
import {V3BiAlertBase} from "../../models/V3BiAlertBase";
import {V3BiFreeTextBase} from "../../models/V3BiFreeTextBase";


const COMPONENT = 'component';
const NAVIGATIONPROCESS = 'navigationProcess';
const LABEL = 'label';
const ALERT = 'alert';
const FREETEXT = 'freetext';
const IMAGE = 'image';
const PANEL = 'panel';
const NAVIGATION = 'navigation';
const GLOSSARY = 'glossary';
const TORETURNTO = 'toReturnTo';



@Injectable({
  providedIn: 'root'
})
export class MockPasseViteService {
  add(model: string, data:any) {}
  reset(model: string) {}
  get(model: string) {
    let toReturn: any = undefined;

    switch (model) {
      case (COMPONENT):
        toReturn = new V3BiComponentBase(
          'mock-reference',
          'mock-name',
          'mock-description',
          'mock-type',
          ['mock-labels'],
          ['mock-alerts']
          );
        break;
      case (LABEL):
        toReturn = new V3BiLabelBase('mock-reference', [
          new V3BiTranslationBase('en', 'mock-description-en'),
          new V3BiTranslationBase('fr', 'mock-description-fr'),
          new V3BiTranslationBase('nl', 'mock-description-nl'),
          new V3BiTranslationBase('de', 'mock-description-de')
        ]);
        break;
      case (ALERT):
        toReturn = new V3BiAlertBase('mock-reference', 'error', [
          new V3BiTranslationBase('en', 'mock-description-en'),
          new V3BiTranslationBase('fr', 'mock-description-fr'),
          new V3BiTranslationBase('nl', 'mock-description-nl'),
          new V3BiTranslationBase('de', 'mock-description-de')
        ]);
        break;
      case (IMAGE):
        toReturn = {};
        break;
      case (PANEL):
        toReturn = {};
        break;
      case (NAVIGATION):
        toReturn = {};
        break;
      case (NAVIGATIONPROCESS):
        toReturn = {};
        break;
      case (FREETEXT):
        toReturn = new V3BiFreeTextBase('mock-reference', [
          new V3BiTranslationBase('en', 'mock-description-en'),
          new V3BiTranslationBase('fr', 'mock-description-fr'),
          new V3BiTranslationBase('nl', 'mock-description-nl'),
          new V3BiTranslationBase('de', 'mock-description-de')
        ]);
        break;
      case (GLOSSARY):
        toReturn = {};
        break;
      case (TORETURNTO):
        toReturn = {};
        break;
      default:
        break;
    }
    //console.log('get passe-vite: ', toReturn);
    return toReturn;  }
}


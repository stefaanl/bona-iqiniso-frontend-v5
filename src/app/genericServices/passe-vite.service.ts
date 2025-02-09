import { Injectable } from '@angular/core';
import {V3BiBreadcrumbArray, V3BiBreadcrumbBase} from "../models/V3BiBreadcrumbArray";
import {V3BiAlertArray} from "../models/V3BiAlertArray";
import {V3BiAlertBase} from "../models/V3BiAlertBase";
import {V3BiComponentBase} from "../models/V3BiComponent";

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
// The following are used to initialize the component. The data will be used to visualize correctly the component.
const INIT_COMPONENT = 'initComponent';
const INIT_LABEL = 'initLabel';
const INIT_ALERT = 'initAlert';
const INIT_DESCRIPTION = 'initDescription';
const INIT_IMAGE = 'initImage';


@Injectable({
  providedIn: 'root'
})
export class PasseViteService {
  /****************************************************************************
  Passe-vite service is used for temporary storage of an instance.
  This can be for autosave reasons or to safeguard a situation,
  waiting upon the return from another component.
   ****************************************************************************/
  constructor() {}
  clean(): void {

    window.sessionStorage.setItem(COMPONENT, JSON.stringify(null));
    window.sessionStorage.setItem(LABEL, JSON.stringify(null));
    window.sessionStorage.setItem(ALERT, JSON.stringify(null));
    window.sessionStorage.setItem(IMAGE, JSON.stringify(null));
    window.sessionStorage.setItem(PANEL, JSON.stringify(null));
    window.sessionStorage.setItem(FREETEXT, JSON.stringify(null));
    window.sessionStorage.setItem(NAVIGATION, JSON.stringify(null));
    window.sessionStorage.setItem(GLOSSARY, JSON.stringify(null));
    window.sessionStorage.setItem(TORETURNTO, JSON.stringify(null));
    window.sessionStorage.setItem(NAVIGATIONPROCESS, JSON.stringify(null));
    window.sessionStorage.setItem(INIT_COMPONENT, JSON.stringify(null));
    window.sessionStorage.setItem(INIT_ALERT, JSON.stringify(null));
    window.sessionStorage.setItem(INIT_LABEL, JSON.stringify(null));
    window.sessionStorage.setItem(INIT_DESCRIPTION, JSON.stringify(null));
    window.sessionStorage.setItem(INIT_IMAGE, JSON.stringify(null));

  }


  public add(model: string, data:any) {
    let toStore: any = {};

    switch (model) {
      case (COMPONENT):
        window.sessionStorage.setItem(COMPONENT, JSON.stringify(data));
        break;
      case (LABEL):
        window.sessionStorage.setItem(LABEL, JSON.stringify(data));
        break;
      case (ALERT):
        window.sessionStorage.setItem(ALERT, JSON.stringify(data));
        break;
      case (IMAGE):
        window.sessionStorage.setItem(IMAGE, JSON.stringify(data));
        break;
      case (PANEL):
        window.sessionStorage.setItem(PANEL, JSON.stringify(data));
        break;
      case (NAVIGATION):
        window.sessionStorage.setItem(NAVIGATION, JSON.stringify(data));
        break;
      case (NAVIGATIONPROCESS):
        window.sessionStorage.setItem(NAVIGATIONPROCESS, JSON.stringify(data));
        break;
      case (FREETEXT):
        window.sessionStorage.setItem(FREETEXT, JSON.stringify(data));
        break;
      case (GLOSSARY):
        window.sessionStorage.setItem(GLOSSARY, JSON.stringify(data));
        break;
      case (TORETURNTO):
        window.sessionStorage.setItem(TORETURNTO, JSON.stringify(data));
        break;
      case (INIT_COMPONENT):
        window.sessionStorage.setItem(INIT_COMPONENT, JSON.stringify(data));
        break;
      case (INIT_LABEL):
        window.sessionStorage.setItem(INIT_LABEL, JSON.stringify(data));
        break;
      case (INIT_ALERT):
        window.sessionStorage.setItem(INIT_ALERT, JSON.stringify(data));
        break;
      case (INIT_DESCRIPTION):
        window.sessionStorage.setItem(INIT_DESCRIPTION, JSON.stringify(data));
        break;
      case (INIT_IMAGE):
        window.sessionStorage.setItem(INIT_IMAGE, JSON.stringify(data));
        break;

      default:
        break;
    }
    /*
    //console.log('COMPONENT: ', window.sessionStorage.getItem(COMPONENT));
    //console.log('LABEL: ', window.sessionStorage.getItem(LABEL));
    //console.log('ALERT: ', window.sessionStorage.getItem(ALERT));
    //console.log('FREETEXT: ', window.sessionStorage.getItem(FREETEXT));
    //console.log('IMAGE: ', window.sessionStorage.getItem(IMAGE));
    //console.log('TORETURNTO: ', window.sessionStorage.getItem(TORETURNTO));

     */
  }
  public reset(model: string) {
    let toStore: any = {};

    switch (model) {
      case (COMPONENT):
        window.sessionStorage.setItem(COMPONENT, JSON.stringify(null));
        break;
      case (LABEL):
        window.sessionStorage.setItem(LABEL, JSON.stringify(null));
        break;
      case (ALERT):
        window.sessionStorage.setItem(ALERT, JSON.stringify(null));
        break;
      case (IMAGE):
        window.sessionStorage.setItem(IMAGE, JSON.stringify(null));
        break;
      case (PANEL):
        window.sessionStorage.setItem(PANEL, JSON.stringify(null));
        break;
      case (NAVIGATION):
        window.sessionStorage.setItem(NAVIGATION, JSON.stringify(null));
        break;
      case (NAVIGATIONPROCESS):
        window.sessionStorage.setItem(NAVIGATIONPROCESS, JSON.stringify(null));
        break;
      case (FREETEXT):
        window.sessionStorage.setItem(FREETEXT, JSON.stringify(null));
        break;
      case (GLOSSARY):
        window.sessionStorage.setItem(GLOSSARY, JSON.stringify(null));
        break;
      case (TORETURNTO):
        window.sessionStorage.setItem(TORETURNTO, JSON.stringify(null));
        break;
      case (INIT_COMPONENT):
        window.sessionStorage.setItem(INIT_COMPONENT, JSON.stringify(null));
        break;
      case (INIT_LABEL):
        window.sessionStorage.setItem(INIT_LABEL, JSON.stringify(null));
        break;
      case (INIT_ALERT):
        window.sessionStorage.setItem(INIT_ALERT, JSON.stringify(null));
        break;
      case (INIT_DESCRIPTION):
        window.sessionStorage.setItem(INIT_DESCRIPTION, JSON.stringify(null));
        break;
      case (INIT_IMAGE):
        window.sessionStorage.setItem(INIT_IMAGE, JSON.stringify(null));
        break;
      default:
        break;
    }
    /*
    //console.log('COMPONENT: ', window.sessionStorage.getItem(COMPONENT));
    //console.log('LABEL: ', window.sessionStorage.getItem(LABEL));
    //console.log('ALERT: ', window.sessionStorage.getItem(ALERT));
    //console.log('FREETEXT: ', window.sessionStorage.getItem(FREETEXT));
    //console.log('IMAGE: ', window.sessionStorage.getItem(IMAGE));
    //console.log('TORETURNTO: ', window.sessionStorage.getItem(TORETURNTO));

     */
  }
  public get(model: string): any {
    let toReturn: any = undefined;
    let stored = null;

    switch (model) {
      case (COMPONENT):
        stored = window.sessionStorage.getItem(COMPONENT);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (LABEL):
        stored = window.sessionStorage.getItem(LABEL);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (ALERT):
        stored = window.sessionStorage.getItem(ALERT);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (IMAGE):
        stored = window.sessionStorage.getItem(IMAGE);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (PANEL):
        stored = window.sessionStorage.getItem(PANEL);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (NAVIGATION):
        stored = window.sessionStorage.getItem(NAVIGATION);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (NAVIGATIONPROCESS):
        stored = window.sessionStorage.getItem(NAVIGATIONPROCESS);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (FREETEXT):
        stored = window.sessionStorage.getItem(FREETEXT);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (GLOSSARY):
        stored = window.sessionStorage.getItem(GLOSSARY);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (TORETURNTO):
        stored = window.sessionStorage.getItem(TORETURNTO);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (INIT_COMPONENT):
        stored = window.sessionStorage.getItem(INIT_COMPONENT);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (INIT_LABEL):
        stored = window.sessionStorage.getItem(INIT_LABEL);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (INIT_ALERT):
        stored = window.sessionStorage.getItem(INIT_ALERT);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (INIT_DESCRIPTION):
        stored = window.sessionStorage.getItem(INIT_DESCRIPTION);
        if (stored) toReturn = JSON.parse(stored);
        break;
      case (INIT_IMAGE):
        stored = window.sessionStorage.getItem(INIT_IMAGE);
        if (stored) toReturn = JSON.parse(stored);
        break;
      default:
        break;
    }
    //console.log('get passe-vite: ', toReturn);
    return toReturn;
  }


}

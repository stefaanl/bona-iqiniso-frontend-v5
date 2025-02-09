import { Injectable } from '@angular/core';
import {V3BiBreadcrumbArray} from "../models/V3BiBreadcrumbArray";
import {V3BiAlertArray} from "../models/V3BiAlertArray";
import {V3BiAlertBase} from "../models/V3BiAlertBase";
import {V3BiAlertValidationBase} from "../models/V3BiAlertValidationBase";
import {V3BiAlertValidationArray} from "../models/V3BiAlertValidationArray";

const ALERTS = 'alerts';
const VALIDATIONALERTS = 'validation alerts';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {}

  clearAlerts(): void {
    const alerts: V3BiAlertArray = new V3BiAlertArray([])
    window.sessionStorage.setItem(ALERTS, JSON.stringify(alerts));  }

  addAlerts(alert: V3BiAlertBase | undefined): void {
    //console.log("adding alert to message service: ",alert);
    let alerts: V3BiAlertArray = new V3BiAlertArray([]);
    const store = window.sessionStorage.getItem(ALERTS);
    if (store) alerts = <V3BiAlertArray>JSON.parse(store);
    if (alert) alerts.items.push(alert);
    window.sessionStorage.setItem(ALERTS, JSON.stringify(alerts));
  }

  getAlerts(): V3BiAlertArray {
    let alerts: V3BiAlertArray = new V3BiAlertArray([]);
    const store = window.sessionStorage.getItem(ALERTS);
    if (store) alerts = <V3BiAlertArray>JSON.parse(store);
    return alerts;
  }


  clearAlertsByReference(): void {
    const alerts: V3BiAlertValidationArray = new V3BiAlertValidationArray([])
    window.sessionStorage.setItem(VALIDATIONALERTS, JSON.stringify(alerts));  }

  addAlertByReferences(alert: V3BiAlertValidationBase | undefined): void {
    //console.log("MessageService - adding alert to message service: ",alert);
    let alerts: V3BiAlertValidationArray = new V3BiAlertValidationArray([]);
    const store = window.sessionStorage.getItem(VALIDATIONALERTS);
    //console.log("MessageService - store (raw):",store);
    if (store) alerts = <V3BiAlertValidationArray>JSON.parse(store);
    //console.log("MessageService - alerts:",alerts);
    //console.log("MessageService - alerts ) addAlert:",typeof alerts.addAlertByReference);
    if (alert) alerts.alerts.push(new V3BiAlertValidationBase(alert.alertReference, alert.field));
    window.sessionStorage.setItem(VALIDATIONALERTS, JSON.stringify(alerts));
  }

  getAlertReferences(): V3BiAlertValidationArray {
    let alerts: V3BiAlertValidationArray = new V3BiAlertValidationArray([]);
    const store = window.sessionStorage.getItem(VALIDATIONALERTS);
    //console.log("MessageService - getAlertReferences - store (raw):",store);
    if (store) alerts = <V3BiAlertValidationArray>JSON.parse(store);
    //console.log("MessageService - getAlertReferences - alerts:",alerts);
    return alerts;
  }




}

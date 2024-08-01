import {Injectable} from "@angular/core";
import {V3BiAlertBase} from "../../models/V3BiAlertBase";
import {V3BiAlertArray} from "../../models/V3BiAlertArray";

@Injectable({
  providedIn: 'root'
})
export class MockMessageService {
  constructor() {}
  clearAlerts() {}
  addAlerts(alert: V3BiAlertBase | undefined) {}
  getAlerts() {return new V3BiAlertArray([]);}
}

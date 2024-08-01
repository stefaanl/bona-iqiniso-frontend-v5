import {V3BiTranslationBase} from "./V3BiTranslationBase";
import {V3BiAlertValidationBase} from "./V3BiAlertValidationBase";
import {V3BiAlertBase} from "./V3BiAlertBase";



export class V3BiAlertValidationArray {
  alerts: V3BiAlertValidationBase[];


  constructor(alerts: V3BiAlertValidationBase[]) {
    this.alerts = alerts;
  }

  getAlertByField(field: string | undefined): V3BiAlertValidationBase[] {
    const result = this.alerts.filter(alert => alert.field === (field || undefined));
    //console.log('V3BiAlertValidationArray - getAlertByField - result', result);
    return result || []
  }
  getAlertByReference(reference: string, field: string| undefined): V3BiAlertValidationBase | undefined {
    const result = this.alerts.find(alert => alert.alertReference === reference && alert.field === field);
    return result || undefined;
  }
  addAlertByReference(reference: string, field?: string) : void {
    const result = this.alerts.find(alert => alert.alertReference === reference && alert.field === field);
    //console.log('V3BiAlertValidationArray - addAlert - result', result);
    if (result) {
      throw new Error('duplicate alert');
    }
    this.alerts.push(new V3BiAlertValidationBase(reference, field || undefined));
  }
}

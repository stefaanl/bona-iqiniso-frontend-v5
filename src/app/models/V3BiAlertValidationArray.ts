import {V3BiAlertValidationBase} from "./V3BiAlertValidationBase";



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
    if (result == undefined) this.alerts.push(new V3BiAlertValidationBase(reference, field || undefined));
  }
}

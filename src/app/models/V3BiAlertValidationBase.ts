

/****************************************V3BiImageBase*****************************************************/
export class V3BiAlertValidationBase {
  alertReference: string;
  field: string | undefined; //reference to the label used in combination with an input field, checkbox, combobox, etc.


  constructor(alertReference: string, field?: string) {
    this.alertReference = alertReference;
    this.field = field || undefined;
  }

}



/**************************************** Base model (linked to backend) ************************************/
export class V3BiPanelBase {
   reference: string;
   label: string;
   description: string;
   route: string;
   order: number

  constructor(reference: string, label: string, description: string, order: number, route?: string) {
    this.reference = reference;
    this.description = description;
    this.label = label;
    this.order = order;
    this.route = route || '';
  }

}
/**************************************** Expanded model (linked to frontend) ************************************/


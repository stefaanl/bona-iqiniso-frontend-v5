

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



/**************************************** Base model (linked to frontend listing) ************************************/
export class PanelArray {
  private _items: V3BiPanelBase[];


  constructor(items: V3BiPanelBase[]) {
    this._items = items;
  }


  get items(): V3BiPanelBase[] {
    return this._items;
  }

  set items(value: V3BiPanelBase[]) {
    this._items = value;
  }
}

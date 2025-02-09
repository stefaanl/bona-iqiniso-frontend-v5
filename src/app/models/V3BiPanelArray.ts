import {V3BiPanelBase} from "./V3BiPanelBase";




/**************************************** Base model (linked to frontend listing) ************************************/
export class V3BiPanelArray {
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

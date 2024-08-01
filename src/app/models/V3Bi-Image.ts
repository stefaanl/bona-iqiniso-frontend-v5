

/*********************************************************************************************/
export class V3BiImageBase {
  reference: string;
  base64: string;


  constructor(reference: string, base64: string) {
    this.reference = reference;
    this.base64 = base64;
  }
}


export class V3BiImageArray {
  private _items: V3BiImageBase[];


  constructor(items: V3BiImageBase[]) {
    this._items = items;
  }


  get items(): V3BiImageBase[] {
    return this._items;
  }

  set items(value: V3BiImageBase[]) {
    this._items = value;
  }

  getImage(reference: string) : V3BiImageBase {
    return this.items.find(item => item.reference === reference) || new V3BiImageBase(reference, '');
  }
}


/****************************************   V3BiNavigationBase   *****************************************************/
export class V3BiNavigationBase {
  reference: string;
  title: string;
  description: string;
  image: string;
  items: string[];


  constructor(reference: string, title: string, description: string, image: string, items?: string[]) {
    this.reference = reference;
    this.title = title;
    this.description = description;
    this.image = image;
    this.items = items || [];
  }
}
/****************************************V3BiImageBase*****************************************************/
export class V3BiNavigation {
  navigator: V3BiNavigationItem[]


  constructor() {
    this.navigator = [];
  }

  addNavigation(item: string, description: string, route: string) {
    const crumb = new V3BiNavigationItem(item, description, route);
    this.navigator.push(crumb);
  }
}


/****************************************V3BiImageBase*****************************************************/
export class V3BiNavigationItem {
  item: string;
  description: string;
  route: string;


  constructor(item: string, description: string, route: string) {
    this.item = item;
    this.description = description;
    this.route = route;
  }
}




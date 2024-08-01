
/****************************************V3BiImageBase*****************************************************/
export class V3BiBreadcrumb {
  breadcrumb: V3BiBreadcrumbItem[]


  constructor() {
    this.breadcrumb = [];
  }

  addBreadcrumb(item: string, route: string) {
    const crumb = new V3BiBreadcrumbItem(item, route);
    //console.log("adding ", crumb);
    this.breadcrumb.push(crumb);
  }
}


export class V3BiBreadcrumbItem {
  item: string;
  route: string;


  constructor(item: string, route: string) {
    this.item = item;
    this.route = route;
  }
}




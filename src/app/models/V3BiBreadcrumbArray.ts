import {V3BiBreadcrumbBase} from "./V3BiBreadcrumbBase";

/****************************************V3BiImageBase*****************************************************/
export class V3BiBreadcrumbArray {
  breadcrumb: V3BiBreadcrumbBase[]


  constructor() {
    this.breadcrumb = [];
  }

  addBreadcrumb(item: string, route: string) {
    const crumb = new V3BiBreadcrumbBase(item, route);
    //console.log("adding ", crumb);
    this.breadcrumb.push(crumb);
  }
}


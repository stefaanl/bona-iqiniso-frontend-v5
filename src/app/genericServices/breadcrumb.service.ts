import { Injectable } from '@angular/core';
import {V3BiBreadcrumb, V3BiBreadcrumbItem} from "../models/V3BiBreadcrumb";
import {V3BiAlertArray} from "../models/V3BiAlertArray";
import {V3BiAlertBase} from "../models/V3BiAlertBase";

const CRUMB = 'breadcrumb';


@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  constructor() {}
  clean(): void {
    const crumb: V3BiBreadcrumbItem = new V3BiBreadcrumbItem('Home', '/welcome');
    const trail: V3BiBreadcrumb = new V3BiBreadcrumb();
    trail.breadcrumb.push(crumb);
    window.sessionStorage.setItem(CRUMB, JSON.stringify(trail));
  }


  public addCrumb(item: string, route: string) {
    //console.log('addCrumb: ', item, route);
    let bread = window.sessionStorage.getItem(CRUMB);
    let trail: V3BiBreadcrumb;
    if (bread) {
      trail = JSON.parse(bread);
      if (trail.breadcrumb[trail.breadcrumb.length-1].item != item
        && trail.breadcrumb[trail.breadcrumb.length-1].route != route) {
        trail.breadcrumb.push(new V3BiBreadcrumbItem(item, route));
      }
      //console.log("breadcrumb service: trail : ", trail);
      window.sessionStorage.setItem(CRUMB, JSON.stringify(trail));
    } else {
      trail = new V3BiBreadcrumb();
      trail.breadcrumb.push(new V3BiBreadcrumbItem(item, route));
      //console.log("breadcrumb service: trail : ", trail);
      window.sessionStorage.setItem(CRUMB, JSON.stringify(trail));
    }


  }

  public removeLastCrumb() {
    let bread = window.sessionStorage.getItem(CRUMB);
    let trail: V3BiBreadcrumb;
    if (bread) {
      trail = JSON.parse(bread);
      trail.breadcrumb.pop();
    } else {
      trail = new V3BiBreadcrumb();
    }
    window.sessionStorage.setItem(CRUMB, JSON.stringify(trail));
  }
  public getCrumb(): any {
    const crumb = window.sessionStorage.getItem(CRUMB);
    //console.log("GETCRUMB: ", crumb);
    if (crumb) {
      return JSON.parse(crumb);
    } else {
      return {};
    }
  }


}

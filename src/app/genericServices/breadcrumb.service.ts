import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {V3BiBreadcrumbArray} from "../models/V3BiBreadcrumbArray";
import {V3BiAlertArray} from "../models/V3BiAlertArray";
import {V3BiAlertBase} from "../models/V3BiAlertBase";
import {WindowService} from "./window.service";
import {isPlatformBrowser} from "@angular/common";
import {throwError} from "rxjs";
import {V3BiBreadcrumbBase} from "../models/V3BiBreadcrumbBase";

const CRUMB = 'breadcrumb';


@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private windowService: WindowService
  ) {
  }



  clean(): void {
    if (isPlatformBrowser(this.platformId)) {
      const crumb: V3BiBreadcrumbBase = new V3BiBreadcrumbBase('Home', '/welcome');
      const trail: V3BiBreadcrumbArray = new V3BiBreadcrumbArray();
      trail.breadcrumb.push(crumb);
      this.windowService.nativeWindow.sessionStorage.setItem(CRUMB, JSON.stringify(trail));
    } else throwError('Not a browser');
  }


  public addCrumb(item: string, route: string) {
    if (isPlatformBrowser(this.platformId)) {
      //console.log('addCrumb: ', item, route);
      let bread = this.windowService.nativeWindow.sessionStorage.getItem(CRUMB);
      let trail: V3BiBreadcrumbArray;
      if (bread) {
        trail = JSON.parse(bread);
        if (trail.breadcrumb[trail.breadcrumb.length - 1].item != item
          && trail.breadcrumb[trail.breadcrumb.length - 1].route != route) {
          trail.breadcrumb.push(new V3BiBreadcrumbBase(item, route));
        }
        //console.log("breadcrumb service: trail : ", trail);
        this.windowService.nativeWindow.sessionStorage.setItem(CRUMB, JSON.stringify(trail));
      } else {
        trail = new V3BiBreadcrumbArray();
        trail.breadcrumb.push(new V3BiBreadcrumbBase(item, route));
        //console.log("breadcrumb service: trail : ", trail);
        this.windowService.nativeWindow.sessionStorage.setItem(CRUMB, JSON.stringify(trail));
      }
    } else throwError('Not a browser');

  }

  public removeLastCrumb() {
    if (isPlatformBrowser(this.platformId)) {
      let bread = this.windowService.nativeWindow.sessionStorage.getItem(CRUMB);
      let trail: V3BiBreadcrumbArray;
      if (bread) {
        trail = JSON.parse(bread);
        trail.breadcrumb.pop();
      } else {
        trail = new V3BiBreadcrumbArray();
      }
      this.windowService.nativeWindow.sessionStorage.setItem(CRUMB, JSON.stringify(trail));
    } else throwError('Not a browser');
  }
  public getCrumb(): any {
    if (isPlatformBrowser(this.platformId)) {
      const crumb = this.windowService.nativeWindow.sessionStorage.getItem(CRUMB);
      //console.log("GETCRUMB: ", crumb);
      if (crumb) {
        return JSON.parse(crumb);
      } else {
        return {};
      }
    } else return new V3BiBreadcrumbArray();
  }


}

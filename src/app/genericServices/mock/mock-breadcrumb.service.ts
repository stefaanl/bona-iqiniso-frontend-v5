import {Injectable} from "@angular/core";
import {V3BiBreadcrumbArray, V3BiBreadcrumbBase} from "../../models/V3BiBreadcrumbArray";

const CRUMB = 'breadcrumb';


@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  constructor() {}
  clean() {}
  addCrumb(item: string, route: string) {}
  removeLastCrumb() {}
  getCrumb() {return }


}

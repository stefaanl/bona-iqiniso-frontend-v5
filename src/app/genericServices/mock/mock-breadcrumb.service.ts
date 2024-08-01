import {Injectable} from "@angular/core";
import {V3BiBreadcrumb, V3BiBreadcrumbItem} from "../../models/V3BiBreadcrumb";

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

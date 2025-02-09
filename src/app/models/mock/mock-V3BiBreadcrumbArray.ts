
import {V3BiBreadcrumbArray} from "../V3BiBreadcrumbArray";
import {
  mockBreadcrumbBase_1,
  mockBreadcrumbBase_2,
  mockBreadcrumbBase_3,
  mockBreadcrumbBase_4, mockBreadcrumbBase_5
} from "./mock-V3BiBreadcrumbBase";

export class MockV3BiBreadcrumbArray {
  addBreadcrumb(item: string, route: string) {

  }
}

const full = [
  mockBreadcrumbBase_1,
  mockBreadcrumbBase_2,
  mockBreadcrumbBase_3,
  mockBreadcrumbBase_4,
  mockBreadcrumbBase_5
]

export const mockBreadcrumbArray_constructor = new V3BiBreadcrumbArray();
export const mockBreadcrumbArray_basic = (new V3BiBreadcrumbArray()).addBreadcrumb('breadcrumb-item-1', 'path-to-breadcrumb-item-1');
export const mockBreadcrumbArray_full = (new V3BiBreadcrumbArray()).breadcrumb = full;



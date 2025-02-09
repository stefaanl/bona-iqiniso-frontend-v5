import { V3BiBreadcrumbArray } from '../V3BiBreadcrumbArray';
import {mockBreadcrumbArray_constructor} from "../mock/mock-V3BiBreadcrumbArray";

describe('V3BiBreadcrumbArray', () => {


  beforeEach(() => {
  });

  it('should create an empty instance', () => {
    const breadcrumbArray = new V3BiBreadcrumbArray();
    expect(breadcrumbArray).toBeTruthy();
    expect(breadcrumbArray.breadcrumb).toEqual([]);
  });

  it('should add a breadcrumb item', () => {
    let breadcrumbArray = new V3BiBreadcrumbArray();
    breadcrumbArray.addBreadcrumb('Home', '/home');
    expect(breadcrumbArray.breadcrumb.length).toBe(1);
    expect(breadcrumbArray.breadcrumb[0].item).toBe('Home');
    expect(breadcrumbArray.breadcrumb[0].route).toBe('/home');
  });

  it('should add multiple breadcrumb items', () => {
    let breadcrumbArray = mockBreadcrumbArray_constructor;
    breadcrumbArray.addBreadcrumb('Home', '/home');
    breadcrumbArray.addBreadcrumb('About', '/about');
    console.log('breadcrumbArray', breadcrumbArray);
    expect(breadcrumbArray.breadcrumb.length).toBe(2);
    expect(breadcrumbArray.breadcrumb[1].item).toBe('About');
    expect(breadcrumbArray.breadcrumb[1].route).toBe('/about');
  });
});

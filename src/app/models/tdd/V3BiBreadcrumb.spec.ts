import {V3BiBreadcrumb, V3BiBreadcrumbItem} from "../V3BiBreadcrumb";

describe('V3BiBreadcrumb and V3BiBreadcrumbItem Tests', () => {
  let breadcrumb: V3BiBreadcrumb;
  let breadcrumbItem: V3BiBreadcrumbItem;

  beforeEach(() => {
    breadcrumb = new V3BiBreadcrumb();
    breadcrumbItem = new V3BiBreadcrumbItem('Home', '/home');
  });

  it('should initialize V3BiBreadcrumb with an empty array', () => {
    expect(breadcrumb.breadcrumb).toEqual([]);
  });

  it('should initialize V3BiBreadcrumbItem with given item and route', () => {
    expect(breadcrumbItem.item).toBe('Home');
    expect(breadcrumbItem.route).toBe('/home');
  });

  it('should add a breadcrumb item to the breadcrumb list', () => {
    breadcrumb.addBreadcrumb(breadcrumbItem.item, breadcrumbItem.route);
    expect(breadcrumb.breadcrumb.length).toBe(1);
    expect(breadcrumb.breadcrumb[0]).toEqual(breadcrumbItem);
  });


});

import { V3BiBreadcrumbBase } from '../V3BiBreadcrumbBase';

describe('V3BiBreadcrumbBase', () => {
  it('should create an instance with valid item and route', () => {
    const breadcrumb = new V3BiBreadcrumbBase('Home', '/home');
    expect(breadcrumb).toBeTruthy();
    expect(breadcrumb.item).toBe('Home');
    expect(breadcrumb.route).toBe('/home');
  });

  it('should handle empty string as item', () => {
    const breadcrumb = new V3BiBreadcrumbBase('', '/home');
    expect(breadcrumb).toBeTruthy();
    expect(breadcrumb.item).toBe('');
    expect(breadcrumb.route).toBe('/home');
  });

  it('should handle empty string as route', () => {
    const breadcrumb = new V3BiBreadcrumbBase('Home', '');
    expect(breadcrumb).toBeTruthy();
    expect(breadcrumb.item).toBe('Home');
    expect(breadcrumb.route).toBe('');
  });

  it('should handle both item and route as empty strings', () => {
    const breadcrumb = new V3BiBreadcrumbBase('', '');
    expect(breadcrumb).toBeTruthy();
    expect(breadcrumb.item).toBe('');
    expect(breadcrumb.route).toBe('');
  });

  it('should handle special characters in item and route', () => {
    const breadcrumb = new V3BiBreadcrumbBase('H@me', '/h@me');
    expect(breadcrumb).toBeTruthy();
    expect(breadcrumb.item).toBe('H@me');
    expect(breadcrumb.route).toBe('/h@me');
  });
});

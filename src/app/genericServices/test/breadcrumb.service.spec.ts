import { TestBed } from '@angular/core/testing';
import { BreadcrumbService } from '../breadcrumb.service';
import {V3BiBreadcrumb, V3BiBreadcrumbItem} from "../../models/V3BiBreadcrumb";

describe('BreadcrumbService', () => {
  let service: BreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreadcrumbService]
    });
    service = TestBed.inject(BreadcrumbService);
    window.sessionStorage.clear();
  });

  afterEach(() => {
    window.sessionStorage.clear();
  });

  describe('#clean', () => {
    it('should set session storage item CRUMB to a V3BiBreadcrumb with a single item (Home, /welcome)', () => {
      // Act
      service.clean();

      // Assert
      const crumb = JSON.parse(window.sessionStorage.getItem('breadcrumb') || '{}');
      expect(crumb.breadcrumb).toEqual(expect.arrayContaining([expect.objectContaining({ item: 'Home', route: '/welcome' })]));
    });
  });

  describe('#addCrumb', () => {
    it('should add the new breadcrumb to the existing V3BiBreadcrumb in session storage when last breadcrumb is different', () => {
      // Arrange
      const initialBreadcrumb = new V3BiBreadcrumb();
      initialBreadcrumb.breadcrumb.push(new V3BiBreadcrumbItem('Home', '/welcome'));
      window.sessionStorage.setItem('breadcrumb', JSON.stringify(initialBreadcrumb));
      const newItem = 'About';
      const newRoute = '/about';

      // Act
      service.addCrumb(newItem, newRoute);

      // Assert
      const breadcrumb = JSON.parse(window.sessionStorage.getItem('breadcrumb') || '{}');
      expect(breadcrumb.breadcrumb).toEqual(expect.arrayContaining([
        expect.objectContaining({ item: 'Home', route: '/welcome' }),
        expect.objectContaining({ item: 'About', route: '/about' })
      ]));
    });

    it('should not add the breadcrumb to the V3BiBreadcrumb in session storage when last breadcrumb is the same', () => {
      // Arrange
      const initialBreadcrumb = new V3BiBreadcrumb();
      initialBreadcrumb.breadcrumb.push(new V3BiBreadcrumbItem('Home', '/welcome'));
      window.sessionStorage.setItem('breadcrumb', JSON.stringify(initialBreadcrumb));
      const newItem = 'Home';
      const newRoute = '/welcome';

      // Act
      service.addCrumb(newItem, newRoute);

      // Assert
      const breadcrumb = JSON.parse(window.sessionStorage.getItem('breadcrumb') || '{}');
      expect(breadcrumb.breadcrumb).toEqual(expect.arrayContaining([
        expect.objectContaining({ item: 'Home', route: '/welcome' })
      ]));
      expect(breadcrumb.breadcrumb.length).toBe(1);
    });

    it('should create and store a new V3BiBreadcrumb when session storage item CRUMB does not exist', () => {
      // Arrange
      const newItem = 'Home';
      const newRoute = '/welcome';

      // Act
      service.addCrumb(newItem, newRoute);

      // Assert
      const breadcrumb = JSON.parse(window.sessionStorage.getItem('breadcrumb') || '{}');
      expect(breadcrumb.breadcrumb).toEqual(expect.arrayContaining([
        expect.objectContaining({ item: 'Home', route: '/welcome' })
      ]));
    });
  });

  describe('#removeLastCrumb', () => {
    it('should remove the last breadcrumb from the V3BiBreadcrumb in session storage', () => {
      // Arrange
      const initialBreadcrumb = new V3BiBreadcrumb();
      initialBreadcrumb.breadcrumb.push(new V3BiBreadcrumbItem('Home', '/welcome'));
      initialBreadcrumb.breadcrumb.push(new V3BiBreadcrumbItem('About', '/about'));
      window.sessionStorage.setItem('breadcrumb', JSON.stringify(initialBreadcrumb));

      // Act
      service.removeLastCrumb();

      // Assert
      const breadcrumb = JSON.parse(window.sessionStorage.getItem('breadcrumb') || '{}');
      expect(breadcrumb.breadcrumb).toEqual(expect.arrayContaining([
        expect.objectContaining({ item: 'Home', route: '/welcome' })
      ]));
      expect(breadcrumb.breadcrumb.length).toBe(1);
    });

    it('should create and store an empty V3BiBreadcrumb when session storage item CRUMB does not exist', () => {
      // Act
      service.removeLastCrumb();

      // Assert
      const breadcrumb = JSON.parse(window.sessionStorage.getItem('breadcrumb') || '{}');
      expect(breadcrumb.breadcrumb).toEqual([]);
    });
  });

  describe('#getCrumb', () => {
    it('should return the V3BiBreadcrumb from session storage when it exists', () => {
      // Arrange
      const initialBreadcrumb = new V3BiBreadcrumb();
      initialBreadcrumb.breadcrumb.push(new V3BiBreadcrumbItem('Home', '/welcome'));
      window.sessionStorage.setItem('breadcrumb', JSON.stringify(initialBreadcrumb));

      // Act
      const breadcrumb = service.getCrumb();

      // Assert
      expect(breadcrumb.breadcrumb).toEqual(expect.arrayContaining([
        expect.objectContaining({ item: 'Home', route: '/welcome' })
      ]));
    });

    it('should return an empty object when session storage item CRUMB does not exist', () => {
      // Act
      const breadcrumb = service.getCrumb();

      // Assert
      expect(breadcrumb).toEqual({});
    });
  });
});

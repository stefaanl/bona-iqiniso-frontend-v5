import { TestBed } from '@angular/core/testing';
import { PasseViteService } from '../passe-vite.service';

describe('PasseViteService', () => {
  let service: PasseViteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasseViteService]
    });
    service = TestBed.inject(PasseViteService);
  });

  afterEach(() => {
    window.sessionStorage.clear();
  });

    it('should clear all session storage items', () => {
      // Arrange
      window.sessionStorage.setItem('component', JSON.stringify({ test: 'data' }));
      window.sessionStorage.setItem('label', JSON.stringify({ test: 'data' }));

      // Act
      service.clean();

      // Assert
      expect(window.sessionStorage.getItem('component')).toEqual('null');
      expect(window.sessionStorage.getItem('label')).toEqual('null');
      expect(window.sessionStorage.getItem('alert')).toEqual('null');
      expect(window.sessionStorage.getItem('freetext')).toEqual('null');
      expect(window.sessionStorage.getItem('image')).toEqual('null');
      expect(window.sessionStorage.getItem('panel')).toEqual('null');
      expect(window.sessionStorage.getItem('navigation')).toEqual('null');
      expect(window.sessionStorage.getItem('glossary')).toEqual('null');
      expect(window.sessionStorage.getItem('toReturnTo')).toEqual('null');
      expect(window.sessionStorage.getItem('navigationProcess')).toEqual('null');
      expect(window.sessionStorage.getItem('initComponent')).toEqual('null');
      expect(window.sessionStorage.getItem('initAlert')).toEqual('null');
      expect(window.sessionStorage.getItem('initLabel')).toEqual('null');
      expect(window.sessionStorage.getItem('initDescription')).toEqual('null');
      expect(window.sessionStorage.getItem('initImage')).toEqual('null');

    });
    it('should add component data to session storage', () => {
      // Arrange
      const data = { id: 1, name: 'Component Data' };

      // Act
      service.add('component', data);

      // Assert
      expect(window.sessionStorage.getItem('component')).toEqual(JSON.stringify(data));
    });

    it('should add label data to session storage', () => {
      // Arrange
      const data = { id: 2, name: 'Label Data' };

      // Act
      service.add('label', data);

      // Assert
      expect(window.sessionStorage.getItem('label')).toEqual(JSON.stringify(data));
    });

    it('should add alert data to session storage', () => {
      // Arrange
      const data = { id: 3, message: 'Alert Data' };

      // Act
      service.add('alert', data);

      // Assert
      expect(window.sessionStorage.getItem('alert')).toEqual(JSON.stringify(data));
    });

    it('should add freetext data to session storage', () => {
      // Arrange
      const data = 'Some free text';

      // Act
      service.add('freetext', data);

      // Assert
      expect(window.sessionStorage.getItem('freetext')).toEqual(JSON.stringify(data));
    });

    it('should add image data to session storage', () => {
      // Arrange
      const data = { src: 'image.png', alt: 'Image' };

      // Act
      service.add('image', data);

      // Assert
      expect(window.sessionStorage.getItem('image')).toEqual(JSON.stringify(data));
    });

    it('should add panel data to session storage', () => {
      // Arrange
      const data = { id: 4, title: 'Panel Data' };

      // Act
      service.add('panel', data);

      // Assert
      expect(window.sessionStorage.getItem('panel')).toEqual(JSON.stringify(data));
    });

    it('should add navigation data to session storage', () => {
      // Arrange
      const data = { path: '/home', label: 'Home' };

      // Act
      service.add('navigation', data);

      // Assert
      expect(window.sessionStorage.getItem('navigation')).toEqual(JSON.stringify(data));
    });

    it('should add glossary data to session storage', () => {
      // Arrange
      const data = { term: 'Angular', definition: 'A web framework' };

      // Act
      service.add('glossary', data);

      // Assert
      expect(window.sessionStorage.getItem('glossary')).toEqual(JSON.stringify(data));
    });

    it('should add toReturnTo data to session storage', () => {
      // Arrange
      const data = { path: '/previous', label: 'Previous Page' };

      // Act
      service.add('toReturnTo', data);

      // Assert
      expect(window.sessionStorage.getItem('toReturnTo')).toEqual(JSON.stringify(data));
    });

    it('should add navigationProcess data to session storage', () => {
      // Arrange
      const data = { step: 1, description: 'Step 1' };

      // Act
      service.add('navigationProcess', data);

      // Assert
      expect(window.sessionStorage.getItem('navigationProcess')).toEqual(JSON.stringify(data));
    });
    it('should add init_component data to session storage', () => {
      // Arrange
      const data = { step: 1, description: 'Step 1' };

      // Act
      service.add('initComponent', data);

      // Assert
      expect(window.sessionStorage.getItem('initComponent')).toEqual(JSON.stringify(data));
    });
    it('should add init_description data to session storage', () => {
      // Arrange
      const data = { step: 1, description: 'Step 1' };

      // Act
      service.add('initDescription', data);

      // Assert
      expect(window.sessionStorage.getItem('initDescription')).toEqual(JSON.stringify(data));
    });
    it('should add init_label data to session storage', () => {
      // Arrange
      const data = { step: 1, description: 'Step 1' };

      // Act
      service.add('initLabel', data);

      // Assert
      expect(window.sessionStorage.getItem('initLabel')).toEqual(JSON.stringify(data));
    });
    it('should add init_alert data to session storage', () => {
      // Arrange
      const data = { step: 1, description: 'Step 1' };

      // Act
      service.add('initAlert', data);

      // Assert
      expect(window.sessionStorage.getItem('initAlert')).toEqual(JSON.stringify(data));
    });
    it('should add init_image data to session storage', () => {
      // Arrange
      const data = { step: 1, description: 'Step 1' };

      // Act
      service.add('initImage', data);

      // Assert
      expect(window.sessionStorage.getItem('initImage')).toEqual(JSON.stringify(data));
    });

    it('should reset component data in session storage', () => {
      // Arrange
      window.sessionStorage.setItem('component', JSON.stringify({ id: 1, name: 'Component Data' }));

      // Act
      service.reset('component');

      // Assert
      expect(window.sessionStorage.getItem('component')).toEqual(JSON.stringify(null));
    });

    it('should reset label data in session storage', () => {
      // Arrange
      window.sessionStorage.setItem('label', JSON.stringify({ id: 2, name: 'Label Data' }));

      // Act
      service.reset('label');

      // Assert
      expect(window.sessionStorage.getItem('label')).toEqual(JSON.stringify(null));
    });

    it('should reset alert data in session storage', () => {
      // Arrange
      window.sessionStorage.setItem('alert', JSON.stringify({ id: 3, message: 'Alert Data' }));

      // Act
      service.reset('alert');

      // Assert
      expect(window.sessionStorage.getItem('alert')).toEqual(JSON.stringify(null));
    });

    it('should reset freetext data in session storage', () => {
      // Arrange
      window.sessionStorage.setItem('freetext', JSON.stringify('Some free text'));

      // Act
      service.reset('freetext');

      // Assert
      expect(window.sessionStorage.getItem('freetext')).toEqual(JSON.stringify(null));
    });

    it('should reset image data in session storage', () => {
      // Arrange
      window.sessionStorage.setItem('image', JSON.stringify({ src: 'image.png', alt: 'Image' }));

      // Act
      service.reset('image');

      // Assert
      expect(window.sessionStorage.getItem('image')).toEqual(JSON.stringify(null));
    });

    it('should reset panel data in session storage', () => {
      // Arrange
      window.sessionStorage.setItem('panel', JSON.stringify({ id: 4, title: 'Panel Data' }));

      // Act
      service.reset('panel');

      // Assert
      expect(window.sessionStorage.getItem('panel')).toEqual(JSON.stringify(null));
    });

    it('should reset navigation data in session storage', () => {
      // Arrange
      window.sessionStorage.setItem('navigation', JSON.stringify({ path: '/home', label: 'Home' }));

      // Act
      service.reset('navigation');

      // Assert
      expect(window.sessionStorage.getItem('navigation')).toEqual(JSON.stringify(null));
    });

    it('should reset glossary data in session storage', () => {
      // Arrange
      window.sessionStorage.setItem('glossary', JSON.stringify({ term: 'Angular', definition: 'A web framework' }));

      // Act
      service.reset('glossary');

      // Assert
      expect(window.sessionStorage.getItem('glossary')).toEqual(JSON.stringify(null));
    });

    it('should reset toReturnTo data in session storage', () => {
      // Arrange
      window.sessionStorage.setItem('toReturnTo', JSON.stringify({ path: '/previous', label: 'Previous Page' }));

      // Act
      service.reset('toReturnTo');

      // Assert
      expect(window.sessionStorage.getItem('toReturnTo')).toEqual(JSON.stringify(null));
    });

    it('should reset navigationProcess data in session storage', () => {
      // Arrange
      window.sessionStorage.setItem('navigationProcess', JSON.stringify({ step: 1, description: 'Step 1' }));

      // Act
      service.reset('navigationProcess');

      // Assert
      expect(window.sessionStorage.getItem('navigationProcess')).toEqual(JSON.stringify(null));
    });
    it('should get component data from session storage', () => {
      // Arrange
      const data = { id: 1, name: 'Component Data' };
      window.sessionStorage.setItem('component', JSON.stringify(data));

      // Act
      const result = service.get('component');

      // Assert
      expect(result).toEqual(data);
    });

    it('should get label data from session storage', () => {
      // Arrange
      const data = { id: 2, name: 'Label Data' };
      window.sessionStorage.setItem('label', JSON.stringify(data));

      // Act
      const result = service.get('label');

      // Assert
      expect(result).toEqual(data);
    });

    it('should get alert data from session storage', () => {
      // Arrange
      const data = { id: 3, message: 'Alert Data' };
      window.sessionStorage.setItem('alert', JSON.stringify(data));

      // Act
      const result = service.get('alert');

      // Assert
      expect(result).toEqual(data);
    });

    it('should get freetext data from session storage', () => {
      // Arrange
      const data = 'Some free text';
      window.sessionStorage.setItem('freetext', JSON.stringify(data));

      // Act
      const result = service.get('freetext');

      // Assert
      expect(result).toEqual(data);
    });

    it('should get image data from session storage', () => {
      // Arrange
      const data = { src: 'image.png', alt: 'Image' };
      window.sessionStorage.setItem('image', JSON.stringify(data));

      // Act
      const result = service.get('image');

      // Assert
      expect(result).toEqual(data);
    });

    it('should get panel data from session storage', () => {
      // Arrange
      const data = { id: 4, title: 'Panel Data' };
      window.sessionStorage.setItem('panel', JSON.stringify(data));

      // Act
      const result = service.get('panel');

      // Assert
      expect(result).toEqual(data);
    });

    it('should get navigation data from session storage', () => {
      // Arrange
      const data = { path: '/home', label: 'Home' };
      window.sessionStorage.setItem('navigation', JSON.stringify(data));

      // Act
      const result = service.get('navigation');

      // Assert
      expect(result).toEqual(data);
    });

    it('should get glossary data from session storage', () => {
      // Arrange
      const data = { term: 'Angular', definition: 'A web framework' };
      window.sessionStorage.setItem('glossary', JSON.stringify(data));

      // Act
      const result = service.get('glossary');

      // Assert
      expect(result).toEqual(data);
    });

    it('should get toReturnTo data from session storage', () => {
      // Arrange
      const data = { path: '/previous', label: 'Previous Page' };
      window.sessionStorage.setItem('toReturnTo', JSON.stringify(data));

      // Act
      const result = service.get('toReturnTo');

      // Assert
      expect(result).toEqual(data);
    });

    it('should get navigationProcess data from session storage', () => {
      // Arrange
      const data = { step: 1, description: 'Step 1' };
      window.sessionStorage.setItem('navigationProcess', JSON.stringify(data));

      // Act
      const result = service.get('navigationProcess');

      // Assert
      expect(result).toEqual(data);
    });

    it('should return undefined if data does not exist in session storage', () => {
      // Act
      const result = service.get('nonexistent');

      // Assert
      expect(result).toBeUndefined();
    });
});

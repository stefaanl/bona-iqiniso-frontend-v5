import { TestBed } from '@angular/core/testing';
import { PaginationService } from '../pagination.service';
import { V3BiPaginatorBase } from '../../models/V3Bi-Paginator';
describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationService]
    });
    service = TestBed.inject(PaginationService);
    window.sessionStorage.clear();
  });

  afterEach(() => {
    window.sessionStorage.clear();
  });

  describe('#init', () => {
    it('should initialize pagination with default values and store it in session storage', () => {
      // Act
      window.sessionStorage.clear();
      const paginator = service.init();
      console.log('init paginator', paginator);
      // Assert
      expect(paginator.total).toBe(0);
      expect(paginator.perPage).toBe(5);
      expect(paginator.page).toBe(1);
      expect(paginator.search).toBe('');
      expect(window.sessionStorage.getItem('pagination')).toEqual(JSON.stringify(paginator));
    });
  });

  describe('#get', () => {
    it('should return the pagination data from session storage if it exists', () => {
      // Arrange
      const storedPaginator = new V3BiPaginatorBase(100, 10, 2, 'search');
      window.sessionStorage.setItem('pagination', JSON.stringify(storedPaginator));

      // Act
      const paginator = service.get();

      // Assert
      expect(paginator).toEqual(storedPaginator);
    });

    it('should initialize and return default pagination data if not present in session storage', () => {
      // Act
      const paginator = service.get();

      // Assert
      expect(paginator.total).toBe(0);
      expect(paginator.perPage).toBe(5);
      expect(paginator.page).toBe(1);
      expect(paginator.search).toBe('');
      expect(window.sessionStorage.getItem('pagination')).toEqual(JSON.stringify(paginator));
    });
  });

  describe('#set', () => {
    it('should store the paginator object in session storage and return it', () => {
      // Arrange
      const paginator = new V3BiPaginatorBase(200, 20, 3, 'newSearch');

      // Act
      const result = service.set(paginator);

      // Assert
      expect(result).toEqual(paginator);
      expect(window.sessionStorage.getItem('pagination')).toEqual(JSON.stringify(paginator));
    });
  });

  describe('#setPage', () => {
    it('should update the current page number and return the updated paginator', () => {
      // Arrange
      const initialPaginator = new V3BiPaginatorBase(100, 10, 1, 'search');
      window.sessionStorage.setItem('pagination', JSON.stringify(initialPaginator));

      // Act
      const updatedPaginator = service.setPage(5);

      // Assert
      expect(updatedPaginator.page).toBe(5);
      expect(window.sessionStorage.getItem('pagination')).toContain('"page":5');
    });

    it('should initialize and update the current page number if pagination data is not present in session storage', () => {
      // Act
      const updatedPaginator = service.setPage(3);

      // Assert
      expect(updatedPaginator.page).toBe(3);
      expect(window.sessionStorage.getItem('pagination')).toContain('"page":3');
    });
  });

  describe('#setPerPage', () => {
    it('should update the items per page, set current page to 1, and return the updated paginator', () => {
      // Arrange
      const initialPaginator = new V3BiPaginatorBase(100, 10, 2, 'search');
      window.sessionStorage.setItem('pagination', JSON.stringify(initialPaginator));

      // Act
      const updatedPaginator = service.setPerPage(25);

      // Assert
      expect(updatedPaginator.perPage).toBe(25);
      expect(updatedPaginator.page).toBe(1);
      expect(window.sessionStorage.getItem('pagination')).toContain('"perPage":25');
      expect(window.sessionStorage.getItem('pagination')).toContain('"page":1');
    });

    it('should initialize and update the items per page if pagination data is not present in session storage', () => {
      // Act
      const updatedPaginator = service.setPerPage(15);

      // Assert
      expect(updatedPaginator.perPage).toBe(15);
      expect(updatedPaginator.page).toBe(1);
      expect(window.sessionStorage.getItem('pagination')).toContain('"perPage":15');
      expect(window.sessionStorage.getItem('pagination')).toContain('"page":1');
    });
  });

  describe('#setTotal', () => {
    it('should update the total items and return the updated paginator', () => {
      // Arrange
      const initialPaginator = new V3BiPaginatorBase(50, 10, 1, 'search');
      window.sessionStorage.setItem('pagination', JSON.stringify(initialPaginator));

      // Act
      const updatedPaginator = service.setTotal(200);

      // Assert
      expect(updatedPaginator.total).toBe(200);
      expect(window.sessionStorage.getItem('pagination')).toContain('"total":200');
    });

    it('should initialize and update the total items if pagination data is not present in session storage', () => {
      // Act
      const updatedPaginator = service.setTotal(300);

      // Assert
      expect(updatedPaginator.total).toBe(300);
      expect(window.sessionStorage.getItem('pagination')).toContain('"total":300');
    });
  });

  describe('#setSearch', () => {
    it('should update the search query, set current page to 1, and return the updated paginator', () => {
      // Arrange
      const initialPaginator = new V3BiPaginatorBase(100, 10, 2, 'oldSearch');
      window.sessionStorage.setItem('pagination', JSON.stringify(initialPaginator));

      // Act
      const updatedPaginator = service.setSearch('newSearch');

      // Assert
      expect(updatedPaginator.search).toBe('newSearch');
      expect(updatedPaginator.page).toBe(1);
      expect(window.sessionStorage.getItem('pagination')).toContain('"search":"newSearch"');
      expect(window.sessionStorage.getItem('pagination')).toContain('"page":1');
    });

    it('should initialize and update the search query if pagination data is not present in session storage', () => {
      // Act
      const updatedPaginator = service.setSearch('searchTerm');

      // Assert
      expect(updatedPaginator.search).toBe('searchTerm');
      expect(updatedPaginator.page).toBe(1);
      expect(window.sessionStorage.getItem('pagination')).toContain('"search":"searchTerm"');
      expect(window.sessionStorage.getItem('pagination')).toContain('"page":1');
    });
  });
});

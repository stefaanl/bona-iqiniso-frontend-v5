import { TestBed } from '@angular/core/testing';
import {StorageService} from "../storage.service";



describe('StorageService', () => {
  let service: StorageService;
  const USER_KEY = 'auth-user';
  const LANGUAGES = 'languages';
  const LANGUAGE = 'language';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
    service = TestBed.inject(StorageService);
    window.sessionStorage.clear();
  });

  afterEach(() => {
    window.sessionStorage.clear();
  });

    it('should set session storage items LANGUAGES and LANGUAGE with predefined values', () => {
      // Act
      service.initLanguages();

      // Assert
      const languages = JSON.parse(window.sessionStorage.getItem('languages') || '{}');
      const language = window.sessionStorage.getItem('language');
      expect(languages.languages).toEqual(['en', 'nl', 'fr', 'de']);
      expect(language).toBe('en');
    });

    it('should return the list of languages from session storage when LANGUAGES exists', () => {
      // Arrange
      const storedLanguages = { languages: ['en', 'nl', 'fr', 'de'] };
      window.sessionStorage.setItem('languages', JSON.stringify(storedLanguages));

      // Act
      const languages = service.getLanguages();

      // Assert
      expect(languages).toEqual(['en', 'nl', 'fr', 'de']);
    });

    it('should return the default language list with en when LANGUAGES does not exist', () => {
      // Act
      const languages = service.getLanguages();

      // Assert
      expect(languages).toEqual(['en']);
    });

    it('should set session storage item LANGUAGE to en', () => {
      // Act
      service.initLanguage();

      // Assert
      const language = window.sessionStorage.getItem('language');
      expect(language).toBe('en');
    });

    it('should set session storage item LANGUAGE to the provided language', () => {
      // Arrange
      const lang = 'fr';

      // Act
      service.setLanguage(lang);

      // Assert
      const language = window.sessionStorage.getItem('language');
      expect(language).toBe(lang);
    });
    it('should return the language from session storage when LANGUAGE exists', () => {
      // Arrange
      window.sessionStorage.setItem('language', 'nl');

      // Act
      const language = service.getLanguage();

      // Assert
      expect(language).toBe('nl');
    });

    it('should return en when LANGUAGE does not exist in session storage', () => {
      // Act
      const language = service.getLanguage();

      // Assert
      expect(language).toBe('en');
    });

    it('should remove session storage item USER_KEY', () => {
      // Arrange
      window.sessionStorage.setItem(USER_KEY, JSON.stringify({ username: 'test' }));

      // Act
      service.clearUser();

      // Assert
      const user = window.sessionStorage.getItem(USER_KEY);
      expect(user).toBeNull();
    });

    it('should store the user object and its preferred language in session storage', () => {
      // Arrange
      const user = { username: 'test', preferredLanguage: 'fr' };

      // Act
      service.saveUser(user);

      // Assert
      const storedUser = JSON.parse(window.sessionStorage.getItem(USER_KEY) || '{}');
      const language = window.sessionStorage.getItem(LANGUAGE);
      expect(storedUser).toEqual(user);
      expect(language).toBe('fr');
    });

    it('should return the user object from session storage when USER_KEY exists', () => {
      // Arrange
      const user = { username: 'test' };
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

      // Act
      const storedUser = service.getUser();

      // Assert
      expect(storedUser).toEqual(user);
    });

    it('should return an empty object when USER_KEY does not exist in session storage', () => {
      // Act
      const storedUser = service.getUser();

      // Assert
      expect(storedUser).toEqual({});
    });

    it('should return true when USER_KEY exists in session storage', () => {
      // Arrange
      window.sessionStorage.setItem(USER_KEY, JSON.stringify({ username: 'test' }));

      // Act
      const isAuthenticated = service.isAuthenticated();

      // Assert
      expect(isAuthenticated).toBeTrue();
    });

    it('should return false when USER_KEY does not exist in session storage', () => {
      // Act
      const isAuthenticated = service.isAuthenticated();

      // Assert
      expect(isAuthenticated).toBeFalse();
    });

  describe('#isAdmin', () => {
    it('should return true when USER_KEY exists in session storage and user has ROLE_ADMIN', () => {
      // Arrange
      const user = { roles: ['ROLE_ADMIN'] };
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

      // Act
      const isAdmin = service.isAdmin();

      // Assert
      expect(isAdmin).toBeTrue();
    });

    it('should return false when USER_KEY exists in session storage and user does not have ROLE_ADMIN', () => {
      // Arrange
      const user = { roles: ['ROLE_USER'] };
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

      // Act
      const isAdmin = service.isAdmin();

      // Assert
      expect(isAdmin).toBeFalse();
    });

    it('should return false when USER_KEY does not exist in session storage', () => {
      // Act
      const isAdmin = service.isAdmin();

      // Assert
      expect(isAdmin).toBeFalse();
    });

    it('should return true when USER_KEY exists in session storage and user has ROLE_MODERATOR or ROLE_ADMIN', () => {
      // Arrange
      const user = { roles: ['ROLE_MODERATOR'] };
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

      // Act
      const isModerator = service.isModerator();

      // Assert
      expect(isModerator).toBeTrue();
    });

    it('should return false when USER_KEY exists in session storage and user does not have ROLE_MODERATOR or ROLE_ADMIN', () => {
      // Arrange
      const user = { roles: ['ROLE_USER'] };
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

      // Act
      const isModerator = service.isModerator();

      // Assert
      expect(isModerator).toBeFalse();
    });

    it('should return false when USER_KEY does not exist in session storage', () => {
      // Act
      const isModerator = service.isModerator();

      // Assert
      expect(isModerator).toBeFalse();
    });

    it('should return true when USER_KEY exists in session storage and user has ROLE_USER, ROLE_MODERATOR, or ROLE_ADMIN', () => {
      // Arrange
      const user = { roles: ['ROLE_USER'] };
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

      // Act
      const isUser = service.isUser();

      // Assert
      expect(isUser).toBeTrue();
    });

    it('should return false when USER_KEY exists in session storage and user does not have ROLE_USER, ROLE_MODERATOR, or ROLE_ADMIN', () => {
      // Arrange
      const user = { roles: ['ROLE_GUEST'] };
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

      // Act
      const isUser = service.isUser();

      // Assert
      expect(isUser).toBeFalse();
    });

    it('should return false when USER_KEY does not exist in session storage', () => {
      // Act
      const isUser = service.isUser();

      // Assert
      expect(isUser).toBeFalse();
    });
  });
});

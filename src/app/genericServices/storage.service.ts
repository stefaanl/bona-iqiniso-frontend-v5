import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {WindowService} from "./window.service";
import {isPlatformBrowser} from "@angular/common";
import {throwError} from "rxjs";

const USER_KEY = 'auth-user';
const LANGUAGES = 'languages';
const LANGUAGE = 'language';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private windowService: WindowService
  ) {}

  initLanguages(): void {
    if (isPlatformBrowser(this.platformId)) {
      const languages = {"languages": ['en', 'nl', 'fr', 'de']};

      this.windowService.nativeWindow.sessionStorage.setItem(LANGUAGES, JSON.stringify(languages));
      this.windowService.nativeWindow.sessionStorage.setItem(LANGUAGE, 'en');
    } else throwError('Not a browser');
  }
  public getLanguages(): string[] {
    if (isPlatformBrowser(this.platformId)) {
      const languages = this.windowService.nativeWindow.sessionStorage.getItem(LANGUAGES);
      //console.log("Language set: ", languages);
      if (languages) {
        return JSON.parse(languages).languages;
      } else {
        return ['en'];
      }
    } else return ['en'];
  }
  initLanguage(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.windowService.nativeWindow.sessionStorage.setItem(LANGUAGE, 'en');
    } else throwError('Not a browser');
  }
  setLanguage(lang : string): void {
    if (isPlatformBrowser(this.platformId)) {
      this.windowService.nativeWindow.sessionStorage.setItem(LANGUAGE, lang);
    } else throwError('Not a browser');
  }
  public getLanguage(): string {
    if (isPlatformBrowser(this.platformId)) {
      const language = this.windowService.nativeWindow.sessionStorage.getItem(LANGUAGE);
    //console.log("Set Language is: ", language);
    if (language) {
      return language;
    } else {
      return 'en';
    }
    } else return 'en';
  }

  public clearUser(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.windowService.nativeWindow.sessionStorage.removeItem(USER_KEY);
    //console.log("Preferred language is set to ", this.getLanguage());
    } else throwError('Not a browser');

  }
  public saveUser(user: any): void {
      if (isPlatformBrowser(this.platformId)) {
        this.windowService.nativeWindow.sessionStorage.removeItem(USER_KEY);
        this.windowService.nativeWindow.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        this.windowService.nativeWindow.sessionStorage.setItem(LANGUAGE, user.preferredLanguage);
        //this.windowService.nativeWindow.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        console.log("user is set to ", user);
      } else throwError('Not a browser');

  }
  public getUser(): any {
      if (isPlatformBrowser(this.platformId)) {
        const user = this.windowService.nativeWindow.sessionStorage.getItem(USER_KEY);
        //console.log('storage user: ', user);
        if (user) {
          return JSON.parse(user);
        }

        return {};
      } else throwError('Not a browser');
  }
  public isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = this.windowService.nativeWindow.sessionStorage.getItem(USER_KEY);
      if (user) {
        return true;
      }

      return false;
    } else return false;
  }
  public isAdmin(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = this.windowService.nativeWindow.sessionStorage.getItem(USER_KEY);
      if (user) {
        const userData = JSON.parse(user);
        if (!userData.roles) return false;
        const roles: string[] = userData.roles;
        //console.log("roles: ", roles)
        return roles.filter(role => role === 'ROLE_ADMIN').length > 0;
      }
      return false;
    } else return false;
  }
  public isModerator(): boolean {
      if (isPlatformBrowser(this.platformId)) {
        const user = this.windowService.nativeWindow.sessionStorage.getItem(USER_KEY);
        if (user) {
          const userData = JSON.parse(user);
          if (!userData.roles) return false;
          const roles: string[] = userData.roles;
          //console.log("roles: ", roles)
          return roles.filter(role => role === 'ROLE_MODERATOR' || role === 'ROLE_ADMIN').length > 0;
        }
        return false;
    } else return false;
  }
  public isUser(): boolean {
      if (isPlatformBrowser(this.platformId)) {
        const user = this.windowService.nativeWindow.sessionStorage.getItem(USER_KEY);
      if (user) {
        const userData = JSON.parse(user);
        if (!userData.roles) return false;
        const roles: string[] = userData.roles;
        //console.log("roles: ", roles)
        return roles.filter(role => role === 'ROLE_USER' || role === 'ROLE_MODERATOR' || role === 'ROLE_ADMIN').length > 0;
      }
      return false;
      } else return false;
  }
}

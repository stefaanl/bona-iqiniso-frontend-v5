import { Injectable } from '@angular/core';
import {V3BiBreadcrumb, V3BiBreadcrumbItem} from "../models/V3BiBreadcrumb";
import {V3BiAlertArray} from "../models/V3BiAlertArray";
import {V3BiAlertBase} from "../models/V3BiAlertBase";

const USER_KEY = 'auth-user';
const LANGUAGES = 'languages';
const LANGUAGE = 'language';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  initLanguages(): void {
    const languages = { "languages" : ['en', 'nl','fr','de']};

    window.sessionStorage.setItem(LANGUAGES, JSON.stringify(languages));
    window.sessionStorage.setItem(LANGUAGE, 'en');
  }
  public getLanguages(): string[] {
    const languages = window.sessionStorage.getItem(LANGUAGES);
    //console.log("Language set: ", languages);
    if (languages) {
      return JSON.parse(languages).languages;
    } else {
      return ['en'];
    }
  }
  initLanguage(): void {
    window.sessionStorage.setItem(LANGUAGE, 'en');
  }
  setLanguage(lang : string): void {
    window.sessionStorage.setItem(LANGUAGE, lang);
  }
  public getLanguage(): string {
    const language = window.sessionStorage.getItem(LANGUAGE);
    //console.log("Set Language is: ", language);
    if (language) {
      return language;
    } else {
      return 'en';
    }
  }

  public clearUser(): void {
    window.sessionStorage.removeItem(USER_KEY);
    //console.log("Preferred language is set to ", this.getLanguage());

  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    window.sessionStorage.setItem(LANGUAGE, user.preferredLanguage);
    //window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    console.log("user is set to ", user);

  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    //console.log('storage user: ', user);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  public isAuthenticated(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
  public isAdmin(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const userData = JSON.parse(user);
      if (!userData.roles) return false;
      const roles: string[] = userData.roles;
      //console.log("roles: ", roles)
      return roles.filter(role => role === 'ROLE_ADMIN').length > 0;
    }
    return false;
  }
  public isModerator(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const userData = JSON.parse(user);
      if (!userData.roles) return false;
      const roles: string[] = userData.roles;
      //console.log("roles: ", roles)
      return roles.filter(role => role === 'ROLE_MODERATOR' || role === 'ROLE_ADMIN').length > 0;
    }
    return false;
  }
  public isUser(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const userData = JSON.parse(user);
      if (!userData.roles) return false;
      const roles: string[] = userData.roles;
      //console.log("roles: ", roles)
      return roles.filter(role => role === 'ROLE_USER' || role === 'ROLE_MODERATOR' || role === 'ROLE_ADMIN').length > 0;
    }
    return false;
  }
}

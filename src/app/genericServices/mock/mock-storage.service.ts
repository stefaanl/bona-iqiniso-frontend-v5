import { Injectable } from '@angular/core';
import {of} from "rxjs";

const USER_KEY = 'auth-user';
const LANGUAGES = 'languages';
const LANGUAGE = 'language';


@Injectable({
  providedIn: 'root'
})
export class MockStorageService {
  initLanguages() {
    const languages = { "languages" : ['en', 'nl','fr','de']};
    window.sessionStorage.setItem(LANGUAGES, JSON.stringify(languages));
  }
  getLanguages() {return of(['en', 'nl','fr','de']);}
  initLanguage() {window.sessionStorage.setItem(LANGUAGE, 'en');}
  setLanguage(lang : string) {window.sessionStorage.setItem(LANGUAGE, lang);}
  getLanguage() {return of('en');}
}


import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GoogleObj} from "../generic-interfaces/GoogleObj";

@Injectable({
  providedIn: 'root'
})
export class GoogletranslateService {

  url = "https://translation.googleapis.com/language/translate/v2?key=";
    key = 'AIzaSyDgMyDrkmxtSTpT_xZXTroECHn71Q1bNDU';

  constructor(private http: HttpClient) { }

  translate(obj : GoogleObj) {
    return this.http.post(this.url + this.key, obj);
  }
}

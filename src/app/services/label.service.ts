import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {V3BiLabelBase} from "../models/V3BiLabelBase";
import {StorageService} from "../genericServices/storage.service";

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) { }


  listLabel(page?: number, perPage?: number, search?: string):Observable<any> {
    const p = page || 1;
    const pp = perPage || 15;
    const s = search || '';
    const queryParamBase = {
      page: p,
      perPage: pp,
      search: s
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) {
        if (typeof value === 'string') queryParams = queryParams.set(key, value);
        else if (Array.isArray(value)) value.forEach(v => queryParams = queryParams.append(key, v));
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });
    //console.log("queryParams", queryParams.toString());
    return this.http.get(`/api/config/labels`, {params: queryParams});
  }
  getLabel(params: string[]): Observable<any> {
    const queryParamBase = {
      references: params
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) {
        if (typeof value === 'string') queryParams = queryParams.set(key, value);
        else if (Array.isArray(value)) value.forEach(v => queryParams = queryParams.append(key, v));
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });

    return this.http.get('/api/config/labels/many', {params: queryParams});
  }
  addLabel(params: V3BiLabelBase): Observable<any> {
    return this.http.post('/api/config/labels', params);
  }
  updateLabel(params: V3BiLabelBase): Observable<any> {
    return this.http.put('/api/config/labels', params);
  }
  deleteLabel(params: string): Observable<any> {
    return this.http.delete<boolean>('/api/config/labels/' + params);
  }
  existLabelByReference(reference: string): Observable<any> {
    //console.log("doing the http for uniqueLabelByReference");
    const result = this.http.get('/api/config/labels/exist/' + reference);
    return result
  }
  uniqueLabelByReference(reference: string): Observable<any> {
    //console.log("doing the http for uniqueLabelByReference");
    const result = this.http.get('/api/config/labels/unique/' + reference);
    return result
  }

}

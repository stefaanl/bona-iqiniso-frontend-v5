import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "../generic-services/storage.service";
import {MessageService} from "../generic-services/message.service";
import {BreadcrumbService} from "../generic-services/breadcrumb.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private messageService: MessageService,
    private breadcrumbService: BreadcrumbService,
    private router: Router
    ) { }

  authenticated(): boolean {
    return this.storageService.isAuthenticated()
  }

  getUserId(): string | undefined{
    return this.storageService.getUser().getUserId();
  }

  getUserTenant(): string | undefined {
    return this.storageService.getUser().getUserTenant();
  }

  getUsername(): string | undefined {
    return this.storageService.getUser().getUsername();
  }

  getAccessToken(): string | undefined{
    return this.storageService.getUser().getAccessToken()
  }


  login(username: string, password: string): Observable<any> {
    const loginRequest = { username, password };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<string>('http://localhost:8080/api/auth/login', loginRequest, httpOptions);
  }

  register(loginRequest: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<string>('http://localhost:8080/api/auth/register', loginRequest, httpOptions);
  }

  logout() {
    this.breadcrumbService.clean();
  }
  uniqueUsernameByReference(reference: string): Observable<any> {
    //console.log("doing the http for uniquePanelByReference");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const result = this.http.get('http://localhost:8080/api/auth/unique/' + reference, httpOptions);
    result.subscribe({
     next: (result) => {console.log('unique? ', result)},
     error: () => {}
    })
    return result
  }
  existUsernameByReference(reference: string): Observable<any> {
    //console.log("doing the http for uniqueLabelByReference");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const result = this.http.get('http://localhost:8080/api/auth/exist/' + reference, httpOptions);
    return result
  }


}


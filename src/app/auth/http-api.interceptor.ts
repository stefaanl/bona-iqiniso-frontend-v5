import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpHeaders,
  HttpInterceptor, HttpProgressEvent,
  HttpRequest, HttpResponse,
  HttpSentEvent, HttpUserEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';
import {SpinnerService} from '../generic-services/spinner.service';
import {StorageService} from "../generic-services/storage.service";
import {Router} from "@angular/router";

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {

    constructor(
      private spinner: SpinnerService,
      private router: Router,
      private storage: StorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.spinner.show();
      //console.log("http interceptor triggered");
      if (!req.url.includes('/api/auth/') && !req.url.includes('google')) {
          const newReq = req.clone({
            url: 'http://localhost:8080' + req.url,
            headers: req.headers.set('Authorization', 'Bearer ' + this.storage.getUser().accessToken)
            .set('content-type', 'application/json')
            });
          //console.log('REQUEST: ', newReq);
          return next.handle(newReq).pipe(
          finalize(() => {
            this.spinner.hide();
          })
        );
      }
      return next.handle(req);
    }
}

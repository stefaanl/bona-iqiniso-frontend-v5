import { Injectable } from '@angular/core';
import {V3BiBreadcrumbArray, V3BiBreadcrumbBase} from "../models/V3BiBreadcrumbArray";
import {V3BiAlertArray} from "../models/V3BiAlertArray";
import {V3BiAlertBase} from "../models/V3BiAlertBase";
import {V3BiAlertValidationBase} from "../models/V3BiAlertValidationBase";
import {V3BiAlertValidationArray} from "../models/V3BiAlertValidationArray";

const ALERTS = 'alerts';
const VALIDATIONALERTS = 'validation alerts';


@Injectable({
  providedIn: 'root'
})
export class HttpMessageService {
  constructor() {}

  getMsg(status: number) : string {
    let msg: string = '';
    switch (status) {
      case 400: msg = 'bad-request'
        break;
      case 401: msg = 'unauthorized';
        break;
      case 403: msg = 'forbidden';
        break;
      case 404: msg = 'not-found';
        break;
      case 500: msg = 'internal-server-error';
        break;
      case 502: msg = 'bad-gateway';
        break;
      case 503: msg = 'service-unavailable';
        break;
      case 504: msg = 'gateway-timeout';
        break;
      default: msg = 'unexpected-http-status-code';
        break;
    }
    return msg;

  }


}

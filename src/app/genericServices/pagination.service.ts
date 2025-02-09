import { Injectable } from '@angular/core';
import {V3BiBreadcrumbArray} from "../models/V3BiBreadcrumbArray";
import {V3BiAlertArray} from "../models/V3BiAlertArray";
import {V3BiAlertBase} from "../models/V3BiAlertBase";
import {V3BiPaginatorBase} from "../models/V3Bi-Paginator";

const PAGINATION = 'pagination';


@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  constructor() {}

  init(): V3BiPaginatorBase {
    const pag: V3BiPaginatorBase = new V3BiPaginatorBase(0, 5, 1, '');
    //console.log('Paginator Service - init paginator', pag);
    window.sessionStorage.setItem(PAGINATION, JSON.stringify(pag));
    return pag;
  }
  public get(): V3BiPaginatorBase {
    const pag = window.sessionStorage.getItem(PAGINATION);
    if (pag) {
      const returnValue = new V3BiPaginatorBase(JSON.parse(pag).total, JSON.parse(pag).perPage, JSON.parse(pag).page, JSON.parse(pag).search);
      return returnValue;
    } else {

      return this.init();
    }
  }
  public set(paginator: V3BiPaginatorBase) : V3BiPaginatorBase {
    window.sessionStorage.setItem(PAGINATION, JSON.stringify(paginator));
    return paginator;
  }
  public setPage(i : number) : V3BiPaginatorBase {
    const pag = window.sessionStorage.getItem(PAGINATION);
    let returnValue = this.init();

    if (pag) {
      returnValue = new V3BiPaginatorBase(JSON.parse(pag).total, JSON.parse(pag).perPage, JSON.parse(pag).page, JSON.parse(pag).search);
    }
    returnValue.page = i;
    window.sessionStorage.setItem(PAGINATION, JSON.stringify(returnValue));

    return returnValue;
  }
  public setPerPage(i : number) : V3BiPaginatorBase {
    const pag = window.sessionStorage.getItem(PAGINATION);
    let returnValue = this.init();

    if (pag) {
      returnValue = new V3BiPaginatorBase(JSON.parse(pag).total, JSON.parse(pag).perPage, JSON.parse(pag).page, JSON.parse(pag).search);
    }
    returnValue.perPage = i;
    returnValue.page = 1;
    window.sessionStorage.setItem(PAGINATION, JSON.stringify(returnValue));

    return returnValue;
  }
  public setTotal(i : number) : V3BiPaginatorBase {
    const pag = window.sessionStorage.getItem(PAGINATION);
    let returnValue = this.init();

    if (pag) {
      returnValue = new V3BiPaginatorBase(JSON.parse(pag).total, JSON.parse(pag).perPage, JSON.parse(pag).page, JSON.parse(pag).search);
    }
    returnValue.total = i;
    window.sessionStorage.setItem(PAGINATION, JSON.stringify(returnValue));

    return returnValue;
  }
  public setSearch(search : string) : V3BiPaginatorBase {
    const pag = window.sessionStorage.getItem(PAGINATION);
    let returnValue = this.init();

    if (pag) {
      returnValue = new V3BiPaginatorBase(JSON.parse(pag).total, JSON.parse(pag).perPage, JSON.parse(pag).page, JSON.parse(pag).search);
    }
    returnValue.page = 1;
    returnValue.search = search;
    window.sessionStorage.setItem(PAGINATION, JSON.stringify(returnValue));

    return returnValue;
  }


}

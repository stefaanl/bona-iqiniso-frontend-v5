import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {V3BiPaginatorBase} from "../../models/V3Bi-Paginator";

const PAGINATION = 'pagination';


@Injectable({
  providedIn: 'root'
})
export class MockPaginationService {
  init() {return of(new V3BiPaginatorBase(0, 5, 1, ''))}
  get() {return of(new V3BiPaginatorBase(0, 5, 1, ''))}
  set(paginator: V3BiPaginatorBase) {return of(new V3BiPaginatorBase(paginator.total, paginator.perPage, paginator.page, paginator.search))}
  setPage(i : number) {
    return new V3BiPaginatorBase(100, 10, i, 'mock-search');
  }
  setPerPage(i : number) {
      return new V3BiPaginatorBase(100, i, 1, '');
  }
  setTotal(i : number) {
    return new V3BiPaginatorBase(i, 10, 5, '');
    }
  setSearch(search : string) {
    return new V3BiPaginatorBase(100, 10, 5, search);
    }
}

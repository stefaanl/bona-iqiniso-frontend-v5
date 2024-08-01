
/****************************************V3BiPaginatorBase*****************************************************/
export class V3BiPaginatorBase {
  perPage: number;
  page: number;
  total: number;
  search: string;

  constructor(total?: number, perPage?: number, page?: number, search?: string) {
    if (perPage === undefined) this.perPage = 10;
    else this.perPage = perPage;
    if (page === undefined) this.page = 1;
    else this.page = page;
    if (total === undefined) this.total = 10;
    else this.total = total;
    if (search === undefined) this.search = '';
    else this.search = search;
  }

 static copy(original: V3BiPaginatorBase): V3BiPaginatorBase {
    return new V3BiPaginatorBase(original.total, original.perPage, original.page, original.search);
  }
}
/****************************************V3BiPaginatorDOM*****************************************************/
export class V3BiPaginatorDOM {
  classes: string[];
  disabled: boolean[];

  constructor(page : number, total: number) {
    this.classes = [];
    this.disabled = [];
    if (page > 1) {
      this.classes.push('btn btn-outline-primary ps-1 pe-1 text-white border-1 border-end border-light col-2');
      this.classes.push('btn btn-outline-primary text-white border-1 border-end border-light col-2');
      this.disabled.push(false);
      this.disabled.push(false);
    } else {
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.disabled.push(true);
      this.disabled.push(true);
    }
    if (page - 4 > 0){
      this.classes.push('btn btn-outline-primary ps-1 pe-1 text-white border-1 border-end border-light col-2');
      this.disabled.push(false);
    } else {
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.disabled.push(true);
    }
    if (page - 3 > 0){
      this.classes.push('btn btn-outline-primary ps-1 pe-1 text-white border-1 border-end border-light col-2');
      this.disabled.push(false);
    } else {
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.disabled.push(true);
    }
    if (page - 2 > 0){
      this.classes.push('btn btn-outline-primary ps-1 pe-1 text-white border-1 border-end border-light col-2');
      this.disabled.push(false);
    } else {
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.disabled.push(true);
    }
    if (page - 1 > 0){
      this.classes.push('btn btn-outline-primary ps-1 pe-1 text-white border-1 border-end border-light col-2');
      this.disabled.push(false);
    } else {
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.disabled.push(true);
    }
    this.classes.push('btn btn-primary ps-1 pe-1 text-light border-1 border-end border-light col-2');
    this.disabled.push(true);
    if (page +1 <= total){
      this.classes.push('btn btn-outline-primary ps-1 pe-1 text-white border-1 border-end border-light col-2');
      this.disabled.push(false);
    } else {
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.disabled.push(true);
    }
    if (page +2 <= total){
      this.classes.push('btn btn-outline-primary ps-1 pe-1 text-white border-1 border-end border-light col-2');
      this.disabled.push(false);
    } else {
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.disabled.push(true);
    }
    if (page +3 <= total){
      this.classes.push('btn btn-outline-primary ps-1 pe-1 text-white border-1 border-end border-light col-2');
      this.disabled.push(false);
    } else {
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.disabled.push(true);
    }
    if (page +4 <= total){
      this.classes.push('btn btn-outline-primary ps-1 pe-1 text-white border-1 border-end border-light col-2');
      this.disabled.push(false);
    } else {
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.disabled.push(true);
    }
    if (page < total) {
      this.classes.push('btn btn-outline-primary ps-1 pe-1 text-white border-1 border-end border-light col-2');
      this.classes.push('btn btn-outline-primary text-white border-1 border-end border-light col-2');
      this.disabled.push(false);
      this.disabled.push(false);
    } else {
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.classes.push('btn btn-secondary ps-1 pe-1 text-light border-1 border-end border-light col-2');
      this.disabled.push(true);
      this.disabled.push(true);
    }
  }

}

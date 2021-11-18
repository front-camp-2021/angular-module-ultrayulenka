import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  page = 1;
  totalPages = 12;
  pageLimit = 9;

  pageChanged: EventEmitter<void> = new EventEmitter();

  constructor() { }

  changePage (page : number) {
    if(
      this.page === page
      || page <= 0 
      || page > this.totalPages
    ) return;

    this.page = page;

    this.pageChanged.emit();
  }

  changeTotalPages (totalShown : number) {
    this.totalPages = Math.ceil(totalShown / this.pageLimit);
  }

  reset () {
    this.page = 1;
    this.totalPages = 12;

    this.pageChanged.emit();
  }
}

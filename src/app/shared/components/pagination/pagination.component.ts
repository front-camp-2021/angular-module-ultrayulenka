import { Component } from '@angular/core';
import { PagesService } from '../../../core/services/pages.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent  {
  
  constructor (public pages: PagesService) { }

  counter (i: number) {
    return new Array(i);
  }

  getClass (i: number) {
    const base = 'page-navigation__item_';
    const modificator = i === this.pages.page - 1? 'current':
                        i === this.pages.page - 2? 'prev':
                        i === this.pages.page? 'next': '';
    return modificator? base + modificator : ''; 
  }

  goToPrevPage () {
    this.pages.changePage(this.pages.page - 1);
  }

  goToNextPage () {
    this.pages.changePage(this.pages.page + 1);
  }

  changePage (index : number) {
    this.pages.changePage(index + 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { ElectronicsService } from 'src/app/services/electronics.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  constructor (public pages: PagesService, private electronics : ElectronicsService) { }

  ngOnInit (): void {
  }

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
    this.electronics.getFilteredProducts();
  }

  goToNextPage () {
    this.pages.changePage(this.pages.page + 1);
    this.electronics.getFilteredProducts();
  }

  changePage (index : number) {
    this.pages.changePage(index + 1);
    this.electronics.getFilteredProducts();
  }
}

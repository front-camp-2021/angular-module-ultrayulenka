import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pageIndex = 0;
  totalPages = 0;

  constructor() { 
    this.pageIndex = 3;
    this.totalPages = 10;
  }

  ngOnInit(): void {
  }

  counter (i: number) {
    return new Array(i);
  }

  getClass (i: number) {
    const base = 'page-navigation__item_';
    const modificator = i === this.pageIndex? 'current':
                        i === this.pageIndex - 1? 'prev':
                        i === this.pageIndex + 1? 'next': '';
    return modificator? base + modificator : ''; 
  }
}

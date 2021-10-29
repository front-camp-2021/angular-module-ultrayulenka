import { Component, OnInit } from '@angular/core';
import { Filter } from '../../interfaces';
import { categoryFilterList } from '../../mock-data/category-filter';
import { brandFilterList } from '../../mock-data/brand-filter';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit {

  filterItems: FilterItem[] = [];

  constructor() { 
    this.filterItems.push({ title: 'Category', list: [...categoryFilterList] });
    this.filterItems.push({ title: 'Brand', list: [...brandFilterList] });
  }

  ngOnInit(): void {
  }

}

interface FilterItem {
  title: string,
  list: Filter[]
}


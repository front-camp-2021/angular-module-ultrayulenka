import { Component, OnInit } from '@angular/core';
import { Filter, Slider } from '../../interfaces';
import { categoryFilterList } from '../../mock-data/category-filter';
import { brandFilterList } from '../../mock-data/brand-filter';
import { SliderLabelDirective } from '@angular-slider/ngx-slider/slider-label.directive';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit {

  filterItems: FilterItem[] = [];
  sliderItems: SliderItem[] = [
    {
      title: "Price",
      props: {
        min: 0,
        max: 85000,
        precision: 0,
        selected: {
          from: 0,
          to: 85000
        },
        prefix: 'UAH'
      }
    },
    {
      title: 'Rating',
      props: {
        min: 0, 
        max: 5,
        precision: 2,
        selected: {
          from: 0,
          to: 5
        }
      }
    }

  ];


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

interface SliderItem {
  title: string,
  props: Slider
}


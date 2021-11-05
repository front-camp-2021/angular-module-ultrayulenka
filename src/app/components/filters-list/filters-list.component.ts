import { Component, OnInit } from '@angular/core';
import { Filter, Slider } from '../../../interfaces';
import { categoryFilterList } from '../../../mock-data/category-filter';
import { brandFilterList } from '../../../mock-data/brand-filter';
import { BrandsService } from 'src/app/services/brands.service';
import { CategoriesService } from 'src/app/services/categories.service';

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


  constructor (private brands: BrandsService, private categories: CategoriesService) { }

  ngOnInit(): void {
    this.brands.getAllBrands()
      .subscribe(brands => {
        const brandsFilter = this.prepareFilters(brands, '=');
        this.filterItems.push({ title: 'Category', list: [...brandsFilter] });
    })

    this.categories.getAllCategories()
      .subscribe(categories => {
        const categoriesFilter = this.prepareFilters(categories, '=');
        this.filterItems.push({ title: 'Brand', list: [...categoriesFilter] })
      })
  }

  prepareFilters (arr: string[], prefix: string) {
    return arr.map(item => {
      return {
        value: `${prefix}=` + item.toLowerCase().split(' ').join('_'),
        title: item
      }
  });
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


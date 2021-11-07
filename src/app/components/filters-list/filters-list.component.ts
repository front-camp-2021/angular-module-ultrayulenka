import { Component, OnInit } from '@angular/core';
import { Filter, Slider } from '../../../interfaces';
import { BrandsService } from 'src/app/services/brands.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { RangesService } from 'src/app/services/ranges.service';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit {

  filterItems: FilterItem[] = [];
  sliderItems: Slider[] = [];

  constructor (
    private brands: BrandsService, 
    private categories: CategoriesService,
    private ranges: RangesService
    ) { 
      this.sliderItems = [this.ranges.priceRange, this.ranges.ratingRange]
    }

  ngOnInit(): void {
    this.brands.getAllBrands()
      .subscribe(brands => {
        const brandsFilter = this.prepareFilters(brands, 'brand');
        this.filterItems.push({ title: 'Category', list: [...brandsFilter] });
    })

    this.categories.getAllCategories()
      .subscribe(categories => {
        const categoriesFilter = this.prepareFilters(categories, 'category');
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


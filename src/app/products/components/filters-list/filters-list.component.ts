import { Component, OnInit, OnDestroy } from '@angular/core';

import { Filter, Slider } from '../../../core/models';

import { BrandsService } from '../../../core/services/brands.service';
import { CategoriesService } from '../../../core/services/categories.service';
import { RangesService } from '../../../core/services/ranges.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit, OnDestroy {

  filterItems: FilterItem[] = [];
  sliderItems: Slider[] = [];

  private destroy = new Subject<void>();


  constructor (
    private brands: BrandsService, 
    private categories: CategoriesService,
    private rangesService: RangesService
    ) { 
      this.sliderItems = [...Object.values(this.rangesService.ranges)]
  }
  
  ngOnInit (): void {
    this.brands.getAllBrands()
      .pipe(takeUntil(this.destroy))
      .subscribe(brands => {
        const brandsFilter = this.prepareFilters(brands, 'brand');
        this.filterItems.push({ title: 'Category', list: [...brandsFilter] });
    })

    this.categories.getAllCategories()
      .pipe(takeUntil(this.destroy))
      .subscribe(categories => {
        const categoriesFilter = this.prepareFilters(categories, 'category');
        this.filterItems.push({ title: 'Brand', list: [...categoriesFilter] })
      })
  }

  ngOnDestroy (): void {
    this.destroy.next();
    this.destroy.complete();
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


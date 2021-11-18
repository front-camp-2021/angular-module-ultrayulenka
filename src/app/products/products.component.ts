import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../core/models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ElectronicsService } from '../core/services/electronics.service';
import { FiltersService } from '../core/services/filters.service';
import { PagesService } from '../core/services/pages.service';
import { RangesService } from '../core/services/ranges.service';
import { SearchService } from '../core/services/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  isSidebarOpen = false;
  products: Product[] = [];
  totalProducts = 100;

  private destroy = new Subject<void>();

  constructor(
    private productsService: ElectronicsService,
    private pagesService: PagesService,
    private filtersService: FiltersService,
    private rangesService: RangesService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.updateProducts();
    this.subscribeToParamsChange();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  subscribeToParamsChange(): void {
    this.filtersService.selectedFiltersUpdated.subscribe(() => {
      this.onParamsChange();
    });

    this.pagesService.pageChanged.subscribe(() => {
      this.onParamsChange(true);
    });

    this.rangesService.rangesChanged.subscribe(() => {
      this.onParamsChange();
    })

    this.searchService.searchQueryChanged.subscribe(() => {
      this.onParamsChange();
    })
  }

  onParamsChange(pageChanged = false): void {
    if(!pageChanged) {
      this.pagesService.changePage(1);
    }
    this.updateProducts();
  }

  updateProducts(): void {
    this.productsService.getFilteredProducts()
      .pipe(takeUntil(this.destroy))
      .subscribe(response => {
        this.totalProducts = Number(response.headers.get('x-total-count'));
        this.products = response.body? [...response.body] : [];
        this.pagesService.changeTotalPages(this.totalProducts);
      });
  }

  onChangeSidebarOpenStatus(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  resetAllParams(): void {
    this.filtersService.reset();
    this.rangesService.reset();
    this.searchService.reset();
    this.pagesService.reset();
  }

}

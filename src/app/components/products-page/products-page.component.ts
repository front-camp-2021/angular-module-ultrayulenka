import { Component, OnInit, OnDestroy } from '@angular/core';
import { ElectronicsService } from 'src/app/services/electronics.service';
import { PagesService } from 'src/app/services/pages.service';
import { FiltersService } from 'src/app/services/filters.service';
import { RangesService } from 'src/app/services/ranges.service';
import { SearchService } from 'src/app/services/search.service'
import { Product } from '../../../interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  isSidebarOpen = false;
  products: Product[] = [];
  totalProducts = 100;

  private destroy = new Subject<void>();

  constructor (
    private productsService: ElectronicsService,
    private pagesService: PagesService,
    private filtersService: FiltersService,
    private rangesService: RangesService,
    private searchService: SearchService
  ) { }

  ngOnInit (): void {
    this.updateProducts();

    this.filtersService.selectedFiltersUpdated.subscribe(() => {
      this.pagesService.changePage(1);
      this.updateProducts();
    });

    this.pagesService.pageChanged.subscribe(() => {
      this.updateProducts();
    });

    this.rangesService.rangesChanged.subscribe(() => {
      this.pagesService.changePage(1);
      this.updateProducts();
    })

    this.searchService.searchQueryChanged.subscribe(() => {
      this.pagesService.changePage(1);
      this.updateProducts();
    })

  }

  ngOnDestroy (): void {
    this.destroy.next();
    this.destroy.complete();
  }

  updateProducts () {
    this.productsService.getFilteredProducts()
      .pipe(takeUntil(this.destroy))
      .subscribe(response => {
        this.totalProducts = Number(response.headers.get('x-total-count'));
        this.products = response.body? [...response.body] : [];
        this.pagesService.changeTotalPages(this.totalProducts);
      });
  }

  onChangeSidebarOpenStatus () {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}


/*
getAllProducts (): void {
    this.http.get<Product[]>(this.apiBase)
    .subscribe(products => {
      this.products = [...products]
    });
  }

  getFilteredProducts (): void {
    this.http.get<Product[]>(this.apiBase, { observe: "response", params: this.prepareParams() })
    .subscribe(response => {
      this.totalFound = Number(response.headers.get('x-total-count'));
      this.products = response.body? [...response.body] : [];
      this.pages.changeTotalPages(this.totalFound);
    }, err => {
      throw err;
    })
  }*/
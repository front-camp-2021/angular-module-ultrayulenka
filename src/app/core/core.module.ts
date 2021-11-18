import { NgModule } from '@angular/core';

import { ElectronicsService } from './services/electronics.service';
import { BrandsService } from './services/brands.service';
import { CartService } from './services/cart.service';
import { CategoriesService } from './services/categories.service';
import { FiltersService } from './services/filters.service';
import { PagesService } from './services/pages.service';
import { RangesService } from './services/ranges.service';
import { SearchService } from './services/search.service';
import { WishlistService } from './services/wishlist.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    ElectronicsService,
    BrandsService,
    CategoriesService,
    CartService,
    WishlistService,
    FiltersService,
    PagesService,
    RangesService,
    SearchService
  ]
})
export class CoreModule { }

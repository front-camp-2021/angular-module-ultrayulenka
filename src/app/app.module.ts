import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';


import { ElectronicsService } from './services/electronics.service';
import { BrandsService } from './services/brands.service';
import { CartService } from './services/cart.service';
import { CategoriesService } from './services/categories.service';
import { FiltersService } from './services/filters.service';
import { PagesService } from './services/pages.service';
import { RangesService } from './services/ranges.service';
import { SearchService } from './services/search.service';
import { WishlistService } from './services/wishlist.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersListComponent } from './components/filters-list/filters-list.component';
import { DoubleSliderComponent } from './components/double-slider/double-slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainHeadingComponent } from './components/main-heading/main-heading.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { CheckboxOptionsListComponent } from './components/checkbox-options-list/checkbox-options-list.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { WishlistPageComponent } from './components/wishlist-page/wishlist-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { CartTableRowComponent } from './components/cart-table-row/cart-table-row.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsListComponent,
    HeaderComponent,
    FiltersListComponent,
    DoubleSliderComponent,
    SidebarComponent,
    MainHeadingComponent,
    PaginationComponent,
    SearchComponent,
    CheckboxOptionsListComponent,
    ProductsPageComponent,
    WishlistPageComponent,
    CartPageComponent,
    CartTableComponent,
    CartTableRowComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgxSliderModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

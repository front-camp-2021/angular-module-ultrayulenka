import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';

import { ElectronicsService } from './services/electronics.service'

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
import { ProductsContentContainerComponent } from './components/products-content-container/products-content-container.component';

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
    ProductsContentContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxSliderModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ElectronicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

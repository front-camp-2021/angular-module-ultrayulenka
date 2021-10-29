import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { HeaderComponent } from './header/header.component';
import { FiltersListComponent } from './filters-list/filters-list.component';
import { DoubleSliderComponent } from './double-slider/double-slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainHeadingComponent } from './main-heading/main-heading.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { CheckboxOptionsListComponent } from './checkbox-options-list/checkbox-options-list.component';

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
    CheckboxOptionsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

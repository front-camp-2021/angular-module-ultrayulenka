import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { ProductsComponent } from './products.component';

import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FiltersListComponent } from './components/filters-list/filters-list.component';
import { CheckboxOptionsListComponent } from './components/checkbox-options-list/checkbox-options-list.component';
import { DoubleSliderComponent } from './components/double-slider/double-slider.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsHeaderComponent,
    SidebarComponent,
    FiltersListComponent,
    CheckboxOptionsListComponent,
    DoubleSliderComponent
  ],
  imports: [
    SharedModule,
    NgxSliderModule, 
    RouterModule.forChild([
      {
        path: '', component: ProductsComponent
      }
    ])
  ]
})
export class ProductsModule { }

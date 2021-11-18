import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { CartTableRowComponent } from './components/cart-table-row/cart-table-row.component';

@NgModule({
  declarations: [
    CartComponent,
    CartTableComponent,
    CartTableRowComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: CartComponent
      }
    ])
  ]
})
export class CartModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'

import { WishlistComponent } from './wishlist.component';

@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: WishlistComponent
      }
    ])
  ]
})
export class WishlistModule { }

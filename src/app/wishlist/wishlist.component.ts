import { Component } from '@angular/core';
import { WishlistService } from '../core/services/wishlist.service';
import { Product } from '../core/models';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  constructor(private wishlist : WishlistService) { }

  getProducts () : Product[] {
    console.log(this.wishlist.products)
    return this.wishlist.products;
  }

  resetWishlist () : void {
    this.wishlist.removeAll();
  }
}

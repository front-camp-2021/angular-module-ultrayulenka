import { Injectable } from '@angular/core';
import { Product } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  products : Product[] = [];

  constructor() { }

  changeWishlistStatus (product: Product) : void {
    const {
      inWishlist,
      index
    } = this.checkIfInWishlist(product.id)

    if(inWishlist) {
      this.products.splice(index, 1);
    } else {
      this.products.push(product);
    }
  }

  checkIfInWishlist (id: string) : {inWishlist: boolean, index: number} {
    const index = this.products.findIndex(item => item.id === id);

    return {
      inWishlist: index >= 0,
      index
    }
  }

  removeAll () {
    this.products = [];
  }
}

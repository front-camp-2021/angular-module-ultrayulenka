import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models';
import { WishlistService } from '../../../core/services/wishlist.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() product: Product = {
    id: '',
    images: [],
    title: '',
    rating: 0,
    price: 0,
    category: '',
    brand: ''
  };

  constructor (
    private wishlist: WishlistService,
    private cart: CartService
  ) {}

  isInWishlist () : boolean {
    const {
      inWishlist
    } = this.wishlist.checkIfInWishlist(this.product.id);

    return inWishlist;
  }

  isInCart () : boolean {
    const {
      inCart
    } = this.cart.checkIfInCart(this.product.id);

    return inCart;
  }

  onWishlistBtnClick () : void {
    this.wishlist.changeWishlistStatus(this.product);
    console.log(this.wishlist.products)
  }

  onCartBtnClick () : void {
    this.cart.addToCart(this.product)
  }
}

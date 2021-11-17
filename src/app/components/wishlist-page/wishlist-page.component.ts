import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Product } from 'src/interfaces';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit {

  constructor(private wishlist : WishlistService) { }

  ngOnInit(): void {
  }

  getProducts () : Product[] {
    return this.wishlist.products;
  }

  resetWishlist () : void {
    this.wishlist.removeAll();
  }

}

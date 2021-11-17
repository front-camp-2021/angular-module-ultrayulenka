import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/interfaces';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
  total: number = 0;

  constructor(private cart : CartService) {}

  ngOnInit(): void {
  }

  getProductsInCart () : CartItem[] {
    return this.cart.items;
  }

  getTotal () : number {
    return this.cart.getTotal();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../../interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: '[table-row]',
  templateUrl: './cart-table-row.component.html',
  styleUrls: ['./cart-table-row.component.scss']
})
export class CartTableRowComponent implements OnInit {
  @Input() product: CartItem = {
    id: '',
    images: [],
    title: '',
    rating: 0,
    price: 0,
    category: '',
    brand: '',
    quantity: 1
  };

  constructor(private cart : CartService) {}

  ngOnInit(): void {
  }

  getSubtotal () : number {
    return this.product.price * this.product.quantity;
  }

  onQuantityChange (value: string) {
    this.cart.changeQuantity(this.product.id, Number(value));
  }

  onRemoveClick () {
    this.cart.removeFromCart(this.product.id);
  }

}

import { Injectable } from '@angular/core';
import { CartItem, Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  constructor() { }

  addToCart (product: Product) : void {
    const {
      inCart,
      index
    } = this.checkIfInCart(product.id);

    if(inCart) {
      this.items[index].quantity++;
    } else {
      this.items.push({...product, quantity: 1});
    }

    const currentQuantity = inCart? this.items[index].quantity : 1;
    alert(`${product.title} has been added to the cart! Current quantity: ${currentQuantity}`)
  }

  removeFromCart (id: string) : void {
    const {
      inCart,
      index
    } = this.checkIfInCart(id);

    if(!inCart) return;

    this.items.splice(index, 1);
  }

  checkIfInCart (id: string) : {inCart: boolean, index: number} {
    const index = this.items.findIndex(item => item.id === id);

    return {
      inCart: index >= 0,
      index
    }
  }

  changeQuantity (id: string, quantity : number) {
    const {
      inCart,
      index
    } = this.checkIfInCart(id);

    if(!inCart || quantity <= 0) return;
    
    this.items[index].quantity = quantity;
  }

  getTotal () : number {
    return this.items.reduce((prev : number, curr : CartItem) => {
      return prev + curr.price * curr.quantity;
    }, 0)
  }
}



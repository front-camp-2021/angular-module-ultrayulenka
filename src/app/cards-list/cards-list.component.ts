import { Component } from '@angular/core';
import { Product } from '../../interfaces';
import { products } from '../../mock-data/products';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
  products: Product[];

  constructor () { 
    this.products = [...products]
  }

}

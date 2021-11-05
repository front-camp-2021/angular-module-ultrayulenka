import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces';

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

  constructor () {
  }
}

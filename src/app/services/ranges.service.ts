import { Injectable } from '@angular/core';
import { Slider } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RangesService {
  priceRange: Slider = {
    title: "Price",
    min: 0,
    max: 85000,
    precision: 0,
    selected: {
      from: 0,
      to: 85000
    },
    prefix: 'UAH'
  }

  ratingRange: Slider = {
    title: 'Rating',
    min: 0, 
    max: 5,
    precision: 2,
    selected: {
      from: 0,
      to: 5
    }
  }

  constructor() { }

  changeSelectedRange (from: number, to: number, title: string) {
    switch(title) {
      case 'Price': {
        this.priceRange.selected = { from, to }
        break;
      }

      case 'Rating': {
        this.ratingRange.selected = { from, to }
        break;
      }

      default: return;
    }
  }

  reset () {
    this.priceRange.selected = {
      from: this.priceRange.min,
      to: this.priceRange.max
    }

    this.ratingRange.selected = {
      from: this.ratingRange.min,
      to: this.ratingRange.max
    }
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { Slider } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RangesService {
  ranges: {priceRange: Slider, ratingRange: Slider} = {
    priceRange: {
      title: "Price",
      min: 0,
      max: 85000,
      precision: 0,
      selected: {
        from: 0,
        to: 85000
      },
      prefix: 'UAH'
    },
  
    ratingRange: {
      title: 'Rating',
      min: 0, 
      max: 5,
      precision: 2,
      selected: {
        from: 0,
        to: 5
      }
    }
  }

  rangesChanged: EventEmitter<void> = new EventEmitter();

  constructor() { }

  changeSelectedRange (from: number, to: number, title: string) {
    switch(title) {
      case 'Price': {
        this.ranges.priceRange.selected = { from, to };
        this.rangesChanged.emit();
        break;
      }

      case 'Rating': {
        this.ranges.ratingRange.selected = { from, to };
        this.rangesChanged.emit();
        break;
      }

      default: return;
    }
  }

  reset () {
    this.ranges.priceRange.selected = {
      from: this.ranges.priceRange.min,
      to: this.ranges.priceRange.max
    }

    this.ranges.ratingRange.selected = {
      from: this.ranges.ratingRange.min,
      to: this.ranges.ratingRange.max
    }

    this.rangesChanged.emit();
  }
}

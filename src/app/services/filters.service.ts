import { Injectable } from '@angular/core';
import { ElectronicsService } from './electronics.service';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  selected : string[] = [];

  constructor() { }

  addFilter (value : string) {
    this.selected.push(value);
  }

  removeFilter (value : string) {
    const index = this.selected.findIndex(item => item === value);
    if(index < 0) return;
    this.selected = [...this.selected.slice(0, index), ...this.selected.slice(index + 1)];
  }

  reset () {
    this.selected = [];
  }
}

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  selected : string[] = [];
  selectedFiltersUpdated: EventEmitter<void> = new EventEmitter();

  constructor() { }

  addFilter (value : string) {
    this.selected.push(value);
    this.selectedFiltersUpdated.emit();
  }

  removeFilter (value : string) {
    const index = this.selected.findIndex(item => item === value);
    if(index < 0) return;
    this.selected = [...this.selected.slice(0, index), ...this.selected.slice(index + 1)];
    this.selectedFiltersUpdated.emit();
  }

  reset () {
    this.selected = [];
    this.selectedFiltersUpdated.emit();
  }
}

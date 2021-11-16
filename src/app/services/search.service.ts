import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  query = '';

  searchQueryChanged: EventEmitter<void> = new EventEmitter();

  constructor() { }

  changeSearchQuery (value : string) {
    this.query = value.trim();
    this.searchQueryChanged.emit();
  }

  reset () {
    this.query = '';
    this.searchQueryChanged.emit();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  query = '';

  constructor() { }

  changeSearchQuery (value : string) {
    this.query = value.trim();
  }

  reset () {
    this.query = '';
  }
}

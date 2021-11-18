import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from '../models'
import { FiltersService } from './filters.service';
import { SearchService } from './search.service';
import { PagesService } from './pages.service';
import { RangesService } from './ranges.service';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsService {
  apiBase = 'http://localhost:3001/products';
  products : Product[] = [];
  totalFound = 100;

  constructor(
    private http: HttpClient,
    private filters: FiltersService,
    private rangesService: RangesService,
    private search: SearchService,
    private pages: PagesService
  ) { }

  getAllProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiBase);
  }

  getFilteredProducts (): Observable<any> {
    return this.http.get<Product[]>(this.apiBase, { observe: "response", params: this.prepareParams() })
  }

  prepareParams (): HttpParams {
    let params =  new HttpParams();

    params = params.set('_page', this.pages.page);
    params = params.set('_limit', this.pages.pageLimit);

    if(this.filters.selected.length > 0) {
      const entries = this.filters.selected.map(filter => filter.split('='));
        entries.forEach(entry => {
            const [key, value] = entry;
            params = params.append(key, value);
        });
    }

    if(this.search.query && this.search.query.length > 0) {
      console.log(this.search.query);
      params = params.set('q', this.search.query.toLowerCase());
    }

    if(this.rangesService) {
      for(let range of Object.values(this.rangesService.ranges)) {
        const {
          min,
          max,
          selected: {from, to},
          title
        } = range;
        const name = title.toLowerCase();

        if(from !== min) {
          params = params.set(`${name}_gte`, from);
        }

        if(to !== max) {
          params = params.set(`${name}_lte`, to)
        }
      }

    }

    return params;
  }
}

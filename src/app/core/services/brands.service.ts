import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from '../models'

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  apiBase = 'http://localhost:3001/brands';

  constructor(private http: HttpClient) { }

  getAllBrands (): Observable<string[]> {
    return this.http.get<string[]>(this.apiBase);
  }
}
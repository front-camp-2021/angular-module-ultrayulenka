import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from '../../interfaces'

@Injectable({
  providedIn: 'root'
})
export class ElectronicsService {
  apiBase = 'http://localhost:3001/products';

  constructor(private http: HttpClient) { }

  getAllProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiBase);
  }
}

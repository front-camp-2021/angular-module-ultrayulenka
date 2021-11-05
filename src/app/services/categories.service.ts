import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from '../../interfaces'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiBase = 'http://localhost:3001/categories';

  constructor(private http: HttpClient) { }

  getAllCategories (): Observable<string[]> {
    return this.http.get<string[]>(this.apiBase);
  }
}
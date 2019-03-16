import { Injectable } from '@angular/core';
import {Product} from '../models/Product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class MainJsonService {

  productsUrl = 'https://jsonplaceholder.typicode.com/photos';
  categoriesUrl = 'https://jsonplaceholder.typicode.com/photos';
  productsSelectedByCategoryUrl = 'https://jsonplaceholder.typicode.com/photos';


  constructor(
    private http: HttpClient
  ) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
  getProductById(id): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + '/' + id);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getProductsByCategories(categoryId): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsSelectedByCategoryUrl + '/' + categoryId);
  }
}

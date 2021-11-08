import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../_models/Product';
import { _url } from '../_utils/url';
import { IResponse } from '../_models/Response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IResponse> {
    return this.http.get<IResponse>(`${_url}/products`)
  }

  getProductById(productId:string): Observable<IProduct> {
    return this.http.get<IProduct>(`${_url}/products?productId=${productId}`)
  }

}

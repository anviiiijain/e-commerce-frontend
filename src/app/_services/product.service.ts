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

  getCategories():Observable<IResponse> {
    return this.http.get<IResponse>(`${_url}/user/category-products`)
  }

  getProductById(productId:string): Observable<IResponse> {
    return this.http.get<IResponse>(`${_url}/products?productId=${productId}`)
  }

  getProductByCategory(categoryId:string): Observable<IResponse> {
    return this.http.get<IResponse>(`${_url}/category-products`)
  }


  getReviewsById(productId:string): Observable<IResponse> {
    return this.http.get<IResponse>(`${_url}/user/reviews/${productId}`)
  }

  getFAQsById(productId:string): Observable<IResponse> {
    return this.http.get<IResponse>(`${_url}/user/faqs/${productId}`)
  }

  addProductToCart(productId:string): Observable<IResponse> {
    return this.http.post<IResponse>(`${_url}/user/cart`, {
      productId
    })
  }

  addProductToWishlist(productId:string): Observable<IResponse> {
    return this.http.post<IResponse>(`${_url}/user/wishlist`, {
      productId
    })
  }

  removeProductFromCart(productId:string) {
    return this.http.delete(`${_url}/user/cart?productId=${productId}`)
  }

  removeProductFromWishlist(productId:string) {
    return this.http.delete(`${_url}/user/wishlist?productId=${productId}`)
  }



}

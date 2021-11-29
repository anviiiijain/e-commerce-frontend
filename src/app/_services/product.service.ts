import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _url } from '../_utils/url';
import { IResponse } from '../_models/Response';
import { IProduct } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  searchOption:IProduct[]=[]
  resultOption:IProduct[]=[]

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IResponse> {
    return this.http.get<IResponse>(`${_url}/products`)
  }

  getCategories(): Observable<IResponse> {
    return this.http.get<IResponse>(`${_url}/categories`)
  }

  getCategoriesProducts():Observable<IResponse> {
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

  filteredListProducts() {
    let posts = this.resultOption;
    console.log(posts)
        let filteredPostsList = [];
        for (let post of posts) {
            for (let options of this.searchOption) {
                if (options.productName === post.productName) {
                  filteredPostsList.push(post);
                }
            }
        }
        console.log(filteredPostsList);
        return filteredPostsList;
  }

}

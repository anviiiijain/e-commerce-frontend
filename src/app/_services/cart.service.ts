import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _url } from '../_utils/url';
import { IResponse } from '../_models/Response';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCart(): Observable<IResponse> {
    return this.http.get<IResponse>(`${_url}/user/cart`)
  }
  decreaseQtyfromCart(productId:string): Observable<IResponse> {
    return this.http.post<IResponse>(`${_url}/user/decreaseQtyfromCart`, {
      productId
    })
  }
}

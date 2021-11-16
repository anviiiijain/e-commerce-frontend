import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _url } from '../_utils/url';
import { IResponse } from '../_models/Response';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist(): Observable<IResponse> {
    return this.http.get<IResponse>(`${_url}/user/wishlist`)
  }
}

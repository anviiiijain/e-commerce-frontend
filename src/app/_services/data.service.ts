import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { _url } from '../_utils/url';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  stripePayment(data: any) {
    console.log(data);
    return this.http.post(`${_url}/user/stripe/payment`, {
      amount: data.amount,
      token: data.token
    })
  }

}

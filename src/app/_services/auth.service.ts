import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { IResponse } from '../_models';
import { _url } from '../_utils/url';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<IResponse> {
    console.log(email, password);
    return this.http
      .post<IResponse>(`${_url}/auth/login`, {
        userEmail: email,
        password,
      })
      .pipe(
        tap((res) => {
          console.log(res);
          if (res.code === 200) {
            localStorage.setItem('e-comm-access-token', res.data.accessToken);
            this.router.navigate(['/']);
          }
        }),
        shareReplay()
      );
  }

  logout() {
    localStorage.removeItem('e-comm-access-token');
  }

  public isLoggedIn() {
    return localStorage.getItem('e-comm-access-token') !== undefined;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  signup(email: string, password: string): Observable<IResponse> {
    console.log(email, password);
    return this.http
      .post<IResponse>(`${_url}/auth/register`, {
        userEmail: email,
        password,
        role: "user"
      })
      .pipe(
        tap((res) => {
          console.log(res);
          if (res.code === 200) {
            this.router.navigate(['/login']);
          }
        }),
        shareReplay()
      );
  }
}

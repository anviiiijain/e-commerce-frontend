import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private _authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
      const url: string = state.url;
  
      return this.checkLogin(url);
    }
  
    checkLogin(url: string): true|UrlTree {
      if (this._authService.isLoggedIn()) { return true; }
  
      // Store the attempted URL for redirecting
      this._authService.redirectUrl = url;
  
      // Redirect to the login page
      return this.router.parseUrl('/login');
    }
  }

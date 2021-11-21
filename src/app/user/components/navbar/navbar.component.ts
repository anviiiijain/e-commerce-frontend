import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  isLoggedOut:boolean;
  value = 'Clear me';
  navbarIsActive:boolean = false;
  constructor(private _authService: AuthService,private snackbar: MatSnackBar,private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn=this._authService.isLoggedIn();
    console.log(this.isLoggedIn);
    console.log('local',localStorage.getItem('e-comm-access-token'))
    this.isLoggedOut=this._authService.isLoggedOut();
  }

  toggleNavbar(){
    this.navbarIsActive=!this.navbarIsActive;
    console.log(this.navbarIsActive)
  }

  Logout(){
    this._authService.logout();
    let snackBarRef = this.snackbar.open("Logged Out", 'Go to Login', {
      duration: 3000
    })
    this.router.navigate(['/']);
    snackBarRef.onAction().subscribe(() => {
      this.router.navigate(['/login']);
    })
  }

}

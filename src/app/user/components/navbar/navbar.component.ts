import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  value = 'Clear me';
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn=this._authService.isLoggedIn();
  }

}

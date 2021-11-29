import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string=""
  password:string=""

  constructor(private _authService: AuthService,private snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("email", this.email)
    console.log("password", this.password)

    if(this.email && this.password) {
      this._authService.login(this.email, this.password).subscribe(data => {
        // console.log("authservice component",data);
      }, error => {
        console.log(error.message);
        let snackBarRef = this.snackbar.open(error.error.message, 'Try Again', {
          duration: 3000
        })
  
        snackBarRef.onAction().subscribe(() => {
          window.location.reload()
        })
      })
    }
  }
}
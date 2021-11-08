import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email:string=""
  password:string=""

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("email", this.email)
    console.log("password", this.password)

    if(this.email && this.password) {
      this._authService.signup(this.email, this.password).subscribe(data => {
        console.log("authservice component",data);
      }, error => {
        console.log(error);
      })
    }
  }
}

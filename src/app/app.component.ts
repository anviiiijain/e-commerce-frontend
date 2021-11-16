import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce-frontend';
  path:string
    constructor() {
    }

    ngOnInit() {
      this.path= window.location.pathname
        console.log(this.path)
    }
}
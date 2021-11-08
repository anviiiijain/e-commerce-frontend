import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public quant=2;
  public total="3,56,829";

  constructor() { }

  ngOnInit(): void {
  }

  increaseQuant(){
    this.quant=this.quant+1;
  }

  decreaseQuant(){
    if(this.quant>0){
    this.quant=this.quant-1;
    }
  }

}

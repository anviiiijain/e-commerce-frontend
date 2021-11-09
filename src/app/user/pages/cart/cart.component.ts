import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../_services';
import { CartService } from '../../../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData:any
  public quant=2;
  public total="3,56,829";
  
  constructor(private _cartService: CartService, private _productService: ProductService) {}

  ngOnInit(): void {
    this._cartService.getCart().subscribe(data => {
      this.cartData= data.data
    }, error => {
      console.log(error)
    })
  }

  addToCart(productId:string) {
    this._productService.addProductToCart(productId).subscribe(data => {
      // logic for animation based on code
      console.log(data);
    })
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

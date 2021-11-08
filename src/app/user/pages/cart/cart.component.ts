import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData:any

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.getCart().subscribe(data => {
      this.cartData= data.data
    }, error => {
      console.log(error)
    })
  }

}

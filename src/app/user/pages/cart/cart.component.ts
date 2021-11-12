import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  
  constructor(private _cartService: CartService, private _productService: ProductService, private snackbar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this._cartService.getCart().subscribe(data => {
      this.cartData= data.data
    }, error => {
      console.log(error)
    })
  }

  addToWishlist(productId:string) {
    this._productService.addProductToWishlist(productId).subscribe(data => {
      // logic for animation based on code
      let snackBarRef = this.snackbar.open("Added to Wishlist", 'Go to Wishlist', {
        duration: 3000
      })
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/wishlist']);
      })
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

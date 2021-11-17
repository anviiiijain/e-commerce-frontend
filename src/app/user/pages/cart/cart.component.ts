import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductService } from '../../../_services';
import { CartService } from '../../../_services/cart.service';
import { CheckoutService } from 'src/app/_services/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData:any 
  public totalAmount = 0;
  
  constructor(private _cartService: CartService, private _productService: ProductService, private snackbar: MatSnackBar, private _checkoutService: CheckoutService ,private router: Router) {}

  ngOnInit(): void {
    this._cartService.getCart().subscribe(data => {
      console.log(this.cartData)
      this.cartData= data.data
    }, error => {
      console.log(error)
    });

    this.getTotal();

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

  removeFromCart(productId:string) {
   
    this._productService.removeProductFromCart(productId).subscribe(data => {

      // logic for animation based on code
      let snackBarRef = this.snackbar.open("Removed from Cart", 'Dismiss', {
        duration: 3000
      })
      this.cartData = this.cartData.filter((cartItem:any) => cartItem.product.productId !== productId)
      snackBarRef.onAction().subscribe(() => {
        
      })
    },error=>{
      console.log(error);
      let snackBarRef = this.snackbar.open(error.error.message, 'Try Again', {
        duration: 3000
      })
      snackBarRef.onAction().subscribe(() => {
        window.location.reload();
      })
    
    })
  
  }
  increaseQuant(productId:string,qty:any){
    this._productService.addProductToCart(productId).subscribe(data => {
      // logic for animation based on code
      // let snackBarRef = this.snackbar.open("Quantity Increased", '', {
      //   duration: 1000
      // })
    })
  }

  decreaseQuant(productId:string,qty:any){
    if(qty>0){
      this._cartService.decreaseQtyfromCart(productId).subscribe(data=>{
        // let snackBarRef = this.snackbar.open("qty decreased", '', {
        //   duration: 1000
        // })
      })
    }
    else{
      this.removeFromCart(productId);
    }
  }

  getTotal(){
    let total = 0;
    // console.log(this.cartData);
    for (var i = 0; i < this.cartData.length; i++) {
        if (this.cartData[i].product.discountedPrice) {
          // total += this.cartData[i].product.discountedPrice ;
           total += this.cartData[i].product.discountedPrice * this.cartData[i].qty;
          
          }
        }
    this.totalAmount = total;
    this._checkoutService.setTotal(total)
    return this.totalAmount
  }

  gotoProduct(productId:string): void {
    this.router.navigate(['/product', productId]);
  }
}

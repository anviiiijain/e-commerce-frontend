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
  public quant=1;
  public totalAmount = 0;
  
  constructor(private _cartService: CartService, private _productService: ProductService, private snackbar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this._cartService.getCart().subscribe(data => {
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
  increaseQuant(){
    this.quant=this.quant+1;
  }

  decreaseQuant(){
    if(this.quant>0){
    this.quant=this.quant-1;
    }
  }

  getTotal(){
    let total = 0;
    for (var i = 0; i < this.cartData.length; i++) {
        if (this.cartData[i].product.discountedPrice) {
            total += this.cartData[i].product.discountedPrice;
          }
        }
    this.totalAmount = total;
    return this.totalAmount;
  }
}

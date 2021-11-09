import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../_services/product.service";
import {MatSnackBar} from "@angular/material/snack-bar"
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products:any = []
  
  constructor(private _productService: ProductService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.products= data.data
    }, error => {
      console.log(error);
    })
  }

  addToCart(productId:string) {
    this._productService.addProductToCart(productId).subscribe(data => {
      // logic for animation based on code
      console.log("cart dataaaa",data);
      let snackBarRef = this.snackbar.open("Added to Cart", 'Go to Cart', {
        duration: 3000
      })

      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/cart']);
      })
    })
  }

  addToWishlist(productId:string) {
    this._productService.addProductToWishlist(productId).subscribe(data => {
      // logic for animation based on code
      console.log(data);
      let snackBarRef = this.snackbar.open("Added to Wishlist", 'Go to Wishlist', {
        duration: 3000
      })

      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/wishlist']);
      })
    })
  }

  // openSnackBar(message:string) {
  //   this.snackbar.open(message, 'Dismiss', {
  //     duration: 2000
  //   })
  // }
}
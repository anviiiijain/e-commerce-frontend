import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/_services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId:string="29974588-370a-40d8-8bbe-004964b79a25"
  productDetails:any;
  productReviews:any;
  productFAQs:any;
  stars:number=3.5;
  constructor(private _productService: ProductService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this._productService.getProductById(this.productId).subscribe(data => {
      this.productDetails= data.data
    }, error => {
      console.log(error);
    })

    this._productService.getReviewsById(this.productId).subscribe(data => {
      this.productReviews= data.data
    }, error => {
      console.log(error);
    })

    this._productService.getFAQsById(this.productId).subscribe(data => {
      this.productFAQs= data.data
    }, error => {
      console.log(error);
    })
  }

  addToCart(productId:string) {
    this._productService.addProductToCart(productId).subscribe(data => {
      // logic for animation based on code
      let snackBarRef = this.snackbar.open("Added to Cart", 'Go to Cart', {
        duration: 3000
      });

      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/cart']);
      })
    })
  }

  addToWishlist(productId:string) {
    this._productService.addProductToWishlist(productId).subscribe(data => {
      // logic for animation based on code
      this.snackbar.open("Added to Wishlist", 'Go to Wishlist', {
        duration: 3000
      })
      console.log(data);
    })
  }
}

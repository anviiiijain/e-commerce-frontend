import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import { map } from 'rxjs-compat/operator/map';
import { ProductService } from 'src/app/_services';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId:string=""
  productDetails:any;
  productReviews:any;
  productFAQs:any;
  stars:number=3.5;
  constructor(private _productService: ProductService, private snackbar: MatSnackBar, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    console.log("productid",this.productId);
    this._productService.getProductById(this.productId).subscribe(data => {
      this.productDetails= data.data
      console.log("prod details helooooooooooo");
      console.log("prod details", this.productDetails);
    }, error => {
      console.log("bieee");
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
      let snackBarRef = this.snackbar.open("Added to Wishlist", 'Go to Wishlist', {
        duration: 3000
      })
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/wishlist']);
      })
      console.log(data);
    })
  }
}

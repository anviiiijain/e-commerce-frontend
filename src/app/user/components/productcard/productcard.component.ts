import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/_models';
import { ProductService } from 'src/app/_services';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
  @Input() product:IProduct;
  @Input() cardType:string;

  constructor(private _productService: ProductService,private snackbar:MatSnackBar,private router: Router) { }

  ngOnInit(): void {
    console.log('cardcomponent',this.product)
  }
  gotoProduct(productId:string): void {
    this.router.navigate(['/product', productId]);
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
      console.log(data);
      let snackBarRef = this.snackbar.open("Added to Wishlist", 'Go to Wishlist', {
        duration: 3000
      })

      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/wishlist']);
      })
    })
  }

}

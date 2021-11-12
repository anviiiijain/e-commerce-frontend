import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../_services/product.service";
import {MatSnackBar} from "@angular/material/snack-bar"
import { Router } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material/icon';

const WISHLIST_ICON = `
<svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6071 29.8779L15.5643 30.9053L13.3075 28.6821C5.29187 20.8169 0 15.6127 0 9.26319C0 4.05898 3.76657 3.05176e-05 8.56038 3.05176e-05C11.2686 3.05176e-05 13.8678 1.36424 15.5643 3.50319C17.2608 1.36424 19.8601 3.05176e-05 22.5683 3.05176e-05C27.3621 3.05176e-05 31.1287 4.05898 31.1287 9.26319C31.1287 11.6716 30.3504 13.9116 28.9808 16.1853C28.0158 15.68 26.9418 15.3432 25.8212 15.2253C27.2376 13.1369 28.0158 11.2 28.0158 9.26319C28.0158 5.89477 25.6811 3.36845 22.5683 3.36845C20.1714 3.36845 17.8367 5.05266 17.0118 7.34319H14.1168C13.2919 5.05266 10.9573 3.36845 8.56038 3.36845C5.44751 3.36845 3.11287 5.89477 3.11287 9.26319C3.11287 14.1306 8.00006 18.9306 15.3931 26.1895L15.5643 26.3579L15.6266 26.2906C15.7511 27.5706 16.0935 28.7832 16.6071 29.8779ZM23.3465 18.5263V23.579H18.6772V26.9474H23.3465V32H26.4594V26.9474H31.1287V23.579H26.4594V18.5263H23.3465Z" fill="#BD2F2F"/>
</svg>
`;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products:any = []
  
  constructor(private _productService: ProductService,iconRegistry: MatIconRegistry,sanitizer: DomSanitizer, private snackbar: MatSnackBar, private router: Router) { 
    iconRegistry.addSvgIconLiteral('wishlist-icon', sanitizer.bypassSecurityTrustHtml(WISHLIST_ICON));
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.products= data.data
      console.log(this.products);
      console.log(this.products[0].productImages[0].productImageUrl);

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
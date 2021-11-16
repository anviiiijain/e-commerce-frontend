import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import flickity from "flickity";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  stars=3.5;
  categories:any;
  flick:any;
  constructor(private _productService: ProductService,private snackbar:MatSnackBar,private cdr: ChangeDetectorRef,private router: Router) { }

  ngOnInit(): void {
    this._productService.getCategories().subscribe(data => {
      this.categories= data.data.filter((category:any) => category.products.length>0);
      console.log("Categories", this.categories);
      this.cdr.detectChanges();
      document.querySelectorAll(".catCarousel").forEach(card=>{
        this.flick=new flickity(card,{"draggable": false,"contain": true,"initialIndex": 1,"pageDots": false})
      })
    }, error => {
      console.log(error)
    })
  }

  prepend(){
    console.log("teest");
  this.flick.prepend(`<div class="cat-card"></div>`);
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

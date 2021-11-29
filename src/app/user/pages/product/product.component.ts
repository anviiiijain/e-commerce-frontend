import { Component, HostBinding, OnInit } from '@angular/core';
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

  productId:string="";
  productDetails:any;
  productReviews:any;
  productFAQs:any;
  stars: boolean[] = Array(5).fill(true);
  // stars:number; 
  displayFAQ: string = "";
  show: boolean = false;
  question: string = "Hello";
  disabled = false;
  rated: number;


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

  addToCart(question:string) {
    this._productService.addProductToCart(question).subscribe(data => {
      // logic for animation based on code
      let snackBarRef = this.snackbar.open("Added to Cart", 'Go to Cart', {
        duration: 3000
      });

      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/cart']);
      })
    })
  }

  addtoFAQs(productId:string, question: string) {
    console.log(this.question)
    this._productService.addFAQs(productId, question).subscribe(data => {
      let snackBarRef = this.snackbar.open("Question send successfully", 'Dismiss', {
        duration: 3000
      });
     
      console.log(data);
    }, error => {
      console.log(error.message)
    }
    )
    
  }

  addtoReviews(productId: string, reviewContent: string, stars: number){
    this._productService.addReviews(productId, reviewContent, stars).subscribe(data => {
      let snackBarRef = this.snackbar.open("Review added successfully", 'Dismiss', {
        duration: 3000
       
      });
      console.log(data);
    }, error => {
      console.log(error.message)
    }
    )
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
    }, error => {
      console.log(error.message)
    }
    )
  }

  onSubmit(val: string){
    this.show = true;
    this.displayFAQ = val;
  }

  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 1 : 1;
  }

  // Function to call when the rating changes.
  onChange = (rating: number) => {
  };

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {
  };


  get value(): any {
    if(!this.disabled){
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
    }
  }
  rate(rating: number) {
    if (!this.disabled) {
      this.writeValue(rating);
    }
  }

  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(rating: number): void {
    if (!this.disabled) {
      this.stars = this.stars.map((_, i) => rating > i);
      this.onChange(this.value);
      this.rated = rating;
    }

  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;


  }
}

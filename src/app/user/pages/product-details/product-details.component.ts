import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../_services/product.service"

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products:any = []
  
  constructor(private _productService: ProductService) { }

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
      console.log(data);
    })
  }

  addToWishlist(productId:string) {
    this._productService.addProductToWishlist(productId).subscribe(data => {
      // logic for animation based on code
      console.log(data);
    })
  }
}
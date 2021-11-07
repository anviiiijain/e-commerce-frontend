import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/utils/Product';
import {ProductService} from "../../../product.service"

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products:any = []
  description = 'Mi 11X 5G Cosmic Black 6GB RAM 128GB ROM | SD 870 | DisplayMate A+ rated E4 AMOLED';
  description2 = `Mi 11X 5G Cosmic Black 6GB RAM 128GB ROM | SD 870 | DisplayMate A+ rated E4 AMOLED
  Mi 11X 5G Cosmic Black 6GB RAM 128GB ROM | SD 870 | DisplayMate A+ rated E4 AMOLED
  Mi 11X 5G Cosmic Black 6GB RAM 128GB ROM | SD 870 | DisplayMate A+ rated E4 AMOLED `;
  
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.products= data
    }, error => {
      console.log(error)
    })
  }
}
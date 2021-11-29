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
  bigImage:any;
  showResults:boolean=false;
  constructor(private _productService: ProductService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._productService.getCategoriesProducts().subscribe(data => {
      this.categories= data.data.filter((category:any) => category.products.length>0);
      console.log("Categories", this.categories);
      this.cdr.detectChanges();
      document.querySelectorAll(".catCarousel").forEach(card=>{
        this.flick=new flickity(card,{"draggable": false,"contain": true,"initialIndex": 1,"pageDots": false})
      })
      document.querySelectorAll(".carousel").forEach(card=>{
        this.bigImage=new flickity(card,{ "autoPlay": 2000,"prevNextButtons": false,"pageDots": false})
      })
    }, error => {
      console.log(error)
    })
  }

  prepend(){
    console.log("teest");
  this.flick.prepend(`<div class="card-div"></div>`);
  this.bigImage.prepend(`<div class="carousel-cell"></div>`);
  }
}

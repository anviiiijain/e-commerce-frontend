import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private _productService: ProductService,private snackbar:MatSnackBar,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._productService.getCategories().subscribe(data => {
      this.categories= data.data.filter((category:any) => category.products.data.length>0);
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

}

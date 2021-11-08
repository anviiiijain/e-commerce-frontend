import { Component, OnInit } from '@angular/core';
import { StarsComponent } from '../../components/stars/stars.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  stars=3.5;
  constructor() { }

  ngOnInit(): void {
  }

}

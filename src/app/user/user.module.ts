import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }

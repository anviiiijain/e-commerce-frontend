import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';


@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
  ]
})
export class UserModule { }

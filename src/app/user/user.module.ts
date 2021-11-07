import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { StarsComponent } from './components/stars/stars.component';


@NgModule({
  declarations: [
    ProductComponent,
    StarsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }

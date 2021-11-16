import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/pages/login/login.component';
import { ProductComponent } from './user/pages/product/product.component';
import { SignupComponent } from './user/pages/signup/signup.component';
import { WishlistComponent } from "./user/pages/wishlist/wishlist.component";
import { ProductDetailsComponent } from "./user/pages/product-details/product-details.component";
import { CartComponent } from "./user/pages/cart/cart.component";
import {HomepageComponent} from "./user/pages/homepage/homepage.component"

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'product/:productId',
    component:ProductComponent
  },
  {
    path:'wishlist',
    component:WishlistComponent,
  },
  {
    path:'products',
    component: ProductDetailsComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  { 
    path: '',
    component: HomepageComponent 
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

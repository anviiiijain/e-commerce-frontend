import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/pages/login/login.component';
import { ProductComponent } from './user/pages/product/product.component';
import { SignupComponent } from './user/pages/signup/signup.component';
import { WishlistComponent } from "./user/pages/wishlist/wishlist.component";
import { ProductDetailsComponent } from "./user/pages/product-details/product-details.component";
import { CartComponent } from "./user/pages/cart/cart.component";
import {HomepageComponent} from "./user/pages/homepage/homepage.component"
import { PaymentComponent } from './user/pages/payment/payment.component';
import { CheckoutComponent } from './user/pages/checkout/checkout.component';
import { UserGuard } from './_guard/user.guard';

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
    canActivate:[UserGuard]
  },
  {
    path:'products',
    component: ProductDetailsComponent
  },
  {
    path:'cart',
    component: CartComponent,
    canActivate:[UserGuard]
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
  {
    path:'pay',
    component: PaymentComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate:[UserGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

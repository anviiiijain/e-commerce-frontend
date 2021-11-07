import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/pages/login/login.component';
import { ProductComponent } from './user/pages/product/product.component';
import { SignupComponent } from './user/pages/signup/signup.component';
import { WishlistComponent } from "./user/pages/wishlist/wishlist.component"
import { ProductDetailsComponent } from "./user/pages/product-details/product-details.component"

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
    path:'product',
    component:ProductComponent
  }
    path:'wishlist',
    component:WishlistComponent
  },
  {
    path:'products',
    component: ProductDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

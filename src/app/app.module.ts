import { NavbarComponent } from './user/components/navbar/navbar.component';
import { WishlistComponent } from './user/pages/wishlist/wishlist.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './user/pages/signup/signup.component';
import { LoginComponent } from './user/pages/login/login.component';
import { ProductDetailsComponent } from './user/pages/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './user/components/footer/footer.component';
import { ProductComponent } from './user/pages/product/product.component';
import { StarsComponent } from './user/components/stars/stars.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './user/loader/loader.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductService } from './_services/product.service';
import { WishlistService } from './_services/wishlist.service';
import { AuthService } from './_services';
import { AuthInterceptor } from "./_utils/AuthInterceptor"
import { CartComponent } from './user/pages/cart/cart.component';
import {HomepageComponent} from "./user/pages/homepage/homepage.component"
import { SafePipe } from './_utils/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoaderComponent,
    FooterComponent,
    LoginComponent,
    ProductComponent,
    StarsComponent,
    NavbarComponent,
    WishlistComponent,
    ProductDetailsComponent,
    CartComponent,    
    HomepageComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [ProductService, WishlistService, AuthService, {
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductService } from './_services/product.service';
import { WishlistService } from './_services/wishlist.service';
import { AuthService } from './_services';
import { AuthInterceptor } from "./_utils/AuthInterceptor"
import { CartComponent } from './user/pages/cart/cart.component';
import {HomepageComponent} from "./user/pages/homepage/homepage.component"
import { SafePipe } from './_utils/safe.pipe';
import { NgxStripeModule } from "ngx-stripe"
import { PaymentComponent } from './user/pages/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    FooterComponent,
    LoginComponent,
    ProductComponent,
    StarsComponent,
    NavbarComponent,
    WishlistComponent,
    ProductDetailsComponent,
    CartComponent,    
    HomepageComponent,
    SafePipe,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51H7jhsFnqDkYLAYJdj5aMcS9QfZebNfuxkm8uatrjs58VF6V3fWbCGwGJ8YYOuBC3wpIF0CmCaT2GueuCAvTPZDJ00TKtb4nJT')
  ],
  providers: [ProductService, WishlistService, AuthService, {
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

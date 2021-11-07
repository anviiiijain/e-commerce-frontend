import { NavbarComponent } from './user/navbar/navbar.component';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from './product.service';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    WishlistComponent,
    ProductDetailsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

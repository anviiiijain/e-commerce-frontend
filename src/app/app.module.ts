import { NavbarComponent } from './user/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './user/pages/signup/signup.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './user/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    LoaderComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
    

   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

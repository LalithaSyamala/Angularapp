import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { TelivisionsComponent } from './telivisions/telivisions.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { AnothertestComponent } from './anothertest/anothertest.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    FooterComponent,
    MobilesComponent,
    BikesComponent,
    TelivisionsComponent,
    TestComponent,
    Test1Component,
    AnothertestComponent,
    UserdetailsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { RegisterComponent } from './register/register.component';
import { TelivisionsComponent } from './telivisions/telivisions.component';
import { TestComponent } from './test/test.component';
import { AnothertestComponent} from './anothertest/anothertest.component'
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'test',component:TestComponent},
  {path:'anothertest',component:AnothertestComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserdetailsComponent},
  {path:'product-component',component:ProductComponentComponent,children:[
    {path:'mobiles',component:MobilesComponent},
    {path:'bikes',component:BikesComponent},
    {path:'telivisions',component:TelivisionsComponent}
  ]},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

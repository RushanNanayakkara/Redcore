import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'
import { SidemenuComponent } from './sidemenu/sidemenu.component'
import {LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { MydesignsComponent } from './mydesigns/mydesigns.component'
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { AboutComponent } from './about/about.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { QuotationComponent } from './quotation/quotation.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'sidemenu', component:SidemenuComponent},
  {path:'register', component:RegisterComponent},
  {path:'mydesigns', component:MydesignsComponent},
  {path:'emailverification', component:EmailVerificationComponent},
  {path:'passwordrecovery', component:RecoverPasswordComponent},
  {path:'about', component:AboutComponent},
  {path:'gallery', component:ProductGalleryComponent},
  {path:'cdash', component:CustomerDashboardComponent},
  {path:'quotation', component:QuotationComponent},
  {path:'order', component:OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

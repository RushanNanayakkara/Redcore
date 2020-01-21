import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'
import { SidemenuComponent } from './sidemenu/sidemenu.component'
import {LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { MydesignsComponent } from './mydesigns/mydesigns.component'
import { DesignerComponent } from './designer/designer.component'

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'sidemenu', component:SidemenuComponent},
  {path:'register', component:RegisterComponent},
  {path:'mydesigns', component:MydesignsComponent},
  {path:'designer3D', component:DesignerComponent},
  {path:'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

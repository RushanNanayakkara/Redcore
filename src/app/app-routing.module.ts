import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'
import { SidemenuComponent } from './sidemenu/sidemenu.component'

const routes: Routes = [
  {path:'navbar', component:NavbarComponent},
  {path:'sidemenu', component:SidemenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {GarmentComponent} from './garment/garment.component';
import {CustomerComponent} from './customer/customer.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'garment',
    component:GarmentComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

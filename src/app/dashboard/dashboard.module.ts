import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminComponent } from './admin/admin.component';
import { GarmentComponent } from './garment/garment.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [AdminComponent, GarmentComponent, CustomerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

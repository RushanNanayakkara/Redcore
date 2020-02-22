import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatDividerModule,
  MatTableModule,
  MatTabsModule,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register/register.component';
import { MydesignsComponent } from './mydesigns/mydesigns.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { AboutComponent } from './about/about.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { QuotationComponent } from './quotation/quotation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderComponent } from './order/order.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { LinechartComponent } from './linechart/linechart.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from '@angular/material/list';
import { GarmentDashboardComponent } from './garment-dashboard/garment-dashboard.component';
import { RedcoreNetworkComponent } from './redcore-network/redcore-network.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerAccountComponent } from './account-template/customer-account/customer-account.component';
import { AccountTemplateComponent } from './account-template/account-template.component';
import { DeleteOrderConformationComponent } from './delete-order-conformation/delete-order-conformation.component';
import { AdminAccountComponent } from './account-template/admin-account/admin-account.component';
import { GarmentAccountComponent } from './account-template/garment-account/garment-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    LoginComponent,
    RegisterComponent,
    MydesignsComponent,
    EmailVerificationComponent,
    RecoverPasswordComponent,
    AboutComponent,
    ProductGalleryComponent,
    ImageModalComponent,
    CustomerDashboardComponent,
    QuotationComponent,
    QuotationFormComponent,
    OrderFormComponent,
    OrderComponent,
    AdminDashboardComponent,
    LinechartComponent,
    FooterComponent,
    GarmentDashboardComponent,
    RedcoreNetworkComponent,
    PaymentComponent,
    CustomerAccountComponent,
    AccountTemplateComponent,
    DeleteOrderConformationComponent,
    AdminAccountComponent,
    GarmentAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatListModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents:[
    ImageModalComponent,
    OrderFormComponent,
    QuotationFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

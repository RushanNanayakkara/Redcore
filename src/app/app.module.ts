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
    AngularFontAwesomeModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  entryComponents:[
    ImageModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

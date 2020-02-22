import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCoffee,
  faCartArrowDown,
  faFileInvoiceDollar,
  faUser,
  faNetworkWired,
  faAddressCard
 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //FONTAWSOME ICONS
  faCoffee = faCoffee;
  faCartArrowDown = faCartArrowDown
  faFileInvoiceDollar=faFileInvoiceDollar
  faUser = faUser
  faNetworkWired = faNetworkWired
  faAddressCard = faAddressCard


  title = 'Redcore-Client-Final';
  prevTab = "DashboardTab"
  tabStatus = {"DashboardTab":true,"DesignerTab":false,"ProductGalleryTab":false,"OrdersTab":false,"QuotationTab":false,"AccountTab":false,"RedcoreNetworkTab":false,"ContactUsTab":false,"Payment":false};
  noTemplateRoutes = [,
    '/',
    '/register',
    '/designer3D',
    '/emailverification',
    '/passwordrecovery',
    '/login'
  ]

  DashboardLink;
  user;

  constructor(private router:Router){
    this.user = localStorage.getItem('user');
    console.log(this.user)
  }

  setActiveTab(tabId) {
    this.tabStatus[this.prevTab] = false;
    this.tabStatus[tabId] = true;
    this.prevTab = tabId;
    if(tabId==="DashboardTab"){
      switch (JSON.parse(localStorage.getItem('user')).type) {
        case "ADMIN":
          this.router.navigate(["/adash"]) ;
          break;
        case "CUSTOMER":
          this.router.navigate(["/cdash"]) ;
          break;
        case "GARMENT":
          this.router.navigate(["/gdash"]) ;
          break;
        default:
          break;
      }
    }
  }
}

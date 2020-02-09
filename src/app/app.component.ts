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
  tabStatus = {"DashboardTab":true,"DesignerTab":false,"ProductGalleryTab":false,"OrdersTab":false,"QuotationTab":false,"AccountTab":false,"RedcoreNetworkTab":false,"ContactUsTab":false};
  noTemplateRoutes = [,
    '/',
    '/register',
    '/designer3D',
    '/emailverification',
    '/passwordrecovery'
  ]
  // designerURL = 'http://localhost:8080/';

  constructor(private router:Router){

  }

  setActiveTab(tabId) {
    // if(tabId=='DesignerTab'){
    //   window.location.href = this.designerURL;
    // }
    this.tabStatus[this.prevTab] = false;
    this.tabStatus[tabId] = true;
    this.prevTab = tabId;
  }



}

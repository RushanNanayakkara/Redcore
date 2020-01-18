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

  constructor(private router:Router){

  }

  setActiveTab(tabId) {
    this.tabStatus[this.prevTab] = false;
    this.tabStatus[tabId] = true;
    this.prevTab = tabId;
  }



}

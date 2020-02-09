import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  chartMonths = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
  chartData = [23,43,45,65,78,99,89,32,45,12,56,76]
  chartType = "line"

  OngoingCount = 10;
  LateOrders = 9;
  QuotationReqCount = 7;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  Notifications = [
    {id:"N001", title:"Notification title 1", body:"Notification body 1. This is a test notification body"},
    {id:"N002", title:"Notification title 2", body:"Notification body 2. This is a test notification body"},
    {id:"N003", title:"Notification title 3", body:"Notification body 3. This is a test notification body"},
    {id:"N004", title:"Notification title 4", body:"Notification body 4. This is a test notification body"},
    {id:"N005", title:"Notification title 5", body:"Notification body 5. This is a test notification body"},
  ]

  redcoreNetworkTableData=[
    {id:"G001",name:"Base Printers",ongoingCount:1,dueSoonCount:3,lateCount:1,status:"BUSY"}
  ]

  redcoreNetworkTableDisplayColumns = [
    "ID","Name","Ongoing","Due this week","Late","Status"
  ]

  QuotationRequests = [
    {
      id: "Q001",
      customerID: "C001",
      name: "Search 1",
      requestDate:"01-02-2020",
      issuedDate:"01-02-2020",
      validPeriod:90,
      status: "PENDING",
      designID: "D001",
      price100_300: 800,
      price300_500: 700,
      price500_1000: 600,
      priceAbove1000: 500,
      image:"https://www.rushordertees.com/design/ZoomImage.php?src=3082864_f&style=4980&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false"
    }
  ]

  QuotationTableDisplayedColumns = [
    "ID","CustomerID","Name","Date"
  ]

  constructor() { }

  ngOnInit() {
  }

  updateCounts(){
    //Enter code here to get the ongoing orders  count, late order count and idle garments
  }

  removeNotification(id){
    //Enter code to remove notification with the given input here
    //Update the notifications list
    console.log(id + " removed")
  }

  addNotificaton(title,body,target){
    if(target=='CUSTOMER'){
      //Add new notification for customers
      console.log("customer notification")
    }else if(target=="GARMENT"){
      //Add new notification for garments
      console.log("garment notification")
    }else{
      //Add new notification for all
      console.log("global notification")
    }
  }


}

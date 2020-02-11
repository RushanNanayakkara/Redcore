import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garment-dashboard',
  templateUrl: './garment-dashboard.component.html',
  styleUrls: ['./garment-dashboard.component.scss']
})
export class GarmentDashboardComponent implements OnInit {
  chartMonths = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
  chartData = [23,43,45,65,78,99,89,32,45,12,56,76]
  chartType = "line"

  OngoingCount = 10;
  LateOrders = 9;
  QuotationReqCount = 7;

  displayedColumns: string[] = ['OrderID', 'Name', 'GarmentID', 'DueDate'];
  Orders =[
    {id:"O001",name:"Order 1",customerID:"C001",garmentID:"G001",designID:"D001",quotationID:"Q001",
    amount:100,price:100000,paid:35000,placedDate:"06-08-2020",dueDate:"08-08-2020",status:"ONGOING"},
    {id:"O002",name:"Order 1",customerID:"C001",garmentID:"G001",designID:"D001",quotationID:"Q001",
    amount:100,price:100000,paid:35000,placedDate:"06-08-2020",dueDate:"08-01-2020",status:"ONGOING"},
    {id:"O003",name:"Order 1",customerID:"C001",garmentID:"G001",designID:"D001",quotationID:"Q001",
    amount:100,price:100000,paid:35000,placedDate:"06-08-2020",dueDate:"08-08-2020",status:"ONGOING"},
  ]

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
    this.initializeChartData();
  }

  initializeChartData(){
    //enter code to get last 12 month revenue data from server and update chart data variable
  }

  updateCounts(){
    //Enter code here to get the ongoing orders  count, late order count and quotation counts
  }

  checkIfNotLate(date){
    let parts = date.split('-');
    let month = parseInt(parts[1])-1
    return new Date(parts[2],month,parts[0])>new Date();
  }


}

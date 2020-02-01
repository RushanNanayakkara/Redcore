import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  ongoing_order_count = 5;
  complete_order_count = 2;
  quotation_count = 10;
  orders = [
    {id: "T001",status: "COMPLETE",date: "07-01-2020",estimatedDelivery:"02-02-2020"},
    {id: "T002",status: "ONGOING",date: "07-01-2020",estimatedDelivery:"02-02-2020"},
    {id: "T003",status: "PLACED",date: "07-01-2020",estimatedDelivery:"02-02-2020"},
    {id: "T004",status: "PLACED",date: "07-01-2020",estimatedDelivery:"02-02-2020"},
    {id: "T005",status: "PLACED",date: "07-01-2020",estimatedDelivery:"02-02-2020"}
  ];

  quotations = [
    {id: "Q001", itemname:"MyTshirt1", status: "RECIEVED", date: "01-02-2020"},
    {id: "Q002", itemname:"MyTshirt2", status: "PENDING", date: "01-02-2020"},
    {id: "Q003", itemname:"MyTshirt3", status: "PENDING", date: "01-02-2020"},
    {id: "Q004", itemname:"MyTshirt1", status: "RECIEVED", date: "01-02-2020"},
    {id: "Q005", itemname:"MyTshirt1", status: "RECIEVED", date: "01-02-2020"},
  ]


  constructor() { }

  ngOnInit() {
  }

}

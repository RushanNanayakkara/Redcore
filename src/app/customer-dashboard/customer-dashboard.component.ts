import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  ongoing_order_count ;
  complete_order_count ;
  quotation_count ;
  user;
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


  constructor(private modalService:NgbModal, private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user._id);
this. updateCounts();

  }

   updateCounts(){
    this.http.get<any>('http://localhost:8081/ccount/',{observe:'response',params:{customerid:this.user._id}}).subscribe(data => {
      if(data.status==200){

       this.ongoing_order_count=data.body.ongoing;
        this.complete_order_count=data.body.completes;
      this.quotation_count=data.body.qutations;
       console.log(data);

      }
    });
  }

}

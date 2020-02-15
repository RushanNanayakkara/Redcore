import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Input() mode;
  @Input() Order;
  @Input() QuotationID;
  @Input() modalRef;

  user
  success:boolean;
  fail:boolean;

  OrderImageURL = "https://images-na.ssl-images-amazon.com/images/I/71iedC2D5tL._UX569_.jpg";
  QuotationList = []

  constructor(private router: Router, private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem("user"));
      if(typeof this.user===undefined){
        this.router.navigate(["/"]);
        return;
      }
    this.loadQuotationList();

  }

  ngOnInit() {
    this.Order = {}
    this.success = false
    this.fail = false
  }

  placeOrder(){
    this.Order.status = "PLACED"
    this.Order.customerid = this.user._id
    this.Order.paid = 0

    this.http.post<any>('http://localhost:3000/order/add',this.Order,{observe:'response',}).subscribe(data => {
      if(typeof data.body._id !== 'undefined'){
        console.log("Order placed")
        this.fail = false
        this.success = true
      }else{
        this.success = false
        this.fail = true
      }
    })


  }

  loadQuotationList(){
    this.http.get<any>('http://localhost:3000/quotation/all',{observe:'response',params:{customer_id:this.user._id}}).subscribe(data => {
      if(data.status==200){
        this.QuotationList = [];
        data.body.forEach(element => {
          this.QuotationList.push(element._id);
        });
      }
    });
  }

  validate(){

  }




}

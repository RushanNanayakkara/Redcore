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

  user

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
  }

  placeOrder(){
    console.log(this.QuotationList);
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

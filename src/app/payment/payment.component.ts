import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  valOrderID
  valCustomerID
  valAmount
  valType="Paypal"
  valDate

  payments = [
    {_id:"001123", OID:"O001",CID:"C001",Amount:"100",PaymentType:"Paypal",Date:"2017-01-01"},
    {_id:"001123", OID:"O001",CID:"C002",Amount:"100",PaymentType:"Paypal",Date:"2017-01-01"},
    {_id:"001123", OID:"O001",CID:"C003",Amount:"100",PaymentType:"Paypal",Date:"2017-01-01"},
    {_id:"001123", OID:"O001",CID:"C004",Amount:"100",PaymentType:"Paypal",Date:"2017-01-01"},
    {_id:"001123", OID:"O001",CID:"C005",Amount:"100",PaymentType:"Paypal",Date:"2017-01-01"},
    {_id:"001123", OID:"O001",CID:"C006",Amount:"100",PaymentType:"Paypal",Date:"2017-01-01"},
    {_id:"001123", OID:"O001",CID:"C007",Amount:"100",PaymentType:"Paypal",Date:"2017-01-01"},
    {_id:"001123", OID:"O001",CID:"C008",Amount:"100",PaymentType:"Paypal",Date:"2017-01-01"},
    {_id:"001123", OID:"O001",CID:"C009",Amount:"100",PaymentType:"Paypal",Date:"2017-01-01"},
  ]

  displayedColumns = ["OID","CID","Amount","PaymentType","Date","button"]//column definitions

    constructor( private http: HttpClient){
      
    }

    ngOnInit(): void {

    }

    deletePayment(pid){
      console.log(pid)
    }

    addPayment(){
      let paymentObj = {
        modelparam1: this.valOrderID,
        modelparam2: this.valCustomerID,
        
      }
      console.log("point 1 reached")
      this.http.post<any>("https://www.google.lk",paymentObj,{observe:"response"}).subscribe(data=>{
        console.log(data.body.id);
        this.payments.push(
          {_id:data.body.id, OID:"O001",CID:"C001",Amount:"100",PaymentType:"Paypal",Date:"2017-01-01"}
        )
      })
      console.log("point 2 reached")

    }

}

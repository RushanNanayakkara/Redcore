import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { element } from 'protractor';
import { type } from 'os';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  valOrderID
  valCustomerID
  valAmount
  valType="paypal"
  valDate
  valCustomerName

  user;

  payments = []

  displayedColumns = ["OID","CID","Amount","PaymentType","Date","CustomerName","button"]//column definitions

    constructor( private http: HttpClient){
      
    }

    ngOnInit(): void {
    
    document.getElementById("warning-div").classList.add("d-none");
    
    this.http.get<any>("http://localhost:8080/payment", {observe:"response"}).subscribe(data=>{
        
      this.payments = [];
        for(var i=0; i<data.body.length; i++){
          let dt = new Date(data.body[i].p_date).toLocaleDateString("en-US") 
          console.log(dt)
          this.payments.push({_id:data.body[i]._id, OID:data.body[i].oId, CID:data.body[i].customerId, Amount:data.body[i].amount, PaymentType:data.body[i].p_type, Date:dt, CustomerName:data.body[i].C_name })
        }
        console.log(this.payments)
      })

    }

    deletePayment(pid){
      this.http.delete<any>("http://localhost:8080/payment/delete",{observe:"response",params:{id:pid}}).subscribe(data=>{
        if(data.status==200){
          console.log("payment deleted");
        }
      })
    }

    addPayment(){
      let paymentObj = {
        oId: this.valOrderID,
        customerId: this.valCustomerID,
        amount: this.valAmount,
        p_type: this.valType,
        p_date: this.valDate,
        C_name: this.valCustomerName
      }

      console.log("point 1 reached")
      this.http.post<any>("http://localhost:8080/payment",paymentObj,{observe:"response"}).subscribe(data=>{  //sub-wait till res comes
        if(typeof data.body._id!==undefined){

        console.log(data.body);
        this.payments.push(
          {_id:data.body._id, OID:data.body.oId, CID:data.body.customerId, Amount:data.body.amount, PaymentType:data.body.p_type, Date:data.body.p_date, CustomerName:data.body.C_name}
        )
        console.log(this.payments)
        }
        
        else{

          console.log("oid required")
          document.getElementById("warning-div").classList.add("d-block")
        }
      })
      

    }

}

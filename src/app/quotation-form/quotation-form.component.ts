import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.scss']
})
export class QuotationFormComponent implements OnInit {

  @Input() mode;
  @Input() Quotation;

  user

  quotationid:String
  customerid:String
  name:String
  designURL:String
  designID:String
  designType:String
  requestDate:Date
  issuedDate:Date
  quantity:Number
  material:String
  collarType:String
  sleeveType:String
  price:Number
  validPeriod:Number
  status:String

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    if(typeof this.user===undefined){
      this.router.navigate(["/"]);
      return;
    }
    this.customerid = JSON.parse(localStorage.getItem("user"))._id;
    this.designType = "REDCORE_DESIGN"
    this.sleeveType = "SHORT"
    this.collarType = "NOCOLLAR"
  }

  placeQuotation(){
    let quotation = {
      customerid:this.customerid,
      items:[
        {
          name:this.name,
          designURL:this.designURL,
          designType:this.designType,
          quantity:this.quantity,
          material:this.material,
          collarType:this.collarType,
          sleeveType:this.sleeveType,
          price:this.price,
          status:this.status,
        }
      ]
    }

    this.http.post<any>('http://localhost:3000/quotation/',quotation,{observe:'response',}).subscribe(data => {
        if(typeof data.body._id !== 'undefined'){
          console.log(data)
        }else{
          console.log("failed")
        }
      });
  }

}

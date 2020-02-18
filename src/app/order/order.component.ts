import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatRadioChange } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { OrderFormComponent } from '../order-form/order-form.component'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {
  options: FormGroup;
  opened: boolean;
  activeOrder;
  user;

  viewAll: boolean;

  Orders = []

  displayedColumns = ["ID","Name","CustomerID","GarmentID","Due Date","Status"];

  loadTableData(){
    this.http.get<any>('http://localhost:3000/order/all',{observe:'response',params:{customer_id:this.user._id}}).subscribe(data => { //sub-wait till res comes
          if(data.status==200){
            this.Orders = [];
            data.body.forEach(element => {
              let dt = new Date(element.duedate).toLocaleDateString("en-US")
              element.duedate = dt;
              if(typeof element.garmentid=='undefined'){
                element.garmentid = "N/A"
              }
              this.Orders.push(element);

            });
          }
        });
  }

    radioChange(event: MatRadioChange) {
      //enter get all and get active codes here
      //might have to implement these functions in the server side
      if(event.source.value=='ALL'){
        //enter get all code here
        console.log("All selected");
      }else if(event.source.value=="ACTIVE"){
        //enter get active code here
        console.log("ACTIVE selected");
      }
    }

    search(){
      //enter search code here
      //update the orders list
    }

    getActiveOrderImageURL(designID){
      //get image url from the designID
      //alternatively can use the quotation api to get the quotation
      //and then get the image url from that
    }

    tableDblClickAction(row){
      this.opened = true;
      this.activeOrder = row;
      this.getActiveOrderImageURL(row.designID);
    }

    open(index) {
      const modalRef = this.modalService.open(OrderFormComponent,{ size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.mode = "INPUT";
      modalRef.componentInstance.modalRef = modalRef;
    }

    constructor(fb: FormBuilder,private modalService:NgbModal, private router: Router,private http: HttpClient) {
      this.options = fb.group({
        bottom: 0,
        fixed: false,
        top: 0
      });

     }

    ngOnInit() {
      this.user = JSON.parse(localStorage.getItem("user"));
      if(typeof this.user===undefined){
        this.router.navigate(["/"]);
        return;
      }
      this.viewAll = false;
      this.loadTableData();
    }

}

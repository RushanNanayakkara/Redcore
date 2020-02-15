import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatRadioChange } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { OrderFormComponent } from '../order-form/order-form.component'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {
  options: FormGroup;
  opened: boolean;
  activeOrder;

  viewAll: boolean;

  Orders = [
    {
      id:"O001",
      name:"Order 1",
      customerID:"C001",
      garmentID:"G001",
      designID:"D001",
      quotationID:"Q001",
      amount:100,
      price:100000,
      paid:35000,
      placedDate:"06-08-2020",
      dueDate:"08-08-2020",
      status:"ONGOING"
    }
  ]

  displayedColumns = ["ID","Name","CustomerID","GarmentID","Due Date","Status"];

    // displayedColumns = ["ID","Name","RequestDate", "Status"];

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
      const modalRef = this.modalService.open(OrderFormComponent,{ size: 'xl', backdrop: 'static' });
      modalRef.componentInstance.mode = "INPUT";
      modalRef.componentInstance.modalRef = modalRef;
    }

    constructor(fb: FormBuilder,private modalService:NgbModal) {
      this.options = fb.group({
        bottom: 0,
        fixed: false,
        top: 0
      });
      this.activeOrder =
      {
        id:"O001",
        name:"Order 1",
        customerID:"C001",
        garmentID:"G001",
        designID:"D001",
        quotationID:"Q001",
        amount:100,
        price:100000,
        paid:35000,
        placedDate:"06-08-2020",
        dueDate:"08-08-2020",
        status:"ONGOING"
      }
     }

    ngOnInit() {
      this.viewAll = false;
    }

}

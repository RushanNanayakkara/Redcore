import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatRadioChange } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { QuotationFormComponent } from '../quotation-form/quotation-form.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit {
  options: FormGroup;
  opened: boolean;
  activeQuotation;
  user

  viewAll: boolean;


  Quotations = [
    {
      id: "Q001",
      customerID: "C001",
      name: "my quotation 1",
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
    },
    {
      id: "Q002",
      customerID: "C001",
      name: "my quotation 1",
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
    },
    {
      id: "Q003",
      customerID: "C001",
      name: "my quotation 1",
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
    },
  ];


    displayedColumns = ["ID","Name","IssuedDate", "RequestDate", "Status"];

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
      this.Quotations = [
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
        },
        {
          id: "Q001",
          customerID: "C001",
          name: "Search 2",
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
        },
      ];
    }

    open() {
      const modalRef = this.modalService.open(QuotationFormComponent,{ size: 'xl', backdrop: 'static' });
      modalRef.componentInstance.mode = "INPUT";
      modalRef.componentInstance.modalRef = modalRef;
      modalRef.componentInstance.Quotation= {};
    }

    tableDblClickAction(row){
      this.opened = true;
      this.activeQuotation = row;
    }

    constructor(private router: Router,fb: FormBuilder,private modalService:NgbModal) {
      this.options = fb.group({
        bottom: 0,
        fixed: false,
        top: 0
      });
      this.activeQuotation = {
        id: "Q001",
        customerID: "C001",
        name: "my quotation 1",
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
     }

    ngOnInit() {
      this.user = JSON.parse(localStorage.getItem("user"));
      if(typeof this.user===undefined){
        this.router.navigate(["/"]);
        return;
      }
      this.viewAll = false;
    }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatRadioChange } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { QuotationFormComponent } from '../quotation-form/quotation-form.component'
import { OrderFormComponent } from '../order-form/order-form.component'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit {
  options: FormGroup;
  opened: boolean;
  needUpdate: boolean;
  activeQuotation;
  user

  viewAll: boolean;


  Quotations = []


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

    }

    open() {
      const modalRef = this.modalService.open(QuotationFormComponent,{ size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.mode = "INPUT";
      modalRef.componentInstance.modalRef = modalRef;
      modalRef.componentInstance.Quotation= {};
      this.needUpdate = true;
    }

    openAddOrder(){
      const modalRef = this.modalService.open(OrderFormComponent,{ size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.mode = "INPUT";
      modalRef.componentInstance.modalRef = modalRef;
      modalRef.componentInstance.QuotationID= this.activeQuotation.id;
      this.needUpdate = true;
    }

    tableDblClickAction(row){
      this.opened = true;
      this.activeQuotation = row;
    }

    constructor(private router: Router,fb: FormBuilder,private modalService:NgbModal, private http: HttpClient,private cdRef:ChangeDetectorRef) {
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
      this.updateTable();
      setInterval(function(){
        if(this.needUpdate){
          this.updateTable();
          console.log("came here")
        }
      }, 3000);
    }

    updateTable(){
      this.http.get<any>('http://localhost:3000/quotation/all',{observe:'response',params:{customer_id:this.user._id}}).subscribe(data => {
          if(data.status==200){
            this.Quotations = [];
            data.body.forEach(element => {
              this.addToTable(element);
            });
          }
        });
        this.cdRef.detectChanges();
    }

    deleteQuotation(){
      // console.log(this.activeQuotation.id)
      // this.http.delete<any>('http://localhost:3000/quotation/delete',{observe:'response',params:{_id:this.activeQuotation.id}}).subscribe((data)=>{
      //  console.log(data)
      // })
  }

    addToTable(quotation){
      let issuedDate;
      if(typeof quotation.items[0].issuedDate==undefined){
        issuedDate = "N/A"
      }else{
        issuedDate =  quotation.items[0].issuedDate
      }
      let dt = new Date(quotation.requestDate).toLocaleDateString("en-US")
      this.Quotations.push(
        {
          id: quotation._id,
          requestDate: dt,
          name: quotation.items[0].name,
          designType: quotation.items[0].designType,
          designID: quotation.items[0].designID,
          designURL: quotation.items[0].designURL,
          quantity: quotation.items[0].quantity,
          material: quotation.items[0].material,
          collarType: quotation.items[0].collarType,
          sleeveType: quotation.items[0].sleeveType,
          price: quotation.items[0].price,
          issuedDate: issuedDate,
          status: quotation.items[0].status,
          image:"https://www.rushordertees.com/design/ZoomImage.php?src=3082864_f&style=4980&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false"
      }
      );
    }

}

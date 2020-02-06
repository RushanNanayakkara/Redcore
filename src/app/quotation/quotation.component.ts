import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit {
  options: FormGroup;
  opened: boolean;
  activeQuotation;

  viewAll: boolean;


  Quotations = [
    {
      id: "Q001",
      name: "my quotation 1",
      date:"01-02-2020",
      status: "PENDING",
      estimated_unit_cost: "1000",
          designID: "D001",
          material: "CROCODILE",
          amount: "100",
          delivary_within: "10",
          image:"https://www.rushordertees.com/design/ZoomImage.php?src=3082864_f&style=4980&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false"
        },
        {
          id: "Q002",
          name: "my quotation 2",
          date:"02-02-2020",
          status: "PENDING",
          estimated_unit_cost: "1000",
          designID: "D001",
          material: "CROCODILE",
          amount: "100",
          delivary_within: "10",
          image:"https://www.rushordertees.com/design/ZoomImage.php?src=3082864_f&style=4980&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false"
        },
        {
          id: "Q003",
          name: "my quotation 3",
          date:"03-02-2020",
          status: "PENDING",
          estimated_unit_cost: "1000",
          designID: "D001",
          material: "CROCODILE",
          amount: "100",
          delivary_within: "10",
          image:"https://www.rushordertees.com/design/ZoomImage.php?src=3082864_f&style=4980&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false"
        },
      ];


    displayedColumns = ["ID","Name","Date","Status"];

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
          name: "my quotation 1",
          date:"01-02-2020",
          status: "PENDING",
          estimated_unit_cost: "1000",
          designID: "D001",
          material: "CROCODILE",
          amount: "100",
          delivary_within: "10",
          image:"https://www.rushordertees.com/design/ZoomImage.php?src=3082864_f&style=4980&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false"
        }
      ];
    }

    tableDblClickAction(row){
      this.opened = true;
      this.activeQuotation = row;
    }

    constructor(fb: FormBuilder) {
      this.options = fb.group({
        bottom: 0,
        fixed: false,
        top: 0
      });
      this.activeQuotation = JSON.stringify(this.Quotations[0]);
     }

    ngOnInit() {
      this.viewAll = false;
    }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-quotation-tab-active',
  templateUrl: './quotation-tab-active.component.html',
  styleUrls: ['./quotation-tab-active.component.scss']
})
export class QuotationTabActiveComponent implements OnInit {
  options: FormGroup;
  opened: boolean;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

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

  ngOnInit() {
  }

}

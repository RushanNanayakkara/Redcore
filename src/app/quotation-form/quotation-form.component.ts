import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.scss']
})
export class QuotationFormComponent implements OnInit {

  Quotation = {
    id: "Q001",
    status: "PENDING",
    estimated_unit_cost: "1000",
    designID: "D001",
    material: "CROCODILE",
    amount: "100",
    delivary_within: "10",
    image:"https://www.rushordertees.com/design/ZoomImage.php?src=3082864_f&style=4980&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false"
  }

  @Input() mode;
  @Input() QuotationID;


  constructor() { }

  ngOnInit() {
  }

}

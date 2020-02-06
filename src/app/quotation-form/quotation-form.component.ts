import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.scss']
})
export class QuotationFormComponent implements OnInit {

  @Input() mode;
  @Input() Quotation:{
    id:string,
    name: string,
    date:string,
    status: string,
    estimated_unit_cost: string,
    designID: string,
    material: string,
    amount: string,
    delivary_within: string,
    image:string
  }


  constructor() { }

  ngOnInit() {

  }

}

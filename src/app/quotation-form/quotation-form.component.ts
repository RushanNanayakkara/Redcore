import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.scss']
})
export class QuotationFormComponent implements OnInit {

  @Input() mode;
  @Input() Quotation;


  constructor() { }

  ngOnInit() {

  }

}

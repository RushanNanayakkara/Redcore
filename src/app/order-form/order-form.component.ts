import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Input() mode;
  @Input() Quotation;

  constructor() {

  }

  ngOnInit() {

  }

}

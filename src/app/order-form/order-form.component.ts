import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Input() mode;
  @Input() Order;

  OrderImageURL = "https://images-na.ssl-images-amazon.com/images/I/71iedC2D5tL._UX569_.jpg";

  constructor() {
    this.Order = {}
  }

  ngOnInit() {

  }

}

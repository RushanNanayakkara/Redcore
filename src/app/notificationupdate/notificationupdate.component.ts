import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notificationupdate',
  templateUrl: './notificationupdate.component.html',
  styleUrls: ['./notificationupdate.component.scss']
})
export class NotificationupdateComponent implements OnInit {
  @Input() mode;
  @Input() Quotation;

  user
  success;
  fail;
  NotificationTitle: any;
  NotificationBody: any;
  NotificationTarget: string;
  NotificationId: string;

  quotationid: String
  customerid: String
  name: String
  designURL: String
  designID: String
  designType: String
  requestDate: Date
  issuedDate: Date
  quantity: Number
  material: String
  collarType: String
  sleeveType: String
  price: Number
  validPeriod: Number
  status: String


  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.Quotation = {}
    this.user = JSON.parse(localStorage.getItem("user"));
    if (typeof this.user === undefined) {
      this.router.navigate(["/"]);
      return;
    }
    this.customerid = this.user._id;
    this.designType = "REDCORE_DESIGN"
    this.sleeveType = "SHORT"
    this.collarType = "NO_COLLAR"
    this.success = false;
    this.fail = false;
  }

  updateNotificaton() {

  }

  placeQuotation() {
    let quotation = {
      customerid: this.customerid,
      items: [
        {
          name: this.Quotation.name,
          designURL: this.Quotation.designURL,
          designType: this.Quotation.designType,
          quantity: this.Quotation.quantity,
          material: this.Quotation.material,
          collarType: this.Quotation.collarType,
          sleeveType: this.Quotation.sleeveType,
          price: this.Quotation.price,
          status: "PENDING",
        }
      ]
    }

    this.http.post<any>('http://localhost:3000/quotation/add', quotation, { observe: 'response', }).subscribe(data => {
      if (typeof data.body._id !== 'undefined') {
        this.fail = false;
        this.success = true;
      } else {
        this.success = false;
        this.fail = true;
      }
    });
  }

}

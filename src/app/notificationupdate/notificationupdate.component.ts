import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notificationupdate',
  templateUrl: './notificationupdate.component.html',
  styleUrls: ['./notificationupdate.component.scss']
})
export class NotificationupdateComponent implements OnInit {
  @Input() id;

  user
  success;
  fail;
  NotificationTitle: any;
  NotificationBody: any;
  NotificationTarget: string;
  NotificationId: string;
  status: String
  date: any;
  NotificationType: any;
  NotificationDate: any;
  NotificationStatus: any;


  constructor(private router: Router, private http: HttpClient, public activeModal: NgbActiveModal) { }

  async ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (typeof this.user === undefined) {
      this.router.navigate(['/']);
      return;
    }
    this.success = false;
    this.fail = false;
    await this.http.get<any>('http://localhost:8800/notification/id/get', 
    { observe: 'response', params: { id:  this.id} }).subscribe(response => {
      if (response.status === 201) {
          let ntype;
          if (response.body.type === 'CUSTOMERGLOBAL') {
            ntype = 'CUSTOMER';
          } else if (response.body.type === 'GARMENTGLOBAL') {
            ntype = 'GARMENT';
          } else {
            ntype = 'All';
          }
          this.NotificationId = response.body._id,
          this.NotificationTitle = response.body.title;
          this.NotificationBody = response.body.body;
          this.NotificationDate = response.body.date;
          this.NotificationTarget = ntype;
          this.NotificationStatus = response.body.status;
      } else {
        console.log('load notification failed')
      }
    })
  }

  updateNotificaton() {
    this.fail = false;
    this.success = true;
    let tempNotificationObj = {
      type: '',
      date: this.NotificationDate,
      status: this.NotificationStatus,
      title: this.NotificationTitle,
      body: this.NotificationBody
    }

    if (this.NotificationTarget === 'CUSTOMER') {
      tempNotificationObj.type = 'CUSTOMERGLOBAL';
    } else if (this.NotificationTarget === 'GARMENT') {
      tempNotificationObj.type = 'GARMENTGLOBAL';
    } else {
      tempNotificationObj.type = 'GLOBAL';
    }


    this.http.patch<any>('http://localhost:8800/notification/update', tempNotificationObj, { observe: 'response', }).subscribe(data => {
      if (data.status === 201) {
        this.fail = false;
        this.success = true;
        this.activeModal.close();
      } else {
        
        document.getElementById('warning-div').classList.add('d-block')
        this.fail = false;
        this.success = true;
        this.activeModal.close();
        alert("updating fail");
      }
    })
    
   }

}

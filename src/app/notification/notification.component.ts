import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationupdateComponent } from '../notificationupdate/notificationupdate.component';

export interface PeriodicElement {
  id: number,
  tital: string;
  body: number;
  date: string;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, tital: 'Hydrogen', body: 1.0079, date: 'H',type: 'xx' },
  { id: 2, tital: 'Hydrogen', body: 1.0079, date: 'H', type: 'xx' },
];




@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})


export class NotificationComponent implements OnInit {


  displayedColumns: string[] = ['id', 'tital', 'body', 'date', 'type', 'update', 'delete'];
  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  Notifications: any[];
  NotificationTitle: any;
  NotificationBody: any;
  NotificationTarget: string;
  needUpdate: boolean;

  async ngOnInit() {
    await this.loadNotifications();
    this.dataSource = new MatTableDataSource(this.Notifications);
    console.log('ff')
    this.dataSource.sort = this.sort;
  }

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  async loadNotifications() {
    this.Notifications = []
    await this.http.get<any>('http://localhost:8800/notification/get', { observe: 'response' }).subscribe(response => {
      if (response.status === 201) {
        response.body.forEach(notificationObject => {
          let ntype;
          if (notificationObject.type === 'CUSTOMERGLOBAL') {
            ntype = 'CUSTOMER';
          } else if (notificationObject.type ===  'GARMENTGLOBAL') {
            ntype = 'GARMENT';
          } else {
            ntype = 'All';
          }
          this.Notifications.push({
            id: notificationObject._id,
            title: notificationObject.title,
            body: notificationObject.body,
            date: notificationObject.date,
            type: ntype,
          })
        });
      } else {
        console.log('load notification failed')
      }
    })
  }

  addNotificaton() {
    let tempNotificationObj = {
      type: '',
      date: Date.now(),
      status: 'NOTREAD',
      title: this.NotificationTitle,
      body: this.NotificationBody
    }

    if (this.NotificationTarget == 'CUSTOMER') {
      tempNotificationObj.type = 'CUSTOMERGLOBAL';
    } else if (this.NotificationTarget == 'GARMENT') {
      tempNotificationObj.type = 'GARMENTGLOBAL';
    } else {
      tempNotificationObj.type = 'GLOBAL';
    }

    this.http.post<any>('http://localhost:8800/notification/add', tempNotificationObj, { observe: 'response' }).subscribe(response => {
      if (response.status === 201) {
        alert('Notification added successfully')
      } else {
        alert('Failed to add notification')
      }
    })
  }

  async deleten(id) {
    this.http.delete<any>('http://localhost:8800/notification/delete', { observe: 'response', params: { id: id } }).subscribe(response => {
      if (response.status === 201) {
        alert('Notification deleted successfully')
      } else {
        alert('Failed to delet notification')
      }
    });
    await this.loadNotifications();
    this.dataSource = new MatTableDataSource(this.Notifications);
  }

  update(id) {
    const modalRef = this.modalService.open(NotificationupdateComponent, { size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.modalRef = modalRef;
    this.needUpdate = true;
  }

}

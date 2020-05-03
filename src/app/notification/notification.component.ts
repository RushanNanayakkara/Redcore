import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationupdateComponent } from '../notificationupdate/notificationupdate.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})


export class NotificationComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','update','delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  Notifications: any[];
  NotificationTitle: any;
  NotificationBody: any;
  NotificationTarget: string;
  needUpdate: boolean;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  loadNotifications() {
    this.Notifications = []
    this.http.get<any>('http://localhost:8800/notification/get', { observe: 'response' }).subscribe(response => {
      if (typeof response.body !== undefined) {
        response.body.forEach(notificationObject => {
          this.Notifications.push({
            id: notificationObject._id,
            title: notificationObject.title,
            body: notificationObject.body
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
      if (typeof response.body._id !== undefined) {
        alert('Notification added successfully')
      } else {
        alert('Failed to add notification')
      }
    })
  }

  removeNotification(id) {
    //Enter code to remove notification with the given input here
    //Update the notifications list
    console.log(id + ' removed')
  }
  open1(){
    console.log('ff')
  }

  open() {
    const modalRef = this.modalService.open(NotificationupdateComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.mode = 'INPUT';
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.Quotation = {};
    this.needUpdate = true;
  }

}

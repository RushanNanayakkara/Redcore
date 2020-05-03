import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { TransformVisitor } from '@angular/compiler/src/render3/r3_ast';
import {Chart} from 'chart.js';


// export interface Order {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  OngoingCount;
  LateOrders;
  QuotationReqCount;
  NotificationTitle;
  NotificationTarget;
  NotificationBody;



  chartData = []
  chartType = 'line'
  Linechart: any = [];
  chartMonths: any = [];
  post: any = [];
  count: any = [];
  correctmonth: any = [];

  displayedColumns: string[] = ['OrderID', 'Name', 'GarmentID', 'DueDate'];
  Orders = [
    {id: 'O001', name: 'Order 1', customerID: 'C001', garmentID: 'G001', designID: 'D001', quotationID: 'Q001',
    amount: 100, price: 100000, paid: 35000, placedDate: '06-08-2020', dueDate: '08-08-2020', status: 'ONGOING'},
    {id: 'O002', name: 'Order 1', customerID: 'C001', garmentID: 'G001', designID: 'D001', quotationID: 'Q001',
    amount: 100, price: 100000, paid: 35000, placedDate: '06-08-2020', dueDate: '08-01-2020', status: 'ONGOING'},
    {id: 'O003', name: 'Order 1', customerID: 'C001', garmentID: 'G001', designID: 'D001', quotationID: 'Q001',
    amount: 100, price: 100000, paid: 35000, placedDate: '06-08-2020', dueDate: '08-08-2020', status: 'ONGOING'},
  ]

  Notifications = []

  redcoreNetworkTableData = [
    {id: 'G001', name: 'Base Printers', ongoingCount: 1, dueSoonCount: 3, lateCount: 1, status: 'BUSY'}
  ]

  redcoreNetworkTableDisplayColumns = [
    'ID', 'Name', 'Ongoing', 'Due this week', 'Late', 'Status'
  ]

  QuotationRequests = [
    {
      id: 'Q001',
      customerID: 'C001',
      name: 'Search 1',
      requestDate: '01-02-2020',
      issuedDate: '01-02-2020',
      validPeriod: 90,
      status: 'PENDING',
      designID: 'D001',
      price100_300: 800,
      price300_500: 700,
      price500_1000: 600,
      priceAbove1000: 500,
      image: 'https://www.rushordertees.com/design/ZoomImage.php?src=3082864_f&style=4980&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false'
    }
  ]

  QuotationTableDisplayedColumns = [
    'ID', 'CustomerID', 'Name', 'Date'
  ]

  constructor(private modalService: NgbModal, private router: Router, private http: HttpClient) {
   this.chartMonths = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }

  ngOnInit() {

    this.initializeChart();
    this.updateCounts();
    this.loadNotifications()
  }

  initializeChart() {
    this.http.get<any>('http://localhost:8081/chart', {observe: 'response', params: {}}).subscribe(data => {
      if (data.status == 200) {
      this.post = data.body;
      let m = -1;
      let j = -1;
      let i = 0;
      for (i = 0; i < this.post.length; i += 1) {
        if (this.post[i] == null) {
          m += 1;
         } else {
           j += 1;
           this.count[j] = this.post[i];
           this.correctmonth[j] = this.chartMonths[i];
          }
        }
      this.Linechart = new Chart('canvas', {
              type: 'line',
              data: {
                    labels: this.correctmonth,
                    datasets: [
                      {
                        data: this.count,
                        label: 'Revenue Summary',
                        backgroundColor: 'rgba(121,9,173,0.0)',
                        borderColor: 'purple',
                        borderWidth: 2,
                        pointHoverRadius: 5,
                        hoverBackgroundColor: 'rgba(250,20,20,0.8)',
                      }
                    ]
              },
              options: {
                  responsive: true,
                  legend: {
                    display: false
                  },
                  scales: {
                      xAxes: [{
                            display: true ,
                            ticks: {
                                fontSize: 20
                            }
                        }] ,
                      yAxes: [{
                            display: true ,
                            ticks: {
                                fontSize: 20
                            }
                      }],
                  }  ,
              }
        });
      }
    });
  }


  updateCounts() {
    this.http.get<any>('http://localhost:8081/acount', {observe: 'response', params: {}}).subscribe(data => {
          if (data.status == 200) {
            // console.log("reached",data.body);
           this.OngoingCount = data.body.ongoing;
           this.LateOrders = data.body.late;
           this.QuotationReqCount = data.body.qutationss;
  // console.log(data);

          }
        });
  }

  loadNotifications() {
    this.Notifications = []
    this.http.get<any>('http://localhost:8800/notification/get', {observe: 'response'}).subscribe(response => {
      if (typeof response.body !== undefined ) {
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

    this.http.post<any>('http://localhost:8800/notification/add', tempNotificationObj, {observe: 'response'}).subscribe(response => {
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

  checkIfNotLate(date) {
    let parts = date.split('-');
    let month = parseInt(parts[1]) - 1
    return new Date(parts[2], month, parts[0]) > new Date();
  }


}

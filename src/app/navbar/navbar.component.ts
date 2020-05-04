import { Component, OnInit } from '@angular/core';
import {
  faUserCircle,
  faGlobe
 } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faUserCircle = faUserCircle
  faGlobe = faGlobe

  loggedIn
  profile = {
    name: 'Rushan Nanayakkara',
    type: 'Customer',
    profilePic: 'https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg'
  }
  defaultImage = 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png';

  notifications = []

  constructor(private router: Router, private http: HttpClient) { }

  async ngOnInit() {
    this.loggedIn = localStorage.getItem('user') !== null
    if (!this.loggedIn){
      this.router.navigate(['/']);
    }
    this.notifications = []
    if (JSON.parse(localStorage.getItem('user')).type === 'CUSTOMER') {
      await this.http.get<any>('http://localhost:8800/notification/customer/get', { observe: 'response' }).subscribe(response => {
        if (response.status === 201) {
          response.body.forEach(notificationObject => {
            this.notifications.push({
              title: notificationObject.title,
              body: notificationObject.body,
            })
          });
        } else {
          console.log('load notification failed')
        }
      })
    } else if (JSON.parse(localStorage.getItem('user')).type === 'GARMENT') {
      await this.http.get<any>('http://localhost:8800/notification/garment/get', { observe: 'response' }).subscribe(response => {
        if (response.status === 201) {
          response.body.forEach(notificationObject => {
            this.notifications.push({
              title: notificationObject.title,
              body: notificationObject.body,
            })
          });
        } else {
          console.log('load notification failed')
        }
      })
    } else {
      await this.http.get<any>('http://localhost:8800/notification/get', { observe: 'response' }).subscribe(response => {
        if (response.status === 201) {
          response.body.forEach(notificationObject => {
            this.notifications.push({
              title: notificationObject.title,
              body: notificationObject.body,
            })
          });
        } else {
          console.log('load notification failed')
        }
      })
    }
  }

  close(){}

  redirectToAccount(){

  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }


}

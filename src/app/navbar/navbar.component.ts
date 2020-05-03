import { Component, OnInit } from '@angular/core';
import {
  faUserCircle,
  faGlobe
 } from '@fortawesome/free-solid-svg-icons';
 import { Router } from '@angular/router';

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

  notifications = [
    'Test notification 1',
    'Test notification 2',
    'Test notification 3',
  ]

  constructor(private router: Router) { }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('user') !== null
    if (!this.loggedIn){
      this.router.navigate(['/']);
    }
  }

  redirectToAccount(){

  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }


}

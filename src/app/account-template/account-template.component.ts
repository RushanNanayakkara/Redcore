import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-template',
  templateUrl: './account-template.component.html',
  styleUrls: ['./account-template.component.scss']
})
export class AccountTemplateComponent implements OnInit {

  user;

  constructor(private router: Router,private http: HttpClient) {

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
      if(typeof this.user===undefined){
        this.router.navigate(["/"]);
        return;
      }
  }

}

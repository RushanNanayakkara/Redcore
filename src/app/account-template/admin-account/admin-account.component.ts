import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.scss']
})
export class AdminAccountComponent implements OnInit {
  admin
  fail:boolean
  success:boolean

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.admin = JSON.parse(localStorage.getItem("user"));
    if(typeof this.admin===undefined){
      this.router.navigate(["/"]);
      return;
    }
  }

  updateAccount(){
    this.http.patch<any>('http://localhost:3000/users/update',this.admin,{observe:'response',}).subscribe(data => {
        if(typeof data.body._id !== 'undefined'){
          localStorage.setItem("user",JSON.stringify(data.body));
          this.fail = false;
          this.success = true;
        }else{
          document.getElementById("warning-div").classList.add("d-block")
          this.fail = false;
          this.success = true;
        }
        this.admin = JSON.parse(localStorage.getItem("user"));
      })
  }

}

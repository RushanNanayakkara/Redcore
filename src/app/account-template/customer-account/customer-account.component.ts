import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.scss']
})
export class CustomerAccountComponent implements OnInit {

  user
  fail:boolean
  success:boolean

  constructor( private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    if(typeof this.user===undefined){
      this.router.navigate(["/"]);
      return;
    }
  }

  updateAccount(){
    this.http.patch<any>('http://localhost:3000/users/update',this.user,{observe:'response',}).subscribe(data => {
        if(typeof data.body._id !== 'undefined'){
          localStorage.setItem("user",JSON.stringify(data.body));
          this.fail = false;
          this.success = true;
        }else{
          document.getElementById("warning-div").classList.add("d-block")
          this.fail = false;
          this.success = true;
        }
        this.user = JSON.parse(localStorage.getItem("user"));
      })
  }

}

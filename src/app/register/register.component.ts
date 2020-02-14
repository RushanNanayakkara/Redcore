import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: String;
  password: String;
  firstName: String;
  lastName: String;
  address: String;
  tel: String;
  type: String = "CUSTOMER";

  validate(){
    return true;
  }

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {

  }

  signUp(user){
    if(this.validate()){
      this.http.post<any>('http://localhost:3100/api/v1/users/signUp',user,{observe:'response',}).subscribe(data => {
        if(data.status>=200 && data.status<400){
          this.router.navigate(["emailverification"]);
        }else{
          console.log("failed")
        }
      })
    }
  }
}

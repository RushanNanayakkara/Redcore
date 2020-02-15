import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient) { }

  invalidCode = false;

  ngOnInit() {
  }

  resendEmail(){
    const id = JSON.parse(localStorage.getItem('user'))._id;
    this.http.get<any>('http://localhost:3100/api/v1/users/sendVerificationEmail',{observe:'response',params:{_id:id}}).subscribe(data => {
        if(data.status>=200 && data.status<400){
          alert("Email sent")
        }else{
          alert("Failed")
        }
      })
  }

  verify(u_key){
    const user = JSON.parse(localStorage.getItem('user'));
    this.http.get<any>('http://localhost:3000/users/verify',{observe:'response',params:{_id:user._id, key:u_key}}).subscribe(data => {
        if(data.body=="SUCCESS"){
          if(user.type=="CUSTOMER"){
            this.router.navigate(['/cdash']);
          }else if(user.type=="GARMENT"){
            this.router.navigate(['/gdash']);
          }
        }else{
          alert("Invalid code")
        }
      })
  }

}

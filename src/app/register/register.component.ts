import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  password1: string;
  password2: string;
  firstName: string;
  lastName: string;
  address: string;
  tel: string;
  type: string = "CUSTOMER";

  validate(){
    let status = true;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)){
      status = false;
      document.getElementById("input-email").classList.add("text-danger");
    }
    if(this.password1!=this.password2){
      status = false;
      document.getElementById("input-password1").classList.add("text-danger");
      document.getElementById("input-password2").classList.add("text-danger");
    }
    if(!/^\+?[0-9]{10,13}$/.test(this.tel)){
      status = false;
      document.getElementById("input-telNo").classList.add("text-danger");
    }
    return status;
  }

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
    document.getElementById("input-email").onfocus  = ()=>{
      document.getElementById("input-email").classList.remove('text-danger')
    }

    document.getElementById("input-password1").onfocus = ()=>{
      document.getElementById('input-password1').classList.remove('text-danger')
      document.getElementById('input-password2').classList.remove('text-danger')
    }

    document.getElementById("input-password2").onfocus = ()=>{
      document.getElementById('input-password1').classList.remove('text-danger')
      document.getElementById('input-password2').classList.remove('text-danger')
    }

    document.getElementById("input-telNo").onfocus = ()=>{
      document.getElementById("input-telNo").classList.remove('text-danger')
    }
  }

  signUp(){
    let user = {
      email:this.email,
      password:this.password1,
      firstName:this.firstName,
      lastName:this.lastName,
      address:this.address,
      tel:this.tel,
      type:this.type,
    }
    if(this.validate()){
      this.http.post<any>('http://localhost:3100/api/v1/users/signup',user,{observe:'response',}).subscribe(data => {
        if(typeof data.body._id !== 'undefined'){
          localStorage.setItem("user",JSON.stringify(data.body));
          this.router.navigate(["emailverification"]);
        }else{
          document.getElementById("warning-div").classList.add("d-block");
        }
      })
    }else{
      document.getElementById("loginform").scrollTop = 0;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:String = '';
  password:String = '';

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
    document.getElementById("warning-div").classList.add("d-none");
    document.getElementById("input-email").onfocus = ()=>{
        document.getElementById("input-email").classList.remove("text-danger");
        document.getElementById("warning-div").classList.remove("d-block");
        document.getElementById("warning-div").classList.add("d-none");
      }

    document.getElementById("input-password").onfocus = ()=>{
      document.getElementById("input-email").classList.remove("text-danger");
      document.getElementById("warning-div").classList.remove("d-block");
      document.getElementById("warning-div").classList.add("d-none");
    }
  }

  validate(credentials){
    let status = true;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(credentials.email)){
      status = false;
      document.getElementById("input-email").classList.add("text-danger");
    }
    return status;
  }

  // login(credentials){
  //   if(this.validate(credentials)){
  //     this.http.post<any>('http://localhost:3000/users/login',credentials,{observe:'response',}).subscribe(data => {
  //       if(typeof data.body._id !== 'undefined'){
  //         localStorage.setItem("user",JSON.stringify(data.body));
  //         switch (data.body.type) {
  //           case "ADMIN":
  //             this.router.navigate(["/adash"]);
  //             break;
  //           case "GARMENT":
  //             this.router.navigate(["/gdash"]);
  //             break;
  //           case "CUSTOMER":
  //             this.router.navigate(["/cdash"]);
  //             break;
  //           default:
  //             break;
  //         }
  //       }else{
  //         document.getElementById("warning-div").classList.add("d-block")
  //       }
  //     })
  //   }
  // }

  login(credentials){

    let adminuser = {
      _id:"5e4dc00c49bb31321ce5199d",
        verified:true,
        email:"admin@gmail.com",
        firstName:"adminFirst",
        lastName:"adminLast",
        password:"ahfdhaf;dhfhdahf;hdafh;ahdhahfahf",
        type:"ADMIN",
        address:"",
        tel:"",
        _v:0,
        key:'sdadafe'
    }
    let customertuser = {
      _id:"5e4dc00c49bb31321ce5199d",
        verified:true,
        email:"lakshmi1997ilike@gmail.com",
        firstName:"madhu",
        lastName:"samarapura",
        password:"$2a$10$DXlfvpY9QVigF2ocSq5O6egTe4ZbpezwWUiJWQ6hPBNBSvADq17Fq",
        type:"CUSTOMER",
        address:"",
        tel:"",
        _v:0,
        key:'sdadafee'
    }
    let garmenttuser = {
      _id:"5e4cf19e1c9d4400005d508f",
         verified:true,
          email:"garment@gmail.com",
          firstName:"madhu",
          lastName:"samarapura",
          password:"$2a$10$DXlfvpY9QVigF2ocSq5O6egTe4ZbpezwWUiJWQ6hPBNBSvADq17Fq",
          type:"GARMENT",
          address:"",
          tel:"",
          _v:0,
          key:'sdadafee'
    }

    if(credentials.email==="admin@gmail.com"){
      localStorage.setItem('user',JSON.stringify(adminuser));
      this.router.navigate(['/adash'])
    }
    if(credentials.email==="lakshmi1997ilike@gmail.com"){
      localStorage.setItem('user',JSON.stringify(customertuser));
      this.router.navigate(['/cdash'])
    }

     if(credentials.email==="garment@gmail.com"){
      localStorage.setItem('user',JSON.stringify(garmenttuser));
       this.router.navigate(['/gdash'])
     }
  }

}

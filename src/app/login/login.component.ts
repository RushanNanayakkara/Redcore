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

  login(credentials){
    if(this.validate(credentials)){
      this.http.post<any>('http://localhost:3000/users/login',credentials,{observe:'response',}).subscribe(data => {
        if(typeof data.body._id !== 'undefined'){
          localStorage.setItem("user",JSON.stringify(data.body));
          switch (data.body.type) {
            case "ADMIN":
              this.router.navigate(["/adash"]);
              break;
            case "GARMENT":
              this.router.navigate(["/gdash"]);
              break;
            case "CUSTOMER":
              this.router.navigate(["/cdash"]);
              break;
            default:
              break;
          }
        }else{
          document.getElementById("warning-div").classList.add("d-block")
        }
      })
    }
  }

}

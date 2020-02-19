import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-garment-account',
  templateUrl: './garment-account.component.html',
  styleUrls: ['./garment-account.component.scss']
})
export class GarmentAccountComponent implements OnInit {
  garment
  fail:boolean
  success:boolean

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.garment = JSON.parse(localStorage.getItem("user"));
    if(typeof this.garment===undefined){
      this.router.navigate(["/"]);
      return;
    }
  }
  
  updateAccount(){
    this.http.patch<any>('http://localhost:3000/users/update',this.garment,{observe:'response',}).subscribe(data => {
        if(typeof data.body._id !== 'undefined'){
          localStorage.setItem("user",JSON.stringify(data.body));
          this.fail = false;
          this.success = true;
        }else{
          document.getElementById("warning-div").classList.add("d-block")
          this.fail = false;
          this.success = true;
        }
        this.garment = JSON.parse(localStorage.getItem("user"));
      })
  }
}

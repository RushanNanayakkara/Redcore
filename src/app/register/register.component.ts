import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

  }

  signUp(){

  }
}

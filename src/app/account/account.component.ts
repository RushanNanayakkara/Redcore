import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
 
 Data = [
  {
    Name: "firstname lastname",
 Address: "User Address",
 Email:"juhgtrft@gmail.com",
 TelNo:"0718860758",
  }
]

 
  constructor() { }

  ngOnInit() {
  }

}

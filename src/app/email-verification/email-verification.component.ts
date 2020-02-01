import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  resendEmail(){
    console.log("email resent")

  }

  verify(){
    console.log("email verified")
    if(true){
      this.router.navigate(['/mydesigns'])
    }
  }

}

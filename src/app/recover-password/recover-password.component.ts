import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendPasswordRecoveryEmail(){

    if(false){
      document.getElementById('success_alert').classList.remove('d-none')
    }else{
      document.getElementById('fail_alert').classList.remove('d-none')
    }
  }

}

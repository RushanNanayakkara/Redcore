import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  @Input() products;
  @Input() modalRef;
  @Input() activeImg;
  up = 1;
  down = -1;
  constructor() {

  }

  ngOnInit(): void {

  }

  closeModal(){
    this.modalRef.close();
  }

  changeImage(){
    this.activeImg+=1;
  }

  setActiveImage(index){
    this.activeImg = index;
  }

  slideImage(){
    console.log("image moved");
  }

}

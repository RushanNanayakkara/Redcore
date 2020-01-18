import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  userProfile  = {
    name:"Rushan Nanayakkara",
    type:"Customer",
    profilePic:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"
  };

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydesigns',
  templateUrl: './mydesigns.component.html',
  styleUrls: ['./mydesigns.component.scss']
})
export class MydesignsComponent implements OnInit {

  recentDesigns = [
    {designId:"001",title:"Title1",iconURL: ""},
    {designId:"002",title:"Title2",iconURL: ""},
    {designId:"002",title:"Title3",iconURL: ""},
  ]

  designs = [
    {designId:"003",title:"Title4",iconURL: ""},
    {designId:"004",title:"Title5",iconURL: ""},
    {designId:"005",title:"Title6",iconURL: ""},
    {designId:"006",title:"Title7",iconURL: ""},
    {designId:"0017",title:"Title8",iconURL: ""},

  ]

  constructor() { }

  ngOnInit() {

  }

}

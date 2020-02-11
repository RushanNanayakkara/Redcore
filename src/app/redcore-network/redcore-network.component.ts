import { Component, OnInit, ViewChild  } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-redcore-network',
  templateUrl: './redcore-network.component.html',
  styleUrls: ['./redcore-network.component.scss']
})
export class RedcoreNetworkComponent implements OnInit {

  @ViewChild('map',{static:true}) mapElement: any;
  map: google.maps.Map;
  myLatLngList = {
    myLatLng : [
      { lat: 6.9311, lng: 79.8622 },
      { lat: 6.9279, lng: 79.8644 },
      { lat: 6.9267, lng: 79.8610 }
    ]
  };

  Nodes = [
    {name:"Garment 1",imageURL:"assets/img/garment.jpg"},
    {name:"Garment 1",imageURL:"assets/img/garment.jpg"},
    {name:"Garment 1",imageURL:"assets/img/garment.jpg"},
    {name:"Garment 1",imageURL:"assets/img/garment.jpg"},
    {name:"Garment 1",imageURL:"assets/img/garment.jpg"},
  ]

  createMarker() {
        //GET GARMENT LOCATIONS FROM SERVER

        //iterate latLng and add markers
       for(const data of this.myLatLngList.myLatLng){
         var marker = new google.maps.Marker({
             position: data,
             map: this.map,
             title: 'Garment 1'
         });
         var cityCircle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.1,
          strokeWeight: 0,
          fillColor: '#FF0000',
          fillOpacity: 0.2,
          map: this.map,
          center: data,
          radius:1000
        });
      }

 };

  constructor() { }

  ngOnInit(): void {
   const mapProperties = {
        center: new google.maps.LatLng(6.9271, 79.8612),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
   this.createMarker();

}

}

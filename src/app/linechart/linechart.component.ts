import { Component, OnInit,  ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  @ViewChild("chartCanvas",{static:false}) chartCanvas: ElementRef;
  context:CanvasRenderingContext2D;

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive:true,
    scales: {
      yAxes: [{
          ticks: {
              fontSize: 20
          }
      }],
      xAxes: [{
        ticks: {
            fontSize: 20
        }
    }]
    },
    lineTension: false
  };

  @Input() lineChartLabels;
  @Input() data;
  @Input() type;

  public lineChartType = "bar";
  public lineChartLegend = false;

  public lineChartData = [
    {
      data:[0,0,0,0,0,0,0,0,0,0,0,0],
      label:"Revenue Summary",
      backgroundColor:"rgba(121,9,173,0.0)",
      borderColor: "purple",
      borderWidth: 2,
      pointHoverRadius:5,
      hoverBackgroundColor:"rgba(250,20,20,0.8)",
      lineTension: false
    }
  ]



  constructor() { }

  ngOnInit() {
    this.lineChartData[0].data = this.data;
    this.lineChartType = this.type;
  }


}

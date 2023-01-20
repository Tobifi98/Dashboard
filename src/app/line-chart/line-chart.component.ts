import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from "chart.js";
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  
  





  constructor(){}

  ngOnInit(){
    var myChart = new Chart("myChart", {
      type: 'radar',
      data: {
        labels:['test1','test2','test3'],
        datasets:[{
          label: 'testlabel',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)'
          ],
          borderColor:[
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)'
          ],
          borderWidth: 1
        }]
      }
    })
  }


  

  

}

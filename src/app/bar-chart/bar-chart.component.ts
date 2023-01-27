import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var myChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['test1', 'test2', 'test3'],
        datasets: [
          {
            label: 'Überschrift',
            data: [12, 19, 3],
            backgroundColor: [
              'rgba(255,99,132,0.2)',
              'rgba(54,162,235,0.2)',
              'rgba(255,206,86,0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,0.2)',
              'rgba(54,162,235,0.2)',
              'rgba(255,206,86,0.2)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options:{
        onResize(chart, size) {
          
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }

}

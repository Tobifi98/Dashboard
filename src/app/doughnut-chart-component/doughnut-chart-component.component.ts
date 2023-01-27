import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: 'app-doughnut-chart-component',
  templateUrl: './doughnut-chart-component.component.html',
  styleUrls: ['./doughnut-chart-component.component.scss'],
})
export class DoughnutChartComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var myChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        labels: ['test1', 'test2', 'test3'],
        datasets: [
          {
            label: 'testlabel',
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



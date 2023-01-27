import {
  Component,
  ElementRef,
  Injectable,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { inject } from '@angular/core/testing';
import { Chart, registerables } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  headerVar:string ="test";
  constructor() {}

  ngOnInit() {
    var myChart = new Chart('lineChart', {
      type: 'line',
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
              'rgba(255,255,255,0.2)',
              'rgba(54,162,235,0.2)',
              'rgba(255,206,86,0.2)',
            ],
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

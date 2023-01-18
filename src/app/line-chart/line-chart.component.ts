import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Chart, registerables, ChartDataset } from "chart.js";
import { NgChartsModule, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})

export class LineChartComponent {

  chartData: ChartDataset[]=[
    { data: [12, 15, 85, 32, 11], label: 'test'}
  ];

  chartLabels: Label[];





  constructor(){}


  

  

}

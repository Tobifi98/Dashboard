import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartDataset } from "chart.js";
import { Label } from 'ng2-charts';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  chartData: ChartDataset[] = [
    { data: [1,5,6,1,32,8,14], label: 'Test data'}
  ];

  chartLabels: Label[];

  constructor() {}
}

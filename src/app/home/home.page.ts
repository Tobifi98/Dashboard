import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LineChartComponent } from '../line-chart/line-chart.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  
  constructor() {}
  ngOnInit(){
  }
  
}

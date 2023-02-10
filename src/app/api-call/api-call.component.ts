import { Component, OnInit } from '@angular/core';
import { APIGetMeasurementService } from '../services/api-get-measurement.service';

interface Data {
  // interface definition of the json object
}

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss'],
  providers: [APIGetMeasurementService],
})
export class ApiCallComponent implements OnInit{
  data: Data | undefined;

  constructor(private APIGetMeasurementService: APIGetMeasurementService) {}

  ngOnInit() {
    this.APIGetMeasurementService.getData().subscribe(data => {
      this.data = data;
    });
  }
}


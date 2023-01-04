import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    getData();
    async function getData() {
      try {
        const username = 'tester';
        const password = 'training';
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));
        headers.append('Content-Type', 'application/json');
    
        const response = await fetch('http://10.3.0.71:8080/mhubx-cc/module/juwi/action?page=Logic.Interface&name=getMeasurement&source=system&system_id=*&msm_id=*', {
          headers: headers
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  };
}

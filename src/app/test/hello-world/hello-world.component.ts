import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent implements OnInit {

  constructor() { 

    name: 'World';
    var data;

    getData()
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
        data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  }

  ngOnInit() {}

}

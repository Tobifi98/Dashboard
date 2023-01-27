import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {
  test: any; //Variablen müssen für die Stringinterpolation außerhalb von funktionen deklariert werden

  constructor(private http: HttpClient) {
    name: 'World';

    //this.test = this.getData(); //hier wird der return wert aus der funktion in die variable geschoben
    //console.log(this.test);
  }
  /*getData() {
    const username = 'tester';
    const password = 'training';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('tester:training')
    });
    const options = {
      headers: headers,
    };

    return this.http.get('http://10.3.0.71:8080/mhubx-cc/module/juwi/action?page=Logic.Interface&name=getMeasurement&source=system&system_id=*&msm_id=*', { headers, responseType: 'json'});
  }*/

  /*ngOnInit() {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('tester:training'),
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Referer: 'unsafe-url',
    });
    this.http.get<any>('http://10.3.0.71:8080/mhubx-cc/module/juwi/action?page=Logic.Interface&name=getMeasurement&source=system&system_id=cps1&msm_id=good_prod', { headers }).subscribe(data => {
        console.log(data);
    })        
}*/
}

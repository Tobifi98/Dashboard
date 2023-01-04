import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent implements OnInit {
  test: any; //Variablen müssen für die Stringinterpolation außerhalb von funktionen deklariert werden

  constructor() {
    name: 'World';

    this.test = getData1(); //hier wird der return wert aus der funktion in die variable geschoben
    async function getData1() {
      try {
        const username = 'tester';
        const password = 'training';
        const headers = new Headers();
        headers.append(
          'Authorization',
          'Basic ' + btoa(`${username}:${password}`)
        );
        headers.append('Content-Type', 'application/json');

        const response = await fetch(
          'http://10.3.0.71:8080/mhubx-cc/module/juwi/action?page=Logic.Interface&name=getMeasurement&source=system&system_id=*&msm_id=*',
          {
            headers: headers,
          }
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  }

  ngOnInit() {}
}

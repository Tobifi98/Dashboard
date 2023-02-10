import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

interface Data {
  // interface definition of the json object
}

@Injectable({
  providedIn: 'root'
})

export class APIGetMeasurementService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Data> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('tester:training'),
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'mode': 'no-cors',
    });

    return this.http.get<Data>('http://10.3.0.71:8080/mhubx-cc/module/juwi/action?page=Logic.Interface&name=getMeasurement&source=system&system_id=cps1&msm_id=good_prod', { headers })
    .pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}

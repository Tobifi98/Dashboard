import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';
import {PythonShell} from 'python-shell';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  
  constructor() {
    let {PythonShell} = require('python-shell')
    PythonShell.run('src\app\python\Scripts\RestApi(1).py', null, function (result)){
      console.log('finished', result);
    }; 
  };
  

}

import { Component } from '@angular/core';
import { getName } from 'ionicons/dist/types/components/icon/utils';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  test = {
    "name" : "test",
    "id": 1234
  };
  service = new ApiServiceService;
  constructor() {
    this.getJson();
  }

  getJson(){
    let name = this.service.getConvertedData.toString();
    console.log(name);
    
  };

  
}

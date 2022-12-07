import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  public getConvertedData(){
    return fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', {

      method: 'GET',

      headers: {

          'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',

          'x-rapidapi-key': 'your_api_key',

      },

  })

      .then((response) =&gt; response.json()) // Parse the response in JSON

      .then((response) =&gt; {

          return response as ConversionData; // Cast the response type to our interface

      });
  };

}

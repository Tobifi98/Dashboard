import { Component, OnInit } from '@angular/core';
import * as mqtt from 'mqtt';

@Component({
  selector: 'app-mqtt',
  templateUrl: './mqtt.component.html',
  styleUrls: ['./mqtt.component.scss'],
})
export class MqttComponent implements OnInit {
  private client: mqtt.Client;
  message: string;

  constructor() {
    this.client = mqtt.connect('mqtt://kruepv.gibip.de');
    this.message = "";
  }

  ngOnInit() {
    this.client.subscribe('pv/QPIGS/status/ac_output_load', (err) => {
      if (!err) {
        console.log('subscribed to topic');
        this.client.on('message', (topic, message) => {
          this.message = message.toString();
        });
      }
    });
  }

  ngOnDestroy() {
    this.client.unsubscribe('mytopic', (err: any) => {
      if (!err) {
        console.log('unsubscribed from topic');
      }
    });
    this.client.end();
  }
}

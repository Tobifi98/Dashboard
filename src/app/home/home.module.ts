import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; //Ich weiß nicht warum der Import nicht erkannt wird... es funktioniert troztdem irgendwie...
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HelloWorldComponent } from '../test/hello-world/hello-world.component';
import { AppComponent } from '../app.component';
import { ApiCallComponent } from '../api-call/api-call.component';
import { MqttComponent } from '../mqtt/mqtt/mqtt.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, HelloWorldComponent, ApiCallComponent, MqttComponent] //you need to import your component here to create a new component cou have to type "ionic g c" into the command line
})
export class HomePageModule {}

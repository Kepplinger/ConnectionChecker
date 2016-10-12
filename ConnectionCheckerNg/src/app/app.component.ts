import {Component, OnInit } from '@angular/core';

import {LocalDateTime} from "./local-date-time";
import {HttpService} from "./http.service";
import {Device} from "./device";
import {FormatService} from "./util/format.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private devices: Device[];

  constructor(private httpService: HttpService) {}

  /* Gets called on initialisation and reads the data from the observable json object  */
  ngOnInit() {
    this.updateDevices();
  }

  forceUpdate() {
    this.updateDevices();
  }

  updateDevices(){
    this.httpService.getData()
      .subscribe(
        (data: Device[]) => this.devices = data
      );
  }

  getTimeString(date: LocalDateTime) :string {
      return FormatService.getTimeString(date);
  }

}

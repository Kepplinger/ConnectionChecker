import {Component} from '@angular/core';

import {Device} from "../classes/device";
import {FormatService} from "../util/format.service";
import {LocalDateTime} from "../classes/local-date-time";
import {DeviceService} from "./device.service";
import {Observable} from "rxjs";

@Component({
  selector: 'cc-device-list',
  templateUrl: './device-list.component.html' ,
  styles: []
})
export class DeviceListComponent{

  private devices: Device[];

  constructor(private deviceService: DeviceService) {
    Observable.interval(500)
      .subscribe((x) => {
        this.updateDevices();
        console.log("update");
      });
  }

  public updateDevices() {
      this.devices = this.deviceService.getDevices();
  }

  /** Returns a formatted date string for the html view */
  getTimeString(date: LocalDateTime) :string {
    return FormatService.getTimeString(date);
  }

}

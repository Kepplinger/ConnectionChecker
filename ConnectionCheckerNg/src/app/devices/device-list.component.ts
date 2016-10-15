import {Component} from '@angular/core';

import {Device} from "../classes/device";
import {DeviceService} from "./device.service";
import {Observable} from "rxjs";
import {Input} from "@angular/core/src/metadata/directives";
import {FormatService} from "../util/format.service";
import {LocalDateTime} from "../classes/local-date-time";

@Component({
  selector: 'cc-device-list',
  templateUrl: './device-list.component.html' ,
  styles: []
})
export class DeviceListComponent{

  private devices: Device[];

  @Input("device")
  private selectedDevice: Device;

  constructor(private deviceService: DeviceService) {
    Observable.interval(1000)
      .subscribe(() => {
        this.updateDevices();
      });
    this.updateDevices();
  }

  public updateDevices() {
      this.devices = this.deviceService.getDevices();
  }


  /** Returns a formatted date string for the html view */
  getTimeString(date: LocalDateTime) :string {
    return FormatService.getTimeString(date);
  }

  getColor(device:Device):string{

    if (device.status == true){
      return 'limegreen';
    }
    else if (device.status == false){
      return 'darkred';
    }
  }
}

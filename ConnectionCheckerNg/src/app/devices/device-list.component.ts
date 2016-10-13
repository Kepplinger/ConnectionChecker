import {Component, Input, OnInit} from '@angular/core';

import {Device} from "../classes/device";
import {FormatService} from "../util/format.service";
import {LocalDateTime} from "../classes/local-date-time";
import {DeviceService} from "./device.service";

@Component({
  selector: 'cc-device-list',
  templateUrl: './device-list.component.html' ,
  styles: []
})
export class DeviceListComponent implements OnInit{

  private devices: Device[];

  constructor(private deviceService: DeviceService) {
    this.devices = this.deviceService.getDevices();
    //console.log(this.devices.length);
    console.log("List");
  }

  ngOnInit(): void {

  }

  forceUpdate() {
    this.deviceService.updateDevices();
  }

  /** Returns a formatted date string for the html view */
  getTimeString(date: LocalDateTime) :string {
    return FormatService.getTimeString(date);
  }

}

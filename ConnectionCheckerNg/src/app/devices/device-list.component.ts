import {Component, EventEmitter, Output} from '@angular/core';

import {Device} from "../classes/device";
import {DeviceService} from "./device.service";
import {Observable} from "rxjs";
import {FormatService} from "../util/format.service";
import {LocalDateTime} from "../classes/local-date-time";

@Component({
  selector: 'cc-device-list',
  templateUrl: './device-list.component.html' ,
  styles: []
})
export class DeviceListComponent{

  @Output() selectedDevice = new EventEmitter<Device>();
  private selectedIndex = 0;
  private devices: Device[];

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

  public onSelect(device: Device, index: number) {
    this.selectedDevice.emit(device);
    this.selectedIndex = index;
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

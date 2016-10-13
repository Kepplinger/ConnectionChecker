import {Component} from '@angular/core';

import {Device} from "../classes/device";
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
    Observable.interval(1000)
      .subscribe(() => {
        this.updateDevices();
      });
  }

  public updateDevices() {
      this.devices = this.deviceService.getDevices();
  }

}

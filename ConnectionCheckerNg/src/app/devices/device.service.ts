import { Injectable, OnInit } from '@angular/core';

import {HttpService} from "../http.service";
import {Device} from "../classes/device";

@Injectable()
export class DeviceService {

  private devices: Device[];

  constructor(private httpService: HttpService) { }

  /**  Reads the data from the observable dvice array. */
  updateDevices(){
    this.httpService.getData()
      .subscribe(
        (data: Device[]) => this.devices = data
      );
  }

  getDevices() {
    this.updateDevices();
    //console.log(this.devices.length);
    return this.devices;
  }

}

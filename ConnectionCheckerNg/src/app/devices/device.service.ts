import { Injectable, OnInit } from '@angular/core';

import {HttpService} from "../http.service";
import {Device} from "../classes/device";
import {LocalDateTime} from "../classes/local-date-time";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class DeviceService {

  private devices: Device[];
  private lastUpdate: Date;

  constructor(private httpService: HttpService) { }

  /**  Reads the data from the observable device array. */
  updateDevices(){
    this.httpService.getData()
      .subscribe(
        (data: Device[]) => this.devices = data
      );
    this.lastUpdate = new Date();
  }

  getDevices() {
    this.updateDevices();
    //console.log(this.devices.length);
    return this.devices;
  }

  getOnlineDevices():number{
    if(this.devices!=null){
      var res = 0;
      for(var i = 0;i<this.devices.length;i++){
        if(this.devices[i].status == true){
          res++;
        }
      }
      return res;
    }
    else
      return 0;
  }
  getOfflineDevices():number{
    if(this.devices!=null)
      return this.devices.length-this.getOnlineDevices();
    else
      return 0;
  }

  getLastUpdate():Date{
    return this.lastUpdate;
  }

}

import { Injectable, OnInit } from '@angular/core';

import {HttpService} from "../util/http.service";
import {Device} from "../classes/device";
import {DateTime} from "../classes/date-time";
import {forEach} from "@angular/router/src/utils/collection";
import {FormatService} from "../util/format.service";

/**
 * This class is in possession of the device list
 * and recives them from the httpService.
 */
@Injectable()
export class DeviceService {

  private devices: Device[];
  private lastUpdate: Date;

  constructor(private httpService: HttpService) { }

  /**
   * Reads the data from the observable in an array.
   */
  private updateDevices(): void{
    this.httpService.getData()
      .subscribe(
        (data: Device[]) => this.devices = data
      );
    this.lastUpdate = new Date();
  }

  /**
   * Updates the list of devices and returns it.
   * @returns {Device[]}
   */
  public getDevices(): Device[] {
    this.updateDevices();
    return this.devices;
  }

  /**
   * Returns the number of online devices.
   * @returns {number}
   */
  public getOnlineDevices():number{
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

  /**
   * Returns the number of offline devices.
   * @returns {number}
   */
  public getOfflineDevices():number{
    if(this.devices!=null)
      return this.devices.length-this.getOnlineDevices();
    else
      return 0;
  }

  /**
   * Returns the time when the list was last updated.
   * @returns {Date}
   */
  public getLastUpdate():Date{
    return this.lastUpdate;
  }

}

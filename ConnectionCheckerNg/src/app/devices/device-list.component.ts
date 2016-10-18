import {Component, EventEmitter, Output} from '@angular/core';

import {Device} from "../classes/device";
import {DeviceService} from "./device.service";
import {Observable} from "rxjs";
import {FormatService} from "../util/format.service";
import {LocalDateTime} from "../classes/local-date-time";

@Component({
  selector: 'cc-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {

  @Output() selectedDeviceEmitter = new EventEmitter<Device>();
  private selectedDevice: Device;
  private selectedIndex = 0;
  private devices: Device[];

  /**
   * Constructor injects DeviceService and subscribes to a timer event.
   * Also slelects the first item in the list.
   * @param deviceService
   */
  constructor(private deviceService: DeviceService) {
    Observable.interval(1000)
      .subscribe(() => {
        this.updateDevices();
      });
    this.updateDevices();

    if (this.devices.length > 0) {
      this.selectedDevice = this.devices[0];
      this.selectedIndex = 0;
    }
  }

  /**
   * Refreshes all devices at a certain intverval
   * specified in the constructor.
   */
  public updateDevices() {
    this.devices = this.deviceService.getDevices();
    this.selectedDeviceEmitter.emit(this.selectedDevice);
  }

  /**
   * Gets called whenever an elements gets selected.
   * @param device
   * @param index
   */
  public onSelect(device: Device, index: number) {
    this.selectedDevice = device;
    this.selectedIndex = index;
    this.selectedDeviceEmitter.emit(device);
  }

  /**
   * Returns a formatted date string for the html view.
   * @param date
   * @returns {string}
   */
  getTimeString(date: LocalDateTime): string {
    return FormatService.getTimeString(date);
  }

  /**
   * Returns the color of the current status. (for the plug image)
   * @param device
   * @returns {string}
   */
  getColor(device: Device): string {

    if (device.status == true) {
      return 'limegreen';
    }
    else if (device.status == false) {
      return 'darkred';
    }
  }
}

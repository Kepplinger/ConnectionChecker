import {Component} from '@angular/core';

import {Device} from "../../../classes/device";

@Component({
  selector: 'cc-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  private selectedDevice: Device; //the current selected device

  constructor() {
  }

  public setSelectedDevice(device: Device) {
    if (device != null) {
      this.selectedDevice = device;
    }
  }

  public getSelectedDevice(): Device {
    return this.selectedDevice;
  }

}

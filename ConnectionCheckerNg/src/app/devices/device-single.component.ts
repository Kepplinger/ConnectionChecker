import {Component, Input} from '@angular/core';
import {Device} from "../classes/device";

@Component({
  selector: 'cc-device-single',
  templateUrl: './device-single.component.html',
  styles: []
})
export class DeviceSingleComponent {

  @Input('device') device: Device;

  constructor() {
  }

}

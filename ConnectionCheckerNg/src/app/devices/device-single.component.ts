import { Component } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

import {Device} from "../classes/device";
import {LocalDateTime} from "../classes/local-date-time";
import {FormatService} from "../util/format.service";

@Component({
  selector: 'cc-device-single',
  templateUrl: './device-single.component.html',
  styles: []
})
export class DeviceSingleComponent {

  @Input("device") device: Device;

  constructor() { }

  /** Returns a formatted date string for the html view */
  getTimeString(date: LocalDateTime) :string {
    return FormatService.getTimeString(date);
  }

  getColor():string{

    if (this.device.status == true){
      return 'green';
    }
    else if (this.device.status == false){
      return 'red';
    }
  }

}

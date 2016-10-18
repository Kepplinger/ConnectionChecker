import {Component, Input} from '@angular/core';

import {Device} from "../classes/device";
import {LocalDateTime} from "../classes/local-date-time";
import {FormatService} from "../util/format.service";

/**
 * This class manages the details of the current selected device.
 */
@Component({
  selector: 'cc-device-single',
  templateUrl: './device-single.component.html',
  styles: []
})
export class DeviceSingleComponent {

  @Input('device') device: Device;  //current selected device

  constructor() {
  }

  /**
   * Returns a formatted date string for the html view.
   * @param date
   * @returns {string}
   */
  getTimeString(date: LocalDateTime): string {
    return FormatService.getTimeString(date);
  }

}

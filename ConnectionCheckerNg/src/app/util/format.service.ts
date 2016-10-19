import {Injectable} from '@angular/core';

import {DateTime} from "../classes/date-time";

@Injectable()
export class FormatService {

  /** Returns a formatted date string. */
  public static getTimeString(dateTime: DateTime): string {
    if (dateTime != null) {
      return this.pad(dateTime.day, 2) + "." +
        this.pad(dateTime.month, 2) + "." +
        this.pad(dateTime.year, 4) + " " +
        this.pad(dateTime.hour, 2) + ":" +
        this.pad(dateTime.minute, 2) + ":" +
        this.pad(dateTime.second, 2);
    } else {
      return "";
    }
  }

  /** Fills the numberstring up to the given number with zeros. */
  public static pad(num, size): string {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

}

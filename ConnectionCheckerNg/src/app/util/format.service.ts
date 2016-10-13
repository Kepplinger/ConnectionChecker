import { Injectable } from '@angular/core';

import { LocalDateTime } from "../classes/local-date-time";

@Injectable()
export class FormatService {

  /** Returns a formatted date string. */
  public static getTimeString(dateTime: LocalDateTime) : string {
    return this.pad(dateTime.dayOfMonth,2) + "." +
      this.pad(dateTime.monthValue,2) + "." +
      this.pad(dateTime.year,4) + " " +
      this.pad(dateTime.hour,2) + ":" +
      this.pad(dateTime.minute,2) + ":" +
      this.pad(dateTime.second,2);
  }

  /** Fills the numberstring up to the given number with zeros. */
  public static pad(num, size) : string {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

}

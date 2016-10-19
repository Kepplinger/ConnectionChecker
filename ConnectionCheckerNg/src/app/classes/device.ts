import {DateTime} from "./date-time";

/**
 * A list of devices are recived at a certain interval using
 * HTTP request from a REST service.
 */
export class Device {
  constructor(public name: string,
              public lastSeen: DateTime,
              public status : boolean)
  { }
}

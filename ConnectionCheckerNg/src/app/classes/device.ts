import {LocalDateTime} from "./local-date-time";
import { Status } from "./status";

export class Device {
  constructor(public name: string,
              public lastSeen: LocalDateTime,
              public status : Status)
  { }
}

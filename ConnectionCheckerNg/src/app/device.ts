import {LocalDateTime} from "./local-date-time";

export class Device {
  constructor(public name: string, public lastSeen: LocalDateTime) { }
}

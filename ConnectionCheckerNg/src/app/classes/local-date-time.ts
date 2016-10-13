export class LocalDateTime {

  constructor(public nano: number,
              public dayOfYear: number,
              public dayOfWeek: number,
              public dayOfMonth: number,
              public hour: number,
              public minute: number,
              public second: number,
              public year: number,
              public month: string,
              public monthValue: number,
              public chronology: any)
  { }

  // get timeString(): string{
  //   return this.dayOfMonth + "." +
  //     this.monthValue + "." +
  //     this.year + " " +
  //     this.hour + ":" +
  //     this.minute + ":" +
  //     this.second;
  // }
}

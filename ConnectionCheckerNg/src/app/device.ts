export class Device implements Serializable<Device>{

  constructor(public name: string) { }

  deserializable(input): Device {
    this.name = input.name;
    return this;
  }

}

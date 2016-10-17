export class HistoryItem {
  private _time:Date;
  private _data: any[];

  constructor (private time:Date,private data:any[]){
    this._time = time;
    this._data = data;
  }

  getTime():Date{
    return this._time;
  }
  getData():any[]{
    return this._data;
  }
}

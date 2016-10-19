import { Injectable } from '@angular/core';
import {HistoryItem} from "./history-item";
import {HistoryUtil} from "./historyUtil";

@Injectable()
export class HistoryService {

  private static total_history_onoff:HistoryItem[];

  constructor() {

  }

  public getTotalHistoryOnOff():HistoryItem[]{
    if(HistoryService.total_history_onoff == null)
      this.initTotalHistoryOnOff(HistoryUtil.initArray());
    return HistoryService.total_history_onoff;
  }
  public addItemToTotalHistoryOnOff(item:HistoryItem){
    this.getTotalHistoryOnOff().push(item);
  }
  public initTotalHistoryOnOff(array:HistoryItem[]){
    HistoryService.total_history_onoff = array;
  }
}

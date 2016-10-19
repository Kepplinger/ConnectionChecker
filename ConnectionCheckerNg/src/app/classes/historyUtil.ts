import {HistoryItem} from "./history-item";

export class HistoryUtil {

    private static ARRAY_SIZE = 100;

    public static initArray():HistoryItem[]{
      var arr = new Array();

      for(var i = 0;i<HistoryUtil.ARRAY_SIZE;i++){
        var date = new Date();
        date.setTime(date.getTime()-(i*1000));
        arr.push(new HistoryItem(date,[0,0]));
      }
      return arr;
    }

    public static getLatest(array:HistoryItem[],time:number,unit:string):HistoryItem[]{
      var arr = new Array();

      var unitCalc =  unit=='sec'?1000:unit=='min'?60000:unit=='hours'?3600*1000:unit=='days'?24*3600*1000:1000000000;

      time = time<=0?1:time;

      if(time == 1 && unit == 'sec')  //Displayed incorrectly if Settings = 1sec
        time = 2;

      for(var i = 0;i<array.length;i++){
        var date = new Date();
        date.setTime(date.getTime()-(time*unitCalc));
        if(array[i].getTime()>=date)
          arr.push(array[i]);
      }
      return arr;
    }
}

import {Component, OnInit} from '@angular/core';
import {Device} from "../../../classes/device";
import {DeviceService} from "../../../devices/device.service";
import {Observable} from "rxjs";
import {HistoryItem} from "../../../classes/history-item";
import {HistoryUtil} from "../../../classes/historyUtil";
import {Input} from "@angular/core/src/metadata/directives";
import {HistoryService} from "../../../classes/history.service";

declare var google: any;

@Component({
  selector: 'cc-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  private static googleLoaded: boolean;

  private imgPath = '../../../../resources/loading.gif';

  private devices: Device[];
  private offline: number;
  private online: number;

  //Chart settings Area chart
  private static ac_set_time:number = 1;
  private static ac_set_unit:string = "all";

  setAcSetTime(time:number){
    OverviewComponent.ac_set_time = time;
  }
  setAcTimeUnit(unit:string){
    OverviewComponent.ac_set_unit = unit;
  }
  getAcTimeUnit(){
    return OverviewComponent.ac_set_unit;
  }
  getAcTime(){
    return OverviewComponent.ac_set_time;
  }
  //END chart settings area chart

  constructor(private deviceService: DeviceService,private historyService:HistoryService) {
    Observable.interval(1000)
      .subscribe(() => {
        this.updateDevices();
      });
  }

  /**
   * Gets called when the compnent is initialized.
   */
  ngOnInit() {
    this.loadGoogleChart();
  }

  /**
   * All devices get refreshed and redrawn.
   * This function gets repeatedly called at a certain interval
   * which is definded in the constructor.
   */
  public updateDevices() {
    this.devices = this.deviceService.getDevices();

    this.offline = this.deviceService.getOfflineDevices();
    this.online = this.deviceService.getOnlineDevices();

    //Add history item to "timeline"
    var item = new HistoryItem(this.deviceService.getLastUpdate(), [this.offline, this.online]);
    this.historyService.addItemToTotalHistoryOnOff(item);

    //Load Chart
    this.loadGoogleChart();
  }

  /**
   * Initalizes the Google Charts when this function gets called th first time.
   * Otherwise it just redraws the charts.
   */
  loadGoogleChart() {
    if  (!OverviewComponent.googleLoaded) {
      OverviewComponent.googleLoaded = true;
      google.charts.load('current', {'packages': ['corechart']});
    }
    google.charts.setOnLoadCallback(() => this.drawCharts());
  }

  /**
   * Draws the charts if all contions are met.
   */
  drawCharts() {
    if (google != null && google.visualization != null && this.devices != null) {
      this.drawPieChart();
      this.drawLineChart();
    }
  }

  /**
   * Draws the pie chart.
   */
  drawPieChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Status');

    var on = 0, off = 0;
    for (var i = 0; i < this.historyService.getTotalHistoryOnOff().length; i++) {
      if (this.historyService.getTotalHistoryOnOff()[i] != null) {
        on += this.historyService.getTotalHistoryOnOff()[i].getData()[1];
        off += this.historyService.getTotalHistoryOnOff()[i].getData()[0];
      }
    }

    data.addRows([
      ['Online', on / (on + off)],
      ['Offline', off / (on + off)]
    ]);

    // Set chart options
    var options = {
      colors: ['#5cb85c', '#d9534f'],
      height: 350
    };

    if (document.getElementById('onof_chart') != null) {
      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('onof_chart'));
      chart.draw(data, options);
    }
  }

  /**
   * Draws the line chart.
   */
  drawLineChart() {
    if (this.historyService.getTotalHistoryOnOff().length > 0) {

      //return;
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Timestamp');
      data.addColumn('number', 'Offline');
      data.addColumn('number', 'Online');


      //Data filter
      var predata = HistoryUtil.getLatest(this.historyService.getTotalHistoryOnOff(),this.getAcTime(),this.getAcTimeUnit());

      for (var i = 0; i < predata.length; i++) {
        if (predata[i] != null) {
          var ba = [
            predata[i].getTime(),
            predata[i].getData()[1],
            predata[i].getData()[0]
          ];
          data.addRow(ba);
        }
      }

      var options = {
        colors: ['#5cb85c', '#d9534f'],
        vAxis: {
          maxValue: this.devices.length,
          minValue: 0
        },
        height: 350
      };


      if (document.getElementById('history_onof_chart') != null) {
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.AreaChart(document.getElementById('history_onof_chart'));
        chart.draw(data, options);
      }
    }
  }
}

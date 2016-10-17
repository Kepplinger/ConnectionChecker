import {Component, OnInit} from '@angular/core';
import {Device} from "../../../classes/device";
import {DeviceService} from "../../../devices/device.service";
import {Observable} from "rxjs";
import {HistoryItem} from "../../../classes/history-item";

declare var google: any;

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  private devices: Device[];
  private offline: number;
  private online: number;

  private history_onof: HistoryItem[] = [];

  constructor(private deviceService: DeviceService) {
    Observable.interval(1000)
      .subscribe(() => {
        this.updateDevices();
      });
  }

  public updateDevices() {
    this.devices = this.deviceService.getDevices();

    this.offline = this.deviceService.getOfflineDevices();
    this.online = this.deviceService.getOnlineDevices();

    var item = new HistoryItem(this.deviceService.getLastUpdate(), [this.offline, this.online]);
    this.history_onof.push(item);
    this.loadGoogleChart();
  }

  ngOnInit() {
    this.loadGoogleChart();
  }

  loadGoogleChart() {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(() => this.drawCharts());
  }

  drawCharts() {
    if (google != null && google.visualization != null && this.devices != null) {
      this.drawPieChart();
      this.drawLineChart();
    }
  }

  drawPieChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Status');

    var on = 0, off = 0;
    for (var i = 0; i < this.history_onof.length; i++) {
      if (this.history_onof[i] != null) {
        on += this.history_onof[i].getData()[1];
        off += this.history_onof[i].getData()[0];
      }
    }

    data.addRows([
      ['Online', on / (on + off)],
      ['Offline', off / (on + off)]
    ]);

    // Set chart options
    var options = {
      colors: ['#5cb85c', '#d9534f']
    };

    if (document.getElementById('onof_chart') != null) {
      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('onof_chart'));
      chart.draw(data, options);
    }
  }

  drawLineChart() {
    if (this.history_onof.length > 0) {

      //return;
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Timestamp');
      data.addColumn('number', 'Offline');
      data.addColumn('number', 'Online');

      for (var i = 0; i < this.history_onof.length; i++) {
        if (this.history_onof[i] != null) {
          var ba = [
            this.history_onof[i].getTime(),
            this.history_onof[i].getData()[1],
            this.history_onof[i].getData()[0]
          ];
          data.addRow(ba);
        }
      }

      var options = {
        colors: ['#5cb85c', '#d9534f'],
        vAxis: {
          maxValue: this.devices.length,
          minValue: 0
        }
      };

      if (document.getElementById('history_onof_chart') != null) {
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.AreaChart(document.getElementById('history_onof_chart'));
        chart.draw(data, options);
      }
    }
  }


  checkloaded(): boolean {
    return !((typeof google === 'undefined') || (typeof google.visualization === 'undefined'));
  }

}

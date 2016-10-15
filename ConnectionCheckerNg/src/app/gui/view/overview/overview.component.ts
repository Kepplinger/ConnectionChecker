import { Component, OnInit } from '@angular/core';
import {Device} from "../../../classes/device";
import {DeviceService} from "../../../devices/device.service";
import {Observable} from "rxjs";

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

  constructor(private deviceService: DeviceService) {
    Observable.interval(1000)
      .subscribe(() => {
        this.updateDevices();
      });
    this.updateDevices();
  }

  public updateDevices() {
    this.devices = this.deviceService.getDevices();
    this.offline = this.deviceService.getOfflineDevices();
    this.online = this.deviceService.getOnlineDevices();
  }

  ngOnInit() {
    this.loadGoogleChart();
  }

  loadGoogleChart() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(() => this.drawChart());
  }

  drawChart () {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);


    // Set chart options
    var options = {'title':'How Much Pizza I Ate Last Night',
      'width':400,
      'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);

  }

  checkloaded(): boolean {
    return !((typeof google === 'undefined') || (typeof google.visualization === 'undefined'));
  }

}

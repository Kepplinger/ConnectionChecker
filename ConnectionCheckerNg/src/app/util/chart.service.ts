import { Injectable } from '@angular/core';

declare var google: any;

@Injectable()
export class ChartService {



  constructor() { }

  loadGoogleChart() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(() => this.drawChart());
  }
}

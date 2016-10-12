import {Component, OnInit} from '@angular/core';

import {HttpService} from "./http.service";
import {Device} from "./device";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private devices: Device[];

  constructor(private httpService: HttpService) {}

  /* Gets called on initialisation and reads the data from the observable json object  */
  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: Device[]) => this.devices = data
      );
  }
}

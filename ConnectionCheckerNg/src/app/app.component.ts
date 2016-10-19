import {Component} from '@angular/core';

import {HttpService} from "./util/http.service";

@Component({
  selector: 'cc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private errorData: string;

  constructor(private httpService: HttpService) {
    httpService.error.subscribe(item=>this.errorData = item);
  }

}

import { Component } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private errorData:string;
  constructor(private httpService:HttpService) {
      httpService.error.subscribe(item=>this.errorData = item);
  }

}

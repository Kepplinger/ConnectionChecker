import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Device} from "./classes/device";
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get("http://localhost:8081/ccrestprovider/rs/devices")   //Reads the data from the specified URL.
      .map((response: Response) => <Device[]> response.json());      //Maps the data from an observable http response to an smaller observable json object.
  }
}

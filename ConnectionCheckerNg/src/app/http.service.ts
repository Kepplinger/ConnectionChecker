import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get("http://localhost:8081/ccrestprovider/rs/devices")
      .map((response: Response) => response.json());
  }
}

import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Device} from "./classes/device";
import {Observable} from "rxjs";
import 'rxjs/Rx';
import {Output} from "@angular/core/src/metadata/directives";

@Injectable()
export class HttpService {

  @Output() lastUpdate = new EventEmitter<string>();

  @Output() error = new EventEmitter<string>();

  constructor(private http: Http) { }

  getData() {
    this.onLastUpdate();
    return this.http.get("http://localhost:8081/ccrestprovider/rs/devices")   //Reads the data from the specified URL.
      .map((response: Response) => <Device[]> response.json())      //Maps the data from an observable http response to an smaller observable json object.
      .catch((error:any) => this.onError(error));
  }

  onError(error:any):any{
    this.error.emit("Connection Error: (REST Service)");
    return Observable.throw(error.json().error || 'Server error');
  }

  onLastUpdate(){
    var date = new Date();
    var hh = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
    var mm = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    var ss = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
    this.lastUpdate.emit(hh+":"+mm+":"+ss);
  }
}

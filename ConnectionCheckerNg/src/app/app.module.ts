import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormatService } from "./util/format.service";
import { AppComponent } from './app.component';
import { HttpService } from "./util/http.service";
import { DeviceService } from "./devices/device.service";
import { DeviceListComponent } from './devices/device-list.component';
import { NavbarComponent } from './gui/navbar/navbar.component';
import { ViewComponent } from './gui/view/view.component';
import { OverviewComponent } from './gui/view/overview/overview.component';
import { DetailsComponent } from './gui/view/details/details.component';
import { DeviceSingleComponent } from './devices/device-single.component';
import {HistoryService} from "./classes/history.service";

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    NavbarComponent,
    ViewComponent,
    OverviewComponent,
    DetailsComponent,
    DeviceSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, DeviceService, FormatService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

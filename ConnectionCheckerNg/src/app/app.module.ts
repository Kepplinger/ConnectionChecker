import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormatService } from "./util/format.service";
import { AppComponent } from './app.component';
import { HttpService } from "./http.service";
import { DeviceService } from "./devices/device.service";
import { DeviceListComponent } from './devices/device-list.component';
import { DeviceSingleComponent } from './devices/device-single.component';
import { NavbarComponent } from './gui/navbar/navbar.component';
import { ViewComponent } from './gui/view/view.component';
import { OverviewComponent } from './gui/view/overview/overview.component';
import { DetailsComponent } from './gui/view/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    DeviceSingleComponent,
    NavbarComponent,
    ViewComponent,
    OverviewComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, DeviceService, FormatService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

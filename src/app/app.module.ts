import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './header/sidebar/sidebar.component';
import { NavComponent } from './header/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SensorsComponent } from './devices/sensors/sensors.component';
import { WeatherComponent } from './devices/sensors/weather/weather.component';
import { ActuatorsComponent } from './devices/actuators/actuators.component';
import { DevicesComponent } from './devices/devices.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NavComponent,
    FooterComponent,
    SensorsComponent,
    WeatherComponent,
    ActuatorsComponent,
    DevicesComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

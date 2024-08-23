import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { ButtonWidgetComponent } from './components/button-widget/button-widget.component';

@NgModule({
  declarations: [AppComponent, WeatherWidgetComponent, ButtonWidgetComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, ContentChild, signal, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent {
  hidden = signal<boolean>(false);

  @ContentChild('footerWidget') footerContent: TemplateRef<any> | null = null;
}

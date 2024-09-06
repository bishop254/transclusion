import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-footer-widget',
  template: `
    <p>I am twice as tall... Burna</p>
    <p>Bye then</p>
  `,
  styleUrls: ['./footer-widget.component.scss'],
})
export class FooterWidgetComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('Footer widget got destroyed');
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWidgetComponent } from './button-widget.component';

describe('ButtonWidgetComponent', () => {
  let component: ButtonWidgetComponent;
  let fixture: ComponentFixture<ButtonWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonWidgetComponent]
    });
    fixture = TestBed.createComponent(ButtonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

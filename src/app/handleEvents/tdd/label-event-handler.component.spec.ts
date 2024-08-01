import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelEventHandlerComponent } from '../label-event-handler/label-event-handler.component';

describe('LabelEventHandlerComponent', () => {
  let component: LabelEventHandlerComponent;
  let fixture: ComponentFixture<LabelEventHandlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelEventHandlerComponent]
    });
    fixture = TestBed.createComponent(LabelEventHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

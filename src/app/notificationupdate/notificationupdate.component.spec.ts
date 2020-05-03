import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationupdateComponent } from './notificationupdate.component';

describe('NotificationupdateComponent', () => {
  let component: NotificationupdateComponent;
  let fixture: ComponentFixture<NotificationupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentDashboardComponent } from './garment-dashboard.component';

describe('GarmentDashboardComponent', () => {
  let component: GarmentDashboardComponent;
  let fixture: ComponentFixture<GarmentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

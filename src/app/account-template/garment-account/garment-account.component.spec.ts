import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentAccountComponent } from './garment-account.component';

describe('GarmentAccountComponent', () => {
  let component: GarmentAccountComponent;
  let fixture: ComponentFixture<GarmentAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

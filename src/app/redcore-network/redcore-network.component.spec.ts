import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedcoreNetworkComponent } from './redcore-network.component';

describe('RedcoreNetworkComponent', () => {
  let component: RedcoreNetworkComponent;
  let fixture: ComponentFixture<RedcoreNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedcoreNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedcoreNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

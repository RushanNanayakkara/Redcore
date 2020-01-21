import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Designer2DComponent } from './designer2-d.component';

describe('Designer2DComponent', () => {
  let component: Designer2DComponent;
  let fixture: ComponentFixture<Designer2DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Designer2DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Designer2DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Designer3DComponent } from './designer3-d.component';

describe('Designer3DComponent', () => {
  let component: Designer3DComponent;
  let fixture: ComponentFixture<Designer3DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Designer3DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Designer3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

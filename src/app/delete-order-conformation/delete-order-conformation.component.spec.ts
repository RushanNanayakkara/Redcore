import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrderConformationComponent } from './delete-order-conformation.component';

describe('DeleteOrderConformationComponent', () => {
  let component: DeleteOrderConformationComponent;
  let fixture: ComponentFixture<DeleteOrderConformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteOrderConformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOrderConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

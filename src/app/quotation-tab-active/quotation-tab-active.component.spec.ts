import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationTabActiveComponent } from './quotation-tab-active.component';

describe('QuotationTabActiveComponent', () => {
  let component: QuotationTabActiveComponent;
  let fixture: ComponentFixture<QuotationTabActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationTabActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationTabActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

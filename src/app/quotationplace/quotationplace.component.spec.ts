import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationplaceComponent } from './quotationplace.component';

describe('QuotationplaceComponent', () => {
  let component: QuotationplaceComponent;
  let fixture: ComponentFixture<QuotationplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

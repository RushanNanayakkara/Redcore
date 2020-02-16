import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTemplateComponent } from './account-template.component';

describe('AccountTemplateComponent', () => {
  let component: AccountTemplateComponent;
  let fixture: ComponentFixture<AccountTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

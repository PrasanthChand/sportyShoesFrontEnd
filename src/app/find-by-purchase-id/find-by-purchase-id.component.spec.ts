import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByPurchaseIdComponent } from './find-by-purchase-id.component';

describe('FindByPurchaseIdComponent', () => {
  let component: FindByPurchaseIdComponent;
  let fixture: ComponentFixture<FindByPurchaseIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByPurchaseIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByPurchaseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

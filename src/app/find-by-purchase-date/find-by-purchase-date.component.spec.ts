import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByPurchaseDateComponent } from './find-by-purchase-date.component';

describe('FindByPurchaseDateComponent', () => {
  let component: FindByPurchaseDateComponent;
  let fixture: ComponentFixture<FindByPurchaseDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByPurchaseDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByPurchaseDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

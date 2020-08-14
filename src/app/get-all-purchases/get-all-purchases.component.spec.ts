import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPurchasesComponent } from './get-all-purchases.component';

describe('GetAllPurchasesComponent', () => {
  let component: GetAllPurchasesComponent;
  let fixture: ComponentFixture<GetAllPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

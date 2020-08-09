import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByProductIdComponent } from './find-by-product-id.component';

describe('FindByProductIdComponent', () => {
  let component: FindByProductIdComponent;
  let fixture: ComponentFixture<FindByProductIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByProductIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByProductIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

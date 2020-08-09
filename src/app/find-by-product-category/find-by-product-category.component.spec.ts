import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByProductCategoryComponent } from './find-by-product-category.component';

describe('FindByProductCategoryComponent', () => {
  let component: FindByProductCategoryComponent;
  let fixture: ComponentFixture<FindByProductCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByProductCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

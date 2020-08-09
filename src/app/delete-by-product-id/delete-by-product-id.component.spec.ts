import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteByProductIdComponent } from './delete-by-product-id.component';

describe('DeleteByProductIdComponent', () => {
  let component: DeleteByProductIdComponent;
  let fixture: ComponentFixture<DeleteByProductIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteByProductIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteByProductIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteByUserIdComponent } from './delete-by-user-id.component';

describe('DeleteByUserIdComponent', () => {
  let component: DeleteByUserIdComponent;
  let fixture: ComponentFixture<DeleteByUserIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteByUserIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteByUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

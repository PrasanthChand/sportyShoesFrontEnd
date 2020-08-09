import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByUserIdComponent } from './find-by-user-id.component';

describe('FindByUserIdComponent', () => {
  let component: FindByUserIdComponent;
  let fixture: ComponentFixture<FindByUserIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByUserIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

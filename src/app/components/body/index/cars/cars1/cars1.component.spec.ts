import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cars1Component } from './cars1.component';

describe('Cars1Component', () => {
  let component: Cars1Component;
  let fixture: ComponentFixture<Cars1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cars1Component]
    });
    fixture = TestBed.createComponent(Cars1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

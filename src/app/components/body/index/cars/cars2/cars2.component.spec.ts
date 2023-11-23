import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cars2Component } from './cars2.component';

describe('Cars2Component', () => {
  let component: Cars2Component;
  let fixture: ComponentFixture<Cars2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cars2Component]
    });
    fixture = TestBed.createComponent(Cars2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

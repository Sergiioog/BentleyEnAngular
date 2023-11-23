import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogheadComponent } from './bloghead.component';

describe('BlogheadComponent', () => {
  let component: BlogheadComponent;
  let fixture: ComponentFixture<BlogheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogheadComponent]
    });
    fixture = TestBed.createComponent(BlogheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

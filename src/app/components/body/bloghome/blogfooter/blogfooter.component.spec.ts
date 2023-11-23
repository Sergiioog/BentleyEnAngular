import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogfooterComponent } from './blogfooter.component';

describe('BlogfooterComponent', () => {
  let component: BlogfooterComponent;
  let fixture: ComponentFixture<BlogfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogfooterComponent]
    });
    fixture = TestBed.createComponent(BlogfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

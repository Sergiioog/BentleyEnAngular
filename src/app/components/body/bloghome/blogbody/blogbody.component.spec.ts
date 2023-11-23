import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogbodyComponent } from './blogbody.component';

describe('BlogbodyComponent', () => {
  let component: BlogbodyComponent;
  let fixture: ComponentFixture<BlogbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogbodyComponent]
    });
    fixture = TestBed.createComponent(BlogbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

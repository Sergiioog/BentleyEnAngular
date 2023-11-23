import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceComponent } from './sentence.component';

describe('SentenceComponent', () => {
  let component: SentenceComponent;
  let fixture: ComponentFixture<SentenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceComponent]
    });
    fixture = TestBed.createComponent(SentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

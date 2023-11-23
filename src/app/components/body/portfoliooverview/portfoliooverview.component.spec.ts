import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliooverviewComponent } from './portfoliooverview.component';

describe('PortfoliooverviewComponent', () => {
  let component: PortfoliooverviewComponent;
  let fixture: ComponentFixture<PortfoliooverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliooverviewComponent]
    });
    fixture = TestBed.createComponent(PortfoliooverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNavigationComponent } from './portfolio-navigation.component';

describe('PortfolioNavigationComponent', () => {
  let component: PortfolioNavigationComponent;
  let fixture: ComponentFixture<PortfolioNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePortfolioTemplateComponent } from './single-portfolio-template.component';

describe('SinglePortfolioTemplateComponent', () => {
  let component: SinglePortfolioTemplateComponent;
  let fixture: ComponentFixture<SinglePortfolioTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePortfolioTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePortfolioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

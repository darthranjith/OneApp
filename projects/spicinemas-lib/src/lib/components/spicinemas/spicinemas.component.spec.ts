import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpicinemasComponent } from './spicinemas.component';

describe('SpicinemasComponent', () => {
  let component: SpicinemasComponent;
  let fixture: ComponentFixture<SpicinemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpicinemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpicinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

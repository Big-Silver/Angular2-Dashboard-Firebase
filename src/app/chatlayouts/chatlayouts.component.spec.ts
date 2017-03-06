import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlayoutsComponent } from './chatlayouts.component';

describe('ChatlayoutsComponent', () => {
  let component: ChatlayoutsComponent;
  let fixture: ComponentFixture<ChatlayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatlayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatlayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

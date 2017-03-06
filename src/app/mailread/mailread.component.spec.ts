import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailreadComponent } from './mailread.component';

describe('MailreadComponent', () => {
  let component: MailreadComponent;
  let fixture: ComponentFixture<MailreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

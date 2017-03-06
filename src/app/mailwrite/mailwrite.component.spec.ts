import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailwriteComponent } from './mailwrite.component';

describe('MailwriteComponent', () => {
  let component: MailwriteComponent;
  let fixture: ComponentFixture<MailwriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailwriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailwriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

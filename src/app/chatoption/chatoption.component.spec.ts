import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatoptionComponent } from './chatoption.component';

describe('ChatoptionComponent', () => {
  let component: ChatoptionComponent;
  let fixture: ComponentFixture<ChatoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

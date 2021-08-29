import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3Component } from './c3.component';

describe('C3Component', () => {
  let component: C3Component;
  let fixture: ComponentFixture<C3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

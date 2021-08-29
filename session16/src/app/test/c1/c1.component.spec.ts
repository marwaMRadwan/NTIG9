import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1Component } from './c1.component';

describe('C1Component', () => {
  let component: C1Component;
  let fixture: ComponentFixture<C1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

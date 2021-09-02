import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YComponent } from './y.component';

describe('YComponent', () => {
  let component: YComponent;
  let fixture: ComponentFixture<YComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

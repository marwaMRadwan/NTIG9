import { TestBed } from '@angular/core/testing';

import { MyGuardGuard } from './my-guard.guard';

describe('MyGuardGuard', () => {
  let guard: MyGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

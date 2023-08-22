import { TestBed } from '@angular/core/testing';

import { SingleParentService } from './single-parent.service';

describe('SingleParentService', () => {
  let service: SingleParentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleParentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

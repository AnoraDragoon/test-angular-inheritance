import { TestBed } from '@angular/core/testing';

import { CustomChildService } from './custom-child.service';

describe('CustomChildService', () => {
  let service: CustomChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TelivisionService } from './telivision.service';

describe('TelivisionService', () => {
  let service: TelivisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelivisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

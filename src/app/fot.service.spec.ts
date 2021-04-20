import { TestBed } from '@angular/core/testing';

import { FotService } from './fot.service';

describe('FotService', () => {
  let service: FotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

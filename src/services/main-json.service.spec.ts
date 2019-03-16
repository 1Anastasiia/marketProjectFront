import { TestBed } from '@angular/core/testing';

import { MainJsonService } from './main-json.service';

describe('MainJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainJsonService = TestBed.get(MainJsonService);
    expect(service).toBeTruthy();
  });
});

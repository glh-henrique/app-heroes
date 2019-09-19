import { TestBed } from '@angular/core/testing';

import { ShowLoaderService } from './show-loader.service';

describe('ShowLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowLoaderService = TestBed.get(ShowLoaderService);
    expect(service).toBeTruthy();
  });
});

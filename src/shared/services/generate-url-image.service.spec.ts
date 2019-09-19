import { TestBed } from '@angular/core/testing';

import { GenerateUrlImageService } from './generate-url-image.service';

describe('GenerateUrlImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateUrlImageService = TestBed.get(GenerateUrlImageService);
    expect(service).toBeTruthy();
  });
});

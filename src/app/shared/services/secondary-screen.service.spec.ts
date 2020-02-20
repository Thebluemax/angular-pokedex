import { TestBed } from '@angular/core/testing';

import { SecondaryScreenService } from './secondary-screen.service';

describe('SecondaryScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondaryScreenService = TestBed.get(SecondaryScreenService);
    expect(service).toBeTruthy();
  });
});

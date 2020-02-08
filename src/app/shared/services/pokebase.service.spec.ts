import { TestBed } from '@angular/core/testing';

import { PokebaseService } from './pokebase.service';

describe('PokebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokebaseService = TestBed.get(PokebaseService);
    expect(service).toBeTruthy();
  });
});

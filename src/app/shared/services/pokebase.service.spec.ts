import { TestBed } from '@angular/core/testing';

import { PokebaseService } from './pokebase.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PokebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule,
                HttpClientModule
              ]
  }));

  it('should be created', () => {
    const service: PokebaseService = TestBed.get(PokebaseService);
    expect(service).toBeTruthy();
  });
});

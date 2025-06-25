import { PokebaseService } from '@core/services/pokebase.service'
import { SecondaryScreenService } from '@core/services/secondary-screen.service'
import { of } from 'rxjs';


// Create mock service classes
export class MockPokebaseService {

    getItems(apiUrl: string, offset: number, limit: number) {
    return of({
      count: 1126,
      next: `https://pokeapi.co/api/v2/${apiUrl}?offset=${offset + limit}&limit=${limit}`,
      previous: offset > 0 ? `https://pokeapi.co/api/v2/${apiUrl}?offset=${Math.max(0, offset - limit)}&limit=${limit}` : null,
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' }
      ]
    });
  }

  getInfoLocation(id: string) {
    return of({
      name: 'test-location',
      region: { name: 'kanto', url: 'region-url' },
      areas: [{ name: 'test-area', url: 'area-url' }]
    });
  }
  
  getLocationArea(url: string) {
    return of({
      pokemon_encounters: [
        { pokemon: { name: 'pikachu', url: 'pokemon-url' } }
      ]
    });
  }
}

export class MockSecondaryScreenService {
  resetScreen() {}
  setScreen(data: any) {}
}

// Use in providers like this:
/*providers: [
  { provide: PokebaseService, useClass: MockPokebaseService },
  { provide: SecondaryScreenService, useClass: MockSecondaryScreenService },
]*/

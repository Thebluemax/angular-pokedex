import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { PokebaseService } from '@core/services/pokebase.service';
import { SecondaryScreenService } from '../../../../services/secondary-screen.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from '@core/models/pokemon';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'pkd-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
/**
 * Componente Pokemon, gestion la pantalla del
 * pokemon
 */
export class PokemonComponent  {

  @Input() pokemon: Pokemon | null = null;
  private idObservable: Subscription | null = null;
  public list: Pokemon[] = [];
  public viewList: Pokemon[] = [];

  constructor() {
  }

}

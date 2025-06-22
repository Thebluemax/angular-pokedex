import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { PokebaseService } from '@core/services/pokebase.service';
import { SecondaryScreenService } from '../../../core/services/secondary-screen.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from '@core/models/pokemon';
import { Observable, Subscription } from 'rxjs';

/**
 * @component
 * @author Maximiliano Fernández <thebluemax13@gmail.com>
 * @fileoverview This component displays detailed information about a specific Pokémon.
 * @since 2025-06-22
 * 
 * This componet is part of the PokeDex application and is used to show detailed information about a specific Pokémon, including its name, sprite, and additional details.
 * 
 * @description This component displays detailed information about a specific Pokémon.
 * 
 * @class PokemonComponent
 * @implements {OnInit}
 * 
 * @example
 * <pkd-pokemon [pokemon]="pokemon"></pkd-pokemon>
 * 
 * @license GNU General Public License v3.0
 */
@Component({
  selector: 'pkd-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent  {

  @Input() pokemon: Pokemon | null = null;
  private idObservable: Subscription | null = null;
  public list: Pokemon[] = [];
  public viewList: Pokemon[] = [];

  constructor() {
  }

}

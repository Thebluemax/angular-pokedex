import { Component, OnInit } from '@angular/core';
import { PokebaseService } from '../shared/services/pokebase.service';
import { SecondaryScreenService } from '../shared/services/secondary-screen.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  private pokemon:any;
  private sprite:string;

  constructor(private route:ActivatedRoute, private pokeService:PokebaseService, private sScreen:SecondaryScreenService
    , private  _location:Location) { 
  
  }
  init(){
    this.sprite = this.pokemon.sprites.front_default;
    this.sScreen.setText(`Pokemon#${this.pokemon.id}`);
  }
  goBack(){
    this._location.back();
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.pokeService.getDetallpokemon(id).subscribe(data => {

      this.pokemon = data
      this.init();
    });
  }

}

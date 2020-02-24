import { Component, OnInit,OnChanges } from '@angular/core';
import { PokebaseService } from '../shared/services/pokebase.service';
import { SecondaryScreenService } from '../shared/services/secondary-screen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  private pokemon:any;
  private sprite:string;

  constructor(private route:ActivatedRoute, private router:Router,private pokeService:PokebaseService, private sScreen:SecondaryScreenService
    , private  _location:Location) { 
      router.events.forEach((event) => {
        if(event) {
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        let id = this.route.snapshot.paramMap.get("id");
        let temp = this.pokeService.getDetallpokemon(id).subscribe(data => {
          
          this.pokemon = data
    
          this.init();
          temp.unsubscribe();
        });
      });
  }
  init(){
    this.sprite = this.pokemon.sprites.front_default;
    this.sScreen.setText(`#-${this.pokemon.id}`);
  //  this.pokeService.getDetallpokemon(null);
  }
  goBack(){
    this._location.back();
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    let temp = this.pokeService.getDetallpokemon(id).subscribe(data => {
      
      this.pokemon = data;
      this.init();
      temp.unsubscribe();
    });
  }

}

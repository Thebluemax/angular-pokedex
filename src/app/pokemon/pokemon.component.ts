import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { PokebaseService } from '../shared/services/pokebase.service';
import { SecondaryScreenService } from '../shared/services/secondary-screen.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from '../interfaces/pokemon';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
/**
 * Componente Pokemon, gestion la pantalla del 
 * pokemon
 */
export class PokemonComponent implements OnInit {
  public title:string;
  public pokemon:Pokemon;
  public sprite:string;
  public loading:boolean;

  private idObservable:Subscription;
  /**
   * Componente pokemon
   * @param route 
   * @param router 
   * @param pokeService 
   * @param sScreen 
   * @param _location 
   */
  constructor(private route:ActivatedRoute, private router:Router,private pokeService:PokebaseService, private sScreen:SecondaryScreenService
    ) { 
     this.loading = true;
      router.events.forEach((event) => {
        if(event) {
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
    let id = this.route.snapshot.paramMap.get("id");

        this.init(id);
      });

  }
  /**
   * Método inicial 
   */
  init(id:string){
    this.loading = true;
    this.idObservable = this.pokeService.getDetallpokemon(id).subscribe((data) => {
      this.pokemon = {...data};
      this.sScreen.setText(`#-${this.pokemon.id}`);
      this.loading = false;
      this.idObservable.unsubscribe();
    });
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("change");
  }
/**
 * On init
 */
  ngOnInit() {
    this.title = '/Pokemon/'
    this.pokemon = new Pokemon();
    
    let id = this.route.snapshot.paramMap.get("id");
    this.init(id);

   
  }
  /**
   * onDestroy
   */
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

}

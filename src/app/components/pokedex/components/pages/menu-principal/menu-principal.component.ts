import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent {
  optionsList: any[];
  constructor(private router: Router) {
    this.optionsList = [{name:'Items', api:'item'},
    { name: 'Regions', api:"region"},
     {name:'Pokemons', api:'pokemon'},
     {name:'Berries', api: 'berry'},
    {name:'Abilities', api: 'ability'}];
  }


  goto($event) {
    let position = parseInt($event.target.attributes['position'].value);
    let tag = `pokedex/${this.optionsList[position].api}`;
    console.log(tag);
    this.router.navigate([tag]);
  }
}

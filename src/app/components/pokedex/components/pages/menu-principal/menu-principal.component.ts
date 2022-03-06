import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent {
  optionsList: string[];
  constructor(private router: Router) {
    this.optionsList = ['Items', 'Regions', 'Pokemons', 'Berries'];
  }


  goto($event) {
    let position = parseInt($event.target.attributes['position'].value);
    let tag = `pokedex/${this.optionsList[position].toLowerCase()}`;
    console.log(tag);
    this.router.navigate([tag]);
  }
}

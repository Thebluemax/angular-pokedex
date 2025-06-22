import { Component } from '@angular/core'
import { Router } from "@angular/router"
/**
 * @component
 * @author Maximiliano Fernández <thebluemax13@gmail.com>
 * @fileoverview Screen for the main menu of the Pokédex application, providing navigation options to various sections such as items, regions, pokemons, berries, and abilities.
 * @since 2025-06-22
 * 
 * @description
 * Screen for the main menu of the Pokédex application, providing navigation options to various sections such as items, regions, pokemons, berries, and abilities.
 * This component initializes a list of options that users can select to navigate to different parts of the application.
 * It uses Angular's Router to handle navigation based on user selection.
 * 
 * 
 * @class MenuPrincipalComponent
 * @implements {OnInit}
 * 
 * @example
 * <pkd-menu-principal></pkd-menu-principal>
 * 
 * @license GNU General Public License v3.0
 */

@Component({
  selector: 'pkd-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})

export class MenuPrincipalComponent {
  optionsList: any[]
  constructor(private router: Router) {
    this.optionsList = [
      { name: 'Items', api: 'item' },
      { name: 'Regions', api: "region" },
      { name: 'Pokemons', api: 'pokemon' },
      { name: 'Berries', api: 'berry' },
      { name: 'Abilities', api: 'ability' }]
  }

  goto(event: any) {
    let position = parseInt(event.target.attributes['position'].value)
    if (position >= this.optionsList.length) return
    let tag = `pokedex/${this.optionsList[position].api}`
    this.router.navigate([tag])
  }
}

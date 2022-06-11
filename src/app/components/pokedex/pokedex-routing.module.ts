import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './components/pages/menu-principal/menu-principal.component';
import { ItemsComponent } from './components/pages/items/items.component';
import { RegionComponent } from './components/pages/region/region.component';
import { ItemComponent } from './components/pages/item/item.component';
import { LocationComponent } from './components/pages/location/location.component';
import { PokemonComponent } from './components/pages/pokemon/pokemon.component';
import { BerryComponent } from './components/pages/berry/berry.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

const routes: Routes = [
  {
    path: '', component: PokedexComponent, children: [
      {
        path: '', redirectTo: '/pokedex/menu', pathMatch: 'full'
      },
      {
        path: 'menu', component: MenuPrincipalComponent
      },
      {
        path: ':category', component: ItemsComponent
      },
      {
        path: ':category/:id', component: ItemComponent
      },
    ]
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PokedexRoutingModule { }

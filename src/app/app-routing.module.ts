import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodydexComponent } from './bodydex/bodydex.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ItemComponent } from './item/item.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RegionComponent } from './region/region.component';
import { LocationComponent } from './location/location.component';


const routes: Routes = [
  { path: 'item', component: BodydexComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'berry', component: BodydexComponent },
  { path: 'location', component: BodydexComponent },
  { path: 'location/:id', component: LocationComponent },
  { path: 'pokemon', component: BodydexComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: 'region', component: BodydexComponent },
  { path: 'region/:id', component: RegionComponent },
  { path: '', component: MenuPrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

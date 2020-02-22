import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodydexComponent } from './bodydex/bodydex.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ItemComponent } from './item/item.component';
import { PokemonComponent } from './pokemon/pokemon.component';


const routes: Routes = [
  { path: 'item', component: BodydexComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'location', component: BodydexComponent },
  { path: 'pokemon', component: BodydexComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: 'region', component: BodydexComponent },
  { path: '', component: MenuPrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

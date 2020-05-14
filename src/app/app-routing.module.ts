import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { BodydexComponent } from './bodydex/bodydex.component';
import { ItemComponent } from './item/item.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RegionComponent } from './region/region.component';
import { LocationComponent } from './location/location.component';
import { PagesModule } from './pages/pages.module';


const routes: Routes = [
  
  //{ path: 'item/:id', component: ItemComponent },
  //{ path: 'berry', component: BodydexComponent },
  //{ path: 'location', component: BodydexComponent },
  //{ path: 'location/:id', component: LocationComponent },
 // { path: 'pokemon', component: BodydexComponent },
 // { path: 'pokemon/:id', component: PokemonComponent },
  //{ path: 'region', component: BodydexComponent },
 // { path: 'region/:id', component: RegionComponent },
  { path: '', loadChildren:() => import('./pages/pages.module').then( m => m.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

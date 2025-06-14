import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo:'/pokedex/menu', pathMatch:'full'  as const},
  { path: 'pokedex', loadChildren:() => import('./components/pokedex/pokedex.module')
  .then( m => m.PokedexModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

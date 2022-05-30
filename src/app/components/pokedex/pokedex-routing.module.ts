import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './components/pages/menu-principal/menu-principal.component';
import { ItemsComponent } from './components/pages/items/items.component';
import { RegionComponent } from './components/pages/region/region.component';
import { RegionsComponent } from './components/pages/regions/regions.component';
import { PokemonsComponent } from './components/pages/pokemons/pokemons.component';
import { ItemComponent } from './components/pages/item/item.component';
import { LocationComponent } from './components/pages/location/location.component';
import { PokemonComponent } from './components/pages/pokemon/pokemon.component';
import { BerriesComponent } from './components/pages/berries/berries.component';
import { BerryComponent } from './components/pages/berry/berry.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

const routes: Routes = [
    {
        path: '', component: PokedexComponent, children:[
          {
            path: '', redirectTo:'/pokedex/menu', pathMatch:'full'
        },
          {
            path: 'menu', component: MenuPrincipalComponent
        },
          {
            path: 'items', component: ItemsComponent
        },
        {
            path: 'items/:id', component: ItemComponent
        },
        {
           path: 'regions', component: RegionsComponent
        },
        {
            path: 'regions/:id', component: RegionComponent
         },
        {
            path: 'location/:id', component: LocationComponent
         },
        {
            path: 'pokemons', component: PokemonsComponent
        },
        {
            path: 'pokemons/:id', component: PokemonComponent
         },
         {
             path: 'berries', component: BerriesComponent
         },
         {
             path: 'berries/:id', component: BerryComponent
         }
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

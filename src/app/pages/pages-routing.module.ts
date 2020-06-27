import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ItemsComponent } from './items/items.component';
import { RegionComponent } from './region/region.component';
import { RegionsComponent } from './regions/regions.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { ItemComponent } from './item/item.component';
import { LocationComponent } from './location/location.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BerriesComponent } from './berries/berries.component';
import { BerryComponent } from './berry/berry.component';

const routes: Routes = [
    {
        path: '', component: MenuPrincipalComponent
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
     },
    {
        path: '**', redirectTo: '/'
    }
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
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ItemsComponent } from './items/items.component';
import { RegionComponent } from './region/region.component';
import { RegionsComponent } from './regions/regions.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
    {
        path: '', component: MenuPrincipalComponent
    },
    {
        path: 'items', component: ItemsComponent 
    },
    {
       path: 'regions', component: RegionsComponent
    },
    {
        path: 'regions/:id', component: RegionComponent
     },
    {
        path: 'pokemons', component: PokemonsComponent
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

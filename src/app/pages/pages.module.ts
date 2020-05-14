import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ComponentsModule } from '../components/components.module';
import { ItemsComponent } from './items/items.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PipeCustomModule } from '../pipes/pipe-custom.module';
import { CommonDirectivesModule } from '../directives/common-directives.module';
import { RegionComponent } from './region/region.component';
import { RegionsComponent } from './regions/regions.component';
import { PokemonsComponent } from './pokemons/pokemons.component';


@NgModule({
  declarations: [
    MenuPrincipalComponent,
    RegionComponent,
    ItemsComponent,
    RegionsComponent,
    PokemonsComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    ComponentsModule,
    PipeCustomModule,
    CommonDirectivesModule
  ],
  exports: [
  ],
  providers: [

  ]
})
export class PagesModule { }
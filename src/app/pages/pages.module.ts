import { NgModule,  NgModuleFactoryLoader, SystemJsNgModuleLoader} from '@angular/core';
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
import { ItemComponent } from './item/item.component';
import { LocationComponent } from './location/location.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BerriesComponent } from './berries/berries.component';
import { BerryComponent } from './berry/berry.component';
import { InfoDialogComponent } from './dialogs/info-dialog-component/info-dialog.component';
import { AddDirective } from '../directives/add.directive';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    MenuPrincipalComponent,
    RegionComponent,
    ItemsComponent,
    ItemComponent,
    RegionsComponent,
    LocationComponent,
    PokemonsComponent,
    PokemonComponent,
    BerriesComponent,
    BerryComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    ComponentsModule,
    PipeCustomModule,
    CommonDirectivesModule
  ],
  entryComponents: [ InfoDialogComponent],
  exports: [
  ],
  providers: [
    AddDirective
  ]
})
export class PagesModule { }

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "@shared/shared.module";
import { SecondaryScreenService } from "../../core/services/secondary-screen.service";
import { PokebaseService } from "src/app/core/services/pokebase.service";
import { PrincipalScreenComponent } from "./components/principal-screen/principal-screen.component";
import { ControlFooterComponent } from "./components/control-footer/control-footer.component";
import { HeaderScanerComponent } from "./components/header-scaner/header-scaner.component";
import { BodydexComponent } from "./components/bodydex/bodydex.component";
import { PokedexRoutingModule } from "./pokedex-routing.module";
import { BerryComponent } from "../../pages/berry/berry.component";
import { ItemComponent } from "../../pages/categories/item/item.component";
import { LocationComponent } from "../../pages/location/location.component";
import { PokemonComponent } from "../../pages/categories/pokemon/pokemon.component";
import { RegionComponent } from "../../pages/region/region.component";
import { MenuPrincipalComponent } from "../../pages/menu-principal/menu-principal.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { CategoryComponent } from '../../pages/category/category.component';
import { CategoryListComponent } from 'src/app/pages/category-list/category-list.component'

@NgModule({
  declarations: [
    BerryComponent,
    BodydexComponent,
    ControlFooterComponent,
    HeaderScanerComponent,
    ItemComponent,
    LocationComponent,
    MenuPrincipalComponent,
    PokedexComponent,
    PokemonComponent,
    PrincipalScreenComponent,
    RegionComponent,
    CategoryComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    PokedexRoutingModule,
    RouterModule,
  ],
  providers: [
    PokebaseService,
  ],
})
export class PokedexModule { }

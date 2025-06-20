import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "@shared/shared.module";
import { SecondaryScreenService } from "./services/secondary-screen.service";
import { PokebaseService } from "src/app/core/services/pokebase.service";
import { PrincipalScreenComponent } from "./components/principal-screen/principal-screen.component";
import { ControlFooterComponent } from "./components/control-footer/control-footer.component";
import { HeaderScanerComponent } from "./components/header-scaner/header-scaner.component";
import { BodydexComponent } from "./components/bodydex/bodydex.component";
import { PokedexRoutingModule } from "./pokedex-routing.module";
import { BerryComponent } from "./components/pages/berry/berry.component";
import { ItemComponent } from "./components/pages/categories/item/item.component";
import { LocationComponent } from "./components/pages/location/location.component";
import { PokemonComponent } from "./components/pages/categories/pokemon/pokemon.component";
import { RegionComponent } from "./components/pages/region/region.component";
import { MenuPrincipalComponent } from "./components/pages/menu-principal/menu-principal.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { CategoryListComponent } from './components/pages/category-list/category-list.component';
import { CategoryComponent } from './components/pages/category/category.component';

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
    CategoryListComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    PokedexRoutingModule,
    RouterModule,
  ],
  providers: [
    SecondaryScreenService,
    PokebaseService,
  ],
})
export class PokedexModule { }

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { SecondaryScreenService } from "./services/secondary-screen.service";
import { PrincipalScreenComponent } from "./components/principal-screen/principal-screen.component";
import { ControlFooterComponent } from "./components/control-footer/control-footer.component";
import { HeaderScanerComponent } from "./components/header-scaner/header-scaner.component";
import { BodydexComponent } from "./components/bodydex/bodydex.component";
import { PokedexRoutingModule } from "./pokedex-routing.module";
import { BerryComponent } from "./components/pages/berry/berry.component";
import { BerriesComponent } from "./components/pages/berries/berries.component";
import { ItemComponent } from "./components/pages/item/item.component";
import { ItemsComponent } from "./components/pages/items/items.component";
import { LocationComponent } from "./components/pages/location/location.component";
import { PokemonComponent } from "./components/pages/pokemon/pokemon.component";
import { PokemonsComponent } from "./components/pages/pokemons/pokemons.component";
import { RegionComponent } from "./components/pages/region/region.component";
import { RegionsComponent } from "./components/pages/regions/regions.component";
import { MenuPrincipalComponent } from "./components/pages/menu-principal/menu-principal.component";
import { LoadingScreenComponent } from "src/app/shared/components/loading-screen/loading-screen.component";
import { HttpClientModule } from "@angular/common/http";
import { PokebaseService } from "src/app/core/services/pokebase.service";

@NgModule({
  declarations: [
    BerriesComponent,
    BerryComponent,
    BodydexComponent,
    ControlFooterComponent,
    HeaderScanerComponent,
    ItemComponent,
    ItemsComponent,
    LocationComponent,
    MenuPrincipalComponent,
    PokedexComponent,
    PokemonComponent,
    PokemonsComponent,
    PrincipalScreenComponent,
    RegionComponent,
    RegionsComponent,
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

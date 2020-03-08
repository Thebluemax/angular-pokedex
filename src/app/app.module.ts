import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodydexComponent } from './bodydex/bodydex.component';
import { HttpClientModule } from '@angular/common/http';
import { PokebaseService } from './shared/services/pokebase.service';
import { HighlightDirective } from './directives/highlight.directive';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ItemComponent } from './item/item.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MesurePipe } from './pipes/mesure.pipe';
import { RegionComponent } from './region/region.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormatNamePipe } from './pipes/format-name.pipe';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    BodydexComponent,
    HighlightDirective,
    MenuPrincipalComponent,
    ItemComponent,
    PokemonComponent,
    MesurePipe,
    RegionComponent,
    FormatNamePipe,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    PokebaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

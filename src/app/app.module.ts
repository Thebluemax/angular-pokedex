import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokebaseService } from './core/services/pokebase.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DinamicComponentService } from './core/services/dinamic-component.service';
import { PokedexModule } from "./components/pokedex/pokedex.module";
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DinamicComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

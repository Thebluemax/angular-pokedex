import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodydexComponent } from './bodydex/bodydex.component';
import { HttpClientModule } from '@angular/common/http';
import { PokebaseService } from './shared/services/pokebase.service';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BodydexComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokebaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

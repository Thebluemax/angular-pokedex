import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokebaseService } from './shared/services/pokebase.service';
import { MesurePipe } from './pipes/mesure.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { InfoDialogComponent } from './components/dialogs/info-dialog-component/info-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentsModule,
  ],
  providers: [
    PokebaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

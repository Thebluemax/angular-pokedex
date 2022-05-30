import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DinamicComponentService } from './core/services/dinamic-component.service';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers)
  ],
  providers: [
    DinamicComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

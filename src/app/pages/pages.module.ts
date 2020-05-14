import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { PrincipalScreenComponent } from './principal-screen/principal-screen.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CommonModule } from '@angular/common';
//import { BodydexComponent } from '../../bodydex/bodydex.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { FormatNamePipe } from '../pipes/format-name.pipe';
import { ComponentsModule } from '../components/components.module';
import { ItemsComponent } from './items/items.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PipeCustomModule } from '../pipes/pipe-custom.module';


@NgModule({
  declarations: [
    MenuPrincipalComponent,
   // BodydexComponent,
    HighlightDirective,
    ItemsComponent,
  ],
  entryComponents: [],
  imports: [
    //BrowserModule,
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    ComponentsModule,
    PipeCustomModule
  ],
  exports: [
   // PrincipalScreenComponent
  ],
  providers: [

  ]
})
export class PagesModule { }
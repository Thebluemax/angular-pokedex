import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { PipeCustomModule } from "./pipes/pipe-custom.module";
import { LoadingScreenComponent } from "./components/loading-screen/loading-screen.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { ImgClickDirective } from "./directives/img-click.directive";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    LoadingScreenComponent,
    HighlightDirective,
    ImgClickDirective,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    PipeCustomModule,
    RouterModule
  ],
  exports: [
    PipeCustomModule,
    LoadingScreenComponent,
    NavBarComponent,
    HighlightDirective,
    ImgClickDirective
  ]
})
export class SharedModule { }

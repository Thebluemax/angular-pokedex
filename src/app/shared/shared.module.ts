import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeCustomModule } from "./pipes/pipe-custom.module";
import { LoadingScreenComponent } from "./components/loading-screen/loading-screen.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { ImgClickDirective } from "./directives/img-click.directive";

@NgModule({
  declarations: [
    LoadingScreenComponent,
    HighlightDirective,
    ImgClickDirective
  ],
  imports: [
    CommonModule,
    PipeCustomModule,
  ],
  exports: [
    PipeCustomModule,
    LoadingScreenComponent,
    HighlightDirective,
    ImgClickDirective
  ]
})
export class SharedModule { }

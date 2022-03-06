import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ImgClickDirective } from './img-click.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    ImgClickDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    ImgClickDirective,

  ]
})
export class CommonDirectivesModule { }

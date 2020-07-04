import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { AddDirective } from './add.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    AddDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    AddDirective
  ]
})
export class CommonDirectivesModule { }

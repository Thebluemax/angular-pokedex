import { NgModule } from '@angular/core';
import { FormatNamePipe } from './format-name.pipe';
import { MesurePipe } from './mesure.pipe';

@NgModule({
    declarations: [
    FormatNamePipe,
    MesurePipe
    ],
    exports: [
     FormatNamePipe,
     MesurePipe
    ],

  })
  export class PipeCustomModule { }

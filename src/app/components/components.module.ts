import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlFooterComponent } from './control-footer/control-footer.component';
import { HeaderScanerComponent } from './header-scaner/header-scaner.component';
import { BodydexComponent } from './bodydex/bodydex.component';
import { PrincipalScreenComponent } from './principal-screen/principal-screen.component';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from "@angular/material";
import { FormatNamePipe } from '../pipes/format-name.pipe';
import { PipeCustomModule } from '../pipes/pipe-custom.module';
import { HighlightDirective } from '../directives/highlight.directive';
import { CommonDirectivesModule } from '../directives/common-directives.module';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { InfoDialogComponentComponent } from './dialogs/info-dialog-component/info-dialog-component.component';



@NgModule({
  declarations: [
     ControlFooterComponent,
     HeaderScanerComponent,
     PrincipalScreenComponent,
     BodydexComponent,
     LoadingScreenComponent,
     InfoDialogComponentComponent,
     MatDialogComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    PipeCustomModule,
    CommonDirectivesModule
  ],
  exports: [
    ControlFooterComponent,
    HeaderScanerComponent,
    PrincipalScreenComponent,
    LoadingScreenComponent,
    BodydexComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlFooterComponent } from './control-footer/control-footer.component';
import { HeaderScanerComponent } from './header-scaner/header-scaner.component';
import { BodydexComponent } from './bodydex/bodydex.component';
import { PrincipalScreenComponent } from './principal-screen/principal-screen.component';
import { RouterModule } from '@angular/router';
import { FormatNamePipe } from '../pipes/format-name.pipe';
import { PipeCustomModule } from '../pipes/pipe-custom.module';
import { HighlightDirective } from '../directives/highlight.directive';
import { CommonDirectivesModule } from '../directives/common-directives.module';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';



@NgModule({
  declarations: [
     ControlFooterComponent,
     HeaderScanerComponent,
     PrincipalScreenComponent,
     BodydexComponent,
     LoadingScreenComponent,
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

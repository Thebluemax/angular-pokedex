import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlFooterComponent } from './control-footer/control-footer.component';
import { HeaderScanerComponent } from './header-scaner/header-scaner.component';
import { BodydexComponent } from './bodydex/bodydex.component';
import { PrincipalScreenComponent } from './principal-screen/principal-screen.component';
import { RouterModule } from '@angular/router';
import { FormatNamePipe } from '../pipes/format-name.pipe';
import { PipeCustomModule } from '../pipes/pipe-custom.module';



@NgModule({
  declarations: [
     ControlFooterComponent,
     HeaderScanerComponent,
     PrincipalScreenComponent,
     BodydexComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    PipeCustomModule
  ],
  exports: [
    ControlFooterComponent,
    HeaderScanerComponent,
    PrincipalScreenComponent,
    BodydexComponent
  ]
})
export class ComponentsModule { }

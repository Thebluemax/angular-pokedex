import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlFooterComponent } from './control-footer/control-footer.component';
import { HeaderScanerComponent } from './header-scaner/header-scaner.component';



@NgModule({
  declarations: [
    ControlFooterComponent,
     HeaderScanerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ControlFooterComponent,
    HeaderScanerComponent
  ]
})
export class ComponentsModule { }

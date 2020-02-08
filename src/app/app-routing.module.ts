import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodydexComponent } from './bodydex/bodydex.component';


const routes: Routes = [
  { path: '', component: BodydexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

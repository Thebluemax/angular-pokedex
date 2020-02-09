import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodydexComponent } from './bodydex/bodydex.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';


const routes: Routes = [
  { path: 'items', component: BodydexComponent },
  { path: '', component: MenuPrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

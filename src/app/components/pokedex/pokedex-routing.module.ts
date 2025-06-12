import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './components/pages/menu-principal/menu-principal.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { CategoryListComponent } from './components/pages/category-list/category-list.component';
import { CategoryComponent } from './components/pages/category/category.component';

const routes: Routes = [
  {
    path: '', component: PokedexComponent, children: [
      {
        path: '', redirectTo: '/pokedex/menu', pathMatch: 'full' as const
      },
      {
        path: 'menu', component: MenuPrincipalComponent
      },
      {
        path: ':category', component: CategoryListComponent
      },
      {
        path: ':category/:id', component: CategoryComponent
      },
    ]
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PokedexRoutingModule { }

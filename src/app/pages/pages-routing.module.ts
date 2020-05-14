import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
    {
        path: '', component: MenuPrincipalComponent
    },
    {
        path: 'item', component: ItemsComponent 
    },
    {
        //   path: 'contact', component: ContactComponent
    },
    {
        //     path: 'posts',
        //   loadChildren: './pages/posts/posts.module#PostsModule'
    },
    {
        path: '**', redirectTo: '/'
    }
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
export class PagesRoutingModule { }

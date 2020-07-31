import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';



const routes: Routes = [
  { path: 'catalogo', loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoModule) },
  { path: 'estante', loadChildren: () => import('./estante/estante.module').then(m => m.EstanteModule) },
  { path: 'home', component: HomeComponent},
  { path: '', pathMatch:'full', redirectTo: "/home"},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

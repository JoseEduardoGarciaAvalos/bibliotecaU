import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoComponent } from './catalogo.component';
import { ListaComponent } from "./lista/lista.component";

const routes: Routes = [
  //{ path: '', component: CatalogoComponent },
  // // subruta /catalogo/:sublista/
  { path: ":sublista", component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }

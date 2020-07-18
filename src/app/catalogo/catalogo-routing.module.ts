import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoComponent } from './catalogo.component';
import { ListaComponent } from "./lista/lista.component";
import { AuthGuardService} from "../auth-guard.service";

const routes: Routes = [
  //{ path: '', component: CatalogoComponent },
  // // subruta /catalogo/:sublista/
  { path: "general", component: ListaComponent, data: {sublista:"general"}},
  { path: "prestamo", component: ListaComponent,data: {sublista:"prestamo"}, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }

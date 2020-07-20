import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoComponent } from './catalogo.component';
import { ListaComponent } from "./lista/lista.component";
import { AuthGuardService} from "../auth-guard.service";

const routes: Routes = [

  //{ path: "general", component: ListaComponent, data: {sublista:"general"}},
  //{ path: "general/:buscar", component: ListaComponent, data: {sublista:"general"}},
  //{path: "general", component: ListaComponent, data: {sublista:"general"} , // ERROR1
  {path: "general", data: {sublista:"general"} , // FIX1
    children: [
      {path: "", component: ListaComponent},
      {path: ":buscar", component: ListaComponent}
    ]
  },
  { path: "prestamo", component: ListaComponent,data: {sublista:"prestamo"}, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
/*
  // ERROR1
  Condición: Implementar un arbol de vista que envia una data a sus rutas hijas, pero define component afueran del children
  Error: El componente no captura la data ni el parametro :buscar
  Solución: Quitar component afuera del children. // FIX1
*/
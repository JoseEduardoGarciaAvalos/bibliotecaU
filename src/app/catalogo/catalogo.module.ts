import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { ListaComponent } from './lista/lista.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LibroComponent } from './libro/libro.component';


@NgModule({
  declarations: [CatalogoComponent, ListaComponent, BusquedaComponent, LibroComponent],
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ],
  exports: [BusquedaComponent]
})
export class CatalogoModule { }

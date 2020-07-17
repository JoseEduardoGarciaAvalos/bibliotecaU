import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstanteRoutingModule } from './estante-routing.module';
import { EstanteComponent } from './estante.component';


@NgModule({
  declarations: [EstanteComponent],
  imports: [
    CommonModule,
    EstanteRoutingModule
  ]
})
export class EstanteModule { }

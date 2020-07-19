import { Component, OnInit } from '@angular/core';
import { CatalogoService } from "../catalogo.service";
import { UtilService } from "../../util.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(
    private CatalogoService:CatalogoService,
    private util:UtilService,
    private route:Router
  ) { }

  ngOnInit() {

  }

  buscar(palabras: string){
    this.util.consola("BusquedaComponent"," (buscar) " + palabras);
    this.route.navigate(['/catalogo','general',palabras]);
  }

}

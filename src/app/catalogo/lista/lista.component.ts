import { Component, OnInit } from '@angular/core';
import { CatalogoService, Libro } from "../catalogo.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UtilService } from "../../util.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public libros: Libro[] = [];
  public accion: string = "préstamo";

  constructor(
    private catalogoService: CatalogoService,
    private router: Router,
    private route: ActivatedRoute,
    private util:UtilService
  ) { }

  ngOnInit() {
    // subruta /catalogo/:sublista/
    this.route.params.subscribe( (params : Params) =>{
      //general o prestamo
      if(params["sublista"] == "general"){
        this.accion = "préstamo";
      } else {
        this.accion = "devolver";
      }
      //general=>buscar prestamo=>buscar o 
      
      this.util.consola("ListaComponent",[params]);
    });
  }

  accionGenerica(event: any){
    event.target.hide= true;
    if(this.accion == "préstamo"){
      this.util.consola("ListaComponent", " (accionGenerica, préstamo)");
    } else {
      this.util.consola("ListaComponent", " (accionGenerica, devolver)");
    }
  }

}

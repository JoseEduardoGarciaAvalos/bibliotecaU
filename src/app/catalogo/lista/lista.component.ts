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
    // subruta /catalogo/general|prestamo
    this.route.data.subscribe( (data) => {
      //general o prestamo
      if(data["sublista"] == "general"){
        this.accion = "préstamo";
      } else {
        this.accion = "devolver";
      }
      this.libros = this.catalogoService.testgetLibros() as Libro[];
    })

    this.route.params.subscribe((params : Params) =>{
      
    });
  }

  accionGenerica(event: any){
    event.target.disabled= true;
    this.util.consola("ListaComponent", event);
    if(this.accion == "préstamo"){
      this.util.consola("ListaComponent", " (accionGenerica, préstamo)");
    } else {
      this.util.consola("ListaComponent", " (accionGenerica, devolver)");
    }
  }

}

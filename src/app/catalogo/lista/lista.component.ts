import { Component, OnInit } from '@angular/core';
import { CatalogoService, Libro } from "../catalogo.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UtilService } from "../../util.service";
import { AuthService } from "../../auth.service";

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
    private util:UtilService,
    private auth:AuthService
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
      
    })
   
    this.route.params.subscribe((params : Params) =>{
      this.util.consola("ListaComponent", params["buscar"]);
      if(params["buscar"] == undefined){
        this.libros = this.catalogoService.testgetLibros() as Libro[];
      } else {
        this.libros = [];
        let aux = this.catalogoService.testgetLibros() as Libro[];
        for (let libro of aux)
          if(libro.nombre.includes(params["buscar"])) this.libros.push(libro);
        
      }
      
    });
  }

  accionGenerica(event: any){
    //Esta logueado
    if(this.auth.isLogin){
      // FALTA Determinar si el libro ya lo tiene prestado
      event.target.disabled= true;
      this.util.consola("ListaComponent", event);
      if(this.accion == "préstamo"){
        this.util.consola("ListaComponent", " (accionGenerica, préstamo)");
      } else {
        this.util.consola("ListaComponent", " (accionGenerica, devolver)");
      }
    } else {
      this.util.notificacion("Necesita estar logueado",3);
    }

  }

}

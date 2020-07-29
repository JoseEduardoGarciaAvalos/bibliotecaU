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
  public selectLibroId = null;

  constructor(
    private catalogoService: CatalogoService,
    private router: Router,
    private route: ActivatedRoute,
    private util: UtilService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    // subruta /catalogo/general|prestamo
    this.route.data.subscribe((data) => {
      //general o prestamo
      if (data["sublista"] == "general") {
        this.accion = "préstamo";
      } else {
        this.accion = "devolver";
      }

    })

    this.route.params.subscribe((params: Params) => {
      this.util.consola("ListaComponent", params["buscar"]);
      //Si no hay una busqueda, se mostrará todo
      if (params["buscar"] == undefined) {
        this.catalogoService.getLibros().subscribe(res => {
          this.filtrarLibrosByPrestamos(res as Libro[]);
        })
      } else {
        this.catalogoService.getLibrosByKeyword(params["buscar"]).subscribe(res => {
          this.filtrarLibrosByPrestamos(res as Libro[]);
        })
      }

    });
  }

  private filtrarLibrosByPrestamos(libros: Libro[]) {
    //Cargar libros prestados, si el boton es devolver (url = catalogo/prestamo)
    if (this.accion == "devolver") {
      // En está ruta siempre el usuario debe estar logueado para ver los libros
      this.catalogoService.getLibrosByIdUsuario(this.auth.cliente._id).subscribe(res => {
        if (res[0]) {
          const _id_libros = res[0]._id_libros as Array<string>
          this.libros = libros.filter(libro => _id_libros.includes(libro._id));
        }
      })
      //Cargar Todos los libros, si el boton es préstamo (url = catalogo/general)
    } else {
      // Si esta logeado, exluirá los libros prestados por el usuario
      if (this.auth.isLogin) {
        this.catalogoService.getLibrosByIdUsuario(this.auth.cliente._id).subscribe(res => {
          if (res[0]) {
            const _id_libros = res[0]._id_libros as Array<string>
            this.libros = libros.filter(libro => !_id_libros.includes(libro._id));
          }
        });
      } else {
        this.libros = libros;
      }
    }
  }

  accionGenerica(event: any) {
    //Esta logueado
    if (this.auth.isLogin) {
      // FALTA Determinar si el libro ya lo tiene prestado
      event.target.disabled = true;
      this.util.consola("ListaComponent", event);
      if (this.accion == "préstamo") {
        this.util.consola("ListaComponent", " (accionGenerica, préstamo)");
      } else {
        this.util.consola("ListaComponent", " (accionGenerica, devolver)");
      }
    } else {
      this.util.notificacion("Necesita estar logueado", 3);
    }

  }

  setSelectedLibro(id: string) {
    this.selectLibroId = id;
  }

}

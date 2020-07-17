import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UtilService } from "../util.service";

export interface Libro {
  ISBN: string,
  Nombre: string,
  Autor: string,
  Editorial: Array<string>
}


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  static base = "http://localhost:8888";

  constructor(
    private http: HttpClient,
    private util: UtilService
  ) { }

  getLibros(): Observable<any> {
    let url = CatalogoService.base + "/libros";
    this.util.consola("CatalogoService", " (getLibros,req) " + url);
    return this.http.get(url);
  }

  getLibrosById(id: string): Observable<any> {
    let url = CatalogoService.base + "/libros/id=" + id;
    this.util.consola("CatalogoService", " (getLibrosById,req) " + url);
    return this.http.get(url);
  }
  /// AREA TEST ///


  testgetLibros(): Object[] {
    return [
      {
        ISBN: "123435434",
        Nombre: "Java 10",
        Autor: "Francisco",
        Editorial: ["ENI"]
      },{
        ISBN: "233435434",
        Nombre: "angular 8",
        Autor: "Rosa Avalos",
        Editorial: ["ENI"]
      },{
        ISBN: "243513235",
        Nombre: "C++ Programación",
        Autor: "Maria",
        Editorial: ["Alfaomega","Marcombo"]
      },{
        ISBN: "88888",
        Nombre: "Aprendiendo algoritmos",
        Autor: "Zonia",
        Editorial: ["Alfaomega"]
      },{
        ISBN: "112131",
        Nombre: "Java programación",
        Autor: "Pedro",
        Editorial: ["Macro", "RCLibros"]
      },{
        ISBN: "34356346",
        Nombre: "Estructuras de datos",
        Autor: "Pablo",
        Editorial: ["RCLibros"]
      },{
        ISBN: "35324124",
        Nombre: "Programación web",
        Autor: "Azucena",
        Editorial: ["Marcombo", ]
      },{
        ISBN: "23124",
        Nombre: "Ruby",
        Autor: "Pablo",
        Editorial: ["Alfaomega", "RCLibros"]
      }
    ];
  }

  testgetLibrosById(id: string) {
    
  }
}

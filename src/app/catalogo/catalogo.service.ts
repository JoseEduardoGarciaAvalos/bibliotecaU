import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UtilService } from "../util.service";

export interface Libro {
  _id: string,
  isbn: string,
  nombre: string,
  autor: string,
  editoriales: Array<string>
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
      { _id: "1",
        isbn: "123435434",
        nombre: "Java 10",
        autor: "Francisco",
        editoriales: ["ENI"]
      },{
        _id: "2",
        isbn: "233435434",
        nombre: "angular 8",
        autor: "Rosa Avalos",
        editoriales: ["ENI"]
      },{
        _id: "3",
        isbn: "243513235",
        nombre: "C++ Programación",
        autor: "Maria",
        editoriales: ["Alfaomega","Marcombo"]
      },{
        _id: "4",
        isbn: "88888",
        nombre: "Aprendiendo algoritmos",
        autor: "Zonia",
        editoriales: ["Alfaomega"]
      },{
        _id: "5",
        isbn: "112131",
        nombre: "Java programación",
        autor: "Pedro",
        editoriales: ["Macro", "RCLibros"]
      },{
        _id: "5",
        isbn: "34356346",
        nombre: "Estructuras de datos",
        autor: "Pablo",
        editoriales: ["RCLibros"]
      },{
        _id: "6",
        isbn: "35324124",
        nombre: "Programación web",
        autor: "Azucena",
        editoriales: ["Marcombo", ]
      },{
        _id: "7",
        isbn: "23124",
        nombre: "Ruby",
        autor: "Pablo",
        editoriales: ["Alfaomega", "RCLibros"]
      }
    ];
  }

  testgetLibrosById(id: string) {
    
  }
}

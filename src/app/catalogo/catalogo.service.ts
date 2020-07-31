import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UtilService } from "../util.service";
import { environment } from "src/environments/environment";

export interface Libro {
  _id: string,
  isbn: string,
  nombre: string,
  autor: string,
  editoriales: Array<string>
}

export interface Prestamo {
  _id_usuario: string,
  _id_libros: Array<string>
}

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private readonly base = environment.urlREST;

  constructor(
    private http: HttpClient,
    private util: UtilService
  ) { }

  getLibros(): Observable<any> {
    let url = this.base + "libros";
    this.util.consola("CatalogoService", " (getLibros,req) " + url);
    return this.http.get(url);
  }

  getLibroById(id: string): Observable<any> {
    let url = this.base + "libros?_id=" + id;
    this.util.consola("CatalogoService", " (getLibrosById,req) " + url);
    return this.http.get(url);
  }

  getLibrosByKeyword(keyword: string): Observable<any> {
    let url = this.base + "libros?q=" + keyword;
    this.util.consola("CatalogoService", " (getLibrosByKeyword,req) " + url);
    return this.http.get(url);
  }

  getLibrosByIdUsuario(idUsuario: string): Observable<any> {
    let url = this.base + "prestamos?id=" + idUsuario;
    this.util.consola("CatalogoService", " (getLibrosByIdUsuario,req) " + url);
    return this.http.get(url);
  }

  patchPrestamo(idUsuario: string, idLibros: Array<string>){
    let url = this.base + "prestamos/" + idUsuario;
    this.util.consola("CatalogoService", " (patchPrestamo,req) " + url);
    return this.http.patch(url, {_id_libros: idLibros});
  }
}

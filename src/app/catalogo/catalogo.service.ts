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
    this.util.consola("CatalogoService", " (getLibrosById,req) " + url);
    return this.http.get(url);
  }
}

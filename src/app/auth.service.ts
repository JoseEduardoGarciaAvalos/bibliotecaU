import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UtilService } from "./util.service";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment"

export interface Cliente {
  _id: string,
  correo: string,
  password: string,
  nombre?: string,
  apellido?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly base = environment.urlREST;
  public isLogin: boolean = false;
  public cliente:Cliente = null;

  constructor(
    //public isLogin: boolean = false //ERROR1
    private http: HttpClient,
    private util: UtilService
  ) {
    this.cliente = AuthService.newCliente();
  }

  static newCliente(): Cliente{
    return { _id: "", correo: "", password: ""};
  }

  contectar(): Observable<any>{
    let url = this.base + "usuarios?correo=" + this.cliente.correo + "&password=" + this.cliente.password;
    this.util.consola("AuthService"," (contectar,req) " + url);
    return this.http.get(url).pipe(
      tap((res) => this.util.consola("AuthService"," (contectar,res) " + url))
    );
  }

  desconectar(){
    this.cliente = AuthService.newCliente();
    this.util.consola("AuthService"," (desconectar) ");
    this.isLogin = false;
  }

}


/*
  //ERROR1
  Condición:   inyección de dependecias en un componente cuando es un atributo (public isLogin: boolean = false) { }
  ERROR (web): NullInjectorError: StaticInjectorError(AppModule)[Boolean]
  Solución no inicializarlo en del constructor sino como atributo.
*/

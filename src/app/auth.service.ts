import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UtilService } from "./util.service";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export interface Cliente {
  correo: string,
  password: string,
  nombre?: string,
  apellido?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static base = "http://localhost:8888";
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
    return { correo: "", password: ""};
  }

  contectar(): Observable<any>{
    let url = AuthService.base + "/login=" + this.cliente.correo + "/password=" + this.cliente.password;
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

  testContectar(){
    this.util.consola("AuthService"," (testContectar) ");
    if(this.cliente.correo=="jose@gmail.com" && this.cliente.password=="1234"){
      this.cliente.nombre = "Jose";
      this.cliente.apellido = "Eduardo";
      this.isLogin = true;
      this.util.consola("AuthService"," (testContectar) Conectado");
    }
  }
}


/*
  //ERROR1
  Condición:   inyección de dependecias en un componente cuando es un atributo (public isLogin: boolean = false) { }
  ERROR (web): NullInjectorError: StaticInjectorError(AppModule)[Boolean]
  Solución no inicializarlo en del constructor sino como atributo.
*/
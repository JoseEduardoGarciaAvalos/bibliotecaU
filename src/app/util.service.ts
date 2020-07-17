import { Injectable, EventEmitter } from '@angular/core';
import { isString } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  isVer: boolean = true;
  public mensaje: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  consola(componente: string, mensaje:any){
    if(this.isVer){
      if(isString(mensaje)){
        console.log(componente + ": " + mensaje);
      } else {
        console.log(componente);
        console.log(mensaje);
      }
      
    }
  }

  notificacion(mensaje:string, segundos: number) :void{
    this.mensaje.emit(mensaje);
    this.consola("UtilService",mensaje);
    setTimeout(() => {
      this.mensaje.emit("");
      this.consola("UtilService","fin");
    }, segundos * 1000);
  }
}

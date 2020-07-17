import { Injectable, EventEmitter } from '@angular/core';
import { ConsoleService } from "./console.service";

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  public mensaje: EventEmitter<string> = new EventEmitter<string>();

  constructor(private console:ConsoleService) { }

  mostrarMensaje(mensaje:string, segundos: number) :void{
    this.mensaje.emit(mensaje);
    this.console.log("NotificacionService",mensaje);
    setTimeout(() => {
      this.mensaje.emit("");
      this.console.log("NotificacionService","fin");
    }, segundos * 1000);
  }

}

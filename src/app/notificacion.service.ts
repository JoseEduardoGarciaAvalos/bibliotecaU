import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  public mensaje: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  mostrarMensaje(mensaje:string, segundos: number) :void{
    this.mensaje.emit(mensaje);
    console.log("Notificacion: " + mensaje);
    setTimeout(() => {
      this.mensaje.emit("");
      console.log("Notificacion fin.")
    }, segundos * 1000);
  }

}

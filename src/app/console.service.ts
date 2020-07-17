import { Injectable } from '@angular/core';
import { isString } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
  isVer: boolean = true;

  constructor() { }

  log(componente: string, mensaje:any){
    if(this.isVer){
      if(isString(mensaje)){
        console.log(componente + ": " + mensaje);
      } else {
        console.log(componente);
        console.log(mensaje);
      }
      
    }
  }
}

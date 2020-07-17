import { Component, OnInit } from '@angular/core';
import { UtilService } from "../util.service";

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  private mensaje: string = "";

  constructor(private util: UtilService) { 
    this.util.mensaje.subscribe( (res) => {
      this.mensaje = res;
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NotificacionService } from "../notificacion.service";

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  private mensaje: string = "";

  constructor(private notificacionService: NotificacionService) { 
    this.notificacionService.mensaje.subscribe( (res) => {
      this.mensaje = res;
    });
  }

  ngOnInit() {
  }

}

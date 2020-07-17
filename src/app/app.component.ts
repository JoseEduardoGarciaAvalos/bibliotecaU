import { Component } from '@angular/core';
import { NotificacionService } from "./notificacion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private notificacionService: NotificacionService) { }

  ngOnInit() {
    this.notificacionService.mostrarMensaje("Bienvenido a la biblioteca",3);
  }
}

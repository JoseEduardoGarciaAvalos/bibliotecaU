import { Component } from '@angular/core';
import { UtilService } from "./util.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private util: UtilService) { }

  ngOnInit() {
    this.util.notificacion("Bienvenido a la biblioteca",3);
  }
}

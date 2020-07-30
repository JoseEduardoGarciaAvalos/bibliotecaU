import { Component, OnInit } from '@angular/core';
import { CatalogoService } from "../catalogo.service";
import { UtilService } from "../../util.service";
import { Router, ActivationStart} from "@angular/router";
import { filter, map } from "rxjs/operators";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  private subruta: string = "general";
  public valorCampoInicial: string = "";

  constructor(
    private CatalogoService:CatalogoService,
    private util:UtilService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter( evt => evt instanceof ActivationStart ),
      map( (evt:ActivationStart) => [evt.snapshot.data, evt.snapshot.params])
    ).subscribe( (data) => {
      this.subruta = data[0]["sublista"] ? data[0]["sublista"]: "general";
      this.valorCampoInicial = data[1]["buscar"] ? data[1]["buscar"]: "";
      this.util.consola("BusquedaComponent"," (ngOnInit) " + this.subruta + "/" + this.valorCampoInicial);
    })

  }

  buscar(palabras: string){
    this.util.consola("BusquedaComponent",` (buscar) ${this.subruta}/${palabras}`);
    this.router.navigate(['/catalogo',this.subruta,palabras]);
  }

}

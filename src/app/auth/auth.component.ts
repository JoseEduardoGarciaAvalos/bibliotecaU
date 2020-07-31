import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { UtilService } from "src/app/util.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private util: UtilService,
    private router: Router
  ) { 
    const cliente = localStorage.getItem("cliente");
    if(cliente){
      this.auth.cliente = JSON.parse(cliente);
      this.auth.isLogin = true;
    }
  }

  ngOnInit() {
  }

  iniciar(){
    this.auth.contectar().subscribe(
      (res) => { 
        if(res[0]){
          this.auth.cliente = res[0];
          this.auth.isLogin = true;
          localStorage.setItem("cliente", JSON.stringify(this.auth.cliente));
          this.router.navigate(["/home"]);
          this.util.notificacion("Inició sesión correctamente", 3);
        } else {
          this.util.notificacion("Usuario/contraseña son inválidos", 3);
        }
      },
      //(error) => {this.auth.testContectar();}
    );
  }

  salir(){
    this.auth.desconectar();
    this.router.navigate(["/home"]);
    localStorage.removeItem("cliente");
    this.util.notificacion("Cerró sesión correctamente", 3);
  }

}

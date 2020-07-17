import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  iniciar(){
    this.auth.testContectar();
    return;
    this.auth.contectar().subscribe(
      (res) => { },
      //(error) => {this.auth.testContectar();}
    );
  }

  salir(){
    this.auth.desconectar();
  }

}

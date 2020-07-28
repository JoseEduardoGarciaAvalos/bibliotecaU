import { Component, Input, OnInit } from '@angular/core';
import { Libro } from "../catalogo.service";

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  @Input() expandido: boolean = false;
  @Input() libro: Libro;
  

  constructor() { }

  ngOnInit() {
  }

}

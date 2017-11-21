import { Component, OnInit } from '@angular/core';
import {Nota} from '../modelos/alumno';


@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  notaEjemplo: Nota = new Nota(1, 'Lista compra', 'Leche,pan,huevos', '#3289ff');
  totalNotas = 10;
  encabezado = 'Encabezado original';
  titulo2 = 'Ejemplo de titulo';
  constructor() { }
  getTotalNotas() {
    return this.totalNotas;
  }
  ngOnInit() {
  }

}

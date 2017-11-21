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
  constructor() { }
  getTotalNotas() {
    return this.totalNotas;
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Nota} from '../models/nota';

@Component({
  selector: 'app-nota-listado-component',
  templateUrl: './nota-listado-component.component.html',
  styleUrls: ['./nota-listado-component.component.css']
})
export class NotaListadoComponentComponent implements OnInit {
  listadoNotas: Array<Nota> = [
    {id: 1, titulo: 'Lista de la compra', descripcion: 'Huevos, leche y pan', categoria: {id: 1, nombre: 'Familia', color: '#3C93FC'}},
    {id: 2, titulo: 'Deberes', descripcion: 'Diseño app Keeper de desarrollo de interfazes', categoria: {id: 2, nombre: 'Colegio', color: '#A786C9'}}
  ];
  constructor() { }
  borrar(nota: Nota){
    nota.id = null;
    nota.descripcion = null;
    nota.titulo = null;
    nota.categoria = null;
  }

  editar(nota: Nota){
    nota.id = nota.id;
    nota.titulo = nota.titulo;
    nota.descripcion = nota.descripcion;
    nota.categoria = nota.categoria;
  }
  ngOnInit() {
  }

}

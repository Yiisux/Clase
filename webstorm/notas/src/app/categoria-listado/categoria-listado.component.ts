import { Component, OnInit } from '@angular/core';
import {Categoria} from '../models/categoria';

@Component({
  selector: 'app-categoria-listado',
  templateUrl: './categoria-listado.component.html',
  styleUrls: ['./categoria-listado.component.css']
})
export class CategoriaListadoComponent implements OnInit {
  listaCategoria: Array<Categoria> = [
    {id: 1, nombre: 'Familia', color: '#3C93FC'},
    {id: 2, nombre: 'Colegio', color: '#A786C9'}
  ]
  constructor() { }

  ngOnInit() {
  }

}

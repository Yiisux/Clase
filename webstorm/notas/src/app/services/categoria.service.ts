import { Injectable } from '@angular/core';
import {Categoria} from '../models/categoria';

@Injectable()
export class CategoriaService {
  listaCategoria: Array<Categoria> = [
    {id: 1, nombre: 'Familia', color: '#3C93FC'},
    {id: 2, nombre: 'Colegio', color: '#A786C9'}
  ];
  constructor() { }

  getCategoria(): Array<Categoria> {
    return this.listaCategoria;
  }
}

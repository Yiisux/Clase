import {Categoria} from './categoria';

export class Nota {
  public id: number;
  public titulo: String;
  public descripcion: String;
  public categoria: Categoria;

  constructor(id: number, titulo: String, descripcion: String, categoria: Categoria) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.categoria = categoria;
  }
}

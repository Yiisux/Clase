export class Nota {
  public id: number;
  public titulo: String;
  public descripcion: String;
  public editable: boolean;


  constructor(id: number, titulo: String, descripcion: String, editable, boolean) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.editable = editable;
  }
}


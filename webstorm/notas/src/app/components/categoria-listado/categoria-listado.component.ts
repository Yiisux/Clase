import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../models/categoria';
import {CategoriaService} from '../../services/categoria.service';

@Component({
  selector: 'app-categoria-listado',
  templateUrl: './categoria-listado.component.html',
  styleUrls: ['./categoria-listado.component.css']
})
export class CategoriaListadoComponent implements OnInit {
  listaCategoria: Array<Categoria> = [];
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.getCategoria().subscribe(
      respuesta => this.listaCategoria = respuesta);
  }

}

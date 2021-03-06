import { Component, OnInit } from '@angular/core';
import {Nota} from '../../models/nota';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {NotaService} from '../../services/nota.service';
import {Observable} from 'rxjs/Observable';
import {CategoriaService} from '../../services/categoria.service';
import {Categoria} from '../../models/categoria';

@Component({
  selector: 'app-nota-listado-component',
  templateUrl: './nota-listado-component.component.html',
  styleUrls: ['./nota-listado-component.component.css']
})
export class NotaListadoComponentComponent implements OnInit {
  nuevaNotaTitulo = '';
  nuevaNotaDescripcion = '';
  idCategoria = '';
  modalRef: NgbModalRef;
  listaCategoria: Array<Categoria> = [];
  listadoNotas: Array<Nota> = [];
  constructor(private modalService: NgbModal, private notaService: NotaService, private categoriaService: CategoriaService) {
  }



  editar(nota: Nota) {
  }

  ngOnInit() {
     this.notaService.getNotas().subscribe(
      respuesta => this.listadoNotas = respuesta
    );
    this.categoriaService.getCategoria().subscribe(
      respuesta => this.listaCategoria = respuesta);
  }

  abrirModal(modalNuevaNota: any) {
    this.modalRef = this.modalService.open(modalNuevaNota, {size: 'lg'});
  }

  guardarNota() {
  this.modalRef.dismiss();
  this.notaService.addNota(this.nuevaNotaTitulo, this.nuevaNotaDescripcion, Number.parseInt((this.idCategoria))).subscribe(
    nota => this.listadoNotas.push(nota));
  }
}
